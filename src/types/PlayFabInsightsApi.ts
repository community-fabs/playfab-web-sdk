import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

export interface InsightsEmptyRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface InsightsGetDetailsResponse extends IPlayFabResultCommon {
  /** Amount of data (in MB) currently used by Insights. */
  DataUsageMb: number;
  /** Details of any error that occurred while retrieving Insights details. */
  ErrorMessage?: string;
  /** Allowed range of values for performance level and data storage retention. */
  Limits?: InsightsGetLimitsResponse;
  /** List of pending Insights operations for the title. */
  PendingOperations?: InsightsGetOperationStatusResponse[];
  /** Current Insights performance level setting. */
  PerformanceLevel: number;
  /** Current Insights data storage retention value in days. */
  RetentionDays: number;
}

export interface InsightsGetLimitsResponse extends IPlayFabResultCommon {
  /** Default Insights performance level. */
  DefaultPerformanceLevel: number;
  /** Default Insights data storage retention days. */
  DefaultStorageRetentionDays: number;
  /** Maximum allowed data storage retention days. */
  StorageMaxRetentionDays: number;
  /** Minimum allowed data storage retention days. */
  StorageMinRetentionDays: number;
  /** List of Insights submeter limits for the allowed performance levels. */
  SubMeters?: InsightsPerformanceLevel[];
}

export interface InsightsGetOperationStatusRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Id of the Insights operation. */
  OperationId?: string;
}

export interface InsightsGetOperationStatusResponse extends IPlayFabResultCommon {
  /** Optional message related to the operation details. */
  Message?: string;
  /** Time the operation was completed. */
  OperationCompletedTime: string;
  /** Id of the Insights operation. */
  OperationId?: string;
  /** Time the operation status was last updated. */
  OperationLastUpdated: string;
  /** Time the operation started. */
  OperationStartedTime: string;
  /** The type of operation, SetPerformance or SetStorageRetention. */
  OperationType?: string;
  /** The value requested for the operation. */
  OperationValue: number;
  /** Current status of the operation. */
  Status?: string;
}

export interface InsightsGetPendingOperationsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The type of pending operations requested, or blank for all operation types. */
  OperationType?: string;
}

export interface InsightsGetPendingOperationsResponse extends IPlayFabResultCommon {
  /** List of pending Insights operations. */
  PendingOperations?: InsightsGetOperationStatusResponse[];
}

export interface InsightsOperationResponse extends IPlayFabResultCommon {
  /** Optional message related to the operation details. */
  Message?: string;
  /** Id of the Insights operation. */
  OperationId?: string;
  /** The type of operation, SetPerformance or SetStorageRetention. */
  OperationType?: string;
}

export interface InsightsPerformanceLevel {
  /** Number of allowed active event exports. */
  ActiveEventExports: number;
  /** Maximum cache size. */
  CacheSizeMB: number;
  /** Maximum number of concurrent queries. */
  Concurrency: number;
  /** Number of Insights credits consumed per minute. */
  CreditsPerMinute: number;
  /** Maximum events per second. */
  EventsPerSecond: number;
  /** Performance level. */
  Level: number;
  /** Maximum amount of memory allowed per query. */
  MaxMemoryPerQueryMB: number;
  /** Amount of compute power allocated for queries and operations. */
  VirtualCpuCores: number;
}

export interface InsightsSetPerformanceRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The Insights performance level to apply to the title. */
  PerformanceLevel: number;
}

export interface InsightsSetStorageRetentionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The Insights data storage retention value (in days) to apply to the title. */
  RetentionDays: number;
}

