import type { ApiCallback } from "../types/common";
import type {
  CreateOrUpdateAppleRequest,
  CreateOrUpdateAppleResponse,
  CreateOrUpdateFacebookInstantGamesRequest,
  CreateOrUpdateFacebookInstantGamesResponse,
  CreateOrUpdateFacebookRequest,
  CreateOrUpdateFacebookResponse,
  CreateOrUpdateGoogleRequest,
  CreateOrUpdateGoogleResponse,
  CreateOrUpdateKongregateRequest,
  CreateOrUpdateKongregateResponse,
  CreateOrUpdateNintendoRequest,
  CreateOrUpdateNintendoResponse,
  CreateOrUpdatePSNRequest,
  CreateOrUpdatePSNResponse,
  CreateOrUpdateSteamRequest,
  CreateOrUpdateSteamResponse,
  CreateOrUpdateToxModRequest,
  CreateOrUpdateToxModResponse,
  CreateOrUpdateTwitchRequest,
  CreateOrUpdateTwitchResponse,
  DeleteAppleRequest,
  DeleteAppleResponse,
  DeleteFacebookInstantGamesRequest,
  DeleteFacebookInstantGamesResponse,
  DeleteFacebookRequest,
  DeleteFacebookResponse,
  DeleteGoogleRequest,
  DeleteGoogleResponse,
  DeleteKongregateRequest,
  DeleteKongregateResponse,
  DeleteNintendoRequest,
  DeleteNintendoResponse,
  DeletePSNRequest,
  DeletePSNResponse,
  DeleteSteamRequest,
  DeleteSteamResponse,
  DeleteToxModRequest,
  DeleteToxModResponse,
  DeleteTwitchRequest,
  DeleteTwitchResponse,
  GetAppleRequest,
  GetAppleResponse,
  GetFacebookInstantGamesRequest,
  GetFacebookInstantGamesResponse,
  GetFacebookRequest,
  GetFacebookResponse,
  GetGoogleRequest,
  GetGoogleResponse,
  GetKongregateRequest,
  GetKongregateResponse,
  GetNintendoRequest,
  GetNintendoResponse,
  GetPSNRequest,
  GetPSNResponse,
  GetSteamRequest,
  GetSteamResponse,
  GetToxModRequest,
  GetToxModResponse,
  GetTwitchRequest,
  GetTwitchResponse,
} from "../types/PlayFabAddonApis";
import { PlayFabCommon } from "../PlayFabCommon";

export class PlayFabAddonApi extends PlayFabCommon {
  /**
   * Creates the Apple addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdateapple
   */
  CreateOrUpdateApple(
    request: CreateOrUpdateAppleRequest,
    callback: ApiCallback<CreateOrUpdateAppleResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateApple",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the Facebook addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebook
   */
  CreateOrUpdateFacebook(
    request: CreateOrUpdateFacebookRequest,
    callback: ApiCallback<CreateOrUpdateFacebookResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateFacebook",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the Facebook Instant Games addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebookinstantgames
   */
  CreateOrUpdateFacebookInstantGames(
    request: CreateOrUpdateFacebookInstantGamesRequest,
    callback: ApiCallback<CreateOrUpdateFacebookInstantGamesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateFacebookInstantGames",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the Google addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdategoogle
   */
  CreateOrUpdateGoogle(
    request: CreateOrUpdateGoogleRequest,
    callback: ApiCallback<CreateOrUpdateGoogleResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateGoogle",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the Kongregate addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatekongregate
   */
  CreateOrUpdateKongregate(
    request: CreateOrUpdateKongregateRequest,
    callback: ApiCallback<CreateOrUpdateKongregateResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateKongregate",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the Nintendo addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatenintendo
   */
  CreateOrUpdateNintendo(
    request: CreateOrUpdateNintendoRequest,
    callback: ApiCallback<CreateOrUpdateNintendoResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateNintendo",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the PSN addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatepsn
   */
  CreateOrUpdatePSN(
    request: CreateOrUpdatePSNRequest,
    callback: ApiCallback<CreateOrUpdatePSNResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdatePSN",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the Steam addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatesteam
   */
  CreateOrUpdateSteam(
    request: CreateOrUpdateSteamRequest,
    callback: ApiCallback<CreateOrUpdateSteamResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateSteam",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the ToxMod addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetoxmod
   */
  CreateOrUpdateToxMod(
    request: CreateOrUpdateToxModRequest,
    callback: ApiCallback<CreateOrUpdateToxModResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateToxMod",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates the Twitch addon on a title, or updates it if it already exists.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetwitch
   */
  CreateOrUpdateTwitch(
    request: CreateOrUpdateTwitchRequest,
    callback: ApiCallback<CreateOrUpdateTwitchResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/CreateOrUpdateTwitch",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the Apple addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deleteapple
   */
  DeleteApple(
    request: DeleteAppleRequest,
    callback: ApiCallback<DeleteAppleResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteApple",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the Facebook addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebook
   */
  DeleteFacebook(
    request: DeleteFacebookRequest,
    callback: ApiCallback<DeleteFacebookResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteFacebook",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the Facebook addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebookinstantgames
   */
  DeleteFacebookInstantGames(
    request: DeleteFacebookInstantGamesRequest,
    callback: ApiCallback<DeleteFacebookInstantGamesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteFacebookInstantGames",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the Google addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletegoogle
   */
  DeleteGoogle(
    request: DeleteGoogleRequest,
    callback: ApiCallback<DeleteGoogleResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteGoogle",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the Kongregate addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletekongregate
   */
  DeleteKongregate(
    request: DeleteKongregateRequest,
    callback: ApiCallback<DeleteKongregateResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteKongregate",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the Nintendo addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletenintendo
   */
  DeleteNintendo(
    request: DeleteNintendoRequest,
    callback: ApiCallback<DeleteNintendoResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteNintendo",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the PSN addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletepsn
   */
  DeletePSN(
    request: DeletePSNRequest,
    callback: ApiCallback<DeletePSNResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeletePSN",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the Steam addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletesteam
   */
  DeleteSteam(
    request: DeleteSteamRequest,
    callback: ApiCallback<DeleteSteamResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteSteam",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the ToxMod addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetoxmod
   */
  DeleteToxMod(
    request: DeleteToxModRequest,
    callback: ApiCallback<DeleteToxModResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteToxMod",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Deletes the Twitch addon on a title.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetwitch
   */
  DeleteTwitch(
    request: DeleteTwitchRequest,
    callback: ApiCallback<DeleteTwitchResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/DeleteTwitch",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the Apple addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/getapple
   */
  GetApple(
    request: GetAppleRequest,
    callback: ApiCallback<GetAppleResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetApple",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the Facebook addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebook
   */
  GetFacebook(
    request: GetFacebookRequest,
    callback: ApiCallback<GetFacebookResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetFacebook",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the Facebook Instant Games addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebookinstantgames
   */
  GetFacebookInstantGames(
    request: GetFacebookInstantGamesRequest,
    callback: ApiCallback<GetFacebookInstantGamesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetFacebookInstantGames",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the Google addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/getgoogle
   */
  GetGoogle(
    request: GetGoogleRequest,
    callback: ApiCallback<GetGoogleResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetGoogle",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the Kongregate addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/getkongregate
   */
  GetKongregate(
    request: GetKongregateRequest,
    callback: ApiCallback<GetKongregateResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetKongregate",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the Nintendo addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/getnintendo
   */
  GetNintendo(
    request: GetNintendoRequest,
    callback: ApiCallback<GetNintendoResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetNintendo",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the PSN addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/getpsn
   */
  GetPSN(
    request: GetPSNRequest,
    callback: ApiCallback<GetPSNResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetPSN",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the Steam addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/getsteam
   */
  GetSteam(
    request: GetSteamRequest,
    callback: ApiCallback<GetSteamResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetSteam",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the ToxMod addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/gettoxmod
   */
  GetToxMod(
    request: GetToxModRequest,
    callback: ApiCallback<GetToxModResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetToxMod",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information of the Twitch addon on a title, omits secrets.
   * https://docs.microsoft.com/rest/api/playfab/addon/addon/gettwitch
   */
  GetTwitch(
    request: GetTwitchRequest,
    callback: ApiCallback<GetTwitchResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Addon/GetTwitch",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
}
