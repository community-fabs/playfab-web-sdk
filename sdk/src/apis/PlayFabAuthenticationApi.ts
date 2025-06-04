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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/gameserveridentity/authentication/authenticategameserverwithcustomid Microsoft Documentation}
   * @example
   * await gameserveridentityClient.AuthenticateGameServerWithCustomId({
   *   "CustomId": "12345678123412341234123456789abc"
   * });
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/gameserveridentity/authentication/delete Microsoft Documentation}
   * @example
   * await gameserveridentityClient.Delete({
   *   "Entity": {
   *     "Id": "3D00C64954",
   *     "Type": "game_server",
   *     "TypeString": "game_server"
   *   }
   * });
   */
  Delete (request: DeleteRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/GameServerIdentity/Delete", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
   * Entity Token.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/authentication/authentication/getentitytoken Microsoft Documentation}
   * @example
   * await authenticationClient.GetEntityToken({});
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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/authentication/authentication/validateentitytoken Microsoft Documentation}
   * @example
   * await authenticationClient.ValidateEntityToken({
   *   "EntityToken": "50c61b9065b27a124a400ee3b95d404313986969"
   * });
   */
  ValidateEntityToken (request: ValidateEntityTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ValidateEntityTokenResponse>("/Authentication/ValidateEntityToken", request, "X-EntityToken", extraHeaders);
  }

};
