import type {
  IPlayFabRequestCommon,
  IPlayFabResultCommon
} from "./PlayFab";

export interface CreateLeaderboardDefinitionRequest extends IPlayFabRequestCommon {
  /**
   * Leaderboard columns describing the sort directions, cannot be changed after creation. A maximum of 5 columns are
   * allowed.
   */
  Columns: LeaderboardColumn[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /**
   * The entity type being represented on the leaderboard. If it doesn&#39;t correspond to the PlayFab entity types, use
   * &#39;external&#39; as the type.
   */
  EntityType: string;
  /** [In Preview]: The configuration for the events emitted by this leaderboard. If not specified, no events will be emitted. */
  EventEmissionConfig?: LeaderboardEventEmissionConfig;
  /** A name for the leaderboard, unique per title. */
  Name: string;
  /** Maximum number of entries on this leaderboard */
  SizeLimit: number;
  /** The version reset configuration for the leaderboard definition. */
  VersionConfiguration?: VersionConfiguration;
}

export interface CreateStatisticDefinitionRequest extends IPlayFabRequestCommon {
  /**
   * [In Preview]: The list of statistic definition names whose scores must be aggregated towards this stat. If
   * AggregationSource is specified, the entityType of this definition MUST be Title (making it a CommunityStat). Currently,
   * only one aggregation source can be specified.
   */
  AggregationSources?: string[];
  /** The columns for the statistic defining the aggregation method for each column. A maximum of 5 columns are allowed. */
  Columns?: StatisticColumn[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entity type allowed to have score(s) for this statistic. */
  EntityType?: string;
  /** [In Preview]: Configurations for different Statistics events that can be emitted by the service. */
  EventEmissionConfig?: StatisticsEventEmissionConfig;
  /** Name of the statistic. Must be less than 150 characters. Restricted to a-Z, 0-9, &#39;(&#39;, &#39;)&#39;, &#39;_&#39;, &#39;-&#39; and &#39;.&#39;. */
  Name: string;
  /** The version reset configuration for the statistic definition. */
  VersionConfiguration?: VersionConfiguration;
}

export interface DeleteLeaderboardDefinitionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the leaderboard definition to delete. */
  Name: string;
}

export interface DeleteLeaderboardEntriesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The unique Ids of the entries to delete from the leaderboard. */
  EntityIds?: string[];
  /** The name of the leaderboard. */
  Name: string;
}

export interface DeleteStatisticDefinitionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Name of the statistic to delete. */
  Name: string;
}

export interface DeleteStatisticsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** Collection of statistics to remove from this entity. */
  Statistics: StatisticDelete[];
}

export interface DeleteStatisticsResponse extends IPlayFabResultCommon {
  /** The entity id and type. */
  Entity?: EntityKey;
}

export interface EmptyResponse extends IPlayFabResultCommon {
}

export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
  /**
   * Alternate name for Type.
   * @deprecated Please use Type instead.
   */
  TypeString?: string;
}

export interface EntityLeaderboardEntry {
  /** Entity&#39;s display name. */
  DisplayName?: string;
  /** Entity identifier. */
  Entity?: EntityKey;
  /** The time at which the last update to the entry was recorded on the server. */
  LastUpdated: string;
  /** An opaque blob of data stored on the leaderboard entry. Note that the metadata is not used for ranking purposes. */
  Metadata?: string;
  /** Position on the leaderboard. */
  Rank: number;
  /** Scores for the entry. */
  Scores?: string[];
}

export interface EntityStatistics {
  /** The entity for which the statistics are returned. */
  EntityKey?: EntityKey;
  /** The statistics for the given entity key. */
  Statistics?: EntityStatisticValue[];
}

export interface EntityStatisticValue {
  /** Metadata associated with the Statistic. */
  Metadata?: string;
  /** Statistic name */
  Name?: string;
  /** Statistic scores */
  Scores?: string[];
  /** Statistic version */
  Version: number;
}

type EventType = "None"
  | "Telemetry"
  | "PlayStream";

type ExternalFriendSources = "None"
  | "Steam"
  | "Facebook"
  | "Xbox"
  | "Psn"
  | "All";

export interface GetEntityLeaderboardRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Name of the leaderboard. */
  LeaderboardName: string;
  /** Maximum number of results to return from the leaderboard. Minimum 1, maximum 100. */
  PageSize: number;
  /** Index position to start from. 1 is beginning of leaderboard. */
  StartingPosition?: number;
  /** Optional version of the leaderboard, defaults to current version. */
  Version?: number;
}

export interface GetEntityLeaderboardResponse extends IPlayFabResultCommon {
  /** Leaderboard columns describing the sort directions. */
  Columns?: LeaderboardColumn[];
  /** The number of entries on the leaderboard. */
  EntryCount: number;
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** Individual entity rankings in the leaderboard, in sorted order by rank. */
  Rankings?: EntityLeaderboardEntry[];
  /** Version of the leaderboard being returned. */
  Version: number;
}

export interface GetFriendLeaderboardForEntityRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /**
   * Indicates which other platforms&#39; friends should be included in the response. In HTTP, it is represented as a
   * comma-separated list of platforms.
   */
  ExternalFriendSources?: ExternalFriendSources;
  /** Name of the leaderboard. */
  LeaderboardName: string;
  /** Optional version of the leaderboard, defaults to current version. */
  Version?: number;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

export interface GetLeaderboardAroundEntityRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** Name of the leaderboard. */
  LeaderboardName: string;
  /**
   * Number of surrounding entries to return (in addition to specified entity). In general, the number of ranks above and
   * below will be split into half. For example, if the specified value is 10, 5 ranks above and 5 ranks below will be
   * retrieved. However, the numbers will get skewed in either direction when the specified entity is towards the top or
   * bottom of the leaderboard. Also, the number of entries returned can be lower than the value specified for entries at the
   * bottom of the leaderboard.
   */
  MaxSurroundingEntries: number;
  /** Optional version of the leaderboard, defaults to current. */
  Version?: number;
}

export interface GetLeaderboardDefinitionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the leaderboard to retrieve the definition for. */
  Name: string;
}

export interface GetLeaderboardDefinitionResponse extends IPlayFabResultCommon {
  /** Sort direction of the leaderboard columns, cannot be changed after creation. */
  Columns: LeaderboardColumn[];
  /** Created time, in UTC */
  Created: string;
  /**
   * The entity type being represented on the leaderboard. If it doesn&#39;t correspond to the PlayFab entity types, use
   * &#39;external&#39; as the type.
   */
  EntityType: string;
  /** [In Preview]: The configuration for the events emitted by this leaderboard. If not specified, no events will be emitted. */
  EventEmissionConfig?: LeaderboardEventEmissionConfig;
  /** Last time, in UTC, leaderboard version was incremented. */
  LastResetTime?: string;
  /** A name for the leaderboard, unique per title. */
  Name: string;
  /** Maximum number of entries on this leaderboard */
  SizeLimit: number;
  /** Latest Leaderboard version. */
  Version: number;
  /** The version reset configuration for the leaderboard definition. */
  VersionConfiguration: VersionConfiguration;
}

export interface GetLeaderboardForEntitiesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Collection of Entity IDs to include in the leaderboard. */
  EntityIds: string[];
  /** Name of the leaderboard. */
  LeaderboardName: string;
  /** Optional version of the leaderboard, defaults to current. */
  Version?: number;
}

export interface GetStatisticDefinitionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Name of the statistic. Must be less than 150 characters. */
  Name: string;
}

export interface GetStatisticDefinitionResponse extends IPlayFabResultCommon {
  /** The list of statistic definitions names this definition aggregates to. */
  AggregationDestinations?: string[];
  /**
   * The list of statistic definitions names whose values must be aggregated towards this stat. If AggregationSource is
   * specified, the entityType of this definition MUST be Title (making it a CommunityStat). Currently, only one aggregation
   * source can be specified.
   */
  AggregationSources?: string[];
  /** The columns for the statistic defining the aggregation method for each column. */
  Columns?: StatisticColumn[];
  /** Created time, in UTC */
  Created: string;
  /** The entity type that can have this statistic. */
  EntityType?: string;
  /** [In Preview]: Configurations for different Statistics events that can be emitted by the service. */
  EventEmissionConfig?: StatisticsEventEmissionConfig;
  /** Last time, in UTC, statistic version was incremented. */
  LastResetTime?: string;
  /** The list of leaderboards that are linked to this statistic definition. */
  LinkedLeaderboardNames?: string[];
  /** Name of the statistic. */
  Name?: string;
  /** Statistic version. */
  Version: number;
  /** The version reset configuration for the leaderboard definition. */
  VersionConfiguration?: VersionConfiguration;
}

/** @deprecated Do not use */
export interface GetStatisticDefinitionsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

/** @deprecated Do not use */
export interface GetStatisticDefinitionsResponse extends IPlayFabResultCommon {
  /** List of statistic definitions for the title. */
  StatisticDefinitions?: StatisticDefinition[];
}

export interface GetStatisticsForEntitiesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Collection of Entity IDs to retrieve statistics for. */
  Entities: EntityKey[];
  /** The list of statistics to return for the user. If set to null, the current version of all statistics are returned. */
  StatisticNames?: string[];
}

export interface GetStatisticsForEntitiesResponse extends IPlayFabResultCommon {
  /** A mapping of statistic name to the columns defined in the corresponding definition. */
  ColumnDetails?: Record<string, StatisticColumnCollection>;
  /** List of entities mapped to their statistics. Only the latest version of a statistic is returned. */
  EntitiesStatistics?: EntityStatistics[];
}

export interface GetStatisticsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** The list of statistics to return for the user. If set to null, the current version of all statistics are returned. */
  StatisticNames?: string[];
}

export interface GetStatisticsResponse extends IPlayFabResultCommon {
  /** A mapping of statistic name to the columns defined in the corresponding definition. */
  ColumnDetails?: Record<string, StatisticColumnCollection>;
  /** The entity id and type. */
  Entity?: EntityKey;
  /** List of statistics keyed by Name. Only the latest version of a statistic is returned. */
  Statistics?: Record<string, EntityStatisticValue>;
}

export interface IncrementLeaderboardVersionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the leaderboard to increment the version for. */
  Name: string;
}

export interface IncrementLeaderboardVersionResponse extends IPlayFabResultCommon {
  /** New Leaderboard version. */
  Version: number;
}

export interface IncrementStatisticVersionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** Name of the statistic to increment the version of. */
  Name: string;
}

export interface IncrementStatisticVersionResponse extends IPlayFabResultCommon {
  /** New statistic version. */
  Version: number;
}

export interface LeaderboardColumn {
  /**
   * If the value for this column is sourced from a statistic, details of the linked column. Null if the leaderboard is not
   * linked.
   */
  LinkedStatisticColumn?: LinkedStatisticColumn;
  /** A name for the leaderboard column, unique per leaderboard definition. */
  Name: string;
  /** The sort direction for this column. */
  SortDirection: LeaderboardSortDirection;
}

export interface LeaderboardDefinition {
  /** Sort direction of the leaderboard columns, cannot be changed after creation. */
  Columns: LeaderboardColumn[];
  /** Created time, in UTC */
  Created: string;
  /**
   * The entity type being represented on the leaderboard. If it doesn&#39;t correspond to the PlayFab entity types, use
   * &#39;external&#39; as the type.
   */
  EntityType: string;
  /** [In Preview]: The configuration for the events emitted by this leaderboard. If not specified, no events will be emitted. */
  EventEmissionConfig?: LeaderboardEventEmissionConfig;
  /** Last time, in UTC, leaderboard version was incremented. */
  LastResetTime?: string;
  /** A name for the leaderboard, unique per title. */
  Name: string;
  /** Maximum number of entries on this leaderboard */
  SizeLimit: number;
  /** Latest Leaderboard version. */
  Version: number;
  /** The version reset configuration for the leaderboard definition. */
  VersionConfiguration: VersionConfiguration;
}

export interface LeaderboardEntityRankOnVersionEndConfig {
  /** The type of event to emit when the leaderboard version end. */
  EventType: EventType;
  /** The maximum number of entity to return on leaderboard version end. Range is 1 to 1000. */
  RankLimit: number;
}

export interface LeaderboardEntryUpdate {
  /** The unique Id for the entry. If using PlayFab Entities, this would be the entityId of the entity. */
  EntityId: string;
  /**
   * Arbitrary metadata to store along side the leaderboard entry, will be returned by all Leaderboard APIs. Must be less
   * than 50 UTF8 encoded characters.
   */
  Metadata?: string;
  /**
   * The scores for the leaderboard. The number of values provided here must match the number of columns in the Leaderboard
   * definition.
   */
  Scores?: string[];
}

export interface LeaderboardEventEmissionConfig {
  /** This event emits the top ranks of the leaderboard when the leaderboard version end. */
  EntityRankOnVersionEndConfig?: LeaderboardEntityRankOnVersionEndConfig;
  /** This event is emitted when the leaderboard version end. */
  VersionEndConfig?: LeaderboardVersionEndConfig;
}

type LeaderboardSortDirection = "Descending"
  | "Ascending";

export interface LeaderboardVersionEndConfig {
  /** The type of event to emit when the leaderboard version end. */
  EventType: EventType;
}

export interface LinkedStatisticColumn {
  /** The name of the statistic column that this leaderboard column is sourced from. */
  LinkedStatisticColumnName: string;
  /** The name of the statistic. */
  LinkedStatisticName: string;
}

export interface ListLeaderboardDefinitionsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface ListLeaderboardDefinitionsResponse extends IPlayFabResultCommon {
  /** List of leaderboard definitions for the title. */
  LeaderboardDefinitions?: LeaderboardDefinition[];
}

export interface ListStatisticDefinitionsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
}

export interface ListStatisticDefinitionsResponse extends IPlayFabResultCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** List of statistic definitions for the title. */
  StatisticDefinitions?: StatisticDefinition[];
}

type ResetInterval = "Manual"
  | "Hour"
  | "Day"
  | "Week"
  | "Month";

type StatisticAggregationMethod = "Last"
  | "Min"
  | "Max"
  | "Sum";

export interface StatisticColumn {
  /** Aggregation method for calculating new value of a statistic. */
  AggregationMethod: StatisticAggregationMethod;
  /** Name of the statistic column, as originally configured. */
  Name: string;
}

export interface StatisticColumnCollection {
  /** Columns for the statistic defining the aggregation method for each column. */
  Columns?: StatisticColumn[];
}

export interface StatisticDefinition {
  /** The list of statistic definitions names this definition aggregates to. */
  AggregationDestinations?: string[];
  /**
   * The list of statistic definitions names whose values must be aggregated towards this stat. If AggregationSource is
   * specified, the entityType of this definition MUST be Title (making it a CommunityStat). Currently, only one aggregation
   * source can be specified.
   */
  AggregationSources?: string[];
  /** The columns for the statistic defining the aggregation method for each column. */
  Columns?: StatisticColumn[];
  /** Created time, in UTC */
  Created: string;
  /** The entity type that can have this statistic. */
  EntityType?: string;
  /** [In Preview]: Configurations for different Statistics events that can be emitted by the service. */
  EventEmissionConfig?: StatisticsEventEmissionConfig;
  /** Last time, in UTC, statistic version was incremented. */
  LastResetTime?: string;
  /** The list of leaderboards that are linked to this statistic definition. */
  LinkedLeaderboardNames?: string[];
  /** Name of the statistic. */
  Name?: string;
  /** Statistic version. */
  Version: number;
  /** The version reset configuration for the leaderboard definition. */
  VersionConfiguration?: VersionConfiguration;
}

export interface StatisticDelete {
  /** Name of the statistic, as originally configured. */
  Name: string;
}

export interface StatisticsEventEmissionConfig {
  /** Emitted when statistics are updated. */
  UpdateEventConfig?: StatisticsUpdateEventConfig;
}

export interface StatisticsUpdateEventConfig {
  /** The event type to emit when statistics are updated. */
  EventType: EventType;
}

export interface StatisticUpdate {
  /**
   * Arbitrary metadata to store along side the statistic, will be returned by all Leaderboard APIs. Must be less than 50
   * UTF8 encoded characters.
   */
  Metadata?: string;
  /** Name of the statistic, as originally configured. */
  Name: string;
  /**
   * Statistic scores for the entity. This will be used in accordance with the aggregation method configured for the
   * statistics.The maximum value allowed for each individual score is 9223372036854775807. The minimum value for each
   * individual score is -9223372036854775807The values are formatted as strings to avoid interop issues with client
   * libraries unable to handle 64bit integers.
   */
  Scores?: string[];
  /** Optional field to indicate the version of the statistic to set. When empty defaults to the statistic&#39;s current version. */
  Version?: number;
}

export interface UnlinkAggregationSourceFromStatisticRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the statistic to unlink. */
  Name: string;
  /** The name of the aggregation source statistic to unlink. */
  SourceStatisticName: string;
}

export interface UnlinkLeaderboardFromStatisticRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The name of the leaderboard definition to unlink. */
  Name: string;
  /** The name of the statistic definition to unlink. */
  StatisticName: string;
}

export interface UpdateLeaderboardDefinitionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** [In Preview]: The configuration for the events emitted by this leaderboard. If not specified, no events will be emitted. */
  EventEmissionConfig?: LeaderboardEventEmissionConfig;
  /** The name of the leaderboard to update the definition for. */
  Name: string;
  /** Maximum number of entries on this leaderboard */
  SizeLimit?: number;
  /** The version reset configuration for the leaderboard definition. */
  VersionConfiguration?: VersionConfiguration;
}

export interface UpdateLeaderboardEntriesRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The entries to add or update on the leaderboard. */
  Entries?: LeaderboardEntryUpdate[];
  /** The name of the leaderboard. */
  LeaderboardName: string;
}

export interface UpdateStatisticDefinitionRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** [In Preview]: Configurations for different Statistics events that can be emitted by the service. */
  EventEmissionConfig?: StatisticsEventEmissionConfig;
  /** Name of the statistic. Must be less than 150 characters. Restricted to a-Z, 0-9, &#39;(&#39;, &#39;)&#39;, &#39;_&#39;, &#39;-&#39; and &#39;.&#39;. */
  Name: string;
  /** The version reset configuration for the statistic definition. */
  VersionConfiguration?: VersionConfiguration;
}

export interface UpdateStatisticsRequest extends IPlayFabRequestCommon {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, string | null>;
  /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
  Entity?: EntityKey;
  /** Collection of statistics to update, maximum 50. */
  Statistics: StatisticUpdate[];
  /**
   * Optional transactionId of this update which can be used to ensure idempotence. Using this field is still in testing
   * stage.
   */
  TransactionId?: string;
}

export interface UpdateStatisticsResponse extends IPlayFabResultCommon {
  /** A mapping of statistic name to the columns defined in the corresponding definition. */
  ColumnDetails?: Record<string, StatisticColumnCollection>;
  /** The entity id and type. */
  Entity?: EntityKey;
  /** Updated entity profile statistics. */
  Statistics?: Record<string, EntityStatisticValue>;
}

export interface VersionConfiguration {
  /** The maximum number of versions of this leaderboard/statistic that can be queried. */
  MaxQueryableVersions: number;
  /**
   * Reset interval that statistics or leaderboards will reset on. When using Manual intervalthe reset can only be increased
   * by calling the Increase version API. When using Hour interval the resetwill occur at the start of the next hour UTC
   * time. When using Day interval the reset will occur at thestart of the next day in UTC time. When using the Week interval
   * the reset will occur at the start ofthe next Monday in UTC time. When using Month interval the reset will occur at the
   * start of the nextmonth in UTC time.
   */
  ResetInterval: ResetInterval;
}

