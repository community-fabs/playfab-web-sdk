import type {
  GetLanguageListRequest,
  GetLanguageListResponse,
} from "../types/PlayFabLocalizationApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabLocalizationApi extends PlayFabCommon {

  /**
   * Retrieves the list of allowed languages, only accessible by title entities
   * Reference: https://docs.microsoft.com/rest/api/playfab/locale/localization/getlanguagelist
   */
  GetLanguageList (request: GetLanguageListRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLanguageListResponse>("/Locale/GetLanguageList", request, "X-EntityToken", extraHeaders);
  }

};
