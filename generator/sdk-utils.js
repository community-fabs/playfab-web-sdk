import { wordWrap } from './utils.js';

function generateApiSummaryLines(apiElement, summaryParam, linkToDocs, deprecationLabel) {
  var fullSummary;
  if (!apiElement.hasOwnProperty(summaryParam))
    fullSummary = [""];
  else if (!Array.isArray(apiElement[summaryParam]))
    fullSummary = [apiElement[summaryParam]];
  else
    fullSummary = apiElement[summaryParam];
  var lines;
  var joinedSummary = fullSummary.join(" ");
  var wrappedSummary = wordWrap(joinedSummary);
  if (wrappedSummary && wrappedSummary.length > 0)
    lines = wrappedSummary.split("\n");
  else
    lines = [];
  // Add extra documentation lines about deprecation
  if (deprecationLabel && apiElement.hasOwnProperty("deprecation") && apiElement.deprecation !== null) {
    if (apiElement.deprecation.ReplacedBy != null)
      lines.push(deprecationLabel + " Please use " + apiElement.deprecation.ReplacedBy + " instead.");
    else
      lines.push(deprecationLabel + " Do not use");
  }
  // Add extra documentation lines linking to PlayFab documentation
  if (linkToDocs && apiElement.hasOwnProperty("url")) {
    var apiName = apiElement.url.split("/")[1];
    var apiCategory = apiElement.subgroup.toLowerCase().replaceAll(" ", "-");
    var fullApiUrl = "https://docs.microsoft.com/rest/api/playfab/" + apiName.toLowerCase() + "/" + apiCategory + "/" + apiElement.name.toLowerCase();
    lines.push("API Method Documentation: " + fullApiUrl);
    if (apiElement.hasOwnProperty("request")) {
      lines.push("Request Documentation: " + fullApiUrl + "#" + apiElement.request.toLowerCase());
    }
    if (apiElement.hasOwnProperty("result")) {
      lines.push("Response Documentation: " + fullApiUrl + "#" + apiElement.result.toLowerCase());
    }
  }

  return lines;
}

export function generateApiSummary(tabbing, apiElement, summaryParam, addDocsLink = false) {
  const lines = generateApiSummaryLines(apiElement, summaryParam, addDocsLink, "@deprecated");

  for (var i = 0; i < lines.length; i++)
    if (lines[0].includes("*/"))
      return ""; // Can't support end-JS block-comment in our JS comments

  var output;
  if (lines.length === 1 && lines[0]) {
    output = tabbing + "/** " + lines[0] + " */\n";
  } else if (lines.length > 1) {
    output = tabbing + "/**\n" + tabbing + " * " + lines.join("\n" + tabbing + " * ") + "\n" + tabbing + " */\n";
  } else {
    output = "";
  }
  return output;
}

export function getBaseType(datatype) {
  if (datatype.isRequest)
    return " extends IPlayFabRequestCommon";
  if (datatype.isResult)
    return " extends IPlayFabResultCommon ";
  return ""; // If both are -1, then neither is greater
}

export function getPropertyType(property, datatype) {
  let output;

  if (property.actualtype === "String")
    output = "string";
  else if (property.actualtype === "Boolean")
    output = "boolean";
  else if (property.isclass)
    output = property.actualtype;
  else if (property.actualtype.includes("int") || property.actualtype === "float" || property.actualtype === "double")
    output = "number";
  else if (property.actualtype === "DateTime")
    output = "string";
  else if (property.isenum)
    output = "string";
  else if (property.actualtype === "object")
    output = "any";
  else
    throw "Unknown property type: " + property.actualtype + " for " + property.name + " in " + datatype.className;

  if (property.collection === "array")
    output += "[]";
  else if (property.collection === "map" && output === "string")
    output = "Record<string, " + output + " | null>"; // Null is frequently a valid dict-value, and we can't distinguish when it's not at this time
  else if (property.collection === "map")
    output = "Record<string, " + output + ">";
  else if (property.collection)
    throw "Unknown collection type: " + property.collection + " for " + property.name + " in " + datatype.className;

  let isOptional = property.optional;
  // TitleId is required at the API level, but optional at the SDK level, because we automagically provide it from settings
  const isLoginRequest = ((datatype.name.includes("Login") && datatype.isRequest) || datatype.name === "RegisterPlayFabUserRequest");
  if (isLoginRequest && property.name === "TitleId") {
    isOptional = true;
  }

  return (isOptional ? "?" : "") + ": " + output;
}
