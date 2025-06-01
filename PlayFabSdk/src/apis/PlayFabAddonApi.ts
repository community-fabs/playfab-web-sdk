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
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdateapple
     */
    CreateOrUpdateApple (request: CreateOrUpdateAppleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateAppleResponse>("/Addon/CreateOrUpdateApple", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the Facebook addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebook
     */
    CreateOrUpdateFacebook (request: CreateOrUpdateFacebookRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateFacebookResponse>("/Addon/CreateOrUpdateFacebook", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the Facebook Instant Games addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebookinstantgames
     */
    CreateOrUpdateFacebookInstantGames (request: CreateOrUpdateFacebookInstantGamesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateFacebookInstantGamesResponse>("/Addon/CreateOrUpdateFacebookInstantGames", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the Google addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdategoogle
     */
    CreateOrUpdateGoogle (request: CreateOrUpdateGoogleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateGoogleResponse>("/Addon/CreateOrUpdateGoogle", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the Kongregate addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatekongregate
     */
    CreateOrUpdateKongregate (request: CreateOrUpdateKongregateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateKongregateResponse>("/Addon/CreateOrUpdateKongregate", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the Nintendo addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatenintendo
     */
    CreateOrUpdateNintendo (request: CreateOrUpdateNintendoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateNintendoResponse>("/Addon/CreateOrUpdateNintendo", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the PSN addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatepsn
     */
    CreateOrUpdatePSN (request: CreateOrUpdatePSNRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdatePSNResponse>("/Addon/CreateOrUpdatePSN", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the Steam addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatesteam
     */
    CreateOrUpdateSteam (request: CreateOrUpdateSteamRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateSteamResponse>("/Addon/CreateOrUpdateSteam", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the ToxMod addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetoxmod
     */
    CreateOrUpdateToxMod (request: CreateOrUpdateToxModRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateToxModResponse>("/Addon/CreateOrUpdateToxMod", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Creates the Twitch addon on a title, or updates it if it already exists.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetwitch
     */
    CreateOrUpdateTwitch (request: CreateOrUpdateTwitchRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateOrUpdateTwitchResponse>("/Addon/CreateOrUpdateTwitch", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the Apple addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deleteapple
     */
    DeleteApple (request: DeleteAppleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteAppleResponse>("/Addon/DeleteApple", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the Facebook addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebook
     */
    DeleteFacebook (request: DeleteFacebookRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteFacebookResponse>("/Addon/DeleteFacebook", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the Facebook addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebookinstantgames
     */
    DeleteFacebookInstantGames (request: DeleteFacebookInstantGamesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteFacebookInstantGamesResponse>("/Addon/DeleteFacebookInstantGames", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the Google addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletegoogle
     */
    DeleteGoogle (request: DeleteGoogleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteGoogleResponse>("/Addon/DeleteGoogle", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the Kongregate addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletekongregate
     */
    DeleteKongregate (request: DeleteKongregateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteKongregateResponse>("/Addon/DeleteKongregate", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the Nintendo addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletenintendo
     */
    DeleteNintendo (request: DeleteNintendoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteNintendoResponse>("/Addon/DeleteNintendo", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the PSN addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletepsn
     */
    DeletePSN (request: DeletePSNRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeletePSNResponse>("/Addon/DeletePSN", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the Steam addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletesteam
     */
    DeleteSteam (request: DeleteSteamRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteSteamResponse>("/Addon/DeleteSteam", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the ToxMod addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetoxmod
     */
    DeleteToxMod (request: DeleteToxModRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteToxModResponse>("/Addon/DeleteToxMod", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Deletes the Twitch addon on a title.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetwitch
     */
    DeleteTwitch (request: DeleteTwitchRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteTwitchResponse>("/Addon/DeleteTwitch", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the Apple addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/getapple
     */
    GetApple (request: GetAppleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetAppleResponse>("/Addon/GetApple", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the Facebook addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebook
     */
    GetFacebook (request: GetFacebookRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFacebookResponse>("/Addon/GetFacebook", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the Facebook Instant Games addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebookinstantgames
     */
    GetFacebookInstantGames (request: GetFacebookInstantGamesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFacebookInstantGamesResponse>("/Addon/GetFacebookInstantGames", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the Google addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/getgoogle
     */
    GetGoogle (request: GetGoogleRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetGoogleResponse>("/Addon/GetGoogle", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the Kongregate addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/getkongregate
     */
    GetKongregate (request: GetKongregateRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetKongregateResponse>("/Addon/GetKongregate", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the Nintendo addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/getnintendo
     */
    GetNintendo (request: GetNintendoRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetNintendoResponse>("/Addon/GetNintendo", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the PSN addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/getpsn
     */
    GetPSN (request: GetPSNRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetPSNResponse>("/Addon/GetPSN", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the Steam addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/getsteam
     */
    GetSteam (request: GetSteamRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetSteamResponse>("/Addon/GetSteam", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the ToxMod addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/gettoxmod
     */
    GetToxMod (request: GetToxModRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetToxModResponse>("/Addon/GetToxMod", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Gets information of the Twitch addon on a title, omits secrets.
     * https://docs.microsoft.com/rest/api/playfab/addon/addon/gettwitch
     */
    GetTwitch (request: GetTwitchRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTwitchResponse>("/Addon/GetTwitch", request, "X-EntityToken", customData, extraHeaders);
    }

};
