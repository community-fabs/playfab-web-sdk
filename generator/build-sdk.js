import { Eta } from "eta"
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateSdkGlobals } from "./sdk-globals.js";
import { generateApiSummary, getBaseType, getPropertyType, getAuthParams, getRequestActions, getResultActions } from "./sdk-utils.js";

console.time("SDK generated")

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sdkDir = path.join(__dirname, "..", "sdk");
const templatesDir = path.join(__dirname, "sdk", "templates");
const staticDir = path.join(__dirname, "sdk", "static");

const eta = new Eta({ views: templatesDir })

function cleanSdk() {
  fs.readdirSync(sdkDir).forEach(item => {
    const itemPath = path.join(sdkDir, item);
    const stat = fs.statSync(itemPath);

    // delete all source files, but leave behind things like package-lock.json and readme.md
    const itemsToDelete = [
      /^dist$/,
      /^node_modules$/,
      /\.js$/,
      /\.ts$/
    ];
    if (itemsToDelete.some(regex => regex.test(item))) {
      if (stat.isDirectory()) {
        fs.rmSync(itemPath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(itemPath);
      }
    }
  });
}

function copyStaticFiles() {
  fs.cpSync(staticDir, sdkDir, { recursive: true });
  fs.cpSync(path.join(__dirname, "..", "README.md"), path.join(sdkDir, "README.md"));
}

function renderTemplatesToDir(srcDir, destDir, renderData) {
  fs.readdirSync(srcDir, { withFileTypes: true }).forEach(dirent => {
    if (dirent.name.startsWith("__")) {
      return;
    }
    const srcPath = path.join(srcDir, dirent.name);
    const destPath = path.join(destDir, dirent.name.replace(/\.eta$/, ''));
    if (dirent.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      renderTemplatesToDir(srcPath, destPath, renderData);
    } else if (dirent.isFile() && dirent.name.endsWith('.eta')) {
      const relPath = path.relative(templatesDir, srcPath);
      const rendered = eta.render(relPath, renderData);
      fs.writeFileSync(destPath, rendered);
    }
  });
}

function generateDatatype(datatype) {
  const interfaceTemplate = path.relative(templatesDir, path.join(templatesDir, "src", "types", "__Interface.eta"));
  const enumTemplate = path.relative(templatesDir, path.join(templatesDir, "src", "types", "__Enum.eta"));

  if (datatype.isenum) {
    return eta.render(enumTemplate, { datatype });
  }
  return eta.render(interfaceTemplate, {
    generateApiSummary,
    getBaseType,
    getPropertyType,
    datatype
  });
}

function renderCustomTemplates(renderData) {
  const { docs, ...globals } = renderData;

  const apiClientPath = path.relative(templatesDir, path.join(templatesDir, 'src', 'apis', '__PlayFab_Api.ts.eta'));
  const apiTypesPath = path.relative(templatesDir, path.join(templatesDir, 'src', 'types', '__PlayFab_Api.ts.eta'));

  for (const doc of docs) {
    // main source file
    const destClientPath = path.join(sdkDir, "src", "apis", `PlayFab${doc.name}Api.ts`);
    const usesSessionToken = doc.calls.some(call => call.auth === "SessionTicket");
    const renderedClient = eta.render(apiClientPath, { doc, ...globals, usesSessionToken })
    fs.writeFileSync(destClientPath, renderedClient);

    // generated types
    const destTypesPath = path.join(sdkDir, "src", "types", `PlayFab${doc.name}Api.ts`);
    const renderedTypes = eta.render(apiTypesPath, { doc, ...globals })
    fs.writeFileSync(destTypesPath, renderedTypes);
  }
}

async function getRenderData() {
  const sdkGlobals = await generateSdkGlobals()
  return {
    ...sdkGlobals,
    generateDatatype,
    generateApiSummary,
    getAuthParams,
    getRequestActions,
    getResultActions
  };
}

async function main() {
  if (!fs.existsSync(sdkDir)) {
    fs.mkdirSync(sdkDir, { recursive: true });
  } else {
    cleanSdk();
  }

  copyStaticFiles()

  const renderData = await getRenderData();

  renderTemplatesToDir(templatesDir, sdkDir, renderData);
  renderCustomTemplates(renderData);

  console.timeEnd("SDK generated")
}

await main();