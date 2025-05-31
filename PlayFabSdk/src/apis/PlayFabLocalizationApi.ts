import type { ApiCallback } from "../types/Playfab";
import type {
  GetLanguageListRequest,
  GetLanguageListResponse,
} from "../types/PlayFabLocalizationApi";
import { PlayFabCommon } from "../PlayFabCommon";

export class PlayFabLocalizationApi extends PlayFabCommon {
  /**
   * Retrieves the list of allowed languages, only accessible by title entities
   * https://docs.microsoft.com/rest/api/playfab/localization/localization/getlanguagelist
   */
  GetLanguageList(
    request: GetLanguageListRequest,
    callback: ApiCallback<GetLanguageListResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Locale/GetLanguageList",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
}
