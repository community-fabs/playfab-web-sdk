import type {
  CreateOrUpdateAppleRequest,
  CreateOrUpdateFacebookRequest,
  CreateOrUpdateFacebookInstantGamesRequest,
  CreateOrUpdateGoogleRequest,
  CreateOrUpdateKongregateRequest,
  CreateOrUpdateNintendoRequest,
  CreateOrUpdatePSNRequest,
  CreateOrUpdateSteamRequest,
  CreateOrUpdateToxModRequest,
  CreateOrUpdateTwitchRequest,
  DeleteAppleRequest,
  DeleteFacebookRequest,
  DeleteFacebookInstantGamesRequest,
  DeleteGoogleRequest,
  DeleteKongregateRequest,
  DeleteNintendoRequest,
  DeletePSNRequest,
  DeleteSteamRequest,
  DeleteToxModRequest,
  DeleteTwitchRequest,
  GetAppleRequest,
  GetFacebookRequest,
  GetFacebookInstantGamesRequest,
  GetGoogleRequest,
  GetKongregateRequest,
  GetNintendoRequest,
  GetPSNRequest,
  GetSteamRequest,
  GetToxModRequest,
  GetTwitchRequest,
  CreateOrUpdateAppleResponse,
  CreateOrUpdateFacebookResponse,
  CreateOrUpdateFacebookInstantGamesResponse,
  CreateOrUpdateGoogleResponse,
  CreateOrUpdateKongregateResponse,
  CreateOrUpdateNintendoResponse,
  CreateOrUpdatePSNResponse,
  CreateOrUpdateSteamResponse,
  CreateOrUpdateToxModResponse,
  CreateOrUpdateTwitchResponse,
  DeleteAppleResponse,
  DeleteFacebookResponse,
  DeleteFacebookInstantGamesResponse,
  DeleteGoogleResponse,
  DeleteKongregateResponse,
  DeleteNintendoResponse,
  DeletePSNResponse,
  DeleteSteamResponse,
  DeleteToxModResponse,
  DeleteTwitchResponse,
  GetAppleResponse,
  GetFacebookResponse,
  GetFacebookInstantGamesResponse,
  GetGoogleResponse,
  GetKongregateResponse,
  GetNintendoResponse,
  GetPSNResponse,
  GetSteamResponse,
  GetToxModResponse,
  GetTwitchResponse,
} from "../types/PlayFabAddonApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabAddonApi extends PlayFabCommon {

  /**
   * Creates the Apple addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdateapple Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateApple({
   *   "AppBundleId": "123456",
   *   "AppSharedSecret": "654321",
   *   "RequireSecureAuthentication": true
   * });
   */
  CreateOrUpdateApple (request: CreateOrUpdateAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateAppleResponse>("/Addon/CreateOrUpdateApple", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Facebook addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebook Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateFacebook({
   *   "AppID": "123456",
   *   "AppSecret": "654321",
   *   "NotificationEmail": "user@example.com"
   * });
   */
  CreateOrUpdateFacebook (request: CreateOrUpdateFacebookRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateFacebookResponse>("/Addon/CreateOrUpdateFacebook", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Facebook Instant Games addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebookinstantgames Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateFacebookInstantGames({
   *   "AppID": "123456",
   *   "AppSecret": "654321"
   * });
   */
  CreateOrUpdateFacebookInstantGames (request: CreateOrUpdateFacebookInstantGamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateFacebookInstantGamesResponse>("/Addon/CreateOrUpdateFacebookInstantGames", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Google addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdategoogle Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateGoogle({
   *   "AppPackageID": "abcdef",
   *   "AppLicenseKey": "fedcba",
   *   "OAuthClientID": "123456",
   *   "OAuthClientSecret": "654321",
   *   "OAuthCustomRedirectUri": "https://yourdomaingoeshere.com"
   * });
   */
  CreateOrUpdateGoogle (request: CreateOrUpdateGoogleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateGoogleResponse>("/Addon/CreateOrUpdateGoogle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Kongregate addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatekongregate Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateKongregate({
   *   "SecretAPIKey": "123456"
   * });
   */
  CreateOrUpdateKongregate (request: CreateOrUpdateKongregateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateKongregateResponse>("/Addon/CreateOrUpdateKongregate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Nintendo addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatenintendo Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateNintendo({
   *   "ApplicationID": "123456",
   *   "Environments": [
   *     {
   *       "ID": "1",
   *       "ClientID": "123456",
   *       "ClientSecret": "654321"
   *     }
   *   ]
   * });
   */
  CreateOrUpdateNintendo (request: CreateOrUpdateNintendoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateNintendoResponse>("/Addon/CreateOrUpdateNintendo", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the PSN addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatepsn Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdatePSN({
   *   "ClientID": "123456",
   *   "ClientSecret": "abcdef",
   *   "NextGenClientID": "654321",
   *   "NextGenClientSecret": "fedcba"
   * });
   */
  CreateOrUpdatePSN (request: CreateOrUpdatePSNRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdatePSNResponse>("/Addon/CreateOrUpdatePSN", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Steam addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatesteam Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateSteam({
   *   "ApplicationId": "123456",
   *   "SecretKey": "654321",
   *   "UseSandbox": true,
   *   "EnforceServiceSpecificTickets": true
   * });
   */
  CreateOrUpdateSteam (request: CreateOrUpdateSteamRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateSteamResponse>("/Addon/CreateOrUpdateSteam", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the ToxMod addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetoxmod Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateToxMod({
   *   "Enabled": false,
   *   "AccountId": "123456",
   *   "AccountKey": "654321"
   * });
   */
  CreateOrUpdateToxMod (request: CreateOrUpdateToxModRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateToxModResponse>("/Addon/CreateOrUpdateToxMod", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Twitch addon on a title, or updates it if it already exists.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetwitch Microsoft Documentation}
   * @example
   * await addonClient.CreateOrUpdateTwitch({
   *   "ClientID": "123456",
   *   "ClientSecret": "654321"
   * });
   */
  CreateOrUpdateTwitch (request: CreateOrUpdateTwitchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateTwitchResponse>("/Addon/CreateOrUpdateTwitch", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Apple addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deleteapple Microsoft Documentation}
   * @example
   * await addonClient.DeleteApple({});
   */
  DeleteApple (request: DeleteAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteAppleResponse>("/Addon/DeleteApple", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Facebook addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebook Microsoft Documentation}
   * @example
   * await addonClient.DeleteFacebook({});
   */
  DeleteFacebook (request: DeleteFacebookRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteFacebookResponse>("/Addon/DeleteFacebook", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Facebook addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebookinstantgames Microsoft Documentation}
   * @example
   * await addonClient.DeleteFacebookInstantGames({});
   */
  DeleteFacebookInstantGames (request: DeleteFacebookInstantGamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteFacebookInstantGamesResponse>("/Addon/DeleteFacebookInstantGames", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Google addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletegoogle Microsoft Documentation}
   * @example
   * await addonClient.DeleteGoogle({});
   */
  DeleteGoogle (request: DeleteGoogleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteGoogleResponse>("/Addon/DeleteGoogle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Kongregate addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletekongregate Microsoft Documentation}
   * @example
   * await addonClient.DeleteKongregate({});
   */
  DeleteKongregate (request: DeleteKongregateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteKongregateResponse>("/Addon/DeleteKongregate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Nintendo addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletenintendo Microsoft Documentation}
   * @example
   * await addonClient.DeleteNintendo({});
   */
  DeleteNintendo (request: DeleteNintendoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteNintendoResponse>("/Addon/DeleteNintendo", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the PSN addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletepsn Microsoft Documentation}
   * @example
   * await addonClient.DeletePSN({});
   */
  DeletePSN (request: DeletePSNRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePSNResponse>("/Addon/DeletePSN", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Steam addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletesteam Microsoft Documentation}
   * @example
   * await addonClient.DeleteSteam({});
   */
  DeleteSteam (request: DeleteSteamRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteSteamResponse>("/Addon/DeleteSteam", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the ToxMod addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetoxmod Microsoft Documentation}
   * @example
   * await addonClient.DeleteToxMod({});
   */
  DeleteToxMod (request: DeleteToxModRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteToxModResponse>("/Addon/DeleteToxMod", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Twitch addon on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetwitch Microsoft Documentation}
   * @example
   * await addonClient.DeleteTwitch({});
   */
  DeleteTwitch (request: DeleteTwitchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteTwitchResponse>("/Addon/DeleteTwitch", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Apple addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/getapple Microsoft Documentation}
   * @example
   * await addonClient.GetApple({});
   */
  GetApple (request: GetAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAppleResponse>("/Addon/GetApple", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Facebook addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebook Microsoft Documentation}
   * @example
   * await addonClient.GetFacebook({});
   */
  GetFacebook (request: GetFacebookRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFacebookResponse>("/Addon/GetFacebook", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Facebook Instant Games addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebookinstantgames Microsoft Documentation}
   * @example
   * await addonClient.GetFacebookInstantGames({});
   */
  GetFacebookInstantGames (request: GetFacebookInstantGamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFacebookInstantGamesResponse>("/Addon/GetFacebookInstantGames", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Google addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/getgoogle Microsoft Documentation}
   * @example
   * await addonClient.GetGoogle({});
   */
  GetGoogle (request: GetGoogleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetGoogleResponse>("/Addon/GetGoogle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Kongregate addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/getkongregate Microsoft Documentation}
   * @example
   * await addonClient.GetKongregate({});
   */
  GetKongregate (request: GetKongregateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetKongregateResponse>("/Addon/GetKongregate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Nintendo addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/getnintendo Microsoft Documentation}
   * @example
   * await addonClient.GetNintendo({});
   */
  GetNintendo (request: GetNintendoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetNintendoResponse>("/Addon/GetNintendo", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the PSN addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/getpsn Microsoft Documentation}
   * @example
   * await addonClient.GetPSN({});
   */
  GetPSN (request: GetPSNRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPSNResponse>("/Addon/GetPSN", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Steam addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/getsteam Microsoft Documentation}
   * @example
   * await addonClient.GetSteam({});
   */
  GetSteam (request: GetSteamRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetSteamResponse>("/Addon/GetSteam", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the ToxMod addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/gettoxmod Microsoft Documentation}
   * @example
   * await addonClient.GetToxMod({});
   */
  GetToxMod (request: GetToxModRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetToxModResponse>("/Addon/GetToxMod", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Twitch addon on a title, omits secrets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/addon/addon/gettwitch Microsoft Documentation}
   * @example
   * await addonClient.GetTwitch({});
   */
  GetTwitch (request: GetTwitchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTwitchResponse>("/Addon/GetTwitch", request, "X-EntityToken", extraHeaders);
  }

};
