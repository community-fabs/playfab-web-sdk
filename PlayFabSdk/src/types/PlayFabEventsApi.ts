import type { IPlayFabRequestCommon, IPlayFabResultCommon } from "./Playfab";

export interface CreateTelemetryKeyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The name of the new key. Telemetry key names must be unique within the scope of the title. */
  KeyName: string;
}

export interface CreateTelemetryKeyResponse extends IPlayFabResultCommon {
  /** Details about the newly created telemetry key. */
  NewKeyDetails?: TelemetryKeyDetails;
}

export interface DataConnectionAzureBlobSettings {
  /** Name of the storage account. */
  AccountName?: string;
  /** Name of the container. */
  ContainerName?: string;
  /** Azure Entra Tenant Id. */
  TenantId?: string;
}

export interface DataConnectionAzureDataExplorerSettings {
  /** The URI of the ADX cluster. */
  ClusterUri?: string;
  /** The database to write to. */
  Database?: string;
  /** The table to write to. */
  Table?: string;
}

export interface DataConnectionDetails {
  /** Settings of the data connection. */
  ConnectionSettings: DataConnectionSettings;
  /** Whether or not the connection is currently active. */
  IsActive: boolean;
  /** The name of the data connection. */
  Name: string;
  /** Current status of the data connection, if any. */
  Status?: DataConnectionStatusDetails;
  /** The type of data connection. */
  Type: string;
}

type DataConnectionErrorState = "OK" | "Error";

export interface DataConnectionFabricKQLSettings {
  /** The URI of the Fabric cluster. */
  ClusterUri?: string;
  /** The database to write to. */
  Database?: string;
  /** The table to write to. */
  Table?: string;
}

export interface DataConnectionSettings {
  /** Settings if the type of connection is AzureBlobStorage. */
  AzureBlobSettings?: DataConnectionAzureBlobSettings;
  /** Settings if the type of connection is AzureDataExplorer. */
  AzureDataExplorerSettings?: DataConnectionAzureDataExplorerSettings;
  /** Settings if the type of connection is FabricKQL. */
  AzureFabricKQLSettings?: DataConnectionFabricKQLSettings;
}

export interface DataConnectionStatusDetails {
  /** The name of the error affecting the data connection, if any. */
  Error?: string;
  /** A description of the error affecting the data connection, if any. This may be empty for some errors. */
  ErrorMessage?: string;
  /** The most recent time of the error affecting the data connection, if any. */
  MostRecentErrorTime?: string;
  /** Indicates if the connection is in a normal state or error state. */
  State?: string;
}

type DataConnectionType =
  | "AzureBlobStorage"
  | "AzureDataExplorer"
  | "FabricKQL";

export interface DeleteDataConnectionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The name of the data connection to delete. */
  Name: string;
}

export interface DeleteDataConnectionResponse extends IPlayFabResultCommon {
  /** Indicates whether or not the connection was deleted as part of the request. */
  WasDeleted: boolean;
}

export interface DeleteTelemetryKeyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The name of the key to delete. */
  KeyName: string;
}

export interface DeleteTelemetryKeyResponse extends IPlayFabResultCommon {
  /** Indicates whether or not the key was deleted. If false, no key with that name existed. */
  WasKeyDeleted: boolean;
}

export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface EventContents {
  /**
   * The optional custom tags associated with the event (e.g. build number, external trace identifiers, etc.). Before an
   * event is written, this collection and the base request custom tags will be merged, but not overriden. This enables the
   * caller to specify static tags and per event tags.
   */
  CustomTags?: { [key: string]: string | null };
  /** Entity associated with the event. If null, the event will apply to the calling entity. */
  Entity?: EntityKey;
  /** The namespace in which the event is defined. Allowed namespaces can vary by API. */
  EventNamespace: string;
  /** The name of this event. */
  Name: string;
  /**
   * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
   * the EventId value, which is assigned when the event is received by the server.
   */
  OriginalId?: string;
  /**
   * The time (in UTC) associated with this event when it occurred. If specified, this value is stored in the
   * OriginalTimestamp property of the PlayStream event.
   */
  OriginalTimestamp?: string;
  /** Arbitrary data associated with the event. Only one of Payload or PayloadJSON is allowed. */
  Payload?: any;
  /**
   * Arbitrary data associated with the event, represented as a JSON serialized string. Only one of Payload or PayloadJSON is
   * allowed.
   */
  PayloadJSON?: string;
}

export interface GetDataConnectionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The name of the data connection to retrieve. */
  Name: string;
}

export interface GetDataConnectionResponse extends IPlayFabResultCommon {
  /** The details of the queried Data Connection. */
  DataConnection?: DataConnectionDetails;
}

export interface GetTelemetryKeyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The name of the key to retrieve. */
  KeyName: string;
}

export interface GetTelemetryKeyResponse extends IPlayFabResultCommon {
  /** Details about the requested telemetry key. */
  KeyDetails?: TelemetryKeyDetails;
}

export interface ListDataConnectionsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
}

export interface ListDataConnectionsResponse extends IPlayFabResultCommon {
  /** The list of existing Data Connections. */
  DataConnections?: DataConnectionDetails[];
}

export interface ListTelemetryKeysRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
}

export interface ListTelemetryKeysResponse extends IPlayFabResultCommon {
  /** The telemetry keys configured for the title. */
  KeyDetails?: TelemetryKeyDetails[];
}

export interface SetDataConnectionActiveRequest extends IPlayFabRequestCommon {
  /** Whether to set the data connection to active (true) or deactivated (false). */
  Active: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The name of the data connection to update. */
  Name: string;
}

export interface SetDataConnectionActiveResponse extends IPlayFabResultCommon {
  /** The most current details about the data connection that was to be updated. */
  DataConnection?: DataConnectionDetails;
  /**
   * Indicates whether or not the data connection was updated. If false, the data connection was already in the desired
   * state.
   */
  WasUpdated: boolean;
}

export interface SetDataConnectionRequest extends IPlayFabRequestCommon {
  /** Settings of the data connection. */
  ConnectionSettings: DataConnectionSettings;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** Whether or not the connection is currently active. */
  IsActive: boolean;
  /** The name of the data connection to update or create. */
  Name: string;
  /** The type of data connection. */
  Type: string;
}

export interface SetDataConnectionResponse extends IPlayFabResultCommon {
  /** The details of the Data Connection to be created or updated. */
  DataConnection?: DataConnectionDetails;
}

export interface SetTelemetryKeyActiveRequest extends IPlayFabRequestCommon {
  /** Whether to set the key to active (true) or deactivated (false). */
  Active: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The name of the key to update. */
  KeyName: string;
}

export interface SetTelemetryKeyActiveResponse extends IPlayFabResultCommon {
  /** The most current details about the telemetry key that was to be updated. */
  KeyDetails?: TelemetryKeyDetails;
  /** Indicates whether or not the key was updated. If false, the key was already in the desired state. */
  WasKeyUpdated: boolean;
}

export interface TelemetryKeyDetails {
  /** When the key was created. */
  CreateTime: string;
  /** Whether or not the key is currently active. Deactivated keys cannot be used for telemetry ingestion. */
  IsActive: boolean;
  /** The key that can be distributed to clients for use during telemetry ingestion. */
  KeyValue?: string;
  /** When the key was last updated. */
  LastUpdateTime: string;
  /** The name of the key. Telemetry key names are unique within the scope of the title. */
  Name?: string;
}

export interface WriteEventsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: { [key: string]: string | null };
  /** The collection of events to write. Up to 200 events can be written per request. */
  Events: EventContents[];
}

export interface WriteEventsResponse extends IPlayFabResultCommon {
  /**
   * The unique identifiers assigned by the server to the events, in the same order as the events in the request. Only
   * returned if FlushToPlayStream option is true.
   */
  AssignedEventIds?: string[];
}
