import type { ApiCallback, EmptyResponse } from "../types/Playfab";
import type {
  CancelAllMatchmakingTicketsForPlayerRequest,
  CancelAllMatchmakingTicketsForPlayerResult,
  CancelAllServerBackfillTicketsForPlayerRequest,
  CancelAllServerBackfillTicketsForPlayerResult,
  CancelMatchmakingTicketRequest,
  CancelMatchmakingTicketResult,
  CancelServerBackfillTicketRequest,
  CancelServerBackfillTicketResult,
  CreateBuildAliasRequest,
  BuildAliasDetailsResponse,
  CreateBuildWithCustomContainerRequest,
  CreateBuildWithCustomContainerResponse,
  CreateBuildWithManagedContainerRequest,
  CreateBuildWithManagedContainerResponse,
  CreateBuildWithProcessBasedServerRequest,
  CreateBuildWithProcessBasedServerResponse,
  CreateLobbyRequest,
  CreateLobbyResult,
  CreateMatchmakingTicketRequest,
  CreateMatchmakingTicketResult,
  CreateRemoteUserRequest,
  CreateRemoteUserResponse,
  CreateServerBackfillTicketRequest,
  CreateServerBackfillTicketResult,
  CreateServerMatchmakingTicketRequest,
  CreateTitleMultiplayerServersQuotaChangeRequest,
  CreateTitleMultiplayerServersQuotaChangeResponse,
  DeleteAssetRequest,
  DeleteBuildRequest,
  DeleteBuildAliasRequest,
  DeleteBuildRegionRequest,
  DeleteCertificateRequest,
  DeleteContainerImageRequest,
  DeleteLobbyRequest,
  LobbyEmptyResult,
  DeleteRemoteUserRequest,
  DeleteSecretRequest,
  EnableMultiplayerServersForTitleRequest,
  EnableMultiplayerServersForTitleResponse,
  FindFriendLobbiesRequest,
  FindFriendLobbiesResult,
  FindLobbiesRequest,
  FindLobbiesResult,
  GetAssetDownloadUrlRequest,
  GetAssetDownloadUrlResponse,
  GetAssetUploadUrlRequest,
  GetAssetUploadUrlResponse,
  GetBuildRequest,
  GetBuildResponse,
  GetBuildAliasRequest,
  GetContainerRegistryCredentialsRequest,
  GetContainerRegistryCredentialsResponse,
  GetLobbyRequest,
  GetLobbyResult,
  GetMatchRequest,
  GetMatchResult,
  GetMatchmakingQueueRequest,
  GetMatchmakingQueueResult,
  GetMatchmakingTicketRequest,
  GetMatchmakingTicketResult,
  GetMultiplayerServerDetailsRequest,
  GetMultiplayerServerDetailsResponse,
  GetMultiplayerServerLogsRequest,
  GetMultiplayerServerLogsResponse,
  GetMultiplayerSessionLogsBySessionIdRequest,
  GetQueueStatisticsRequest,
  GetQueueStatisticsResult,
  GetRemoteLoginEndpointRequest,
  GetRemoteLoginEndpointResponse,
  GetServerBackfillTicketRequest,
  GetServerBackfillTicketResult,
  GetTitleEnabledForMultiplayerServersStatusRequest,
  GetTitleEnabledForMultiplayerServersStatusResponse,
  GetTitleMultiplayerServersQuotaChangeRequest,
  GetTitleMultiplayerServersQuotaChangeResponse,
  GetTitleMultiplayerServersQuotasRequest,
  GetTitleMultiplayerServersQuotasResponse,
  InviteToLobbyRequest,
  JoinArrangedLobbyRequest,
  JoinLobbyResult,
  JoinLobbyRequest,
  JoinLobbyAsServerRequest,
  JoinLobbyAsServerResult,
  JoinMatchmakingTicketRequest,
  JoinMatchmakingTicketResult,
  LeaveLobbyRequest,
  LeaveLobbyAsServerRequest,
  ListMultiplayerServersRequest,
  ListMultiplayerServersResponse,
  ListAssetSummariesRequest,
  ListAssetSummariesResponse,
  ListBuildAliasesRequest,
  ListBuildAliasesResponse,
  ListBuildSummariesRequest,
  ListBuildSummariesResponse,
  ListCertificateSummariesRequest,
  ListCertificateSummariesResponse,
  ListContainerImagesRequest,
  ListContainerImagesResponse,
  ListContainerImageTagsRequest,
  ListContainerImageTagsResponse,
  ListMatchmakingQueuesRequest,
  ListMatchmakingQueuesResult,
  ListMatchmakingTicketsForPlayerRequest,
  ListMatchmakingTicketsForPlayerResult,
  ListPartyQosServersRequest,
  ListPartyQosServersResponse,
  ListQosServersForTitleRequest,
  ListQosServersForTitleResponse,
  ListSecretSummariesRequest,
  ListSecretSummariesResponse,
  ListServerBackfillTicketsForPlayerRequest,
  ListServerBackfillTicketsForPlayerResult,
  ListTitleMultiplayerServersQuotaChangesRequest,
  ListTitleMultiplayerServersQuotaChangesResponse,
  ListVirtualMachineSummariesRequest,
  ListVirtualMachineSummariesResponse,
  RemoveMatchmakingQueueRequest,
  RemoveMatchmakingQueueResult,
  RemoveMemberFromLobbyRequest,
  RequestMultiplayerServerRequest,
  RequestMultiplayerServerResponse,
  RequestPartyServiceRequest,
  RequestPartyServiceResponse,
  RolloverContainerRegistryCredentialsRequest,
  RolloverContainerRegistryCredentialsResponse,
  SetMatchmakingQueueRequest,
  SetMatchmakingQueueResult,
  ShutdownMultiplayerServerRequest,
  SubscribeToLobbyResourceRequest,
  SubscribeToLobbyResourceResult,
  SubscribeToMatchResourceRequest,
  SubscribeToMatchResourceResult,
  UnsubscribeFromLobbyResourceRequest,
  UnsubscribeFromMatchResourceRequest,
  UnsubscribeFromMatchResourceResult,
  UntagContainerImageRequest,
  UpdateBuildAliasRequest,
  UpdateBuildNameRequest,
  UpdateBuildRegionRequest,
  UpdateBuildRegionsRequest,
  UpdateLobbyRequest,
  UpdateLobbyAsServerRequest,
  UploadCertificateRequest,
  UploadSecretRequest,
} from "../types/PlayFabMultiplayerApi";
import { PlayFabCommon } from "../PlayFabCommon";

export class PlayFabMultiplayerApi extends PlayFabCommon {
  /**
   * Cancel all active tickets the player is a member of in a given queue.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelallmatchmakingticketsforplayer
   */
  CancelAllMatchmakingTicketsForPlayer(
    request: CancelAllMatchmakingTicketsForPlayerRequest,
    callback: ApiCallback<CancelAllMatchmakingTicketsForPlayerResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/CancelAllMatchmakingTicketsForPlayer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Cancel all active backfill tickets the player is a member of in a given queue.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelallserverbackfillticketsforplayer
   */
  CancelAllServerBackfillTicketsForPlayer(
    request: CancelAllServerBackfillTicketsForPlayerRequest,
    callback: ApiCallback<CancelAllServerBackfillTicketsForPlayerResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/CancelAllServerBackfillTicketsForPlayer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Cancel a matchmaking ticket.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelmatchmakingticket
   */
  CancelMatchmakingTicket(
    request: CancelMatchmakingTicketRequest,
    callback: ApiCallback<CancelMatchmakingTicketResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/CancelMatchmakingTicket",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Cancel a server backfill ticket.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelserverbackfillticket
   */
  CancelServerBackfillTicket(
    request: CancelServerBackfillTicketRequest,
    callback: ApiCallback<CancelServerBackfillTicketResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/CancelServerBackfillTicket",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates a multiplayer server build alias.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildalias
   */
  CreateBuildAlias(
    request: CreateBuildAliasRequest,
    callback: ApiCallback<BuildAliasDetailsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/CreateBuildAlias",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates a multiplayer server build with a custom container.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithcustomcontainer
   */
  CreateBuildWithCustomContainer(
    request: CreateBuildWithCustomContainerRequest,
    callback: ApiCallback<CreateBuildWithCustomContainerResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/CreateBuildWithCustomContainer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates a multiplayer server build with a managed container.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithmanagedcontainer
   */
  CreateBuildWithManagedContainer(
    request: CreateBuildWithManagedContainerRequest,
    callback: ApiCallback<CreateBuildWithManagedContainerResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/CreateBuildWithManagedContainer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates a multiplayer server build with the server running as a process.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithprocessbasedserver
   */
  CreateBuildWithProcessBasedServer(
    request: CreateBuildWithProcessBasedServerRequest,
    callback: ApiCallback<CreateBuildWithProcessBasedServerResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/CreateBuildWithProcessBasedServer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Create a lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/createlobby
   */
  CreateLobby(
    request: CreateLobbyRequest,
    callback: ApiCallback<CreateLobbyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/CreateLobby",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Create a matchmaking ticket as a client.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/creatematchmakingticket
   */
  CreateMatchmakingTicket(
    request: CreateMatchmakingTicketRequest,
    callback: ApiCallback<CreateMatchmakingTicketResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/CreateMatchmakingTicket",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates a remote user to log on to a VM for a multiplayer server build.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createremoteuser
   */
  CreateRemoteUser(
    request: CreateRemoteUserRequest,
    callback: ApiCallback<CreateRemoteUserResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/CreateRemoteUser",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Create a backfill matchmaking ticket as a server. A backfill ticket represents an ongoing game. The matchmaking service
   * automatically starts matching the backfill ticket against other matchmaking tickets. Backfill tickets cannot match with
   * other backfill tickets.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/createserverbackfillticket
   */
  CreateServerBackfillTicket(
    request: CreateServerBackfillTicketRequest,
    callback: ApiCallback<CreateServerBackfillTicketResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/CreateServerBackfillTicket",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Create a matchmaking ticket as a server. The matchmaking service automatically starts matching the ticket against other
   * matchmaking tickets.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/createservermatchmakingticket
   */
  CreateServerMatchmakingTicket(
    request: CreateServerMatchmakingTicketRequest,
    callback: ApiCallback<CreateMatchmakingTicketResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/CreateServerMatchmakingTicket",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }

  /**
   * Creates a request to change a title's multiplayer server quotas.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createtitlemultiplayerserversquotachange
   */
  CreateTitleMultiplayerServersQuotaChange(
    request: CreateTitleMultiplayerServersQuotaChangeRequest,
    callback: ApiCallback<CreateTitleMultiplayerServersQuotaChangeResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/CreateTitleMultiplayerServersQuotaChange",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a multiplayer server game asset for a title.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deleteasset
   */
  DeleteAsset(
    request: DeleteAssetRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/DeleteAsset",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a multiplayer server build.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuild
   */
  DeleteBuild(
    request: DeleteBuildRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/DeleteBuild",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a multiplayer server build alias.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuildalias
   */
  DeleteBuildAlias(
    request: DeleteBuildAliasRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/DeleteBuildAlias",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Removes a multiplayer server build's region.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuildregion
   */
  DeleteBuildRegion(
    request: DeleteBuildRegionRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/DeleteBuildRegion",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a multiplayer server game certificate.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletecertificate
   */
  DeleteCertificate(
    request: DeleteCertificateRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/DeleteCertificate",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a container image repository.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletecontainerimagerepository
   */
  DeleteContainerImageRepository(
    request: DeleteContainerImageRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/DeleteContainerImageRepository",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Delete a lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/deletelobby
   */
  DeleteLobby(
    request: DeleteLobbyRequest,
    callback: ApiCallback<LobbyEmptyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/DeleteLobby",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a remote user to log on to a VM for a multiplayer server build.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deleteremoteuser
   */
  DeleteRemoteUser(
    request: DeleteRemoteUserRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/DeleteRemoteUser",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Deletes a multiplayer server game secret.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletesecret
   */
  DeleteSecret(
    request: DeleteSecretRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/DeleteSecret",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Enables the multiplayer server feature for a title.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/enablemultiplayerserversfortitle
   */
  EnableMultiplayerServersForTitle(
    request: EnableMultiplayerServersForTitleRequest,
    callback: ApiCallback<EnableMultiplayerServersForTitleResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/EnableMultiplayerServersForTitle",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Find lobbies which match certain criteria, and which friends are in.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/findfriendlobbies
   */
  FindFriendLobbies(
    request: FindFriendLobbiesRequest,
    callback: ApiCallback<FindFriendLobbiesResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/FindFriendLobbies",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Find all the lobbies that match certain criteria.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/findlobbies
   */
  FindLobbies(
    request: FindLobbiesRequest,
    callback: ApiCallback<FindLobbiesResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/FindLobbies",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets a URL that can be used to download the specified asset. A sample pre-authenticated url -
   * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getassetdownloadurl
   */
  GetAssetDownloadUrl(
    request: GetAssetDownloadUrlRequest,
    callback: ApiCallback<GetAssetDownloadUrlResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetAssetDownloadUrl",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the URL to upload assets to. A sample pre-authenticated url -
   * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getassetuploadurl
   */
  GetAssetUploadUrl(
    request: GetAssetUploadUrlRequest,
    callback: ApiCallback<GetAssetUploadUrlResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetAssetUploadUrl",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets a multiplayer server build.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getbuild
   */
  GetBuild(
    request: GetBuildRequest,
    callback: ApiCallback<GetBuildResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetBuild",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets a multiplayer server build alias.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getbuildalias
   */
  GetBuildAlias(
    request: GetBuildAliasRequest,
    callback: ApiCallback<BuildAliasDetailsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetBuildAlias",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the credentials to the container registry.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getcontainerregistrycredentials
   */
  GetContainerRegistryCredentials(
    request: GetContainerRegistryCredentialsRequest,
    callback: ApiCallback<GetContainerRegistryCredentialsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetContainerRegistryCredentials",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get a lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/getlobby
   */
  GetLobby(
    request: GetLobbyRequest,
    callback: ApiCallback<GetLobbyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/GetLobby",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get a match.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getmatch
   */
  GetMatch(
    request: GetMatchRequest,
    callback: ApiCallback<GetMatchResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/GetMatch",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * SDK support is limited to C# and Java for this API. Get a matchmaking queue configuration.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/getmatchmakingqueue
   */
  GetMatchmakingQueue(
    request: GetMatchmakingQueueRequest,
    callback: ApiCallback<GetMatchmakingQueueResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/GetMatchmakingQueue",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get a matchmaking ticket by ticket Id.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getmatchmakingticket
   */
  GetMatchmakingTicket(
    request: GetMatchmakingTicketRequest,
    callback: ApiCallback<GetMatchmakingTicketResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/GetMatchmakingTicket",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets multiplayer server session details for a build.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayerserverdetails
   */
  GetMultiplayerServerDetails(
    request: GetMultiplayerServerDetailsRequest,
    callback: ApiCallback<GetMultiplayerServerDetailsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetMultiplayerServerDetails",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets multiplayer server logs after a server has terminated.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayerserverlogs
   */
  GetMultiplayerServerLogs(
    request: GetMultiplayerServerLogsRequest,
    callback: ApiCallback<GetMultiplayerServerLogsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetMultiplayerServerLogs",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets multiplayer server logs after a server has terminated.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayersessionlogsbysessionid
   */
  GetMultiplayerSessionLogsBySessionId(
    request: GetMultiplayerSessionLogsBySessionIdRequest,
    callback: ApiCallback<GetMultiplayerServerLogsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetMultiplayerSessionLogsBySessionId",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get the statistics for a queue.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getqueuestatistics
   */
  GetQueueStatistics(
    request: GetQueueStatisticsRequest,
    callback: ApiCallback<GetQueueStatisticsResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/GetQueueStatistics",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets a remote login endpoint to a VM that is hosting a multiplayer server build.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getremoteloginendpoint
   */
  GetRemoteLoginEndpoint(
    request: GetRemoteLoginEndpointRequest,
    callback: ApiCallback<GetRemoteLoginEndpointResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetRemoteLoginEndpoint",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Get a matchmaking backfill ticket by ticket Id.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getserverbackfillticket
   */
  GetServerBackfillTicket(
    request: GetServerBackfillTicketRequest,
    callback: ApiCallback<GetServerBackfillTicketResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/GetServerBackfillTicket",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the status of whether a title is enabled for the multiplayer server feature.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitleenabledformultiplayerserversstatus
   */
  GetTitleEnabledForMultiplayerServersStatus(
    request: GetTitleEnabledForMultiplayerServersStatusRequest,
    callback: ApiCallback<GetTitleEnabledForMultiplayerServersStatusResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetTitleEnabledForMultiplayerServersStatus",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets a title's server quota change request.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitlemultiplayerserversquotachange
   */
  GetTitleMultiplayerServersQuotaChange(
    request: GetTitleMultiplayerServersQuotaChangeRequest,
    callback: ApiCallback<GetTitleMultiplayerServersQuotaChangeResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetTitleMultiplayerServersQuotaChange",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Gets the quotas for a title in relation to multiplayer servers.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitlemultiplayerserversquotas
   */
  GetTitleMultiplayerServersQuotas(
    request: GetTitleMultiplayerServersQuotasRequest,
    callback: ApiCallback<GetTitleMultiplayerServersQuotasResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/GetTitleMultiplayerServersQuotas",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Send a notification to invite a player to a lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/invitetolobby
   */
  InviteToLobby(
    request: InviteToLobbyRequest,
    callback: ApiCallback<LobbyEmptyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/InviteToLobby",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Join an Arranged lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinarrangedlobby
   */
  JoinArrangedLobby(
    request: JoinArrangedLobbyRequest,
    callback: ApiCallback<JoinLobbyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/JoinArrangedLobby",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Join a lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinlobby
   */
  JoinLobby(
    request: JoinLobbyRequest,
    callback: ApiCallback<JoinLobbyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/JoinLobby",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Preview: Join a lobby as a server entity. This is restricted to client lobbies which are using connections.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinlobbyasserver
   */
  JoinLobbyAsServer(
    request: JoinLobbyAsServerRequest,
    callback: ApiCallback<JoinLobbyAsServerResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/JoinLobbyAsServer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Join a matchmaking ticket.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/joinmatchmakingticket
   */
  JoinMatchmakingTicket(
    request: JoinMatchmakingTicketRequest,
    callback: ApiCallback<JoinMatchmakingTicketResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/JoinMatchmakingTicket",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Leave a lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/leavelobby
   */
  LeaveLobby(
    request: LeaveLobbyRequest,
    callback: ApiCallback<LobbyEmptyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/LeaveLobby",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Preview: Request for server to leave a lobby. This is restricted to client owned lobbies which are using connections.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/leavelobbyasserver
   */
  LeaveLobbyAsServer(
    request: LeaveLobbyAsServerRequest,
    callback: ApiCallback<LobbyEmptyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/LeaveLobbyAsServer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists archived multiplayer server sessions for a build.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listarchivedmultiplayerservers
   */
  ListArchivedMultiplayerServers(
    request: ListMultiplayerServersRequest,
    callback: ApiCallback<ListMultiplayerServersResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListArchivedMultiplayerServers",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists multiplayer server game assets for a title.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listassetsummaries
   */
  ListAssetSummaries(
    request: ListAssetSummariesRequest,
    callback: ApiCallback<ListAssetSummariesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListAssetSummaries",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists details of all build aliases for a title. Accepts tokens for title and if game client access is enabled, allows
   * game client to request list of builds with player entity token.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listbuildaliases
   */
  ListBuildAliases(
    request: ListBuildAliasesRequest,
    callback: ApiCallback<ListBuildAliasesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListBuildAliases",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client
   * access is enabled, allows game client to request list of builds with player entity token.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listbuildsummariesv2
   */
  ListBuildSummariesV2(
    request: ListBuildSummariesRequest,
    callback: ApiCallback<ListBuildSummariesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListBuildSummariesV2",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists multiplayer server game certificates for a title.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcertificatesummaries
   */
  ListCertificateSummaries(
    request: ListCertificateSummariesRequest,
    callback: ApiCallback<ListCertificateSummariesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListCertificateSummaries",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists custom container images for a title.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcontainerimages
   */
  ListContainerImages(
    request: ListContainerImagesRequest,
    callback: ApiCallback<ListContainerImagesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListContainerImages",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists the tags for a custom container image.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcontainerimagetags
   */
  ListContainerImageTags(
    request: ListContainerImageTagsRequest,
    callback: ApiCallback<ListContainerImageTagsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListContainerImageTags",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * SDK support is limited to C# and Java for this API. List all matchmaking queue configs.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/listmatchmakingqueues
   */
  ListMatchmakingQueues(
    request: ListMatchmakingQueuesRequest,
    callback: ApiCallback<ListMatchmakingQueuesResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/ListMatchmakingQueues",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * List all matchmaking ticket Ids the user is a member of.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/listmatchmakingticketsforplayer
   */
  ListMatchmakingTicketsForPlayer(
    request: ListMatchmakingTicketsForPlayerRequest,
    callback: ApiCallback<ListMatchmakingTicketsForPlayerResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/ListMatchmakingTicketsForPlayer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists multiplayer server sessions for a build.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listmultiplayerservers
   */
  ListMultiplayerServers(
    request: ListMultiplayerServersRequest,
    callback: ApiCallback<ListMultiplayerServersResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListMultiplayerServers",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists quality of service servers for party.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listpartyqosservers
   */
  ListPartyQosServers(
    request: ListPartyQosServersRequest,
    callback: ApiCallback<ListPartyQosServersResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListPartyQosServers",
      request,
      null,
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists quality of service servers for the title. By default, servers are only returned for regions where a Multiplayer
   * Servers build has been deployed.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listqosserversfortitle
   */
  ListQosServersForTitle(
    request: ListQosServersForTitleRequest,
    callback: ApiCallback<ListQosServersForTitleResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListQosServersForTitle",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists multiplayer server game secrets for a title.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listsecretsummaries
   */
  ListSecretSummaries(
    request: ListSecretSummariesRequest,
    callback: ApiCallback<ListSecretSummariesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListSecretSummaries",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * List all server backfill ticket Ids the user is a member of.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/listserverbackfillticketsforplayer
   */
  ListServerBackfillTicketsForPlayer(
    request: ListServerBackfillTicketsForPlayerRequest,
    callback: ApiCallback<ListServerBackfillTicketsForPlayerResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/ListServerBackfillTicketsForPlayer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * List all server quota change requests for a title.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listtitlemultiplayerserversquotachanges
   */
  ListTitleMultiplayerServersQuotaChanges(
    request: ListTitleMultiplayerServersQuotaChangesRequest,
    callback: ApiCallback<ListTitleMultiplayerServersQuotaChangesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListTitleMultiplayerServersQuotaChanges",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Lists virtual machines for a title.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listvirtualmachinesummaries
   */
  ListVirtualMachineSummaries(
    request: ListVirtualMachineSummariesRequest,
    callback: ApiCallback<ListVirtualMachineSummariesResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ListVirtualMachineSummaries",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * SDK support is limited to C# and Java for this API. Remove a matchmaking queue config.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/removematchmakingqueue
   */
  RemoveMatchmakingQueue(
    request: RemoveMatchmakingQueueRequest,
    callback: ApiCallback<RemoveMatchmakingQueueResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/RemoveMatchmakingQueue",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Remove a member from a lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/removemember
   */
  RemoveMember(
    request: RemoveMemberFromLobbyRequest,
    callback: ApiCallback<LobbyEmptyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/RemoveMember",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Request a multiplayer server session. Accepts tokens for title and if game client access is enabled, allows game client
   * to request a server with player entity token.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/requestmultiplayerserver
   */
  RequestMultiplayerServer(
    request: RequestMultiplayerServerRequest,
    callback: ApiCallback<RequestMultiplayerServerResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/RequestMultiplayerServer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Request a party session.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/requestpartyservice
   */
  RequestPartyService(
    request: RequestPartyServiceRequest,
    callback: ApiCallback<RequestPartyServiceResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Party/RequestPartyService",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Rolls over the credentials to the container registry.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/rollovercontainerregistrycredentials
   */
  RolloverContainerRegistryCredentials(
    request: RolloverContainerRegistryCredentialsRequest,
    callback: ApiCallback<RolloverContainerRegistryCredentialsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/RolloverContainerRegistryCredentials",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * SDK support is limited to C# and Java for this API. Create or update a matchmaking queue configuration.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/setmatchmakingqueue
   */
  SetMatchmakingQueue(
    request: SetMatchmakingQueueRequest,
    callback: ApiCallback<SetMatchmakingQueueResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/SetMatchmakingQueue",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Shuts down a multiplayer server session.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/shutdownmultiplayerserver
   */
  ShutdownMultiplayerServer(
    request: ShutdownMultiplayerServerRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/ShutdownMultiplayerServer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Subscribe to lobby resource notifications.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/subscribetolobbyresource
   */
  SubscribeToLobbyResource(
    request: SubscribeToLobbyResourceRequest,
    callback: ApiCallback<SubscribeToLobbyResourceResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/SubscribeToLobbyResource",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Subscribe to match resource notifications.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/subscribetomatchmakingresource
   */
  SubscribeToMatchmakingResource(
    request: SubscribeToMatchResourceRequest,
    callback: ApiCallback<SubscribeToMatchResourceResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/SubscribeToMatchmakingResource",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Unsubscribe from lobby notifications.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/unsubscribefromlobbyresource
   */
  UnsubscribeFromLobbyResource(
    request: UnsubscribeFromLobbyResourceRequest,
    callback: ApiCallback<LobbyEmptyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/UnsubscribeFromLobbyResource",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Unsubscribe from match resource notifications.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/unsubscribefrommatchmakingresource
   */
  UnsubscribeFromMatchmakingResource(
    request: UnsubscribeFromMatchResourceRequest,
    callback: ApiCallback<UnsubscribeFromMatchResourceResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Match/UnsubscribeFromMatchmakingResource",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Untags a container image.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/untagcontainerimage
   */
  UntagContainerImage(
    request: UntagContainerImageRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/UntagContainerImage",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Creates a multiplayer server build alias.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildalias
   */
  UpdateBuildAlias(
    request: UpdateBuildAliasRequest,
    callback: ApiCallback<BuildAliasDetailsResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/UpdateBuildAlias",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Updates a multiplayer server build's name.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildname
   */
  UpdateBuildName(
    request: UpdateBuildNameRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/UpdateBuildName",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Updates a multiplayer server build's region. If the region is not yet created, it will be created
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildregion
   */
  UpdateBuildRegion(
    request: UpdateBuildRegionRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/UpdateBuildRegion",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Updates a multiplayer server build's regions.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildregions
   */
  UpdateBuildRegions(
    request: UpdateBuildRegionsRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/UpdateBuildRegions",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Update a lobby.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/updatelobby
   */
  UpdateLobby(
    request: UpdateLobbyRequest,
    callback: ApiCallback<LobbyEmptyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/UpdateLobby",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Preview: Update fields related to a joined server in the lobby the server is in. Servers can keep a lobby from expiring
   * by being the one to "update" the lobby in some way. Servers have no impact on last member leave/last member disconnect
   * behavior.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/updatelobbyasserver
   */
  UpdateLobbyAsServer(
    request: UpdateLobbyAsServerRequest,
    callback: ApiCallback<LobbyEmptyResult>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/Lobby/UpdateLobbyAsServer",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Uploads a multiplayer server game certificate.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/uploadcertificate
   */
  UploadCertificate(
    request: UploadCertificateRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/UploadCertificate",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
  /**
   * Uploads a multiplayer server game secret.
   * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/uploadsecret
   */
  UploadSecret(
    request: UploadSecretRequest,
    callback: ApiCallback<EmptyResponse>,
    customData?: any,
    extraHeaders?: Record<string, string>
  ) {
    return this.ExecuteRequestWrapper(
      "/MultiplayerServer/UploadSecret",
      request,
      "X-EntityToken",
      callback,
      customData,
      extraHeaders
    );
  }
}
