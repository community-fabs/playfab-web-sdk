import type { EmptyResponse } from "../types/PlayFab";
import type {
  CancelAllMatchmakingTicketsForPlayerRequest,
  CancelAllServerBackfillTicketsForPlayerRequest,
  CancelMatchmakingTicketRequest,
  CancelModelRequest,
  CancelServerBackfillTicketRequest,
  CreateBaseModelRequest,
  CreateBatchModelRequest,
  CreateBuildAliasRequest,
  CreateBuildWithCustomContainerRequest,
  CreateBuildWithManagedContainerRequest,
  CreateBuildWithProcessBasedServerRequest,
  CreateLobbyRequest,
  CreateMatchmakingTicketRequest,
  CreateRemoteUserRequest,
  CreateScenarioRequest,
  CreateServerBackfillTicketRequest,
  CreateServerMatchmakingTicketRequest,
  CreateTitleMultiplayerServersQuotaChangeRequest,
  DeactivateModelRequest,
  DeleteAssetRequest,
  DeleteBuildRequest,
  DeleteBuildAliasRequest,
  DeleteBuildRegionRequest,
  DeleteCertificateRequest,
  DeleteContainerImageRequest,
  DeleteLobbyRequest,
  DeleteModelRequest,
  DeleteRemoteUserRequest,
  DeleteScenarioRequest,
  DeleteSecretRequest,
  EnableMultiplayerServersForTitleRequest,
  EnablePartiesForTitleRequest,
  FindFriendLobbiesRequest,
  FindLobbiesRequest,
  GetAssetDownloadUrlRequest,
  GetAssetUploadUrlRequest,
  GetBuildRequest,
  GetBuildAliasRequest,
  GetCognitiveServicesLocalesRequest,
  GetCognitiveServicesTokenRequest,
  GetContainerRegistryCredentialsRequest,
  GetLobbyRequest,
  GetMatchRequest,
  GetMatchmakingQueueRequest,
  GetMatchmakingTicketRequest,
  GetModelDetailsRequest,
  GetModelsByScenarioRequest,
  GetMultiplayerServerAndTokenRequest,
  GetMultiplayerServerDetailsRequest,
  GetMultiplayerServerLogsRequest,
  GetMultiplayerSessionLogsBySessionIdRequest,
  GetPlayerSkillRequest,
  GetPlayerSkillForConditionsRequest,
  GetPlayerSkillForConditionsFromModelRequest,
  GetPlayerSkillFromModelRequest,
  GetQueueStatisticsRequest,
  GetRemoteLoginEndpointRequest,
  GetScenarioConfigurationRequest,
  GetScenarioConfigurationsRequest,
  GetServerBackfillTicketRequest,
  GetTitleEnabledForMultiplayerServersStatusRequest,
  GetTitleMultiplayerServersQuotaChangeRequest,
  GetTitleMultiplayerServersQuotasRequest,
  InviteToLobbyRequest,
  JoinArrangedLobbyRequest,
  JoinLobbyRequest,
  JoinLobbyAsServerRequest,
  JoinMatchmakingTicketRequest,
  LeaveLobbyRequest,
  LeaveLobbyAsServerRequest,
  ListMultiplayerServersRequest,
  ListAssetSummariesRequest,
  ListBuildAliasesRequest,
  ListBuildSummariesRequest,
  ListCertificateSummariesRequest,
  ListContainerImagesRequest,
  ListContainerImageTagsRequest,
  ListMatchmakingQueuesRequest,
  ListMatchmakingTicketsForPlayerRequest,
  ListPartyQosServersRequest,
  ListQosServersRequest,
  ListQosServersForTitleRequest,
  ListSecretSummariesRequest,
  ListServerBackfillTicketsForPlayerRequest,
  ListTitleMultiplayerServersQuotaChangesRequest,
  ListVirtualMachineSummariesRequest,
  RemoveMatchmakingQueueRequest,
  RemoveMemberFromLobbyRequest,
  RequestMultiplayerServerRequest,
  RequestMultiplayerServerAndTokenRequest,
  RequestPartyRequest,
  RequestPartyServiceRequest,
  RolloverContainerRegistryCredentialsRequest,
  SetMatchmakingQueueRequest,
  ShutdownMultiplayerServerRequest,
  SubscribeToLobbyResourceRequest,
  SubscribeToMatchResourceRequest,
  UnsubscribeFromLobbyResourceRequest,
  UnsubscribeFromMatchResourceRequest,
  UntagContainerImageRequest,
  UpdateBuildAliasRequest,
  UpdateBuildNameRequest,
  UpdateBuildRegionRequest,
  UpdateBuildRegionsRequest,
  UpdateLobbyRequest,
  UpdateLobbyAsServerRequest,
  UpdateModelRequest,
  UpdatePrimaryModelRequest,
  UpdateScenarioConfigurationRequest,
  UploadCertificateRequest,
  UploadMatchResultRequest,
  UploadSecretRequest,
  CancelAllMatchmakingTicketsForPlayerResult,
  CancelAllServerBackfillTicketsForPlayerResult,
  CancelMatchmakingTicketResult,
  CancelModelResponse,
  CancelServerBackfillTicketResult,
  CreateBaseModelResponse,
  CreateBatchModelResponse,
  BuildAliasDetailsResponse,
  CreateBuildWithCustomContainerResponse,
  CreateBuildWithManagedContainerResponse,
  CreateBuildWithProcessBasedServerResponse,
  CreateLobbyResult,
  CreateMatchmakingTicketResult,
  CreateRemoteUserResponse,
  CreateScenarioResponse,
  CreateServerBackfillTicketResult,
  CreateTitleMultiplayerServersQuotaChangeResponse,
  DeactivateModelResponse,
  LobbyEmptyResult,
  DeleteModelResponse,
  DeleteScenarioResponse,
  EnableMultiplayerServersForTitleResponse,
  FindFriendLobbiesResult,
  FindLobbiesResult,
  GetAssetDownloadUrlResponse,
  GetAssetUploadUrlResponse,
  GetBuildResponse,
  GetCognitiveServicesLocalesResponse,
  GetCognitiveServicesTokenResponse,
  GetContainerRegistryCredentialsResponse,
  GetLobbyResult,
  GetMatchResult,
  GetMatchmakingQueueResult,
  GetMatchmakingTicketResult,
  GetModelDetailsResponse,
  GetModelsByScenarioResponse,
  GetMultiplayerServerAndTokenResponse,
  GetMultiplayerServerDetailsResponse,
  GetMultiplayerServerLogsResponse,
  GetPlayerSkillResponse,
  GetPlayerSkillForConditionsResponse,
  GetPlayerSkillForConditionsFromModelResponse,
  GetPlayerSkillFromModelResponse,
  GetQueueStatisticsResult,
  GetRemoteLoginEndpointResponse,
  GetScenarioConfigurationResponse,
  GetScenarioConfigurationsResponse,
  GetServerBackfillTicketResult,
  GetTitleEnabledForMultiplayerServersStatusResponse,
  GetTitleMultiplayerServersQuotaChangeResponse,
  GetTitleMultiplayerServersQuotasResponse,
  JoinLobbyResult,
  JoinLobbyAsServerResult,
  JoinMatchmakingTicketResult,
  ListMultiplayerServersResponse,
  ListAssetSummariesResponse,
  ListBuildAliasesResponse,
  ListBuildSummariesResponse,
  ListCertificateSummariesResponse,
  ListContainerImagesResponse,
  ListContainerImageTagsResponse,
  ListMatchmakingQueuesResult,
  ListMatchmakingTicketsForPlayerResult,
  ListPartyQosServersResponse,
  ListQosServersResponse,
  ListQosServersForTitleResponse,
  ListSecretSummariesResponse,
  ListServerBackfillTicketsForPlayerResult,
  ListTitleMultiplayerServersQuotaChangesResponse,
  ListVirtualMachineSummariesResponse,
  RemoveMatchmakingQueueResult,
  RequestMultiplayerServerResponse,
  RequestMultiplayerServerAndTokenResponse,
  RequestPartyResponse,
  RequestPartyServiceResponse,
  RolloverContainerRegistryCredentialsResponse,
  SetMatchmakingQueueResult,
  SubscribeToLobbyResourceResult,
  SubscribeToMatchResourceResult,
  UnsubscribeFromMatchResourceResult,
  UpdateModelResponse,
  UpdatePrimaryModelResponse,
  UpdateScenarioConfigurationResponse,
  UploadMatchResultResponse,
} from "../types/PlayFabMultiplayerApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabMultiplayerApi extends PlayFabCommon {

  /**
   * Cancel all active tickets the player is a member of in a given queue.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/cancelallmatchmakingticketsforplayer
   */
  CancelAllMatchmakingTicketsForPlayer (request: CancelAllMatchmakingTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelAllMatchmakingTicketsForPlayerResult>("/Match/CancelAllMatchmakingTicketsForPlayer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cancel all active backfill tickets the player is a member of in a given queue.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/cancelallserverbackfillticketsforplayer
   */
  CancelAllServerBackfillTicketsForPlayer (request: CancelAllServerBackfillTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelAllServerBackfillTicketsForPlayerResult>("/Match/CancelAllServerBackfillTicketsForPlayer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cancel a matchmaking ticket.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/cancelmatchmakingticket
   */
  CancelMatchmakingTicket (request: CancelMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelMatchmakingTicketResult>("/Match/CancelMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cancel a batch model creation.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/cancelmodel
   */
  CancelModel (request: CancelModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelModelResponse>("/TrueSkill/CancelModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cancel a server backfill ticket.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/cancelserverbackfillticket
   */
  CancelServerBackfillTicket (request: CancelServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelServerBackfillTicketResult>("/Match/CancelServerBackfillTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a base model with default settings.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/createbasemodel
   */
  CreateBaseModel (request: CreateBaseModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBaseModelResponse>("/TrueSkill/CreateBaseModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a batch model that is learned from a title's match results in a scenario.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/createbatchmodel
   */
  CreateBatchModel (request: CreateBatchModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBatchModelResponse>("/TrueSkill/CreateBatchModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build alias.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createbuildalias
   */
  CreateBuildAlias (request: CreateBuildAliasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/CreateBuildAlias", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build with a custom container.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createbuildwithcustomcontainer
   */
  CreateBuildWithCustomContainer (request: CreateBuildWithCustomContainerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBuildWithCustomContainerResponse>("/MultiplayerServer/CreateBuildWithCustomContainer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build with a managed container.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createbuildwithmanagedcontainer
   */
  CreateBuildWithManagedContainer (request: CreateBuildWithManagedContainerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBuildWithManagedContainerResponse>("/MultiplayerServer/CreateBuildWithManagedContainer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build with the server running as a process.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createbuildwithprocessbasedserver
   */
  CreateBuildWithProcessBasedServer (request: CreateBuildWithProcessBasedServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBuildWithProcessBasedServerResponse>("/MultiplayerServer/CreateBuildWithProcessBasedServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/createlobby
   */
  CreateLobby (request: CreateLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateLobbyResult>("/Lobby/CreateLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a matchmaking ticket as a client.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/creatematchmakingticket
   */
  CreateMatchmakingTicket (request: CreateMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateMatchmakingTicketResult>("/Match/CreateMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a remote user to log on to a VM for a multiplayer server build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createremoteuser
   */
  CreateRemoteUser (request: CreateRemoteUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateRemoteUserResponse>("/MultiplayerServer/CreateRemoteUser", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a scenario to specify which conditions, conditions values and events will be allowed when submitting match
   * results.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/createscenario
   */
  CreateScenario (request: CreateScenarioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateScenarioResponse>("/TrueSkill/CreateScenario", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a backfill matchmaking ticket as a server. A backfill ticket represents an ongoing game. The matchmaking service
   * automatically starts matching the backfill ticket against other matchmaking tickets. Backfill tickets cannot match with
   * other backfill tickets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/createserverbackfillticket
   */
  CreateServerBackfillTicket (request: CreateServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateServerBackfillTicketResult>("/Match/CreateServerBackfillTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a matchmaking ticket as a server. The matchmaking service automatically starts matching the ticket against other
   * matchmaking tickets.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/createservermatchmakingticket
   */
  CreateServerMatchmakingTicket (request: CreateServerMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateMatchmakingTicketResult>("/Match/CreateServerMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a request to change a title's multiplayer server quotas.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createtitlemultiplayerserversquotachange
   */
  CreateTitleMultiplayerServersQuotaChange (request: CreateTitleMultiplayerServersQuotaChangeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTitleMultiplayerServersQuotaChangeResponse>("/MultiplayerServer/CreateTitleMultiplayerServersQuotaChange", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Switch a model's state from Active to Deactivated.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/deactivatemodel
   */
  DeactivateModel (request: DeactivateModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeactivateModelResponse>("/TrueSkill/DeactivateModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server game asset for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deleteasset
   */
  DeleteAsset (request: DeleteAssetRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteAsset", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletebuild
   */
  DeleteBuild (request: DeleteBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuild", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server build alias.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletebuildalias
   */
  DeleteBuildAlias (request: DeleteBuildAliasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuildAlias", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes a multiplayer server build's region.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletebuildregion
   */
  DeleteBuildRegion (request: DeleteBuildRegionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuildRegion", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server game certificate.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletecertificate
   */
  DeleteCertificate (request: DeleteCertificateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteCertificate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a container image repository.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletecontainerimagerepository
   */
  DeleteContainerImageRepository (request: DeleteContainerImageRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteContainerImageRepository", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete a lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/deletelobby
   */
  DeleteLobby (request: DeleteLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/DeleteLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete a model.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/deletemodel
   */
  DeleteModel (request: DeleteModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteModelResponse>("/TrueSkill/DeleteModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a remote user to log on to a VM for a multiplayer server build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deleteremoteuser
   */
  DeleteRemoteUser (request: DeleteRemoteUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteRemoteUser", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete a scenario.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/deletescenario
   */
  DeleteScenario (request: DeleteScenarioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteScenarioResponse>("/TrueSkill/DeleteScenario", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server game secret.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletesecret
   */
  DeleteSecret (request: DeleteSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteSecret", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Enables the multiplayer server feature for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/enablemultiplayerserversfortitle
   */
  EnableMultiplayerServersForTitle (request: EnableMultiplayerServersForTitleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EnableMultiplayerServersForTitleResponse>("/MultiplayerServer/EnableMultiplayerServersForTitle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Enables the parties feature for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/party/multiplayerserver/enablepartiesfortitle
   */
  EnablePartiesForTitle (request: EnablePartiesForTitleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Party/EnablePartiesForTitle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Find lobbies which match certain criteria, and which friends are in.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/findfriendlobbies
   */
  FindFriendLobbies (request: FindFriendLobbiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<FindFriendLobbiesResult>("/Lobby/FindFriendLobbies", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Find all the lobbies that match certain criteria.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/findlobbies
   */
  FindLobbies (request: FindLobbiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<FindLobbiesResult>("/Lobby/FindLobbies", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a URL that can be used to download the specified asset. A sample pre-authenticated url -
   * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getassetdownloadurl
   */
  GetAssetDownloadUrl (request: GetAssetDownloadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAssetDownloadUrlResponse>("/MultiplayerServer/GetAssetDownloadUrl", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the URL to upload assets to. A sample pre-authenticated url -
   * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getassetuploadurl
   */
  GetAssetUploadUrl (request: GetAssetUploadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAssetUploadUrlResponse>("/MultiplayerServer/GetAssetUploadUrl", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a multiplayer server build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getbuild
   */
  GetBuild (request: GetBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetBuildResponse>("/MultiplayerServer/GetBuild", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a multiplayer server build alias.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getbuildalias
   */
  GetBuildAlias (request: GetBuildAliasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/GetBuildAlias", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets supported locales for the cognitive services based on the specified service type.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getcognitiveserviceslocales
   */
  GetCognitiveServicesLocales (request: GetCognitiveServicesLocalesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCognitiveServicesLocalesResponse>("/MultiplayerServer/GetCognitiveServicesLocales", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a token for the cognitive services based on the specified service type.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getcognitiveservicestoken
   */
  GetCognitiveServicesToken (request: GetCognitiveServicesTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCognitiveServicesTokenResponse>("/MultiplayerServer/GetCognitiveServicesToken", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the credentials to the container registry.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getcontainerregistrycredentials
   */
  GetContainerRegistryCredentials (request: GetContainerRegistryCredentialsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContainerRegistryCredentialsResponse>("/MultiplayerServer/GetContainerRegistryCredentials", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/getlobby
   */
  GetLobby (request: GetLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLobbyResult>("/Lobby/GetLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a match.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/getmatch
   */
  GetMatch (request: GetMatchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchResult>("/Match/GetMatch", request, "X-EntityToken", extraHeaders);
  }

  /**
   * SDK support is limited to C# and Java for this API. Get a matchmaking queue configuration.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking-admin/getmatchmakingqueue
   */
  GetMatchmakingQueue (request: GetMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchmakingQueueResult>("/Match/GetMatchmakingQueue", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a matchmaking ticket by ticket Id.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/getmatchmakingticket
   */
  GetMatchmakingTicket (request: GetMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchmakingTicketResult>("/Match/GetMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the details of a Model.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/getmodeldetails
   */
  GetModelDetails (request: GetModelDetailsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetModelDetailsResponse>("/TrueSkill/GetModelDetails", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get all of the models assigned to a specific scenario.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/getmodelsbyscenario
   */
  GetModelsByScenario (request: GetModelsByScenarioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetModelsByScenarioResponse>("/TrueSkill/GetModelsByScenario", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets multiplayer server session details and associated user connection tokens for a build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getmultiplayerserverandtoken
   */
  GetMultiplayerServerAndToken (request: GetMultiplayerServerAndTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMultiplayerServerAndTokenResponse>("/MultiplayerServer/GetMultiplayerServerAndToken", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets multiplayer server session details for a build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getmultiplayerserverdetails
   */
  GetMultiplayerServerDetails (request: GetMultiplayerServerDetailsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMultiplayerServerDetailsResponse>("/MultiplayerServer/GetMultiplayerServerDetails", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets multiplayer server logs after a server has terminated.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getmultiplayerserverlogs
   */
  GetMultiplayerServerLogs (request: GetMultiplayerServerLogsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMultiplayerServerLogsResponse>("/MultiplayerServer/GetMultiplayerServerLogs", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets multiplayer server logs after a server has terminated.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getmultiplayersessionlogsbysessionid
   */
  GetMultiplayerSessionLogsBySessionId (request: GetMultiplayerSessionLogsBySessionIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMultiplayerServerLogsResponse>("/MultiplayerServer/GetMultiplayerSessionLogsBySessionId", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets skill values of a set of players from the primary model of a given scenario.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/getplayerskill
   */
  GetPlayerSkill (request: GetPlayerSkillRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSkillResponse>("/TrueSkill/GetPlayerSkill", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets skill values of a set of players for multiple sets of conditions from the primary model of a given scenario.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/getplayerskillforconditions
   */
  GetPlayerSkillForConditions (request: GetPlayerSkillForConditionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSkillForConditionsResponse>("/TrueSkill/GetPlayerSkillForConditions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets skill values of a set of players for multiple sets of conditions from a specific model.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/getplayerskillforconditionsfrommodel
   */
  GetPlayerSkillForConditionsFromModel (request: GetPlayerSkillForConditionsFromModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSkillForConditionsFromModelResponse>("/TrueSkill/GetPlayerSkillForConditionsFromModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets skill values of a set of players from a specific model.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/getplayerskillfrommodel
   */
  GetPlayerSkillFromModel (request: GetPlayerSkillFromModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSkillFromModelResponse>("/TrueSkill/GetPlayerSkillFromModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get the statistics for a queue.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/getqueuestatistics
   */
  GetQueueStatistics (request: GetQueueStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetQueueStatisticsResult>("/Match/GetQueueStatistics", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a remote login endpoint to a VM that is hosting a multiplayer server build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getremoteloginendpoint
   */
  GetRemoteLoginEndpoint (request: GetRemoteLoginEndpointRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetRemoteLoginEndpointResponse>("/MultiplayerServer/GetRemoteLoginEndpoint", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a scenario configuration.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/getscenarioconfiguration
   */
  GetScenarioConfiguration (request: GetScenarioConfigurationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetScenarioConfigurationResponse>("/TrueSkill/GetScenarioConfiguration", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets all scenario configurations that belong to the title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/getscenarioconfigurations
   */
  GetScenarioConfigurations (request: GetScenarioConfigurationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetScenarioConfigurationsResponse>("/TrueSkill/GetScenarioConfigurations", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a matchmaking backfill ticket by ticket Id.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/getserverbackfillticket
   */
  GetServerBackfillTicket (request: GetServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetServerBackfillTicketResult>("/Match/GetServerBackfillTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the status of whether a title is enabled for the multiplayer server feature.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/gettitleenabledformultiplayerserversstatus
   */
  GetTitleEnabledForMultiplayerServersStatus (request: GetTitleEnabledForMultiplayerServersStatusRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleEnabledForMultiplayerServersStatusResponse>("/MultiplayerServer/GetTitleEnabledForMultiplayerServersStatus", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a title's server quota change request.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/gettitlemultiplayerserversquotachange
   */
  GetTitleMultiplayerServersQuotaChange (request: GetTitleMultiplayerServersQuotaChangeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleMultiplayerServersQuotaChangeResponse>("/MultiplayerServer/GetTitleMultiplayerServersQuotaChange", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the quotas for a title in relation to multiplayer servers.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/gettitlemultiplayerserversquotas
   */
  GetTitleMultiplayerServersQuotas (request: GetTitleMultiplayerServersQuotasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleMultiplayerServersQuotasResponse>("/MultiplayerServer/GetTitleMultiplayerServersQuotas", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Send a notification to invite a player to a lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/invitetolobby
   */
  InviteToLobby (request: InviteToLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/InviteToLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Join an Arranged lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/joinarrangedlobby
   */
  JoinArrangedLobby (request: JoinArrangedLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<JoinLobbyResult>("/Lobby/JoinArrangedLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Join a lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/joinlobby
   */
  JoinLobby (request: JoinLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<JoinLobbyResult>("/Lobby/JoinLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Preview: Join a lobby as a server entity. This is restricted to client lobbies which are using connections.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/joinlobbyasserver
   */
  JoinLobbyAsServer (request: JoinLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<JoinLobbyAsServerResult>("/Lobby/JoinLobbyAsServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Join a matchmaking ticket.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/joinmatchmakingticket
   */
  JoinMatchmakingTicket (request: JoinMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<JoinMatchmakingTicketResult>("/Match/JoinMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Leave a lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/leavelobby
   */
  LeaveLobby (request: LeaveLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/LeaveLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Preview: Request for server to leave a lobby. This is restricted to client owned lobbies which are using connections.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/leavelobbyasserver
   */
  LeaveLobbyAsServer (request: LeaveLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/LeaveLobbyAsServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists archived multiplayer server sessions for a build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listarchivedmultiplayerservers
   */
  ListArchivedMultiplayerServers (request: ListMultiplayerServersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMultiplayerServersResponse>("/MultiplayerServer/ListArchivedMultiplayerServers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists multiplayer server game assets for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listassetsummaries
   */
  ListAssetSummaries (request: ListAssetSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListAssetSummariesResponse>("/MultiplayerServer/ListAssetSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists details of all build aliases for a title. Accepts tokens for title and if game client access is enabled, allows
   * game client to request list of builds with player entity token.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listbuildaliases
   */
  ListBuildAliases (request: ListBuildAliasesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListBuildAliasesResponse>("/MultiplayerServer/ListBuildAliases", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client
   * access is enabled, allows game client to request list of builds with player entity token.
   * @deprecated Please use ListBuildSummariesV2 instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listbuildsummaries
   */
  ListBuildSummaries (request: ListBuildSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListBuildSummariesResponse>("/MultiplayerServer/ListBuildSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client
   * access is enabled, allows game client to request list of builds with player entity token.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listbuildsummariesv2
   */
  ListBuildSummariesV2 (request: ListBuildSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListBuildSummariesResponse>("/MultiplayerServer/ListBuildSummariesV2", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists multiplayer server game certificates for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listcertificatesummaries
   */
  ListCertificateSummaries (request: ListCertificateSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListCertificateSummariesResponse>("/MultiplayerServer/ListCertificateSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists custom container images for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listcontainerimages
   */
  ListContainerImages (request: ListContainerImagesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListContainerImagesResponse>("/MultiplayerServer/ListContainerImages", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists the tags for a custom container image.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listcontainerimagetags
   */
  ListContainerImageTags (request: ListContainerImageTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListContainerImageTagsResponse>("/MultiplayerServer/ListContainerImageTags", request, "X-EntityToken", extraHeaders);
  }

  /**
   * SDK support is limited to C# and Java for this API. List all matchmaking queue configs.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking-admin/listmatchmakingqueues
   */
  ListMatchmakingQueues (request: ListMatchmakingQueuesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMatchmakingQueuesResult>("/Match/ListMatchmakingQueues", request, "X-EntityToken", extraHeaders);
  }

  /**
   * List all matchmaking ticket Ids the user is a member of.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/listmatchmakingticketsforplayer
   */
  ListMatchmakingTicketsForPlayer (request: ListMatchmakingTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMatchmakingTicketsForPlayerResult>("/Match/ListMatchmakingTicketsForPlayer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists multiplayer server sessions for a build.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listmultiplayerservers
   */
  ListMultiplayerServers (request: ListMultiplayerServersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMultiplayerServersResponse>("/MultiplayerServer/ListMultiplayerServers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists quality of service servers for party.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listpartyqosservers
   */
  ListPartyQosServers (request: ListPartyQosServersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListPartyQosServersResponse>("/MultiplayerServer/ListPartyQosServers", request, null, extraHeaders);
  }

  /**
   * Lists quality of service servers.
   * @deprecated Please use ListQosServersForTitle instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listqosservers
   */
  ListQosServers (request: ListQosServersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListQosServersResponse>("/MultiplayerServer/ListQosServers", request, null, extraHeaders);
  }

  /**
   * Lists quality of service servers for the title. By default, servers are only returned for regions where a Multiplayer
   * Servers build has been deployed.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listqosserversfortitle
   */
  ListQosServersForTitle (request: ListQosServersForTitleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListQosServersForTitleResponse>("/MultiplayerServer/ListQosServersForTitle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists multiplayer server game secrets for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listsecretsummaries
   */
  ListSecretSummaries (request: ListSecretSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListSecretSummariesResponse>("/MultiplayerServer/ListSecretSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * List all server backfill ticket Ids the user is a member of.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/listserverbackfillticketsforplayer
   */
  ListServerBackfillTicketsForPlayer (request: ListServerBackfillTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListServerBackfillTicketsForPlayerResult>("/Match/ListServerBackfillTicketsForPlayer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * List all server quota change requests for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listtitlemultiplayerserversquotachanges
   */
  ListTitleMultiplayerServersQuotaChanges (request: ListTitleMultiplayerServersQuotaChangesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListTitleMultiplayerServersQuotaChangesResponse>("/MultiplayerServer/ListTitleMultiplayerServersQuotaChanges", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists virtual machines for a title.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listvirtualmachinesummaries
   */
  ListVirtualMachineSummaries (request: ListVirtualMachineSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListVirtualMachineSummariesResponse>("/MultiplayerServer/ListVirtualMachineSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * SDK support is limited to C# and Java for this API. Remove a matchmaking queue config.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking-admin/removematchmakingqueue
   */
  RemoveMatchmakingQueue (request: RemoveMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveMatchmakingQueueResult>("/Match/RemoveMatchmakingQueue", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Remove a member from a lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/removemember
   */
  RemoveMember (request: RemoveMemberFromLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/RemoveMember", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Request a multiplayer server session. Accepts tokens for title and if game client access is enabled, allows game client
   * to request a server with player entity token.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/requestmultiplayerserver
   */
  RequestMultiplayerServer (request: RequestMultiplayerServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RequestMultiplayerServerResponse>("/MultiplayerServer/RequestMultiplayerServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Request a multiplayer server session and associated user connection tokens. Accepts tokens for title and if game client
   * access is enabled, allows game client to request a server with player entity token.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/requestmultiplayerserverandtoken
   */
  RequestMultiplayerServerAndToken (request: RequestMultiplayerServerAndTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RequestMultiplayerServerAndTokenResponse>("/MultiplayerServer/RequestMultiplayerServerAndToken", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Request a party session.
   * Reference: https://docs.microsoft.com/rest/api/playfab/party/multiplayerserver/requestparty
   */
  RequestParty (request: RequestPartyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RequestPartyResponse>("/Party/RequestParty", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Request a party session.
   * Reference: https://docs.microsoft.com/rest/api/playfab/party/multiplayerserver/requestpartyservice
   */
  RequestPartyService (request: RequestPartyServiceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RequestPartyServiceResponse>("/Party/RequestPartyService", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Rolls over the credentials to the container registry.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/rollovercontainerregistrycredentials
   */
  RolloverContainerRegistryCredentials (request: RolloverContainerRegistryCredentialsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RolloverContainerRegistryCredentialsResponse>("/MultiplayerServer/RolloverContainerRegistryCredentials", request, "X-EntityToken", extraHeaders);
  }

  /**
   * SDK support is limited to C# and Java for this API. Create or update a matchmaking queue configuration.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking-admin/setmatchmakingqueue
   */
  SetMatchmakingQueue (request: SetMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetMatchmakingQueueResult>("/Match/SetMatchmakingQueue", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Shuts down a multiplayer server session.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/shutdownmultiplayerserver
   */
  ShutdownMultiplayerServer (request: ShutdownMultiplayerServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/ShutdownMultiplayerServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Subscribe to lobby resource notifications.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/subscribetolobbyresource
   */
  SubscribeToLobbyResource (request: SubscribeToLobbyResourceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SubscribeToLobbyResourceResult>("/Lobby/SubscribeToLobbyResource", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Subscribe to match resource notifications.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/subscribetomatchmakingresource
   */
  SubscribeToMatchmakingResource (request: SubscribeToMatchResourceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SubscribeToMatchResourceResult>("/Match/SubscribeToMatchmakingResource", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unsubscribe from lobby notifications.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/unsubscribefromlobbyresource
   */
  UnsubscribeFromLobbyResource (request: UnsubscribeFromLobbyResourceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UnsubscribeFromLobbyResource", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unsubscribe from match resource notifications.
   * Reference: https://docs.microsoft.com/rest/api/playfab/match/matchmaking/unsubscribefrommatchmakingresource
   */
  UnsubscribeFromMatchmakingResource (request: UnsubscribeFromMatchResourceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnsubscribeFromMatchResourceResult>("/Match/UnsubscribeFromMatchmakingResource", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Untags a container image.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/untagcontainerimage
   */
  UntagContainerImage (request: UntagContainerImageRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UntagContainerImage", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build alias.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/updatebuildalias
   */
  UpdateBuildAlias (request: UpdateBuildAliasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/UpdateBuildAlias", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates a multiplayer server build's name.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/updatebuildname
   */
  UpdateBuildName (request: UpdateBuildNameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildName", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates a multiplayer server build's region. If the region is not yet created, it will be created
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/updatebuildregion
   */
  UpdateBuildRegion (request: UpdateBuildRegionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildRegion", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates a multiplayer server build's regions.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/updatebuildregions
   */
  UpdateBuildRegions (request: UpdateBuildRegionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildRegions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update a lobby.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/updatelobby
   */
  UpdateLobby (request: UpdateLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UpdateLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Preview: Update fields related to a joined server in the lobby the server is in. Servers can keep a lobby from expiring
   * by being the one to "update" the lobby in some way. Servers have no impact on last member leave/last member disconnect
   * behavior.
   * Reference: https://docs.microsoft.com/rest/api/playfab/lobby/lobby/updatelobbyasserver
   */
  UpdateLobbyAsServer (request: UpdateLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UpdateLobbyAsServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update a model.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/updatemodel
   */
  UpdateModel (request: UpdateModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateModelResponse>("/TrueSkill/UpdateModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Mark a model as primary for a scenario.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/updateprimarymodel
   */
  UpdatePrimaryModel (request: UpdatePrimaryModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePrimaryModelResponse>("/TrueSkill/UpdatePrimaryModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update a scenario configuration.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/updatescenarioconfiguration
   */
  UpdateScenarioConfiguration (request: UpdateScenarioConfigurationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateScenarioConfigurationResponse>("/TrueSkill/UpdateScenarioConfiguration", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Uploads a multiplayer server game certificate.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/uploadcertificate
   */
  UploadCertificate (request: UploadCertificateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UploadCertificate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Uploads a match result.
   * Reference: https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/uploadmatchresult
   */
  UploadMatchResult (request: UploadMatchResultRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UploadMatchResultResponse>("/TrueSkill/UploadMatchResult", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Uploads a multiplayer server game secret.
   * Reference: https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/uploadsecret
   */
  UploadSecret (request: UploadSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UploadSecret", request, "X-EntityToken", extraHeaders);
  }

};
