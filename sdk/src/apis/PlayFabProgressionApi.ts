import type { EmptyResponse } from "../types/PlayFab";
import type {
  CreateLeaderboardDefinitionRequest,
  CreateStatisticDefinitionRequest,
  DeleteLeaderboardDefinitionRequest,
  DeleteLeaderboardEntriesRequest,
  DeleteStatisticDefinitionRequest,
  DeleteStatisticsRequest,
  GetFriendLeaderboardForEntityRequest,
  GetEntityLeaderboardRequest,
  GetLeaderboardAroundEntityRequest,
  GetLeaderboardDefinitionRequest,
  GetLeaderboardForEntitiesRequest,
  GetStatisticDefinitionRequest,
  GetStatisticDefinitionsRequest,
  GetStatisticsRequest,
  GetStatisticsForEntitiesRequest,
  IncrementLeaderboardVersionRequest,
  IncrementStatisticVersionRequest,
  ListLeaderboardDefinitionsRequest,
  ListStatisticDefinitionsRequest,
  UnlinkLeaderboardFromStatisticRequest,
  UpdateLeaderboardDefinitionRequest,
  UpdateLeaderboardEntriesRequest,
  UpdateStatisticDefinitionRequest,
  UpdateStatisticsRequest,
  DeleteStatisticsResponse,
  GetEntityLeaderboardResponse,
  GetLeaderboardDefinitionResponse,
  GetStatisticDefinitionResponse,
  GetStatisticDefinitionsResponse,
  GetStatisticsResponse,
  GetStatisticsForEntitiesResponse,
  IncrementLeaderboardVersionResponse,
  IncrementStatisticVersionResponse,
  ListLeaderboardDefinitionsResponse,
  ListStatisticDefinitionsResponse,
  UpdateStatisticsResponse,
} from "../types/PlayFabProgressionApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabProgressionApi extends PlayFabCommon {

  /**
   * Creates a new leaderboard definition.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/createleaderboarddefinition Microsoft Documentation}
   * @example
   * await leaderboardClient.CreateLeaderboardDefinition({
   *   "Name": "HighestScoresByLevel",
   *   "EntityType": "title_player_account",
   *   "VersionConfiguration": {
   *     "ResetInterval": "Manual",
   *     "MaxQueryableVersions": 1
   *   },
   *   "Columns": [
   *     {
   *       "Name": "Hits",
   *       "SortDirection": "Descending"
   *     }
   *   ],
   *   "SizeLimit": 1000
   * });
   */
  CreateLeaderboardDefinition (request: CreateLeaderboardDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/CreateLeaderboardDefinition", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a new entity statistic definition.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/createstatisticdefinition Microsoft Documentation}
   * @example
   * await statisticClient.CreateStatisticDefinition({
   *   "Name": "HighestScoresByLevel",
   *   "AggregationMethod": "Last",
   *   "Columns": [
   *     {
   *       "AggregationMethod": "Min"
   *     }
   *   ]
   * });
   */
  CreateStatisticDefinition (request: CreateStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Statistic/CreateStatisticDefinition", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a leaderboard definition.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/deleteleaderboarddefinition Microsoft Documentation}
   * @example
   * await leaderboardClient.DeleteLeaderboardDefinition({
   *   "Name": "HighestScoresByLevel"
   * });
   */
  DeleteLeaderboardDefinition (request: DeleteLeaderboardDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/DeleteLeaderboardDefinition", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes the specified entries from the given leaderboard.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/deleteleaderboardentries Microsoft Documentation}
   * @example
   * await leaderboardClient.DeleteLeaderboardEntries({
   *   "Name": "Points",
   *   "EntityIds": [
   *     "12802710371",
   *     "01849174301"
   *   ]
   * });
   */
  DeleteLeaderboardEntries (request: DeleteLeaderboardEntriesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/DeleteLeaderboardEntries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete an entity statistic definition. Will delete all statistics on entity profiles and leaderboards.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/deletestatisticdefinition Microsoft Documentation}
   * @example
   * await statisticClient.DeleteStatisticDefinition({
   *   "Name": "HighestScoresByLevel"
   * });
   */
  DeleteStatisticDefinition (request: DeleteStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Statistic/DeleteStatisticDefinition", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete statistics on an entity profile. This will remove all rankings from associated leaderboards.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/deletestatistics Microsoft Documentation}
   * @example
   * await statisticClient.DeleteStatistics({
   *   "Statistics": [
   *     {
   *       "Name": "TotalCarTime"
   *     },
   *     {
   *       "Name": "FastestTimesByMap",
   *       "Version": 15
   *     }
   *   ]
   * });
   */
  DeleteStatistics (request: DeleteStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteStatisticsResponse>("/Statistic/DeleteStatistics", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get the friend leaderboard for the specified entity. A maximum of 25 friend entries are listed in the leaderboard.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/getfriendleaderboardforentity Microsoft Documentation}
   * @example
   * await leaderboardClient.GetFriendLeaderboardForEntity({
   *   "LeaderboardName": "Points",
   *   "ExternalFriendSources": "None"
   * });
   */
  GetFriendLeaderboardForEntity (request: GetFriendLeaderboardForEntityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityLeaderboardResponse>("/Leaderboard/GetFriendLeaderboardForEntity", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get the leaderboard for a specific entity type and statistic.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/getleaderboard Microsoft Documentation}
   * @example
   * await leaderboardClient.GetLeaderboard({
   *   "LeaderboardName": "Points",
   *   "Version": 2,
   *   "StartingPosition": 100,
   *   "PageSize": 20
   * });
   */
  GetLeaderboard (request: GetEntityLeaderboardRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityLeaderboardResponse>("/Leaderboard/GetLeaderboard", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get the leaderboard around a specific entity.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/getleaderboardaroundentity Microsoft Documentation}
   * @example
   * await leaderboardClient.GetLeaderboardAroundEntity({
   *   "LeaderboardName": "Points",
   *   "Version": 2,
   *   "MaxSurroundingEntries": 0,
   *   "Entity": {
   *     "Id": "819478109412",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  GetLeaderboardAroundEntity (request: GetLeaderboardAroundEntityRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityLeaderboardResponse>("/Leaderboard/GetLeaderboardAroundEntity", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the specified leaderboard definition.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/getleaderboarddefinition Microsoft Documentation}
   * @example
   * await leaderboardClient.GetLeaderboardDefinition({
   *   "Name": "HighestScoresByLevel"
   * });
   */
  GetLeaderboardDefinition (request: GetLeaderboardDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLeaderboardDefinitionResponse>("/Leaderboard/GetLeaderboardDefinition", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get the leaderboard limited to a set of entities.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/getleaderboardforentities Microsoft Documentation}
   * @example
   * await leaderboardClient.GetLeaderboardForEntities({
   *   "LeaderboardName": "Points",
   *   "Version": 2,
   *   "EntityIds": [
   *     "12802710371",
   *     "01849174301"
   *   ]
   * });
   */
  GetLeaderboardForEntities (request: GetLeaderboardForEntitiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetEntityLeaderboardResponse>("/Leaderboard/GetLeaderboardForEntities", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get current statistic definition information
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/getstatisticdefinition Microsoft Documentation}
   * @example
   * await statisticClient.GetStatisticDefinition({
   *   "Name": "Points"
   * });
   */
  GetStatisticDefinition (request: GetStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStatisticDefinitionResponse>("/Statistic/GetStatisticDefinition", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get all current statistic definitions information
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/getstatisticdefinitions Microsoft Documentation}
   * @deprecated Please use ListStatisticDefinitions instead.
   */
  GetStatisticDefinitions (request: GetStatisticDefinitionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStatisticDefinitionsResponse>("/Statistic/GetStatisticDefinitions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets statistics for the specified entity.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/getstatistics Microsoft Documentation}
   * @example
   * await statisticClient.GetStatistics({
   *   "StatisticNames": [
   *     "SpeedRuns",
   *     "Boosts"
   *   ],
   *   "Entity": {
   *     "Id": "A197412JDA",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  GetStatistics (request: GetStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStatisticsResponse>("/Statistic/GetStatistics", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets statistics for the specified collection of entities.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/getstatisticsforentities Microsoft Documentation}
   * @example
   * await statisticClient.GetStatisticsForEntities({
   *   "Entities": [
   *     {
   *       "Id": "A197412JDA",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     },
   *     {
   *       "Id": "B197412JDB",
   *       "Type": "title_player_account",
   *       "TypeString": "title_player_account"
   *     }
   *   ],
   *   "StatisticNames": [
   *     "SpeedRuns",
   *     "Boosts"
   *   ]
   * });
   */
  GetStatisticsForEntities (request: GetStatisticsForEntitiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetStatisticsForEntitiesResponse>("/Statistic/GetStatisticsForEntities", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Increment a leaderboard version.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/incrementleaderboardversion Microsoft Documentation}
   * @example
   * await leaderboardClient.IncrementLeaderboardVersion({
   *   "Name": "HighestScoresByLevel"
   * });
   */
  IncrementLeaderboardVersion (request: IncrementLeaderboardVersionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IncrementLeaderboardVersionResponse>("/Leaderboard/IncrementLeaderboardVersion", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Increment an entity statistic definition version.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/incrementstatisticversion Microsoft Documentation}
   * @example
   * await statisticClient.IncrementStatisticVersion({
   *   "Name": "HighestScoresByLevel"
   * });
   */
  IncrementStatisticVersion (request: IncrementStatisticVersionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<IncrementStatisticVersionResponse>("/Statistic/IncrementStatisticVersion", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists the leaderboard definitions defined for the Title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/listleaderboarddefinitions Microsoft Documentation}
   * @example
   * await leaderboardClient.ListLeaderboardDefinitions({});
   */
  ListLeaderboardDefinitions (request: ListLeaderboardDefinitionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListLeaderboardDefinitionsResponse>("/Leaderboard/ListLeaderboardDefinitions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get all current statistic definitions information
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/liststatisticdefinitions Microsoft Documentation}
   * @example
   * await statisticClient.ListStatisticDefinitions({});
   */
  ListStatisticDefinitions (request: ListStatisticDefinitionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListStatisticDefinitionsResponse>("/Statistic/ListStatisticDefinitions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unlinks a leaderboard definition from it's linked statistic definition.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/unlinkleaderboardfromstatistic Microsoft Documentation}
   * @example
   * await leaderboardClient.UnlinkLeaderboardFromStatistic({
   *   "Name": "HighestScoresByLevel",
   *   "StatisticName": "HighestScoresByLevel"
   * });
   */
  UnlinkLeaderboardFromStatistic (request: UnlinkLeaderboardFromStatisticRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/UnlinkLeaderboardFromStatistic", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates a leaderboard definition.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/updateleaderboarddefinition Microsoft Documentation}
   * @example
   * await leaderboardClient.UpdateLeaderboardDefinition({
   *   "Name": "HighestScoresByLevel",
   *   "VersionConfiguration": {
   *     "ResetInterval": "Manual",
   *     "MaxQueryableVersions": 1
   *   },
   *   "SizeLimit": 1000
   * });
   */
  UpdateLeaderboardDefinition (request: UpdateLeaderboardDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/UpdateLeaderboardDefinition", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Adds or updates entries on the specified leaderboard.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/leaderboard/leaderboards/updateleaderboardentries Microsoft Documentation}
   * @example
   * await leaderboardClient.UpdateLeaderboardEntries({
   *   "LeaderboardName": "Points",
   *   "Entries": [
   *     {
   *       "Scores": [
   *         "100",
   *         "200"
   *       ],
   *       "EntityId": "12802710371"
   *     },
   *     {
   *       "Scores": [
   *         "120",
   *         "200"
   *       ],
   *       "EntityId": "01849174301"
   *     }
   *   ]
   * });
   */
  UpdateLeaderboardEntries (request: UpdateLeaderboardEntriesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/UpdateLeaderboardEntries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update an existing entity statistic definition.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/updatestatisticdefinition Microsoft Documentation}
   * @example
   * await statisticClient.UpdateStatisticDefinition({
   *   "Name": "HighestScoresByLevel",
   *   "VersionConfiguration": {
   *     "ResetInterval": "Manual",
   *     "MaxQueryableVersions": 2
   *   }
   * });
   */
  UpdateStatisticDefinition (request: UpdateStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Statistic/UpdateStatisticDefinition", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update statistics on an entity profile. Depending on the statistic definition, this may result in entity being ranked on
   * various leaderboards.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/statistic/statistics/updatestatistics Microsoft Documentation}
   * @example
   * await statisticClient.UpdateStatistics({
   *   "Statistics": [
   *     {
   *       "Name": "RoundsWon",
   *       "Value": 0,
   *       "Metadata": "BestRun:34.13,Car:13452",
   *       "Scores": [
   *         "100",
   *         "200"
   *       ]
   *     },
   *     {
   *       "Name": "FastestTimesByMap",
   *       "Value": 0,
   *       "Metadata": "Car:13452",
   *       "Scores": [
   *         "200",
   *         "300"
   *       ]
   *     },
   *     {
   *       "Name": "TotalCarTime",
   *       "Value": 0,
   *       "Scores": [
   *         "300",
   *         "400"
   *       ]
   *     }
   *   ],
   *   "Entity": {
   *     "Id": "A197412JDA",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  UpdateStatistics (request: UpdateStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateStatisticsResponse>("/Statistic/UpdateStatistics", request, "X-EntityToken", extraHeaders);
  }

};
