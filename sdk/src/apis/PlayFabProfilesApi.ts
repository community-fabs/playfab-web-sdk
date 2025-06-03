import type {
  GetGlobalPolicyRequest,
  GetEntityProfileRequest,
  GetEntityProfilesRequest,
  GetTitlePlayersFromMasterPlayerAccountIdsRequest,
  GetTitlePlayersFromXboxLiveIDsRequest,
  SetAvatarUrlRequest,
  SetDisplayNameRequest,
  SetGlobalPolicyRequest,
  SetProfileLanguageRequest,
  SetEntityProfilePolicyRequest,
  GetGlobalPolicyResponse,
  GetEntityProfileResponse,
  GetEntityProfilesResponse,
  GetTitlePlayersFromMasterPlayerAccountIdsResponse,
  GetTitlePlayersFromProviderIDsResponse,
  SetAvatarUrlResponse,
  SetDisplayNameResponse,
  SetGlobalPolicyResponse,
  SetProfileLanguageResponse,
  SetEntityProfilePolicyResponse,
} from "../types/PlayFabProfilesApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabProfilesApi extends PlayFabCommon {

  /**
   * Gets the global title access policy
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/getglobalpolicy
   */
  GetGlobalPolicy (request: GetGlobalPolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetGlobalPolicyResponse>("/Profile/GetGlobalPolicy", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the entity's profile.
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/getprofile
   */
  GetProfile (request: GetEntityProfileRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityProfileResponse>("/Profile/GetProfile", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the entity's profile.
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/getprofiles
   */
  GetProfiles (request: GetEntityProfilesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityProfilesResponse>("/Profile/GetProfiles", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the title player accounts associated with the given master player account.
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/gettitleplayersfrommasterplayeraccountids
   */
  GetTitlePlayersFromMasterPlayerAccountIds (request: GetTitlePlayersFromMasterPlayerAccountIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitlePlayersFromMasterPlayerAccountIdsResponse>("/Profile/GetTitlePlayersFromMasterPlayerAccountIds", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the title player accounts associated with the given XUIDs.
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/gettitleplayersfromxboxliveids
   */
  GetTitlePlayersFromXboxLiveIDs (request: GetTitlePlayersFromXboxLiveIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitlePlayersFromProviderIDsResponse>("/Profile/GetTitlePlayersFromXboxLiveIDs", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update the avatar url of the entity
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/setavatarurl
   */
  SetAvatarUrl (request: SetAvatarUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetAvatarUrlResponse>("/Profile/SetAvatarUrl", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update the display name of the entity
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/setdisplayname
   */
  SetDisplayName (request: SetDisplayNameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetDisplayNameResponse>("/Profile/SetDisplayName", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets the global title access policy
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/setglobalpolicy
   */
  SetGlobalPolicy (request: SetGlobalPolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetGlobalPolicyResponse>("/Profile/SetGlobalPolicy", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates the entity's language. The precedence hierarchy for communication to the player is Title Player Account
   * language, Master Player Account language, and then title default language if the first two aren't set or supported.
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/setprofilelanguage
   */
  SetProfileLanguage (request: SetProfileLanguageRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetProfileLanguageResponse>("/Profile/SetProfileLanguage", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets the profiles access policy
   * Reference: https://docs.microsoft.com/rest/api/playfab/profile/account-management/setprofilepolicy
   */
  SetProfilePolicy (request: SetEntityProfilePolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetEntityProfilePolicyResponse>("/Profile/SetProfilePolicy", request, "X-EntityToken", extraHeaders);
  }

};
