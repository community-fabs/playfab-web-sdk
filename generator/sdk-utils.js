import { wordWrap } from './utils.js';

function generateApiSummaryLines(apiElement, summaryParam, linkToDocs) {
  let fullSummary;
  if (!apiElement[summaryParam]) {
    fullSummary = [""];
  } else if (!Array.isArray(apiElement[summaryParam])) {
    fullSummary = [apiElement[summaryParam]];
  } else {
    fullSummary = apiElement[summaryParam];
  }
  let lines;
  const joinedSummary = fullSummary.join(" ");
  const wrappedSummary = wordWrap(joinedSummary);
  if (wrappedSummary && wrappedSummary.length > 0) {
    lines = wrappedSummary.split("\n");
  } else {
    lines = [];
  }


  // Add extra documentation lines linking to PlayFab documentation
  const apiName = apiElement.url?.split("/")[1];
  if (linkToDocs && apiElement.url) {
    lines.push('')
    const apiCategory = apiElement.subgroup.toLowerCase().replaceAll(" ", "-");
    const fullApiUrl = "https://docs.microsoft.com/rest/api/playfab/" + apiName.toLowerCase() + "/" + apiCategory + "/" + apiElement.name.toLowerCase();
    lines.push(`{@link ${fullApiUrl} Microsoft Documentation}`);
  }

  // Add extra documentation lines about deprecation
  if (apiElement.deprecation) {
    if (apiElement.deprecation.ReplacedBy != null)
      lines.push(`@deprecated Please use ${apiElement.deprecation.ReplacedBy} instead.`);
    else
      lines.push("@deprecated Do not use");
  }


  if (!apiElement.deprecation && apiElement.requestExample && apiName) {
    const exampleLines = apiElement.requestExample.replaceAll('*/', '*\\/').split('\n');
    const examplePrefix = `await ${apiName.toLowerCase()}Client.${apiElement.name}(`;
    const exampleSuffix = `);`;

    lines.push('@example');
    if (exampleLines.length > 1) {
      lines.push(`${examplePrefix}${exampleLines.at(0)}`);
      for (let i = 1; i < exampleLines.length - 1; i++) {
        lines.push(exampleLines[i]);
      }
      lines.push(`${exampleLines.at(-1)}${exampleSuffix}`);
    } else {
      lines.push(`${examplePrefix}${exampleLines.at(0)}${exampleSuffix}`)
    }
  }

  if (lines.at(-1) === '') {
    lines.pop();
  }

  return lines;
}

export function generateApiSummary(tabbing, apiElement, summaryParam, addDocsLink = false) {
  const lines = generateApiSummaryLines(apiElement, summaryParam, addDocsLink);

  for (var i = 0; i < lines.length; i++)
    if (lines[0]?.includes("*/"))
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
    return " extends IPlayFabResultCommon";
  return "";
}

export function getPropertyType(property, datatype) {
  let output;

  if (property.actualtype === "String")
    output = "string";
  else if (property.actualtype === "Boolean")
    output = "boolean";
  else if (property.isclass || property.isenum)
    output = property.actualtype;
  else if (property.actualtype.includes("int") || property.actualtype === "float" || property.actualtype === "double")
    output = "number";
  else if (property.actualtype === "DateTime")
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

export function getAuthParams(apiCall) {
  // Returns the authKey to PlayFab._internalSettings.ExecuteRequestWrapper()
  if (apiCall.url === "/Authentication/GetEntityToken")
    return "authKey";
  if (apiCall.auth === "EntityToken")
    return "\"X-EntityToken\"";
  if (apiCall.auth === "SecretKey")
    return "\"X-SecretKey\"";
  if (apiCall.auth === "SessionTicket")
    return "\"X-Authorization\"";

  return "null";
}

export function getRequestActions(tabbing, apiCall) {
  if (apiCall.url === "/Authentication/GetEntityToken")
    return tabbing + "var authKey: string | null = null; var authValue: string | null = null;\n"
      + tabbing + "if (!authKey && this.sessionTicket) { var authInfo = this.GetAuthInfo(request, authKey=\"X-Authorization\"); authKey = authInfo.authKey, authValue = authInfo.authValue; }\n"
      + tabbing + "if (!authKey && this.settings.developerSecretKey) { var authInfo = this.GetAuthInfo(request, authKey=\"X-SecretKey\"); authKey = authInfo.authKey, authValue = authInfo.authValue; }\n";
  if (apiCall.result === "LoginResult" || apiCall.request === "RegisterPlayFabUserRequest")
    return tabbing + "request.TitleId = this.settings.titleId ? this.settings.titleId : request.TitleId; if (!request.TitleId) throw this.errorTitleId;\n"
      + tabbing + "// this.authenticationContext can be modified by other asynchronous login attempts\n"
      + tabbing + "// Deep-copy the authenticationContext here to safely update it\n"
      + tabbing + "var authenticationContext = JSON.parse(JSON.stringify(this.authenticationContext));\n";
  return "";
}

export function getResultActions(tabbing, apiCall) {
  if (apiCall.result === "LoginResult" || apiCall.result === "RegisterPlayFabUserResult")
    return tabbing + "if (result) {\n"
      + tabbing + "  if(result?.SessionTicket) {\n"
      + tabbing + "    this.sessionTicket = result.SessionTicket;\n"
      + tabbing + "  }\n"
      + tabbing + "  if (result?.EntityToken?.EntityToken) {\n"
      + tabbing + "    this.entityToken = result.EntityToken.EntityToken;\n"
      + tabbing + "  }\n"
      + tabbing + "  // Apply the updates for the AuthenticationContext returned to the client\n"
      + tabbing + "  authenticationContext = this.UpdateAuthenticationContext(authenticationContext, result);\n"
      + tabbing + "}";
  if (apiCall.url === "/Authentication/GetEntityToken")
    return tabbing + "if (result?.EntityToken)\n"
      + tabbing + "  this.entityToken = result.EntityToken;";
  if (apiCall.url === "/GameServerIdentity/AuthenticateGameServerWithCustomId")
    return tabbing + "if (result?.EntityToken?.EntityToken)\n"
      + tabbing + "  this.entityToken = result.EntityToken.EntityToken;";
  return "";
}

