import type { ApiCallback } from "../types/Playfab";
import type {
  GetGlobalPolicyRequest,
  GetGlobalPolicyResponse,
  GetEntityProfileRequest,
  GetEntityProfileResponse,
  GetEntityProfilesRequest,
  GetEntityProfilesResponse,
  GetTitlePlayersFromMasterPlayerAccountIdsRequest,
  GetTitlePlayersFromMasterPlayerAccountIdsResponse,
  GetTitlePlayersFromXboxLiveIDsRequest,
  GetTitlePlayersFromProviderIDsResponse,
  SetDisplayNameRequest,
  SetDisplayNameResponse,
  SetGlobalPolicyRequest,
  SetGlobalPolicyResponse,
  SetProfileLanguageRequest,
  SetProfileLanguageResponse,
  SetEntityProfilePolicyRequest,
  SetEntityProfilePolicyResponse,
} from "../types/PlayFabProfilesApi";
import { PlayFabCommon } from "../PlayFabCommon";

export class PlayFabProfilesApi extends PlayFabCommon {
  /**
   * Gets the global title access policy
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getglobalpolicy
   */
  GetGlobalPolicy(
    request: GetGlobalPolicyRequest,
    callback: ApiCallback<GetGlobalPolicyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/GetGlobalPolicy",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Retrieves the entity's profile.
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getprofile
   */
  GetProfile(
    request: GetEntityProfileRequest,
    callback: ApiCallback<GetEntityProfileResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/GetProfile",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Retrieves the entity's profile.
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/getprofiles
   */
  GetProfiles(
    request: GetEntityProfilesRequest,
    callback: ApiCallback<GetEntityProfilesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/GetProfiles",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Retrieves the title player accounts associated with the given master player account.
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/gettitleplayersfrommasterplayeraccountids
   */
  GetTitlePlayersFromMasterPlayerAccountIds(
    request: GetTitlePlayersFromMasterPlayerAccountIdsRequest,
    callback: ApiCallback<GetTitlePlayersFromMasterPlayerAccountIdsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/GetTitlePlayersFromMasterPlayerAccountIds",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Retrieves the title player accounts associated with the given XUIDs.
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/gettitleplayersfromxboxliveids
   */
  GetTitlePlayersFromXboxLiveIDs(
    request: GetTitlePlayersFromXboxLiveIDsRequest,
    callback: ApiCallback<GetTitlePlayersFromProviderIDsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/GetTitlePlayersFromXboxLiveIDs",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Update the display name of the entity
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setdisplayname
   */
  SetDisplayName(
    request: SetDisplayNameRequest,
    callback: ApiCallback<SetDisplayNameResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/SetDisplayName",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Sets the global title access policy
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setglobalpolicy
   */
  SetGlobalPolicy(
    request: SetGlobalPolicyRequest,
    callback: ApiCallback<SetGlobalPolicyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/SetGlobalPolicy",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Updates the entity's language. The precedence hierarchy for communication to the player is Title Player Account
   * language, Master Player Account language, and then title default language if the first two aren't set or supported.
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setprofilelanguage
   */
  SetProfileLanguage(
    request: SetProfileLanguageRequest,
    callback: ApiCallback<SetProfileLanguageResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/SetProfileLanguage",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Sets the profiles access policy
   * https://docs.microsoft.com/rest/api/playfab/profiles/account-management/setprofilepolicy
   */
  SetProfilePolicy(
    request: SetEntityProfilePolicyRequest,
    callback: ApiCallback<SetEntityProfilePolicyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Profile/SetProfilePolicy",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
}
