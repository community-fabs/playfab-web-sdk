import constants, { ISettings, AuthInfoMap, ErrorMessages } from "./constants";
import { AuthContext, PlayFabContext } from "./PlayFabContext";
import { IPlayFabError, IPlayFabResultCommon } from "./types/PlayFab";

// this comment will automatically get removed
export class PlayFabCommon {
  buildIdentifier: string = constants.buildIdentifier;
  requestGetParams = {
    sdk: constants.sdkFingerprint,
  } as const;
  errorTitleId = ErrorMessages.titleId;
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

  async ExecuteRequest<T extends IPlayFabResultCommon>(
    url: string,
    body: any,
    authkey: string | null,
    authValue: string | null,
    extraHeaders?: Record<string, string>
  ) {
    if (body == null) {
      body = {};
    }

    const requestBody = JSON.stringify(body);

    const apiParams = new URLSearchParams(this.requestGetParams);
    const apiUrl = new URL(
      apiParams.size ? `${url}?${apiParams.toString()}` : url
    );

    const response = await fetch(apiUrl.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-PlayFabSDK": "JavaScriptSDK-" + constants.sdkVersion,
        ...this.settings.globalHeaders,
        ...extraHeaders,
        ...(authkey && authValue ? { [authkey]: authValue } : {}),
      },
      body: requestBody,
    });

    const jsonResponse = await response.json();

    if (!response.ok || jsonResponse.code !== 200) {
      throw new Error(jsonResponse);
    }

    return jsonResponse as { data: T };
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

  async ExecuteRequestWrapper<T extends IPlayFabResultCommon>(
    apiURL: string,
    request: any,
    authKey: string | null,
    extraHeaders?: Record<string, string>
  ) {
    var authValue = null;
    if (authKey !== null) {
      const { authError, ...authInfo } = this.GetAuthInfo(request, authKey);
      authKey = authInfo.authKey;
      authValue = authInfo.authValue;
      if (!authValue) throw authError;
    }
    return (
      await this.ExecuteRequest<T>(
        this.GetServerUrl() + apiURL,
        request,
        authKey,
        authValue,
        extraHeaders
      )
    ).data;
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
