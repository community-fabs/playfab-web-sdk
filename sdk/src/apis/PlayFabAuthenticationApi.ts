import type { EmptyResponse } from "../types/PlayFab";
import type {
  AuthenticateCustomIdRequest,
  DeleteRequest,
  GetEntityTokenRequest,
  ValidateEntityTokenRequest,
  AuthenticateCustomIdResult,
  GetEntityTokenResponse,
  ValidateEntityTokenResponse,
} from "../types/PlayFabAuthenticationApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabAuthenticationApi extends PlayFabCommon {

  /**
   * Create a game_server entity token and return a new or existing game_server entity.
   * Reference: https://docs.microsoft.com/rest/api/playfab/gameserveridentity/authentication/authenticategameserverwithcustomid
   */
  AuthenticateGameServerWithCustomId (request: AuthenticateCustomIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AuthenticateCustomIdResult>("/GameServerIdentity/AuthenticateGameServerWithCustomId", request, "X-EntityToken", extraHeaders)
      .then(result => {
        if (result?.EntityToken?.EntityToken)
          this.entityToken = result.EntityToken.EntityToken;
        return result;
      });
  }

  /**
   * Delete a game_server entity.
   * Reference: https://docs.microsoft.com/rest/api/playfab/gameserveridentity/authentication/delete
   */
  Delete (request: DeleteRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/GameServerIdentity/Delete", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
   * Entity Token.
   * Reference: https://docs.microsoft.com/rest/api/playfab/authentication/authentication/getentitytoken
   */
  GetEntityToken (request: GetEntityTokenRequest, extraHeaders?: Record<string, string>) {
    var authKey: string | null = null; var authValue: string | null = null;
    if (!authKey && this.sessionTicket) { var authInfo = this.GetAuthInfo(request, authKey="X-Authorization"); authKey = authInfo.authKey, authValue = authInfo.authValue; }
    if (!authKey && this.settings.developerSecretKey) { var authInfo = this.GetAuthInfo(request, authKey="X-SecretKey"); authKey = authInfo.authKey, authValue = authInfo.authValue; }
    return this.ExecuteRequestWrapper<GetEntityTokenResponse>("/Authentication/GetEntityToken", request, authKey, extraHeaders)
      .then(result => {
        if (result?.EntityToken)
          this.entityToken = result.EntityToken;
        return result;
      });
  }

  /**
   * Method for a server to validate a client provided EntityToken. Only callable by the title entity.
   * Reference: https://docs.microsoft.com/rest/api/playfab/authentication/authentication/validateentitytoken
   */
  ValidateEntityToken (request: ValidateEntityTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateEntityTokenResponse>("/Authentication/ValidateEntityToken", request, "X-EntityToken", extraHeaders);
  }

};
