import type { IPlayFabRequestCommon, IPlayFabResultCommon } from "./Playfab";

export interface GetLanguageListRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
}

export interface GetLanguageListResponse extends IPlayFabResultCommon {
  /** The list of allowed languages, in BCP47 two-letter format */
  LanguageList?: string[];
}
