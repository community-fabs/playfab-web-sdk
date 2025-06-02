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
    AbortFileUploads (request: AbortFileUploadsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<AbortFileUploadsResponse>("/File/AbortFileUploads", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Delete files on an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/deletefiles
     */
    DeleteFiles (request: DeleteFilesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteFilesResponse>("/File/DeleteFiles", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Finalize file uploads to an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/finalizefileuploads
     */
    FinalizeFileUploads (request: FinalizeFileUploadsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<FinalizeFileUploadsResponse>("/File/FinalizeFileUploads", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Retrieves file metadata from an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/getfiles
     */
    GetFiles (request: GetFilesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetFilesResponse>("/File/GetFiles", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Retrieves objects from an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/object/getobjects
     */
    GetObjects (request: GetObjectsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetObjectsResponse>("/Object/GetObjects", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Initiates file uploads to an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/file/initiatefileuploads
     */
    InitiateFileUploads (request: InitiateFileUploadsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<InitiateFileUploadsResponse>("/File/InitiateFileUploads", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Sets objects on an entity's profile.
     * https://docs.microsoft.com/rest/api/playfab/data/object/setobjects
     */
    SetObjects (request: SetObjectsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetObjectsResponse>("/Object/SetObjects", request, "X-EntityToken", extraHeaders);
    }

};
