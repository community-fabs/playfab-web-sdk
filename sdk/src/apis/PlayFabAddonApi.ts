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
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdateapple
   */
  CreateOrUpdateApple (request: CreateOrUpdateAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateAppleResponse>("/Addon/CreateOrUpdateApple", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Facebook addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebook
   */
  CreateOrUpdateFacebook (request: CreateOrUpdateFacebookRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateFacebookResponse>("/Addon/CreateOrUpdateFacebook", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Facebook Instant Games addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebookinstantgames
   */
  CreateOrUpdateFacebookInstantGames (request: CreateOrUpdateFacebookInstantGamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateFacebookInstantGamesResponse>("/Addon/CreateOrUpdateFacebookInstantGames", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Google addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdategoogle
   */
  CreateOrUpdateGoogle (request: CreateOrUpdateGoogleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateGoogleResponse>("/Addon/CreateOrUpdateGoogle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Kongregate addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatekongregate
   */
  CreateOrUpdateKongregate (request: CreateOrUpdateKongregateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateKongregateResponse>("/Addon/CreateOrUpdateKongregate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Nintendo addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatenintendo
   */
  CreateOrUpdateNintendo (request: CreateOrUpdateNintendoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateNintendoResponse>("/Addon/CreateOrUpdateNintendo", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the PSN addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatepsn
   */
  CreateOrUpdatePSN (request: CreateOrUpdatePSNRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdatePSNResponse>("/Addon/CreateOrUpdatePSN", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Steam addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatesteam
   */
  CreateOrUpdateSteam (request: CreateOrUpdateSteamRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateSteamResponse>("/Addon/CreateOrUpdateSteam", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the ToxMod addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetoxmod
   */
  CreateOrUpdateToxMod (request: CreateOrUpdateToxModRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateToxModResponse>("/Addon/CreateOrUpdateToxMod", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates the Twitch addon on a title, or updates it if it already exists.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetwitch
   */
  CreateOrUpdateTwitch (request: CreateOrUpdateTwitchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateOrUpdateTwitchResponse>("/Addon/CreateOrUpdateTwitch", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Apple addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deleteapple
   */
  DeleteApple (request: DeleteAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteAppleResponse>("/Addon/DeleteApple", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Facebook addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebook
   */
  DeleteFacebook (request: DeleteFacebookRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteFacebookResponse>("/Addon/DeleteFacebook", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Facebook addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebookinstantgames
   */
  DeleteFacebookInstantGames (request: DeleteFacebookInstantGamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteFacebookInstantGamesResponse>("/Addon/DeleteFacebookInstantGames", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Google addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletegoogle
   */
  DeleteGoogle (request: DeleteGoogleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteGoogleResponse>("/Addon/DeleteGoogle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Kongregate addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletekongregate
   */
  DeleteKongregate (request: DeleteKongregateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteKongregateResponse>("/Addon/DeleteKongregate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Nintendo addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletenintendo
   */
  DeleteNintendo (request: DeleteNintendoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteNintendoResponse>("/Addon/DeleteNintendo", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the PSN addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletepsn
   */
  DeletePSN (request: DeletePSNRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeletePSNResponse>("/Addon/DeletePSN", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Steam addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletesteam
   */
  DeleteSteam (request: DeleteSteamRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteSteamResponse>("/Addon/DeleteSteam", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the ToxMod addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetoxmod
   */
  DeleteToxMod (request: DeleteToxModRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteToxModResponse>("/Addon/DeleteToxMod", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the Twitch addon on a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetwitch
   */
  DeleteTwitch (request: DeleteTwitchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteTwitchResponse>("/Addon/DeleteTwitch", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Apple addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/getapple
   */
  GetApple (request: GetAppleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAppleResponse>("/Addon/GetApple", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Facebook addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebook
   */
  GetFacebook (request: GetFacebookRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFacebookResponse>("/Addon/GetFacebook", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Facebook Instant Games addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebookinstantgames
   */
  GetFacebookInstantGames (request: GetFacebookInstantGamesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFacebookInstantGamesResponse>("/Addon/GetFacebookInstantGames", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Google addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/getgoogle
   */
  GetGoogle (request: GetGoogleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetGoogleResponse>("/Addon/GetGoogle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Kongregate addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/getkongregate
   */
  GetKongregate (request: GetKongregateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetKongregateResponse>("/Addon/GetKongregate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Nintendo addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/getnintendo
   */
  GetNintendo (request: GetNintendoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetNintendoResponse>("/Addon/GetNintendo", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the PSN addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/getpsn
   */
  GetPSN (request: GetPSNRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPSNResponse>("/Addon/GetPSN", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Steam addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/getsteam
   */
  GetSteam (request: GetSteamRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetSteamResponse>("/Addon/GetSteam", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the ToxMod addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/gettoxmod
   */
  GetToxMod (request: GetToxModRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetToxModResponse>("/Addon/GetToxMod", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information of the Twitch addon on a title, omits secrets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/addon/addon/gettwitch
   */
  GetTwitch (request: GetTwitchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTwitchResponse>("/Addon/GetTwitch", request, "X-EntityToken", extraHeaders);
  }

};
