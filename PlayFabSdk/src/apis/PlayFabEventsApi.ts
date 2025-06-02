import type {
  CreateTelemetryKeyRequest,
  DeleteDataConnectionRequest,
  DeleteTelemetryKeyRequest,
  GetDataConnectionRequest,
  GetTelemetryKeyRequest,
  ListDataConnectionsRequest,
  ListTelemetryKeysRequest,
  SetDataConnectionRequest,
  SetDataConnectionActiveRequest,
  SetTelemetryKeyActiveRequest,
  WriteEventsRequest,
  CreateTelemetryKeyResponse,
  DeleteDataConnectionResponse,
  DeleteTelemetryKeyResponse,
  GetDataConnectionResponse,
  GetTelemetryKeyResponse,
  ListDataConnectionsResponse,
  ListTelemetryKeysResponse,
  SetDataConnectionResponse,
  SetDataConnectionActiveResponse,
  SetTelemetryKeyActiveResponse,
  WriteEventsResponse,
} from "../types/PlayFabEventsApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabEventsApi extends PlayFabCommon {

    /**
     * Creates a new telemetry key for the title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/createtelemetrykey
     */
    CreateTelemetryKey (request: CreateTelemetryKeyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateTelemetryKeyResponse>("/Event/CreateTelemetryKey", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a Data Connection from a title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/deletedataconnection
     */
    DeleteDataConnection (request: DeleteDataConnectionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteDataConnectionResponse>("/Event/DeleteDataConnection", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a telemetry key configured for the title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/deletetelemetrykey
     */
    DeleteTelemetryKey (request: DeleteTelemetryKeyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteTelemetryKeyResponse>("/Event/DeleteTelemetryKey", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Retrieves a single Data Connection associated with a title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/getdataconnection
     */
    GetDataConnection (request: GetDataConnectionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetDataConnectionResponse>("/Event/GetDataConnection", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets information about a telemetry key configured for the title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/gettelemetrykey
     */
    GetTelemetryKey (request: GetTelemetryKeyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTelemetryKeyResponse>("/Event/GetTelemetryKey", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Retrieves the list of Data Connections associated with a title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/listdataconnections
     */
    ListDataConnections (request: ListDataConnectionsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListDataConnectionsResponse>("/Event/ListDataConnections", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists all telemetry keys configured for the title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/listtelemetrykeys
     */
    ListTelemetryKeys (request: ListTelemetryKeysRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListTelemetryKeysResponse>("/Event/ListTelemetryKeys", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Creates or updates a Data Connection on a title.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/setdataconnection
     */
    SetDataConnection (request: SetDataConnectionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetDataConnectionResponse>("/Event/SetDataConnection", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Sets a Data Connection for the title to either the active or deactivated state.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/setdataconnectionactive
     */
    SetDataConnectionActive (request: SetDataConnectionActiveRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetDataConnectionActiveResponse>("/Event/SetDataConnectionActive", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Sets a telemetry key to the active or deactivated state.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/settelemetrykeyactive
     */
    SetTelemetryKeyActive (request: SetTelemetryKeyActiveRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetTelemetryKeyActiveResponse>("/Event/SetTelemetryKeyActive", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Write batches of entity based events to PlayStream. The namespace of the Event must be 'custom' or start with 'custom.'.
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/writeevents
     */
    WriteEvents (request: WriteEventsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventsResponse>("/Event/WriteEvents", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Write batches of entity based events to as Telemetry events (bypass PlayStream). The namespace must be 'custom' or start
     * with 'custom.'
     * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/writetelemetryevents
     */
    WriteTelemetryEvents (request: WriteEventsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<WriteEventsResponse>("/Event/WriteTelemetryEvents", request, "X-EntityToken", extraHeaders);
    }

};
