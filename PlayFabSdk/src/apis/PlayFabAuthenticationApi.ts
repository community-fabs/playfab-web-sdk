import type { ApiCallback, EmptyResponse } from "../types/common";
import type {
  AuthenticateCustomIdRequest,
  AuthenticateCustomIdResult,
  DeleteRequest,
  GetEntityTokenRequest,
  GetEntityTokenResponse,
  ValidateEntityTokenRequest,
  ValidateEntityTokenResponse,
} from "../types/PlayFabAuthenticationApis";
import { PlayFabCommon } from "../PlayFabCommon";

export class PlayFabAuthenticationApi extends PlayFabCommon {
  /**
   * Create a game_server entity token and return a new or existing game_server entity.
   * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/authenticategameserverwithcustomid
   */
  AuthenticateGameServerWithCustomId(
    request: AuthenticateCustomIdRequest,
    callback: ApiCallback<AuthenticateCustomIdResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    var overloadCallback: typeof callback = function (result, error) {
      if (
        result != null &&
        result.data.EntityToken != null &&
        result.data.EntityToken.EntityToken != null
      )
        this.entityToken = result.data.EntityToken.EntityToken;
      if (callback != null && typeof callback === "function")
        callback(result, error);
    };
    return this.ExecuteRequestWrapper(
      "/GameServerIdentity/AuthenticateGameServerWithCustomId",
      request,
      "X-EntityToken",
      overloadCallback,
      customData,
      extraHeaders
    );
  }

  /**
   * Delete a game_server entity.
   * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/delete
   */
  Delete(
    request: DeleteRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/GameServerIdentity/Delete",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
   * Entity Token.
   * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/getentitytoken
   */
  GetEntityToken(
    request: GetEntityTokenRequest,
    callback: ApiCallback<GetEntityTokenResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    var authKey: string | null = null;
    var authValue: string | null = null;
    if (!authKey && this.sessionTicket) {
      var authInfo = this.GetAuthInfo(request, (authKey = "X-Authorization"));
      (authKey = authInfo.authKey), (authValue = authInfo.authValue);
    }
    if (!authKey && PlayFab.settings.developerSecretKey) {
      var authInfo = this.GetAuthInfo(request, (authKey = "X-SecretKey"));
      (authKey = authInfo.authKey), (authValue = authInfo.authValue);
    }
    var overloadCallback: ApiCallback<GetEntityTokenResponse> = function (
      result,
      error
    ) {
      if (result != null && result.data.EntityToken != null)
        this.entityToken = result.data.EntityToken;
      if (callback != null && typeof callback === "function")
        callback(result, error);
    };
    return this.ExecuteRequestWrapper(
      "/Authentication/GetEntityToken",
      request,
      authKey,
      overloadCallback,
      customData,
      extraHeaders
    );
  }

  /**
   * Method for a server to validate a client provided EntityToken. Only callable by the title entity.
   * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/validateentitytoken
   */
  ValidateEntityToken(
    request: ValidateEntityTokenRequest,
    callback: ApiCallback<ValidateEntityTokenResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Authentication/ValidateEntityToken",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
}
