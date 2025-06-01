import constants, { ISettings, AuthInfoMap } from "./constants";
import { AuthContext, PlayFabContext } from "./PlayFabContext";
import { IPlayFabError, IPlayFabResultCommon } from "./types/PlayFab";

export class PlayFabCommon {
  buildIdentifier: string = constants.buildIdentifier;
  requestGetParams = {
    sdk: constants.sdkFingerprint,
  } as const;
  errorTitleId = "Must be have settings.titleId set to call this method";
  errorLoggedIn = "Must be logged in to call this method";
  errorEntityToken =
    "You must successfully call GetEntityToken before calling this";
  errorSecretKey =
    "Must have settings.developerSecretKey set to call this method";
  private _context = PlayFabContext.instance;

  constructor(settings: Partial<ISettings> | undefined = undefined) {
    if (settings) {
      Object.assign(this._context.settings, settings);
    }
  }

  get settings() {
    return this._context.settings;
  }

  get authenticationContext() {
    return this._context.authenticationContext;
  }

  get sessionTicket() {
    return this._context.sessionTicket;
  }

  set sessionTicket(value: string | null) {
    this._context.sessionTicket = value;
  }

  get entityToken() {
    return this._context.entityToken;
  }

  set entityToken(value: string | null) {
    this._context.entityToken = value;
  }

  GetServerUrl() {
    if (!(this.settings.productionServerUrl.substring(0, 4) === "http")) {
      return `https://${this.settings.verticalName || this.settings.titleId}${
        this.settings.productionServerUrl
      }`;
    } else {
      return this.settings.productionServerUrl;
    }
  }

  InjectHeaders(
    xhr: XMLHttpRequest,
    headersObj: Record<string, string> | undefined
  ) {
    if (!headersObj) return;

    for (const headerKey in headersObj) {
      try {
        xhr.setRequestHeader(headerKey, headersObj[headerKey]);
      } catch (e) {
        console.log(
          `Failed to append header: ${headerKey} = ${headersObj[headerKey]} Error: ${e}`
        );
      }
    }
  }

  ExecuteRequest<T extends IPlayFabResultCommon>(
    url: string,
    body: any,
    authkey: string | null,
    authValue: string | null,
    customData: any,
    extraHeaders?: Record<string, string>
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      if (body == null) body = {};

      var startTime = new Date().getTime();
      var requestBody = JSON.stringify(body);

      var urlArr = [url];
      var getParams = this.requestGetParams;
      if (getParams != null) {
        var firstParam = true;
        for (var key in getParams) {
          if (firstParam) {
            urlArr.push("?");
            firstParam = false;
          } else {
            urlArr.push("&");
          }
          urlArr.push(key);
          urlArr.push("=");
          urlArr.push(getParams[key as keyof typeof getParams]);
        }
      }

      var completeUrl = urlArr.join("");

      var xhr = new XMLHttpRequest();
      xhr.open("POST", completeUrl, true);

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader(
        "X-PlayFabSDK",
        "JavaScriptSDK-" + constants.sdkVersion
      );
      if (authkey != null) {
        xhr.setRequestHeader(authkey, authValue!);
      }
      this.InjectHeaders(xhr, this.settings.GlobalHeaderInjection);
      this.InjectHeaders(xhr, extraHeaders);

      xhr.onloadend = () => {
        var result = this.GetPlayFabResponse(body, xhr, startTime, customData);
        if (result.code === 200) {
          resolve(result.data || result);
        } else {
          reject(result);
        }
      };

      xhr.onerror = () => {
        var result = this.GetPlayFabResponse(body, xhr, startTime, customData);
        reject(result);
      };

      xhr.send(requestBody);
    });
  }

  GetPlayFabResponse(
    request: any,
    xhr: XMLHttpRequest,
    startTime: number,
    customData: any
  ) {
    var result = null as any;
    try {
      // window.console.log("parsing json result: " + xhr.responseText);
      result = JSON.parse(xhr.responseText);
    } catch (e) {
      result = {
        code: 503, // Service Unavailable
        status: "Service Unavailable",
        error: "Connection error",
        errorCode: 2, // PlayFabErrorCode.ConnectionError
        errorMessage: xhr.responseText,
      };
    }

    result.CallBackTimeMS = new Date().getTime() - startTime;
    result.Request = request;
    result.CustomData = customData;
    return result;
  }

  UpdateAuthenticationContext(currentAuthContext: AuthContext, result: any) {
    var authenticationContextUpdates = {} as AuthContext;
    if (result?.PlayFabId) {
      authenticationContextUpdates.PlayFabId = result.PlayFabId;
    }
    if (result?.SessionTicket) {
      authenticationContextUpdates.SessionTicket = result.SessionTicket;
    }
    if (result?.EntityToken) {
      authenticationContextUpdates.EntityId = result.EntityToken.Entity.Id;
      authenticationContextUpdates.EntityType = result.EntityToken.Entity.Type;
      authenticationContextUpdates.EntityToken = result.EntityToken.EntityToken;
    }
    // Update the authenticationContext with values from the result
    currentAuthContext = Object.assign(
      currentAuthContext,
      authenticationContextUpdates
    );

    this._context.authenticationContext = currentAuthContext;

    return currentAuthContext;
  }

  GetAuthInfo(request: any, authKey: string) {
    // Use the most-recently saved authKey, unless one was provided in the request via the AuthenticationContext
    var authError = AuthInfoMap[authKey as keyof typeof AuthInfoMap].authError;
    var authAttr = AuthInfoMap[authKey as keyof typeof AuthInfoMap].authAttr;
    var defaultAuthValue: string | null = null;
    if (authAttr === "entityToken") defaultAuthValue = this.entityToken;
    else if (authAttr === "sessionTicket")
      defaultAuthValue = this.sessionTicket;
    else if (authAttr === "developerSecretKey")
      defaultAuthValue = this.settings.developerSecretKey;
    var authValue = request.AuthenticationContext
      ? request.AuthenticationContext[authAttr]
      : defaultAuthValue;
    return { authKey, authValue, authError };
  }

  ExecuteRequestWrapper<T extends IPlayFabResultCommon>(
    apiURL: string,
    request: any,
    authKey: string | null,
    customData: any,
    extraHeaders?: Record<string, string>
  ) {
    var authValue = null;
    if (authKey !== null) {
      const { authError, ...authInfo } = this.GetAuthInfo(request, authKey);
      authKey = authInfo.authKey;
      authValue = authInfo.authValue;
      if (!authValue) throw authError;
    }
    return this.ExecuteRequest<T>(
      this.GetServerUrl() + apiURL,
      request,
      authKey,
      authValue,
      customData,
      extraHeaders
    );
  }

  GenerateErrorReport(error: IPlayFabError | null): string {
    if (error == null) return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
      for (var msgIdx in error.errorDetails[paramName])
        fullErrors +=
          "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
  }

  ForgetAllCredentials() {
    this._context.sessionTicket = null;
    this._context.entityToken = null;
  }
}
