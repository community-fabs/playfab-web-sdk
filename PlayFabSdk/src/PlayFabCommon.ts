import constants, { ISettings } from "./constants";
import { ApiCallback, IPlayFabResultCommon } from "./types/common";

const AuthInfoMap = {
  "X-EntityToken": {
    authAttr: "entityToken",
    authError: "errorEntityToken",
  },
  "X-Authorization": {
    authAttr: "sessionTicket",
    authError: "errorLoggedIn",
  },
  "X-SecretKey": {
    authAttr: "developerSecretKey",
    authError: "errorSecretKey",
  },
};

type AuthContext = {
  PlayFabId: string | null;
  EntityId: string | null;
  EntityType: string | null;
  SessionTicket: string | null;
  EntityToken: string | null;
};

export class PlayFabCommon {
  buildIdentifier: string = constants.buildIdentifier;
  settings: ISettings = constants.defaultSettings;
  entityToken: string | null = null;
  requestGetParams = {
    sdk: constants.sdkFingerprint,
  } as const;
  sessionTicket: string | null = null;
  errorTitleId: "Must be have PlayFab.settings.titleId set to call this method";
  errorLoggedIn: "Must be logged in to call this method";
  errorEntityToken: "You must successfully call GetEntityToken before calling this";
  errorSecretKey: "Must have PlayFab.settings.developerSecretKey set to call this method";

  constructor(settings: Partial<ISettings>) {
    Object.assign(this.settings, settings);
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
    callback: ApiCallback<T>,
    customData: any,
    extraHeaders?: Record<string, string>
  ) {
    var resultPromise = new Promise(function (resolve, reject) {
      if (callback != null && typeof callback !== "function")
        throw "Callback must be null or a function";

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
          urlArr.push(getParams[key]);
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
      this.InjectHeaders(xhr, this.GlobalHeaderInjection);
      this.InjectHeaders(xhr, extraHeaders);

      xhr.onloadend = function () {
        if (callback == null) return;

        var result = this.GetPlayFabResponse(body, xhr, startTime, customData);
        if (result.code === 200) {
          callback(result, null);
        } else {
          callback(null, result);
        }
      }.bind(this);

      xhr.onerror = function () {
        if (callback == null) return;

        var result = this.GetPlayFabResponse(body, xhr, startTime, customData);
        callback(null, result);
      }.bind(this);

      xhr.send(requestBody);
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          var xhrResult = this.GetPlayFabResponse(
            body,
            this,
            startTime,
            customData
          );
          if (this.status === 200) {
            resolve(xhrResult);
          } else {
            reject(xhrResult);
          }
        }
      }.bind(this);
    });
    // Return a Promise so that calls to various API methods can be handled asynchronously
    return resultPromise as Promise<ApiCallback<T>>;
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

  authenticationContext: AuthContext = {
    PlayFabId: null,
    EntityId: null,
    EntityType: null,
    SessionTicket: null,
    EntityToken: null,
  };

  UpdateAuthenticationContext(currentAuthContext: AuthContext, result: any) {
    var authenticationContextUpdates = {} as AuthContext;
    if (result.data.PlayFabId !== null) {
      this.authenticationContext.PlayFabId = result.data.PlayFabId;
      authenticationContextUpdates.PlayFabId = result.data.PlayFabId;
    }
    if (result.data.SessionTicket !== null) {
      this.authenticationContext.SessionTicket = result.data.SessionTicket;
      authenticationContextUpdates.SessionTicket = result.data.SessionTicket;
    }
    if (result.data.EntityToken !== null) {
      this.authenticationContext.EntityId = result.data.EntityToken.Entity.Id;
      authenticationContextUpdates.EntityId = result.data.EntityToken.Entity.Id;
      this.authenticationContext.EntityType =
        result.data.EntityToken.Entity.Type;
      authenticationContextUpdates.EntityType =
        result.data.EntityToken.Entity.Type;
      this.authenticationContext.EntityToken =
        result.data.EntityToken.EntityToken;
      authenticationContextUpdates.EntityToken =
        result.data.EntityToken.EntityToken;
    }
    // Update the authenticationContext with values from the result
    currentAuthContext = Object.assign(
      currentAuthContext,
      authenticationContextUpdates
    );
    return currentAuthContext;
  }

  GetAuthInfo(request: any, authKey: string) {
    // Use the most-recently saved authKey, unless one was provided in the request via the AuthenticationContext
    var authError = AuthInfoMap[authKey].authError;
    var authAttr = AuthInfoMap[authKey].authAttr;
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
    callback: ApiCallback<T>,
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
    return this.ExecuteRequest(
      this.GetServerUrl() + apiURL,
      request,
      authKey,
      authValue,
      callback,
      customData,
      extraHeaders
    );
  }
}
