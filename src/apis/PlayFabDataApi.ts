import type {
  AbortFileUploadsRequest,
  DeleteFilesRequest,
  FinalizeFileUploadsRequest,
  GetFilesRequest,
  GetObjectsRequest,
  InitiateFileUploadsRequest,
  SetObjectsRequest,
  AbortFileUploadsResponse,
  DeleteFilesResponse,
  FinalizeFileUploadsResponse,
  GetFilesResponse,
  GetObjectsResponse,
  InitiateFileUploadsResponse,
  SetObjectsResponse,
} from "../types/PlayFabDataApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabDataApi extends PlayFabCommon {

  /**
   * Abort pending file uploads to an entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/file/file/abortfileuploads Microsoft Documentation}
   * @example
   * await fileClient.AbortFileUploads({
   *   "FileNames": [
   *     "avatar",
   *     "game_state"
   *   ],
   *   "Entity": {
   *     "Id": "ID",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  AbortFileUploads (request: AbortFileUploadsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AbortFileUploadsResponse>("/File/AbortFileUploads", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete files on an entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/file/file/deletefiles Microsoft Documentation}
   * @example
   * await fileClient.DeleteFiles({
   *   "FileNames": [
   *     "game_state",
   *     "avatar"
   *   ],
   *   "Entity": {
   *     "Id": "ID",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  DeleteFiles (request: DeleteFilesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteFilesResponse>("/File/DeleteFiles", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Finalize file uploads to an entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/file/file/finalizefileuploads Microsoft Documentation}
   * @example
   * await fileClient.FinalizeFileUploads({
   *   "ProfileVersion": 0,
   *   "FileNames": [
   *     "avatar",
   *     "game_state"
   *   ],
   *   "Entity": {
   *     "Id": "ID",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  FinalizeFileUploads (request: FinalizeFileUploadsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<FinalizeFileUploadsResponse>("/File/FinalizeFileUploads", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves file metadata from an entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/file/file/getfiles Microsoft Documentation}
   * @example
   * await fileClient.GetFiles({
   *   "Entity": {
   *     "Id": "ID",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  GetFiles (request: GetFilesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetFilesResponse>("/File/GetFiles", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves objects from an entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/object/object/getobjects Microsoft Documentation}
   * @example
   * await objectClient.GetObjects({
   *   "Entity": {
   *     "Id": "ABC90712ABC",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  GetObjects (request: GetObjectsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetObjectsResponse>("/Object/GetObjects", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Initiates file uploads to an entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/file/file/initiatefileuploads Microsoft Documentation}
   * @example
   * await fileClient.InitiateFileUploads({
   *   "FileNames": [
   *     "avatar",
   *     "game_state"
   *   ],
   *   "Entity": {
   *     "Id": "ID",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  InitiateFileUploads (request: InitiateFileUploadsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<InitiateFileUploadsResponse>("/File/InitiateFileUploads", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets objects on an entity's profile.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/object/object/setobjects Microsoft Documentation}
   * @example
   * await objectClient.SetObjects({
   *   "ExpectedProfileVersion": 5,
   *   "Objects": [
   *     {
   *       "ObjectName": "SaveSate",
   *       "DataObject": {
   *         "PlayerDetails": {
   *           "LastMissionSuccess": "2017-06-15T11:05:19Z",
   *           "LastMissionFailure": "2017-06-12T11:05:19Z",
   *           "MapPosition": [
   *             22.0,
   *             37.78
   *           ],
   *           "IsPaidUpgrade": true
   *         },
   *         "GameSettings": {
   *           "Screen": "FriendsList",
   *           "Favorites": [
   *             "Place 1",
   *             "Place 2"
   *           ]
   *         }
   *       },
   *       "SimpleStatements": {
   *         "Read": [
   *           {
   *             "Friend": true
   *           }
   *         ],
   *         "Write": [
   *           "Self"
   *         ]
   *       }
   *     }
   *   ],
   *   "Entity": {
   *     "Id": "A8140AB9109712B",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  SetObjects (request: SetObjectsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetObjectsResponse>("/Object/SetObjects", request, "X-EntityToken", extraHeaders);
  }

};
