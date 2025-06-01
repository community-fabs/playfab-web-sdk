import type {

  GetLanguageListRequest,
  GetLanguageListResponse,
} from "../types/PlayFabLocalizationApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabLocalizationApi extends PlayFabCommon {

    /**
     * Retrieves the list of allowed languages, only accessible by title entities
     * https://docs.microsoft.com/rest/api/playfab/localization/localization/getlanguagelist
     */
    GetLanguageList (request: GetLanguageListRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLanguageListResponse>("/Locale/GetLanguageList", request, "X-EntityToken", customData, extraHeaders);
    }

};
