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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/getglobalpolicy Microsoft Documentation}
   * @example
   * await profileClient.GetGlobalPolicy({});
   */
  GetGlobalPolicy (request: GetGlobalPolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetGlobalPolicyResponse>("/Profile/GetGlobalPolicy", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/getprofile Microsoft Documentation}
   * @example
   * await profileClient.GetProfile({
   *   "Entity": {
   *     "Id": "1234567787392",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  GetProfile (request: GetEntityProfileRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityProfileResponse>("/Profile/GetProfile", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/getprofiles Microsoft Documentation}
   * @example
   * await profileClient.GetProfiles({
   *   "Entities": [
   *     {
   *       "Id": "1234567787392",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     },
   *     {
   *       "Id": "42434567785265",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     }
   *   ]
   * });
   */
  GetProfiles (request: GetEntityProfilesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityProfilesResponse>("/Profile/GetProfiles", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the title player accounts associated with the given master player account.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/gettitleplayersfrommasterplayeraccountids Microsoft Documentation}
   * @example
   * await profileClient.GetTitlePlayersFromMasterPlayerAccountIds({
   *   "MasterPlayerAccountIds": [
   *     "1233455677"
   *   ],
   *   "TitleId": "abc123"
   * });
   */
  GetTitlePlayersFromMasterPlayerAccountIds (request: GetTitlePlayersFromMasterPlayerAccountIdsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitlePlayersFromMasterPlayerAccountIdsResponse>("/Profile/GetTitlePlayersFromMasterPlayerAccountIds", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the title player accounts associated with the given XUIDs.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/gettitleplayersfromxboxliveids Microsoft Documentation}
   * @example
   * await profileClient.GetTitlePlayersFromXboxLiveIDs({
   *   "XboxLiveIds": [
   *     "1233455677"
   *   ],
   *   "Sandbox": "RETAIL"
   * });
   */
  GetTitlePlayersFromXboxLiveIDs (request: GetTitlePlayersFromXboxLiveIDsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitlePlayersFromProviderIDsResponse>("/Profile/GetTitlePlayersFromXboxLiveIDs", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update the avatar url of the entity
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/setavatarurl Microsoft Documentation}
   * @example
   * await profileClient.SetAvatarUrl({
   *   "AvatarUrl": "https://test.com/image.png",
   *   "ProfileVersion": 123,
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  SetAvatarUrl (request: SetAvatarUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetAvatarUrlResponse>("/Profile/SetAvatarUrl", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update the display name of the entity
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/setdisplayname Microsoft Documentation}
   * @example
   * await profileClient.SetDisplayName({
   *   "DisplayName": "My new display name",
   *   "ExpectedVersion": 123,
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  SetDisplayName (request: SetDisplayNameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetDisplayNameResponse>("/Profile/SetDisplayName", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets the global title access policy
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/setglobalpolicy Microsoft Documentation}
   * @example
   * await profileClient.SetGlobalPolicy({
   *   "Permissions": [
   *     {
   *       "Resource": "pfrn:data--title_player_account!90901000/Profile/SomethingCool",
   *       "Action": "*",
   *       "Effect": "Allow",
   *       "Principal": {
   *         "ChildOf": {
   *           "EntityType": "[SELF]"
   *         }
   *       },
   *       "Comment": "An example policy"
   *     }
   *   ]
   * });
   */
  SetGlobalPolicy (request: SetGlobalPolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetGlobalPolicyResponse>("/Profile/SetGlobalPolicy", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates the entity's language. The precedence hierarchy for communication to the player is Title Player Account
   * language, Master Player Account language, and then title default language if the first two aren't set or supported.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/setprofilelanguage Microsoft Documentation}
   * @example
   * await profileClient.SetProfileLanguage({
   *   "Language": "en",
   *   "ExpectedVersion": 123,
   *   "Entity": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  SetProfileLanguage (request: SetProfileLanguageRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetProfileLanguageResponse>("/Profile/SetProfileLanguage", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets the profiles access policy
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/profile/account-management/setprofilepolicy Microsoft Documentation}
   * @example
   * await profileClient.SetProfilePolicy({
   *   "Statements": [
   *     {
   *       "Resource": "pfrn:data--*!*\/Profile/Files/avatar.png",
   *       "Action": "Read",
   *       "Effect": "Allow",
   *       "Principal": {
   *         "FriendOf": "true"
   *       },
   *       "Comment": "Allow my friends to read my avatar"
   *     }
   *   ],
   *   "Entity": {
   *     "Id": "90901000",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  SetProfilePolicy (request: SetEntityProfilePolicyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetEntityProfilePolicyResponse>("/Profile/SetProfilePolicy", request, "X-EntityToken", extraHeaders);
  }

};
