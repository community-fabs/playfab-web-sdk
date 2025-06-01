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
     * https://docs.microsoft.com/rest/api/playfab/data/file/abortfileuploads
     */
    AbortFileUploads (request: AbortFileUploadsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AbortFileUploadsResponse>("/File/AbortFileUploads", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Delete files on an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/deletefiles
     */
    DeleteFiles (request: DeleteFilesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteFilesResponse>("/File/DeleteFiles", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Finalize file uploads to an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/finalizefileuploads
     */
    FinalizeFileUploads (request: FinalizeFileUploadsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<FinalizeFileUploadsResponse>("/File/FinalizeFileUploads", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Retrieves file metadata from an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/getfiles
     */
    GetFiles (request: GetFilesRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFilesResponse>("/File/GetFiles", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Retrieves objects from an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/object/getobjects
     */
    GetObjects (request: GetObjectsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetObjectsResponse>("/Object/GetObjects", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Initiates file uploads to an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/initiatefileuploads
     */
    InitiateFileUploads (request: InitiateFileUploadsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InitiateFileUploadsResponse>("/File/InitiateFileUploads", request, "X-EntityToken", customData, extraHeaders);
    }

    /**
     * Sets objects on an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/object/setobjects
     */
    SetObjects (request: SetObjectsRequest, customData?: any, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetObjectsResponse>("/Object/SetObjects", request, "X-EntityToken", customData, extraHeaders);
    }

};
