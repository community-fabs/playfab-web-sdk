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
     * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/authenticategameserverwithcustomid
     */
    AuthenticateGameServerWithCustomId (request: AuthenticateCustomIdRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AuthenticateCustomIdResult>("/GameServerIdentity/AuthenticateGameServerWithCustomId", request, "X-EntityToken", customData, extraHeaders)
        .then(result => {
            if (result?.EntityToken?.EntityToken)
                this.entityToken = result.EntityToken.EntityToken;
            return result;
        });
    }

    /**
     * Delete a game_server entity.
     * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/delete
     */
    Delete (request: DeleteRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/GameServerIdentity/Delete", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
     * Entity Token.
     * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/getentitytoken
     */
    GetEntityToken (request: GetEntityTokenRequest, customData?: any, extraHeaders?: Record<string, string>) {
        var authKey: string | null = null; var authValue: string | null = null;
        if (!authKey && this.sessionTicket) { var authInfo = this.GetAuthInfo(request, authKey="X-Authorization"); authKey = authInfo.authKey, authValue = authInfo.authValue; }
        if (!authKey && this.settings.developerSecretKey) { var authInfo = this.GetAuthInfo(request, authKey="X-SecretKey"); authKey = authInfo.authKey, authValue = authInfo.authValue; }
        return this.ExecuteRequestWrapper<GetEntityTokenResponse>("/Authentication/GetEntityToken", request, authKey, customData, extraHeaders)
        .then(result => {
            if (result?.EntityToken)
                this.entityToken = result.EntityToken;
            return result;
        });
    }

    /**
     * Method for a server to validate a client provided EntityToken. Only callable by the title entity.
     * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/validateentitytoken
     */
    ValidateEntityToken (request: ValidateEntityTokenRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ValidateEntityTokenResponse>("/Authentication/ValidateEntityToken", request, "X-EntityToken", customData, extraHeaders);
    }

};
