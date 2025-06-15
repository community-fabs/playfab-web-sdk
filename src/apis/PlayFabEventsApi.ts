import type {
  CreateTelemetryKeyRequest,
  DeleteDataConnectionRequest,
  DeleteEventSamplingRatioRequest,
  DeleteTelemetryKeyRequest,
  GetDataConnectionRequest,
  GetEventSamplingRatioRequest,
  GetEventSamplingRatiosRequest,
  GetTelemetryKeyRequest,
  ListDataConnectionsRequest,
  ListTelemetryKeysRequest,
  SetDataConnectionRequest,
  SetDataConnectionActiveRequest,
  SetEventSamplingRatioRequest,
  SetTelemetryKeyActiveRequest,
  WriteEventsRequest,
  CreateTelemetryKeyResponse,
  DeleteDataConnectionResponse,
  DeleteEventSamplingRatioResult,
  DeleteTelemetryKeyResponse,
  GetDataConnectionResponse,
  GetEventSamplingRatioResult,
  GetEventSamplingRatiosResult,
  GetTelemetryKeyResponse,
  ListDataConnectionsResponse,
  ListTelemetryKeysResponse,
  SetDataConnectionResponse,
  SetDataConnectionActiveResponse,
  SetEventSamplingRatioResult,
  SetTelemetryKeyActiveResponse,
  WriteEventsResponse,
} from "../types/PlayFabEventsApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabEventsApi extends PlayFabCommon {

  /**
   * Creates a new telemetry key for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/createtelemetrykey Microsoft Documentation}
   * @example
   * await eventClient.CreateTelemetryKey({
   *   "KeyName": "MyTelemetryKey"
   * });
   */
  CreateTelemetryKey (request: CreateTelemetryKeyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTelemetryKeyResponse>("/Event/CreateTelemetryKey", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a Data Connection from a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/deletedataconnection Microsoft Documentation}
   * @example
   * await eventClient.DeleteDataConnection({
   *   "Name": "MyDataConnection"
   * });
   */
  DeleteDataConnection (request: DeleteDataConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteDataConnectionResponse>("/Event/DeleteDataConnection", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the sampling ratio for an event.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream/deleteeventsamplingratio Microsoft Documentation}
   */
  DeleteEventSamplingRatio (request: DeleteEventSamplingRatioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteEventSamplingRatioResult>("/Event/DeleteEventSamplingRatio", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a telemetry key configured for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/deletetelemetrykey Microsoft Documentation}
   * @example
   * await eventClient.DeleteTelemetryKey({
   *   "KeyName": "MyTelemetryKey"
   * });
   */
  DeleteTelemetryKey (request: DeleteTelemetryKeyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteTelemetryKeyResponse>("/Event/DeleteTelemetryKey", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves a single Data Connection associated with a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/getdataconnection Microsoft Documentation}
   * @example
   * await eventClient.GetDataConnection({
   *   "Name": "MyDataConnection"
   * });
   */
  GetDataConnection (request: GetDataConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetDataConnectionResponse>("/Event/GetDataConnection", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the sampling ratio for an event.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream/geteventsamplingratio Microsoft Documentation}
   * @example
   * await eventClient.GetEventSamplingRatio({
   *   "EventNamespace": "com.playfab",
   *   "EventName": "player_executed_cloudscript"
   * });
   */
  GetEventSamplingRatio (request: GetEventSamplingRatioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEventSamplingRatioResult>("/Event/GetEventSamplingRatio", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the event sampling ratios for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream/geteventsamplingratios Microsoft Documentation}
   */
  GetEventSamplingRatios (request: GetEventSamplingRatiosRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEventSamplingRatiosResult>("/Event/GetEventSamplingRatios", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets information about a telemetry key configured for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/gettelemetrykey Microsoft Documentation}
   * @example
   * await eventClient.GetTelemetryKey({
   *   "KeyName": "MyTelemetryKey"
   * });
   */
  GetTelemetryKey (request: GetTelemetryKeyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTelemetryKeyResponse>("/Event/GetTelemetryKey", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Retrieves the list of Data Connections associated with a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/listdataconnections Microsoft Documentation}
   * @example
   * await eventClient.ListDataConnections({});
   */
  ListDataConnections (request: ListDataConnectionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListDataConnectionsResponse>("/Event/ListDataConnections", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists all telemetry keys configured for the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/listtelemetrykeys Microsoft Documentation}
   * @example
   * await eventClient.ListTelemetryKeys({});
   */
  ListTelemetryKeys (request: ListTelemetryKeysRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListTelemetryKeysResponse>("/Event/ListTelemetryKeys", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates or updates a Data Connection on a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/setdataconnection Microsoft Documentation}
   * @example
   * await eventClient.SetDataConnection({
   *   "Name": "MyDataConnection",
   *   "Type": "AzureDataExplorer",
   *   "IsActive": true,
   *   "ConnectionSettings": {
   *     "AzureDataExplorerSettings": {
   *       "ClusterUri": "https://myadxcluster.kusto.windows.net",
   *       "Database": "MyDatabase",
   *       "Table": "MyTable"
   *     }
   *   }
   * });
   */
  SetDataConnection (request: SetDataConnectionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetDataConnectionResponse>("/Event/SetDataConnection", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets a Data Connection for the title to either the active or deactivated state.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/setdataconnectionactive Microsoft Documentation}
   * @example
   * await eventClient.SetDataConnectionActive({
   *   "Name": "MyDataConnection",
   *   "Active": false
   * });
   */
  SetDataConnectionActive (request: SetDataConnectionActiveRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetDataConnectionActiveResponse>("/Event/SetDataConnectionActive", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets the sampling ratio for an event.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream/seteventsamplingratio Microsoft Documentation}
   */
  SetEventSamplingRatio (request: SetEventSamplingRatioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetEventSamplingRatioResult>("/Event/SetEventSamplingRatio", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Sets a telemetry key to the active or deactivated state.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/settelemetrykeyactive Microsoft Documentation}
   * @example
   * await eventClient.SetTelemetryKeyActive({
   *   "KeyName": "MyTelemetryKey",
   *   "Active": false
   * });
   */
  SetTelemetryKeyActive (request: SetTelemetryKeyActiveRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetTelemetryKeyActiveResponse>("/Event/SetTelemetryKeyActive", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Write batches of entity based events to PlayStream. The namespace of the Event must be 'custom' or start with 'custom.'.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/writeevents Microsoft Documentation}
   * @example
   * await eventClient.WriteEvents({
   *   "Events": [
   *     {
   *       "Entity": {
   *         "Id": "A8140AB9109712B",
   *         "Type": "title",
   *         "TypeString": "title"
   *       },
   *       "EventNamespace": "com.playfab.events.example",
   *       "Name": "something_happened",
   *       "Payload": {
   *         "Foo": "Bar",
   *         "Nums": [
   *           1,
   *           2,
   *           3
   *         ]
   *       }
   *     }
   *   ]
   * });
   */
  WriteEvents (request: WriteEventsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventsResponse>("/Event/WriteEvents", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Write batches of entity based events to as Telemetry events (bypass PlayStream). The namespace must be 'custom' or start
   * with 'custom.'
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/event/playstream-events/writetelemetryevents Microsoft Documentation}
   * @example
   * await eventClient.WriteTelemetryEvents({
   *   "Events": [
   *     {
   *       "Entity": {
   *         "Id": "A8140AB9109712B",
   *         "Type": "title",
   *         "TypeString": "title"
   *       },
   *       "EventNamespace": "com.playfab.events.example",
   *       "Name": "something_happened",
   *       "Payload": {
   *         "Foo": "Bar",
   *         "Nums": [
   *           1,
   *           2,
   *           3
   *         ]
   *       }
   *     }
   *   ]
   * });
   */
  WriteTelemetryEvents (request: WriteEventsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<WriteEventsResponse>("/Event/WriteTelemetryEvents", request, "X-EntityToken", extraHeaders);
  }

};
