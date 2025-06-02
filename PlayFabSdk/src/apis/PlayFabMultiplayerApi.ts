import type { EmptyResponse } from "../types/PlayFab";
import type {
  CancelAllMatchmakingTicketsForPlayerRequest,
  CancelAllServerBackfillTicketsForPlayerRequest,
  CancelMatchmakingTicketRequest,
  CancelServerBackfillTicketRequest,
  CreateBuildAliasRequest,
  CreateBuildWithCustomContainerRequest,
  CreateBuildWithManagedContainerRequest,
  CreateBuildWithProcessBasedServerRequest,
  CreateLobbyRequest,
  CreateMatchmakingTicketRequest,
  CreateRemoteUserRequest,
  CreateServerBackfillTicketRequest,
  CreateServerMatchmakingTicketRequest,
  CreateTitleMultiplayerServersQuotaChangeRequest,
  DeleteAssetRequest,
  DeleteBuildRequest,
  DeleteBuildAliasRequest,
  DeleteBuildRegionRequest,
  DeleteCertificateRequest,
  DeleteContainerImageRequest,
  DeleteLobbyRequest,
  DeleteRemoteUserRequest,
  DeleteSecretRequest,
  EnableMultiplayerServersForTitleRequest,
  FindFriendLobbiesRequest,
  FindLobbiesRequest,
  GetAssetDownloadUrlRequest,
  GetAssetUploadUrlRequest,
  GetBuildRequest,
  GetBuildAliasRequest,
  GetContainerRegistryCredentialsRequest,
  GetLobbyRequest,
  GetMatchRequest,
  GetMatchmakingQueueRequest,
  GetMatchmakingTicketRequest,
  GetMultiplayerServerDetailsRequest,
  GetMultiplayerServerLogsRequest,
  GetMultiplayerSessionLogsBySessionIdRequest,
  GetQueueStatisticsRequest,
  GetRemoteLoginEndpointRequest,
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
  ListQosServersForTitleRequest,
  ListSecretSummariesRequest,
  ListServerBackfillTicketsForPlayerRequest,
  ListTitleMultiplayerServersQuotaChangesRequest,
  ListVirtualMachineSummariesRequest,
  RemoveMatchmakingQueueRequest,
  RemoveMemberFromLobbyRequest,
  RequestMultiplayerServerRequest,
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
  UploadCertificateRequest,
  UploadSecretRequest,
  CancelAllMatchmakingTicketsForPlayerResult,
  CancelAllServerBackfillTicketsForPlayerResult,
  CancelMatchmakingTicketResult,
  CancelServerBackfillTicketResult,
  BuildAliasDetailsResponse,
  CreateBuildWithCustomContainerResponse,
  CreateBuildWithManagedContainerResponse,
  CreateBuildWithProcessBasedServerResponse,
  CreateLobbyResult,
  CreateMatchmakingTicketResult,
  CreateRemoteUserResponse,
  CreateServerBackfillTicketResult,
  CreateTitleMultiplayerServersQuotaChangeResponse,
  LobbyEmptyResult,
  EnableMultiplayerServersForTitleResponse,
  FindFriendLobbiesResult,
  FindLobbiesResult,
  GetAssetDownloadUrlResponse,
  GetAssetUploadUrlResponse,
  GetBuildResponse,
  GetContainerRegistryCredentialsResponse,
  GetLobbyResult,
  GetMatchResult,
  GetMatchmakingQueueResult,
  GetMatchmakingTicketResult,
  GetMultiplayerServerDetailsResponse,
  GetMultiplayerServerLogsResponse,
  GetQueueStatisticsResult,
  GetRemoteLoginEndpointResponse,
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
  ListQosServersForTitleResponse,
  ListSecretSummariesResponse,
  ListServerBackfillTicketsForPlayerResult,
  ListTitleMultiplayerServersQuotaChangesResponse,
  ListVirtualMachineSummariesResponse,
  RemoveMatchmakingQueueResult,
  RequestMultiplayerServerResponse,
  RequestPartyServiceResponse,
  RolloverContainerRegistryCredentialsResponse,
  SetMatchmakingQueueResult,
  SubscribeToLobbyResourceResult,
  SubscribeToMatchResourceResult,
  UnsubscribeFromMatchResourceResult,
} from "../types/PlayFabMultiplayerApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabMultiplayerApi extends PlayFabCommon {

    /**
     * Cancel all active tickets the player is a member of in a given queue.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelallmatchmakingticketsforplayer
     */
    CancelAllMatchmakingTicketsForPlayer (request: CancelAllMatchmakingTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CancelAllMatchmakingTicketsForPlayerResult>("/Match/CancelAllMatchmakingTicketsForPlayer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Cancel all active backfill tickets the player is a member of in a given queue.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelallserverbackfillticketsforplayer
     */
    CancelAllServerBackfillTicketsForPlayer (request: CancelAllServerBackfillTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CancelAllServerBackfillTicketsForPlayerResult>("/Match/CancelAllServerBackfillTicketsForPlayer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Cancel a matchmaking ticket.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelmatchmakingticket
     */
    CancelMatchmakingTicket (request: CancelMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CancelMatchmakingTicketResult>("/Match/CancelMatchmakingTicket", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Cancel a server backfill ticket.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelserverbackfillticket
     */
    CancelServerBackfillTicket (request: CancelServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CancelServerBackfillTicketResult>("/Match/CancelServerBackfillTicket", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Creates a multiplayer server build alias.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildalias
     */
    CreateBuildAlias (request: CreateBuildAliasRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/CreateBuildAlias", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Creates a multiplayer server build with a custom container.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithcustomcontainer
     */
    CreateBuildWithCustomContainer (request: CreateBuildWithCustomContainerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateBuildWithCustomContainerResponse>("/MultiplayerServer/CreateBuildWithCustomContainer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Creates a multiplayer server build with a managed container.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithmanagedcontainer
     */
    CreateBuildWithManagedContainer (request: CreateBuildWithManagedContainerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateBuildWithManagedContainerResponse>("/MultiplayerServer/CreateBuildWithManagedContainer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Creates a multiplayer server build with the server running as a process.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithprocessbasedserver
     */
    CreateBuildWithProcessBasedServer (request: CreateBuildWithProcessBasedServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateBuildWithProcessBasedServerResponse>("/MultiplayerServer/CreateBuildWithProcessBasedServer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Create a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/createlobby
     */
    CreateLobby (request: CreateLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateLobbyResult>("/Lobby/CreateLobby", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Create a matchmaking ticket as a client.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/creatematchmakingticket
     */
    CreateMatchmakingTicket (request: CreateMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateMatchmakingTicketResult>("/Match/CreateMatchmakingTicket", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Creates a remote user to log on to a VM for a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createremoteuser
     */
    CreateRemoteUser (request: CreateRemoteUserRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateRemoteUserResponse>("/MultiplayerServer/CreateRemoteUser", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Create a backfill matchmaking ticket as a server. A backfill ticket represents an ongoing game. The matchmaking service
     * automatically starts matching the backfill ticket against other matchmaking tickets. Backfill tickets cannot match with
     * other backfill tickets.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/createserverbackfillticket
     */
    CreateServerBackfillTicket (request: CreateServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateServerBackfillTicketResult>("/Match/CreateServerBackfillTicket", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Create a matchmaking ticket as a server. The matchmaking service automatically starts matching the ticket against other
     * matchmaking tickets.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/createservermatchmakingticket
     */
    CreateServerMatchmakingTicket (request: CreateServerMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateMatchmakingTicketResult>("/Match/CreateServerMatchmakingTicket", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Creates a request to change a title's multiplayer server quotas.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createtitlemultiplayerserversquotachange
     */
    CreateTitleMultiplayerServersQuotaChange (request: CreateTitleMultiplayerServersQuotaChangeRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<CreateTitleMultiplayerServersQuotaChangeResponse>("/MultiplayerServer/CreateTitleMultiplayerServersQuotaChange", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a multiplayer server game asset for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deleteasset
     */
    DeleteAsset (request: DeleteAssetRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteAsset", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuild
     */
    DeleteBuild (request: DeleteBuildRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuild", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a multiplayer server build alias.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuildalias
     */
    DeleteBuildAlias (request: DeleteBuildAliasRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuildAlias", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Removes a multiplayer server build's region.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuildregion
     */
    DeleteBuildRegion (request: DeleteBuildRegionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuildRegion", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a multiplayer server game certificate.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletecertificate
     */
    DeleteCertificate (request: DeleteCertificateRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteCertificate", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a container image repository.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletecontainerimagerepository
     */
    DeleteContainerImageRepository (request: DeleteContainerImageRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteContainerImageRepository", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Delete a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/deletelobby
     */
    DeleteLobby (request: DeleteLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/DeleteLobby", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a remote user to log on to a VM for a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deleteremoteuser
     */
    DeleteRemoteUser (request: DeleteRemoteUserRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteRemoteUser", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Deletes a multiplayer server game secret.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletesecret
     */
    DeleteSecret (request: DeleteSecretRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteSecret", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Enables the multiplayer server feature for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/enablemultiplayerserversfortitle
     */
    EnableMultiplayerServersForTitle (request: EnableMultiplayerServersForTitleRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EnableMultiplayerServersForTitleResponse>("/MultiplayerServer/EnableMultiplayerServersForTitle", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Find lobbies which match certain criteria, and which friends are in.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/findfriendlobbies
     */
    FindFriendLobbies (request: FindFriendLobbiesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<FindFriendLobbiesResult>("/Lobby/FindFriendLobbies", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Find all the lobbies that match certain criteria.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/findlobbies
     */
    FindLobbies (request: FindLobbiesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<FindLobbiesResult>("/Lobby/FindLobbies", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets a URL that can be used to download the specified asset. A sample pre-authenticated url -
     * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getassetdownloadurl
     */
    GetAssetDownloadUrl (request: GetAssetDownloadUrlRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetAssetDownloadUrlResponse>("/MultiplayerServer/GetAssetDownloadUrl", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets the URL to upload assets to. A sample pre-authenticated url -
     * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getassetuploadurl
     */
    GetAssetUploadUrl (request: GetAssetUploadUrlRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetAssetUploadUrlResponse>("/MultiplayerServer/GetAssetUploadUrl", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getbuild
     */
    GetBuild (request: GetBuildRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetBuildResponse>("/MultiplayerServer/GetBuild", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets a multiplayer server build alias.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getbuildalias
     */
    GetBuildAlias (request: GetBuildAliasRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/GetBuildAlias", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets the credentials to the container registry.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getcontainerregistrycredentials
     */
    GetContainerRegistryCredentials (request: GetContainerRegistryCredentialsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetContainerRegistryCredentialsResponse>("/MultiplayerServer/GetContainerRegistryCredentials", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/getlobby
     */
    GetLobby (request: GetLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetLobbyResult>("/Lobby/GetLobby", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get a match.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getmatch
     */
    GetMatch (request: GetMatchRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetMatchResult>("/Match/GetMatch", request, "X-EntityToken", extraHeaders);
    }

    /**
     * SDK support is limited to C# and Java for this API. Get a matchmaking queue configuration.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/getmatchmakingqueue
     */
    GetMatchmakingQueue (request: GetMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetMatchmakingQueueResult>("/Match/GetMatchmakingQueue", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get a matchmaking ticket by ticket Id.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getmatchmakingticket
     */
    GetMatchmakingTicket (request: GetMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetMatchmakingTicketResult>("/Match/GetMatchmakingTicket", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets multiplayer server session details for a build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayerserverdetails
     */
    GetMultiplayerServerDetails (request: GetMultiplayerServerDetailsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetMultiplayerServerDetailsResponse>("/MultiplayerServer/GetMultiplayerServerDetails", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets multiplayer server logs after a server has terminated.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayerserverlogs
     */
    GetMultiplayerServerLogs (request: GetMultiplayerServerLogsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetMultiplayerServerLogsResponse>("/MultiplayerServer/GetMultiplayerServerLogs", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets multiplayer server logs after a server has terminated.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayersessionlogsbysessionid
     */
    GetMultiplayerSessionLogsBySessionId (request: GetMultiplayerSessionLogsBySessionIdRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetMultiplayerServerLogsResponse>("/MultiplayerServer/GetMultiplayerSessionLogsBySessionId", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get the statistics for a queue.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getqueuestatistics
     */
    GetQueueStatistics (request: GetQueueStatisticsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetQueueStatisticsResult>("/Match/GetQueueStatistics", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets a remote login endpoint to a VM that is hosting a multiplayer server build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getremoteloginendpoint
     */
    GetRemoteLoginEndpoint (request: GetRemoteLoginEndpointRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetRemoteLoginEndpointResponse>("/MultiplayerServer/GetRemoteLoginEndpoint", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Get a matchmaking backfill ticket by ticket Id.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getserverbackfillticket
     */
    GetServerBackfillTicket (request: GetServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetServerBackfillTicketResult>("/Match/GetServerBackfillTicket", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets the status of whether a title is enabled for the multiplayer server feature.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitleenabledformultiplayerserversstatus
     */
    GetTitleEnabledForMultiplayerServersStatus (request: GetTitleEnabledForMultiplayerServersStatusRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleEnabledForMultiplayerServersStatusResponse>("/MultiplayerServer/GetTitleEnabledForMultiplayerServersStatus", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets a title's server quota change request.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitlemultiplayerserversquotachange
     */
    GetTitleMultiplayerServersQuotaChange (request: GetTitleMultiplayerServersQuotaChangeRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleMultiplayerServersQuotaChangeResponse>("/MultiplayerServer/GetTitleMultiplayerServersQuotaChange", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Gets the quotas for a title in relation to multiplayer servers.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitlemultiplayerserversquotas
     */
    GetTitleMultiplayerServersQuotas (request: GetTitleMultiplayerServersQuotasRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<GetTitleMultiplayerServersQuotasResponse>("/MultiplayerServer/GetTitleMultiplayerServersQuotas", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Send a notification to invite a player to a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/invitetolobby
     */
    InviteToLobby (request: InviteToLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/InviteToLobby", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Join an Arranged lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinarrangedlobby
     */
    JoinArrangedLobby (request: JoinArrangedLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<JoinLobbyResult>("/Lobby/JoinArrangedLobby", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Join a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinlobby
     */
    JoinLobby (request: JoinLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<JoinLobbyResult>("/Lobby/JoinLobby", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Preview: Join a lobby as a server entity. This is restricted to client lobbies which are using connections.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinlobbyasserver
     */
    JoinLobbyAsServer (request: JoinLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<JoinLobbyAsServerResult>("/Lobby/JoinLobbyAsServer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Join a matchmaking ticket.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/joinmatchmakingticket
     */
    JoinMatchmakingTicket (request: JoinMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<JoinMatchmakingTicketResult>("/Match/JoinMatchmakingTicket", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Leave a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/leavelobby
     */
    LeaveLobby (request: LeaveLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/LeaveLobby", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Preview: Request for server to leave a lobby. This is restricted to client owned lobbies which are using connections.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/leavelobbyasserver
     */
    LeaveLobbyAsServer (request: LeaveLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/LeaveLobbyAsServer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists archived multiplayer server sessions for a build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listarchivedmultiplayerservers
     */
    ListArchivedMultiplayerServers (request: ListMultiplayerServersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListMultiplayerServersResponse>("/MultiplayerServer/ListArchivedMultiplayerServers", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists multiplayer server game assets for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listassetsummaries
     */
    ListAssetSummaries (request: ListAssetSummariesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListAssetSummariesResponse>("/MultiplayerServer/ListAssetSummaries", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists details of all build aliases for a title. Accepts tokens for title and if game client access is enabled, allows
     * game client to request list of builds with player entity token.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listbuildaliases
     */
    ListBuildAliases (request: ListBuildAliasesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListBuildAliasesResponse>("/MultiplayerServer/ListBuildAliases", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client
     * access is enabled, allows game client to request list of builds with player entity token.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listbuildsummariesv2
     */
    ListBuildSummariesV2 (request: ListBuildSummariesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListBuildSummariesResponse>("/MultiplayerServer/ListBuildSummariesV2", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists multiplayer server game certificates for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcertificatesummaries
     */
    ListCertificateSummaries (request: ListCertificateSummariesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListCertificateSummariesResponse>("/MultiplayerServer/ListCertificateSummaries", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists custom container images for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcontainerimages
     */
    ListContainerImages (request: ListContainerImagesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListContainerImagesResponse>("/MultiplayerServer/ListContainerImages", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists the tags for a custom container image.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcontainerimagetags
     */
    ListContainerImageTags (request: ListContainerImageTagsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListContainerImageTagsResponse>("/MultiplayerServer/ListContainerImageTags", request, "X-EntityToken", extraHeaders);
    }

    /**
     * SDK support is limited to C# and Java for this API. List all matchmaking queue configs.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/listmatchmakingqueues
     */
    ListMatchmakingQueues (request: ListMatchmakingQueuesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListMatchmakingQueuesResult>("/Match/ListMatchmakingQueues", request, "X-EntityToken", extraHeaders);
    }

    /**
     * List all matchmaking ticket Ids the user is a member of.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/listmatchmakingticketsforplayer
     */
    ListMatchmakingTicketsForPlayer (request: ListMatchmakingTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListMatchmakingTicketsForPlayerResult>("/Match/ListMatchmakingTicketsForPlayer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists multiplayer server sessions for a build.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listmultiplayerservers
     */
    ListMultiplayerServers (request: ListMultiplayerServersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListMultiplayerServersResponse>("/MultiplayerServer/ListMultiplayerServers", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists quality of service servers for party.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listpartyqosservers
     */
    ListPartyQosServers (request: ListPartyQosServersRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListPartyQosServersResponse>("/MultiplayerServer/ListPartyQosServers", request, null, extraHeaders);
    }

    /**
     * Lists quality of service servers for the title. By default, servers are only returned for regions where a Multiplayer
     * Servers build has been deployed.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listqosserversfortitle
     */
    ListQosServersForTitle (request: ListQosServersForTitleRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListQosServersForTitleResponse>("/MultiplayerServer/ListQosServersForTitle", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists multiplayer server game secrets for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listsecretsummaries
     */
    ListSecretSummaries (request: ListSecretSummariesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListSecretSummariesResponse>("/MultiplayerServer/ListSecretSummaries", request, "X-EntityToken", extraHeaders);
    }

    /**
     * List all server backfill ticket Ids the user is a member of.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/listserverbackfillticketsforplayer
     */
    ListServerBackfillTicketsForPlayer (request: ListServerBackfillTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListServerBackfillTicketsForPlayerResult>("/Match/ListServerBackfillTicketsForPlayer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * List all server quota change requests for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listtitlemultiplayerserversquotachanges
     */
    ListTitleMultiplayerServersQuotaChanges (request: ListTitleMultiplayerServersQuotaChangesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListTitleMultiplayerServersQuotaChangesResponse>("/MultiplayerServer/ListTitleMultiplayerServersQuotaChanges", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Lists virtual machines for a title.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listvirtualmachinesummaries
     */
    ListVirtualMachineSummaries (request: ListVirtualMachineSummariesRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<ListVirtualMachineSummariesResponse>("/MultiplayerServer/ListVirtualMachineSummaries", request, "X-EntityToken", extraHeaders);
    }

    /**
     * SDK support is limited to C# and Java for this API. Remove a matchmaking queue config.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/removematchmakingqueue
     */
    RemoveMatchmakingQueue (request: RemoveMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RemoveMatchmakingQueueResult>("/Match/RemoveMatchmakingQueue", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Remove a member from a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/removemember
     */
    RemoveMember (request: RemoveMemberFromLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/RemoveMember", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Request a multiplayer server session. Accepts tokens for title and if game client access is enabled, allows game client
     * to request a server with player entity token.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/requestmultiplayerserver
     */
    RequestMultiplayerServer (request: RequestMultiplayerServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RequestMultiplayerServerResponse>("/MultiplayerServer/RequestMultiplayerServer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Request a party session.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/requestpartyservice
     */
    RequestPartyService (request: RequestPartyServiceRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RequestPartyServiceResponse>("/Party/RequestPartyService", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Rolls over the credentials to the container registry.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/rollovercontainerregistrycredentials
     */
    RolloverContainerRegistryCredentials (request: RolloverContainerRegistryCredentialsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<RolloverContainerRegistryCredentialsResponse>("/MultiplayerServer/RolloverContainerRegistryCredentials", request, "X-EntityToken", extraHeaders);
    }

    /**
     * SDK support is limited to C# and Java for this API. Create or update a matchmaking queue configuration.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/setmatchmakingqueue
     */
    SetMatchmakingQueue (request: SetMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SetMatchmakingQueueResult>("/Match/SetMatchmakingQueue", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Shuts down a multiplayer server session.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/shutdownmultiplayerserver
     */
    ShutdownMultiplayerServer (request: ShutdownMultiplayerServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/ShutdownMultiplayerServer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Subscribe to lobby resource notifications.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/subscribetolobbyresource
     */
    SubscribeToLobbyResource (request: SubscribeToLobbyResourceRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SubscribeToLobbyResourceResult>("/Lobby/SubscribeToLobbyResource", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Subscribe to match resource notifications.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/subscribetomatchmakingresource
     */
    SubscribeToMatchmakingResource (request: SubscribeToMatchResourceRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<SubscribeToMatchResourceResult>("/Match/SubscribeToMatchmakingResource", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Unsubscribe from lobby notifications.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/unsubscribefromlobbyresource
     */
    UnsubscribeFromLobbyResource (request: UnsubscribeFromLobbyResourceRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UnsubscribeFromLobbyResource", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Unsubscribe from match resource notifications.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/unsubscribefrommatchmakingresource
     */
    UnsubscribeFromMatchmakingResource (request: UnsubscribeFromMatchResourceRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<UnsubscribeFromMatchResourceResult>("/Match/UnsubscribeFromMatchmakingResource", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Untags a container image.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/untagcontainerimage
     */
    UntagContainerImage (request: UntagContainerImageRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UntagContainerImage", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Creates a multiplayer server build alias.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildalias
     */
    UpdateBuildAlias (request: UpdateBuildAliasRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/UpdateBuildAlias", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Updates a multiplayer server build's name.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildname
     */
    UpdateBuildName (request: UpdateBuildNameRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildName", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Updates a multiplayer server build's region. If the region is not yet created, it will be created
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildregion
     */
    UpdateBuildRegion (request: UpdateBuildRegionRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildRegion", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Updates a multiplayer server build's regions.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildregions
     */
    UpdateBuildRegions (request: UpdateBuildRegionsRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildRegions", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Update a lobby.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/updatelobby
     */
    UpdateLobby (request: UpdateLobbyRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UpdateLobby", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Preview: Update fields related to a joined server in the lobby the server is in. Servers can keep a lobby from expiring
     * by being the one to "update" the lobby in some way. Servers have no impact on last member leave/last member disconnect
     * behavior.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/updatelobbyasserver
     */
    UpdateLobbyAsServer (request: UpdateLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UpdateLobbyAsServer", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Uploads a multiplayer server game certificate.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/uploadcertificate
     */
    UploadCertificate (request: UploadCertificateRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UploadCertificate", request, "X-EntityToken", extraHeaders);
    }

    /**
     * Uploads a multiplayer server game secret.
     * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/uploadsecret
     */
    UploadSecret (request: UploadSecretRequest, extraHeaders?: Record<string, string>) {
        return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UploadSecret", request, "X-EntityToken", extraHeaders);
    }

};
