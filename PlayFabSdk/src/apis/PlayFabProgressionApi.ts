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
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/createleaderboarddefinition
     */
    CreateLeaderboardDefinition (request: CreateLeaderboardDefinitionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/CreateLeaderboardDefinition", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Create a new entity statistic definition.
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/createstatisticdefinition
     */
    CreateStatisticDefinition (request: CreateStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Statistic/CreateStatisticDefinition", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a leaderboard definition.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/deleteleaderboarddefinition
     */
    DeleteLeaderboardDefinition (request: DeleteLeaderboardDefinitionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/DeleteLeaderboardDefinition", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes the specified entries from the given leaderboard.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/deleteleaderboardentries
     */
    DeleteLeaderboardEntries (request: DeleteLeaderboardEntriesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/DeleteLeaderboardEntries", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Delete an entity statistic definition. Will delete all statistics on entity profiles and leaderboards.
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/deletestatisticdefinition
     */
    DeleteStatisticDefinition (request: DeleteStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Statistic/DeleteStatisticDefinition", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Delete statistics on an entity profile. This will remove all rankings from associated leaderboards.
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/deletestatistics
     */
    DeleteStatistics (request: DeleteStatisticsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<DeleteStatisticsResponse>("/Statistic/DeleteStatistics", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get the friend leaderboard for the specified entity. A maximum of 25 friend entries are listed in the leaderboard.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/getfriendleaderboardforentity
     */
    GetFriendLeaderboardForEntity (request: GetFriendLeaderboardForEntityRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetEntityLeaderboardResponse>("/Leaderboard/GetFriendLeaderboardForEntity", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get the leaderboard for a specific entity type and statistic.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/getleaderboard
     */
    GetLeaderboard (request: GetEntityLeaderboardRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetEntityLeaderboardResponse>("/Leaderboard/GetLeaderboard", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get the leaderboard around a specific entity.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/getleaderboardaroundentity
     */
    GetLeaderboardAroundEntity (request: GetLeaderboardAroundEntityRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetEntityLeaderboardResponse>("/Leaderboard/GetLeaderboardAroundEntity", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets the specified leaderboard definition.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/getleaderboarddefinition
     */
    GetLeaderboardDefinition (request: GetLeaderboardDefinitionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLeaderboardDefinitionResponse>("/Leaderboard/GetLeaderboardDefinition", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get the leaderboard limited to a set of entities.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/getleaderboardforentities
     */
    GetLeaderboardForEntities (request: GetLeaderboardForEntitiesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetEntityLeaderboardResponse>("/Leaderboard/GetLeaderboardForEntities", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get current statistic definition information
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/getstatisticdefinition
     */
    GetStatisticDefinition (request: GetStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetStatisticDefinitionResponse>("/Statistic/GetStatisticDefinition", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets statistics for the specified entity.
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/getstatistics
     */
    GetStatistics (request: GetStatisticsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetStatisticsResponse>("/Statistic/GetStatistics", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets statistics for the specified collection of entities.
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/getstatisticsforentities
     */
    GetStatisticsForEntities (request: GetStatisticsForEntitiesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetStatisticsForEntitiesResponse>("/Statistic/GetStatisticsForEntities", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Increment a leaderboard version.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/incrementleaderboardversion
     */
    IncrementLeaderboardVersion (request: IncrementLeaderboardVersionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<IncrementLeaderboardVersionResponse>("/Leaderboard/IncrementLeaderboardVersion", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Increment an entity statistic definition version.
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/incrementstatisticversion
     */
    IncrementStatisticVersion (request: IncrementStatisticVersionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<IncrementStatisticVersionResponse>("/Statistic/IncrementStatisticVersion", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists the leaderboard definitions defined for the Title.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/listleaderboarddefinitions
     */
    ListLeaderboardDefinitions (request: ListLeaderboardDefinitionsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListLeaderboardDefinitionsResponse>("/Leaderboard/ListLeaderboardDefinitions", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get all current statistic definitions information
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/liststatisticdefinitions
     */
    ListStatisticDefinitions (request: ListStatisticDefinitionsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListStatisticDefinitionsResponse>("/Statistic/ListStatisticDefinitions", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Unlinks a leaderboard definition from it's linked statistic definition.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/unlinkleaderboardfromstatistic
     */
    UnlinkLeaderboardFromStatistic (request: UnlinkLeaderboardFromStatisticRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/UnlinkLeaderboardFromStatistic", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Updates a leaderboard definition.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/updateleaderboarddefinition
     */
    UpdateLeaderboardDefinition (request: UpdateLeaderboardDefinitionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/UpdateLeaderboardDefinition", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Adds or updates entries on the specified leaderboard.
     * https://docs.microsoft.com/rest/api/playfab/progression/leaderboards/updateleaderboardentries
     */
    UpdateLeaderboardEntries (request: UpdateLeaderboardEntriesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Leaderboard/UpdateLeaderboardEntries", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Update an existing entity statistic definition.
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/updatestatisticdefinition
     */
    UpdateStatisticDefinition (request: UpdateStatisticDefinitionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/Statistic/UpdateStatisticDefinition", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Update statistics on an entity profile. Depending on the statistic definition, this may result in entity being ranked on
     * various leaderboards.
     * https://docs.microsoft.com/rest/api/playfab/progression/statistics/updatestatistics
     */
    UpdateStatistics (request: UpdateStatisticsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UpdateStatisticsResponse>("/Statistic/UpdateStatistics", request, "X-EntityToken", extraHeaders);
    }

};
