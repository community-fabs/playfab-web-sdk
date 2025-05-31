import type { ApiCallback } from "../types/Playfab";
import type {
  CreateTelemetryKeyRequest,
  CreateTelemetryKeyResponse,
  DeleteDataConnectionRequest,
  DeleteDataConnectionResponse,
  DeleteTelemetryKeyRequest,
  DeleteTelemetryKeyResponse,
  GetDataConnectionRequest,
  GetDataConnectionResponse,
  GetTelemetryKeyRequest,
  GetTelemetryKeyResponse,
  ListDataConnectionsRequest,
  ListDataConnectionsResponse,
  ListTelemetryKeysRequest,
  ListTelemetryKeysResponse,
  SetDataConnectionRequest,
  SetDataConnectionResponse,
  SetDataConnectionActiveRequest,
  SetDataConnectionActiveResponse,
  SetTelemetryKeyActiveRequest,
  SetTelemetryKeyActiveResponse,
  WriteEventsRequest,
  WriteEventsResponse,
} from "../types/PlayFabEventsApi";
import { PlayFabCommon } from "../PlayFabCommon";

export class PlayFabEventsApi extends PlayFabCommon {
  /**
   * Creates a new telemetry key for the title.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/createtelemetrykey
   */
  CreateTelemetryKey(
    request: CreateTelemetryKeyRequest,
    callback: ApiCallback<CreateTelemetryKeyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/CreateTelemetryKey",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a Data Connection from a title.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/deletedataconnection
   */
  DeleteDataConnection(
    request: DeleteDataConnectionRequest,
    callback: ApiCallback<DeleteDataConnectionResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/DeleteDataConnection",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a telemetry key configured for the title.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/deletetelemetrykey
   */
  DeleteTelemetryKey(
    request: DeleteTelemetryKeyRequest,
    callback: ApiCallback<DeleteTelemetryKeyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/DeleteTelemetryKey",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Retrieves a single Data Connection associated with a title.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/getdataconnection
   */
  GetDataConnection(
    request: GetDataConnectionRequest,
    callback: ApiCallback<GetDataConnectionResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/GetDataConnection",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Gets information about a telemetry key configured for the title.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/gettelemetrykey
   */
  GetTelemetryKey(
    request: GetTelemetryKeyRequest,
    callback: ApiCallback<GetTelemetryKeyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/GetTelemetryKey",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Retrieves the list of Data Connections associated with a title.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/listdataconnections
   */
  ListDataConnections(
    request: ListDataConnectionsRequest,
    callback: ApiCallback<ListDataConnectionsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/ListDataConnections",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Lists all telemetry keys configured for the title.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/listtelemetrykeys
   */
  ListTelemetryKeys(
    request: ListTelemetryKeysRequest,
    callback: ApiCallback<ListTelemetryKeysResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/ListTelemetryKeys",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates or updates a Data Connection on a title.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/setdataconnection
   */
  SetDataConnection(
    request: SetDataConnectionRequest,
    callback: ApiCallback<SetDataConnectionResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/SetDataConnection",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Sets a Data Connection for the title to either the active or deactivated state.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/setdataconnectionactive
   */
  SetDataConnectionActive(
    request: SetDataConnectionActiveRequest,
    callback: ApiCallback<SetDataConnectionActiveResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/SetDataConnectionActive",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Sets a telemetry key to the active or deactivated state.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/settelemetrykeyactive
   */
  SetTelemetryKeyActive(
    request: SetTelemetryKeyActiveRequest,
    callback: ApiCallback<SetTelemetryKeyActiveResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/SetTelemetryKeyActive",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Write batches of entity based events to PlayStream. The namespace of the Event must be 'custom' or start with 'custom.'.
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/writeevents
   */
  WriteEvents(
    request: WriteEventsRequest,
    callback: ApiCallback<WriteEventsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/WriteEvents",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Write batches of entity based events to as Telemetry events (bypass PlayStream). The namespace must be 'custom' or start
   * with 'custom.'
   * https://docs.microsoft.com/rest/api/playfab/events/playstream-events/writetelemetryevents
   */
  WriteTelemetryEvents(
    request: WriteEventsRequest,
    callback: ApiCallback<WriteEventsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Event/WriteTelemetryEvents",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
}
