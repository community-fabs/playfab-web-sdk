import { Eta } from "eta"
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateSdkGlobals } from "./sdk-globals.js";

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
}

function renderTemplatesToDir(srcDir, destDir, renderData) {
  fs.readdirSync(srcDir, { withFileTypes: true }).forEach(dirent => {
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

async function getRenderData() {
  const sdkGlobals = await generateSdkGlobals()

  return {
    ...sdkGlobals
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
}

await main();