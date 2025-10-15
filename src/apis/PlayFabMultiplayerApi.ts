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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/cancelallmatchmakingticketsforplayer Microsoft Documentation}
   * @example
   * await matchClient.CancelAllMatchmakingTicketsForPlayer({
   *   "Entity": {
   *     "Id": "123123123",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "QueueName": "custom123"
   * });
   */
  CancelAllMatchmakingTicketsForPlayer (request: CancelAllMatchmakingTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelAllMatchmakingTicketsForPlayerResult>("/Match/CancelAllMatchmakingTicketsForPlayer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cancel all active backfill tickets the player is a member of in a given queue.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/cancelallserverbackfillticketsforplayer Microsoft Documentation}
   * @example
   * await matchClient.CancelAllServerBackfillTicketsForPlayer({
   *   "Entity": {
   *     "Id": "123123123",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "QueueName": "custom123"
   * });
   */
  CancelAllServerBackfillTicketsForPlayer (request: CancelAllServerBackfillTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelAllServerBackfillTicketsForPlayerResult>("/Match/CancelAllServerBackfillTicketsForPlayer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cancel a matchmaking ticket.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/cancelmatchmakingticket Microsoft Documentation}
   * @example
   * await matchClient.CancelMatchmakingTicket({
   *   "TicketId": "1c4b0daa-150e-47ae-9923-d770c0f9b07c",
   *   "QueueName": "custom123"
   * });
   */
  CancelMatchmakingTicket (request: CancelMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelMatchmakingTicketResult>("/Match/CancelMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cancel a batch model creation.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/cancelmodel Microsoft Documentation}
   * @example
   * await trueskillClient.CancelModel({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf"
   * });
   */
  CancelModel (request: CancelModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelModelResponse>("/TrueSkill/CancelModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Cancel a server backfill ticket.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/cancelserverbackfillticket Microsoft Documentation}
   * @example
   * await matchClient.CancelServerBackfillTicket({
   *   "TicketId": "1c4b0daa-150e-47ae-9923-d770c0f9b07c",
   *   "QueueName": "custom123"
   * });
   */
  CancelServerBackfillTicket (request: CancelServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CancelServerBackfillTicketResult>("/Match/CancelServerBackfillTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a base model with default settings.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/createbasemodel Microsoft Documentation}
   * @example
   * await trueskillClient.CreateBaseModel({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ModelName": "Test Batch Model",
   *   "Conditions": [
   *     {
   *       "Key": "Platform",
   *       "Rank": 2
   *     },
   *     {
   *       "Key": "GameMode",
   *       "Rank": 1
   *     }
   *   ]
   * });
   */
  CreateBaseModel (request: CreateBaseModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBaseModelResponse>("/TrueSkill/CreateBaseModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a batch model that is learned from a title's match results in a scenario.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/createbatchmodel Microsoft Documentation}
   * @example
   * await trueskillClient.CreateBatchModel({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ModelName": "Test Batch Model",
   *   "Conditions": [
   *     {
   *       "Key": "Platform",
   *       "Rank": 2
   *     },
   *     {
   *       "Key": "GameMode",
   *       "Rank": 1
   *     }
   *   ],
   *   "Events": [
   *     "Kills",
   *     "Deaths"
   *   ],
   *   "InitialSettingsModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf",
   *   "MatchResultStartTimeUtc": "2025-10-10T13:31:54.877Z",
   *   "MatchResultEndTimeUtc": "2025-10-10T14:01:54.877Z",
   *   "MaxIterations": 100,
   *   "AnomalousMatchResultIgnoreThreshold": -20.0
   * });
   */
  CreateBatchModel (request: CreateBatchModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBatchModelResponse>("/TrueSkill/CreateBatchModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build alias.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createbuildalias Microsoft Documentation}
   * @example
   * await multiplayerserverClient.CreateBuildAlias({
   *   "AliasName": "AliasName",
   *   "BuildSelectionCriteria": [
   *     {
   *       "BuildWeightDistribution": {
   *         "53781fa8-006d-4e9c-b733-57433d579285": 1
   *       }
   *     }
   *   ]
   * });
   */
  CreateBuildAlias (request: CreateBuildAliasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/CreateBuildAlias", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build with a custom container.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createbuildwithcustomcontainer Microsoft Documentation}
   * @example
   * await multiplayerserverClient.CreateBuildWithCustomContainer({
   *   "ContainerRunCommand": "/data/Assets -startserver",
   *   "GameAssetReferences": [
   *     {
   *       "FileName": "gameserver.zip",
   *       "MountPath": "/data/Assets"
   *     }
   *   ],
   *   "ContainerImageReference": {
   *     "ImageName": "ContainerImageName",
   *     "Tag": "ContainerTag"
   *   },
   *   "LinuxInstrumentationConfiguration": {
   *     "IsEnabled": false
   *   },
   *   "ContainerFlavor": "CustomLinux",
   *   "ServerResourceConstraints": {
   *     "CpuLimit": 0.5,
   *     "MemoryLimitGB": 0.5
   *   },
   *   "BuildName": "GameBuildName",
   *   "Metadata": {
   *     "MetadataKey": "MetadataValue"
   *   },
   *   "VmSize": "Standard_D2_v2",
   *   "MultiplayerServerCountPerVm": 10,
   *   "Ports": [
   *     {
   *       "Name": "PortName",
   *       "Num": 1243,
   *       "Protocol": "TCP"
   *     }
   *   ],
   *   "RegionConfigurations": [
   *     {
   *       "Region": "EastUs",
   *       "MaxServers": 10,
   *       "StandbyServers": 5,
   *       "ScheduledStandbySettings": {
   *         "IsEnabled": true,
   *         "ScheduleList": [
   *           {
   *             "StartTime": "2020-08-21T17:00:00Z",
   *             "EndTime": "2020-08-24T09:00:00Z",
   *             "IsRecurringWeekly": true,
   *             "IsDisabled": false,
   *             "Description": "Weekend Schedule",
   *             "TargetStandby": 8
   *           },
   *           {
   *             "StartTime": "2020-08-24T09:00:00Z",
   *             "EndTime": "2020-08-28T17:00:00Z",
   *             "IsRecurringWeekly": true,
   *             "IsDisabled": false,
   *             "Description": "Weekday Schedule",
   *             "TargetStandby": 3
   *           }
   *         ]
   *       },
   *       "RoutingSettings": {
   *         "NumberOfMicrosoftRoutingIPs": 1,
   *         "NumberOfInternetRoutingIPs": 1,
   *         "DefaultRoutingType": 1
   *       }
   *     },
   *     {
   *       "Region": "WestUs",
   *       "MaxServers": 50,
   *       "StandbyServers": 8,
   *       "ScheduledStandbySettings": {
   *         "IsEnabled": true,
   *         "ScheduleList": [
   *           {
   *             "StartTime": "2020-08-21T09:00:00Z",
   *             "EndTime": "2020-08-21T23:00:00Z",
   *             "IsRecurringWeekly": false,
   *             "IsDisabled": false,
   *             "Description": "Game Launch",
   *             "TargetStandby": 30
   *           }
   *         ]
   *       }
   *     },
   *     {
   *       "Region": "NorthEurope",
   *       "MaxServers": 7,
   *       "StandbyServers": 3
   *     }
   *   ],
   *   "GameCertificateReferences": [
   *     {
   *       "Name": "CertName",
   *       "GsdkAlias": "CertGsdkAlias"
   *     }
   *   ],
   *   "GameSecretReferences": [
   *     {
   *       "Name": "SecretName"
   *     }
   *   ],
   *   "RoutingSettings": {
   *     "NumberOfMicrosoftRoutingIPs": 1,
   *     "NumberOfInternetRoutingIPs": 0,
   *     "DefaultRoutingType": 0
   *   }
   * });
   */
  CreateBuildWithCustomContainer (request: CreateBuildWithCustomContainerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBuildWithCustomContainerResponse>("/MultiplayerServer/CreateBuildWithCustomContainer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build with a managed container.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createbuildwithmanagedcontainer Microsoft Documentation}
   * @example
   * await multiplayerserverClient.CreateBuildWithManagedContainer({
   *   "StartMultiplayerServerCommand": "gameserver.exe -startserver",
   *   "GameAssetReferences": [
   *     {
   *       "FileName": "gameserver.zip",
   *       "MountPath": "C:\\Asset\\"
   *     }
   *   ],
   *   "InstrumentationConfiguration": {
   *     "ProcessesToMonitor": [
   *       "GameServerProcessName"
   *     ],
   *     "IsEnabled": true
   *   },
   *   "GameWorkingDirectory": "C:\\Assets",
   *   "ContainerFlavor": "ManagedWindowsServerCore",
   *   "ServerResourceConstraints": {
   *     "CpuLimit": 0.5,
   *     "MemoryLimitGB": 0.5
   *   },
   *   "BuildName": "GameBuildName",
   *   "Metadata": {
   *     "MetadataKey": "MetadataValue"
   *   },
   *   "VmSize": "Standard_D2_v2",
   *   "MultiplayerServerCountPerVm": 10,
   *   "Ports": [
   *     {
   *       "Name": "PortName",
   *       "Num": 1243,
   *       "Protocol": "TCP"
   *     }
   *   ],
   *   "RegionConfigurations": [
   *     {
   *       "Region": "EastUs",
   *       "MaxServers": 10,
   *       "StandbyServers": 5,
   *       "ScheduledStandbySettings": {
   *         "IsEnabled": true,
   *         "ScheduleList": [
   *           {
   *             "StartTime": "2020-08-21T17:00:00Z",
   *             "EndTime": "2020-08-24T09:00:00Z",
   *             "IsRecurringWeekly": true,
   *             "IsDisabled": false,
   *             "Description": "Weekend Schedule",
   *             "TargetStandby": 8
   *           },
   *           {
   *             "StartTime": "2020-08-24T09:00:00Z",
   *             "EndTime": "2020-08-28T17:00:00Z",
   *             "IsRecurringWeekly": true,
   *             "IsDisabled": false,
   *             "Description": "Weekday Schedule",
   *             "TargetStandby": 3
   *           }
   *         ]
   *       }
   *     },
   *     {
   *       "Region": "WestUs",
   *       "MaxServers": 50,
   *       "StandbyServers": 8,
   *       "ScheduledStandbySettings": {
   *         "IsEnabled": true,
   *         "ScheduleList": [
   *           {
   *             "StartTime": "2020-08-21T09:00:00Z",
   *             "EndTime": "2020-08-21T23:00:00Z",
   *             "IsRecurringWeekly": false,
   *             "IsDisabled": false,
   *             "Description": "Game Launch",
   *             "TargetStandby": 30
   *           }
   *         ]
   *       }
   *     },
   *     {
   *       "Region": "NorthEurope",
   *       "MaxServers": 7,
   *       "StandbyServers": 3
   *     }
   *   ],
   *   "GameCertificateReferences": [
   *     {
   *       "Name": "CertName",
   *       "GsdkAlias": "CertGsdkAlias"
   *     }
   *   ],
   *   "GameSecretReferences": [
   *     {
   *       "Name": "SecretName"
   *     }
   *   ]
   * });
   */
  CreateBuildWithManagedContainer (request: CreateBuildWithManagedContainerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBuildWithManagedContainerResponse>("/MultiplayerServer/CreateBuildWithManagedContainer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build with the server running as a process.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createbuildwithprocessbasedserver Microsoft Documentation}
   * @example
   * await multiplayerserverClient.CreateBuildWithProcessBasedServer({
   *   "OsPlatform": "Windows",
   *   "GameAssetReferences": [
   *     {
   *       "FileName": "game.zip"
   *     }
   *   ],
   *   "StartMultiplayerServerCommand": "gameserver.exe -startserver",
   *   "InstrumentationConfiguration": {
   *     "ProcessesToMonitor": [
   *       "GameServerProcessName"
   *     ],
   *     "IsEnabled": true
   *   },
   *   "GameWorkingDirectory": "C:\\Assets",
   *   "IsOSPreview": false,
   *   "VmSize": "Standard_D2_v2",
   *   "MultiplayerServerCountPerVm": 10,
   *   "Ports": [
   *     {
   *       "Name": "PortName",
   *       "Num": 1243,
   *       "Protocol": "TCP"
   *     }
   *   ],
   *   "RegionConfigurations": [
   *     {
   *       "Region": "EastUs",
   *       "MaxServers": 10,
   *       "StandbyServers": 5
   *     },
   *     {
   *       "Region": "WestUs",
   *       "MaxServers": 12,
   *       "StandbyServers": 8
   *     },
   *     {
   *       "Region": "NorthEurope",
   *       "MaxServers": 7,
   *       "StandbyServers": 3
   *     }
   *   ],
   *   "GameCertificateReferences": [
   *     {
   *       "Name": "CertName",
   *       "GsdkAlias": "CertGsdkAlias"
   *     }
   *   ],
   *   "GameSecretReferences": [
   *     {
   *       "Name": "SecretName"
   *     }
   *   ]
   * });
   */
  CreateBuildWithProcessBasedServer (request: CreateBuildWithProcessBasedServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateBuildWithProcessBasedServerResponse>("/MultiplayerServer/CreateBuildWithProcessBasedServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/createlobby Microsoft Documentation}
   * @example
   * await lobbyClient.CreateLobby({
   *   "MaxPlayers": 50,
   *   "Owner": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "OwnerMigrationPolicy": "Automatic",
   *   "UseConnections": true,
   *   "AccessPolicy": "Public",
   *   "SearchData": {
   *     "string_key1": "searchable value"
   *   },
   *   "LobbyData": {
   *     "MyGameKey": "MyGameKey value"
   *   },
   *   "Members": [
   *     {
   *       "MemberEntity": {
   *         "Id": "1234",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       }
   *     }
   *   ],
   *   "RestrictInvitesToLobbyOwner": false
   * });
   */
  CreateLobby (request: CreateLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateLobbyResult>("/Lobby/CreateLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a matchmaking ticket as a client.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/creatematchmakingticket Microsoft Documentation}
   * @example
   * await matchClient.CreateMatchmakingTicket({
   *   "Creator": {},
   *   "MembersToMatchWith": [],
   *   "GiveUpAfterSeconds": 100,
   *   "QueueName": "custom123"
   * });
   */
  CreateMatchmakingTicket (request: CreateMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateMatchmakingTicketResult>("/Match/CreateMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a remote user to log on to a VM for a multiplayer server build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createremoteuser Microsoft Documentation}
   * @example
   * await multiplayerserverClient.CreateRemoteUser({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "Region": "SouthCentralUs",
   *   "VmId": "VmID1",
   *   "Username": "AUsername",
   *   "ExpirationTime": "2014-04-07T09:04:28Z"
   * });
   */
  CreateRemoteUser (request: CreateRemoteUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateRemoteUserResponse>("/MultiplayerServer/CreateRemoteUser", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a scenario to specify which conditions, conditions values and events will be allowed when submitting match
   * results.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/createscenario Microsoft Documentation}
   * @example
   * await trueskillClient.CreateScenario({
   *   "Name": "Test Scenario",
   *   "Conditions": [
   *     {
   *       "Key": "Platform",
   *       "Values": [
   *         "PC",
   *         "Xbox"
   *       ]
   *     },
   *     {
   *       "Key": "GameMode",
   *       "Values": [
   *         "TeamDeathMatch",
   *         "CaptureTheFlag"
   *       ]
   *     }
   *   ],
   *   "Events": [
   *     "Kills",
   *     "Deaths"
   *   ]
   * });
   */
  CreateScenario (request: CreateScenarioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateScenarioResponse>("/TrueSkill/CreateScenario", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a backfill matchmaking ticket as a server. A backfill ticket represents an ongoing game. The matchmaking service
   * automatically starts matching the backfill ticket against other matchmaking tickets. Backfill tickets cannot match with
   * other backfill tickets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/createserverbackfillticket Microsoft Documentation}
   * @example
   * await matchClient.CreateServerBackfillTicket({
   *   "Members": [],
   *   "GiveUpAfterSeconds": 100,
   *   "ServerDetails": {
   *     "IPV4Address": "10.250.24.54",
   *     "Ports": [
   *       {
   *         "Name": "PortName",
   *         "Num": 1243,
   *         "Protocol": "TCP"
   *       }
   *     ],
   *     "Region": "WestUS",
   *     "Fqdn": "vm.azure.cloudapp.net",
   *     "ServerId": "359e4634-7c8f-4d44-87a5-f3a876aac6c0"
   *   },
   *   "QueueName": "custom123"
   * });
   */
  CreateServerBackfillTicket (request: CreateServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateServerBackfillTicketResult>("/Match/CreateServerBackfillTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Create a matchmaking ticket as a server. The matchmaking service automatically starts matching the ticket against other
   * matchmaking tickets.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/createservermatchmakingticket Microsoft Documentation}
   * @example
   * await matchClient.CreateServerMatchmakingTicket({
   *   "Members": [
   *     null
   *   ],
   *   "GiveUpAfterSeconds": 100,
   *   "QueueName": "custom123"
   * });
   */
  CreateServerMatchmakingTicket (request: CreateServerMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateMatchmakingTicketResult>("/Match/CreateServerMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a request to change a title's multiplayer server quotas.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/createtitlemultiplayerserversquotachange Microsoft Documentation}
   * @example
   * await multiplayerserverClient.CreateTitleMultiplayerServersQuotaChange({
   *   "ContactEmail": "john@mygamestudio.com",
   *   "StartDate": "2020-01-23T00:00:00Z",
   *   "ChangeDescription": "Season 3 Launch",
   *   "Notes": "Based on the last launch, we expect 1 trillion active users.",
   *   "Changes": [
   *     {
   *       "VmFamily": "Dasv4",
   *       "Region": "EastUs",
   *       "NewCoreLimit": 55000
   *     },
   *     {
   *       "VmFamily": "Dasv4",
   *       "Region": "NorthCentralUs",
   *       "NewCoreLimit": 65000
   *     }
   *   ]
   * });
   */
  CreateTitleMultiplayerServersQuotaChange (request: CreateTitleMultiplayerServersQuotaChangeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<CreateTitleMultiplayerServersQuotaChangeResponse>("/MultiplayerServer/CreateTitleMultiplayerServersQuotaChange", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Switch a model's state from Active to Deactivated.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/deactivatemodel Microsoft Documentation}
   * @example
   * await trueskillClient.DeactivateModel({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf"
   * });
   */
  DeactivateModel (request: DeactivateModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeactivateModelResponse>("/TrueSkill/DeactivateModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server game asset for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deleteasset Microsoft Documentation}
   * @example
   * await multiplayerserverClient.DeleteAsset({
   *   "FileName": "gameserver.zip"
   * });
   */
  DeleteAsset (request: DeleteAssetRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteAsset", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletebuild Microsoft Documentation}
   * @example
   * await multiplayerserverClient.DeleteBuild({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285"
   * });
   */
  DeleteBuild (request: DeleteBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuild", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server build alias.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletebuildalias Microsoft Documentation}
   * @example
   * await multiplayerserverClient.DeleteBuildAlias({
   *   "AliasId": "21781fa8-096d-4d9c-b699-75433d579285"
   * });
   */
  DeleteBuildAlias (request: DeleteBuildAliasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuildAlias", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Removes a multiplayer server build's region.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletebuildregion Microsoft Documentation}
   * @example
   * await multiplayerserverClient.DeleteBuildRegion({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "Region": "JapanEast"
   * });
   */
  DeleteBuildRegion (request: DeleteBuildRegionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteBuildRegion", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server game certificate.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletecertificate Microsoft Documentation}
   * @example
   * await multiplayerserverClient.DeleteCertificate({
   *   "Name": "GameCertificate1"
   * });
   */
  DeleteCertificate (request: DeleteCertificateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteCertificate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a container image repository.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletecontainerimagerepository Microsoft Documentation}
   * @example
   * await multiplayerserverClient.DeleteContainerImageRepository({
   *   "ImageName": "imageName1"
   * });
   */
  DeleteContainerImageRepository (request: DeleteContainerImageRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteContainerImageRepository", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete a lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/deletelobby Microsoft Documentation}
   * @example
   * await lobbyClient.DeleteLobby({
   *   "LobbyId": "12345678-1234-1234-1234-123456789ABC"
   * });
   */
  DeleteLobby (request: DeleteLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/DeleteLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete a model.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/deletemodel Microsoft Documentation}
   * @example
   * await trueskillClient.DeleteModel({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf"
   * });
   */
  DeleteModel (request: DeleteModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteModelResponse>("/TrueSkill/DeleteModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a remote user to log on to a VM for a multiplayer server build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deleteremoteuser Microsoft Documentation}
   * @example
   * await multiplayerserverClient.DeleteRemoteUser({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "Region": "SouthCentralUs",
   *   "VmId": "VmID1",
   *   "Username": "AUsername"
   * });
   */
  DeleteRemoteUser (request: DeleteRemoteUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteRemoteUser", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Delete a scenario.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/deletescenario Microsoft Documentation}
   * @example
   * await trueskillClient.DeleteScenario({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ForceDelete": true
   * });
   */
  DeleteScenario (request: DeleteScenarioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeleteScenarioResponse>("/TrueSkill/DeleteScenario", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Deletes a multiplayer server game secret.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/deletesecret Microsoft Documentation}
   * @example
   * await multiplayerserverClient.DeleteSecret({
   *   "Name": "GameSecret1"
   * });
   */
  DeleteSecret (request: DeleteSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/DeleteSecret", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Enables the multiplayer server feature for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/enablemultiplayerserversfortitle Microsoft Documentation}
   * @example
   * await multiplayerserverClient.EnableMultiplayerServersForTitle({});
   */
  EnableMultiplayerServersForTitle (request: EnableMultiplayerServersForTitleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EnableMultiplayerServersForTitleResponse>("/MultiplayerServer/EnableMultiplayerServersForTitle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Enables the parties feature for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/party/multiplayerserver/enablepartiesfortitle Microsoft Documentation}
   * @example
   * await partyClient.EnablePartiesForTitle({});
   */
  EnablePartiesForTitle (request: EnablePartiesForTitleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/Party/EnablePartiesForTitle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Find lobbies which match certain criteria, and which friends are in.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/findfriendlobbies Microsoft Documentation}
   * @example
   * await lobbyClient.FindFriendLobbies({
   *   "Filter": "string_key1 eq 'Wizard' and number_key5 gt 5",
   *   "OrderBy": "number_key5 desc",
   *   "ExternalPlatformFriends": "Xbox",
   *   "XboxToken": "XBOXTOKEN",
   *   "Pagination": {
   *     "ContinuationToken": "",
   *     "PageSizeRequested": 20
   *   }
   * });
   */
  FindFriendLobbies (request: FindFriendLobbiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<FindFriendLobbiesResult>("/Lobby/FindFriendLobbies", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Find all the lobbies that match certain criteria.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/findlobbies Microsoft Documentation}
   * @example
   * await lobbyClient.FindLobbies({
   *   "Filter": "string_key1 eq 'Wizard' and number_key5 gt 5",
   *   "OrderBy": "number_key5 desc",
   *   "Pagination": {
   *     "ContinuationToken": "",
   *     "PageSizeRequested": 20
   *   }
   * });
   */
  FindLobbies (request: FindLobbiesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<FindLobbiesResult>("/Lobby/FindLobbies", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a URL that can be used to download the specified asset. A sample pre-authenticated url -
   * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getassetdownloadurl Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetAssetDownloadUrl({
   *   "FileName": "gameserver.zip"
   * });
   */
  GetAssetDownloadUrl (request: GetAssetDownloadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAssetDownloadUrlResponse>("/MultiplayerServer/GetAssetDownloadUrl", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the URL to upload assets to. A sample pre-authenticated url -
   * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getassetuploadurl Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetAssetUploadUrl({
   *   "FileName": "gameserver.zip"
   * });
   */
  GetAssetUploadUrl (request: GetAssetUploadUrlRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetAssetUploadUrlResponse>("/MultiplayerServer/GetAssetUploadUrl", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a multiplayer server build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getbuild Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetBuild({
   *   "BuildId": "53781fa8-006d-4e9c-b733-57433d579285"
   * });
   */
  GetBuild (request: GetBuildRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetBuildResponse>("/MultiplayerServer/GetBuild", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a multiplayer server build alias.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getbuildalias Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetBuildAlias({
   *   "AliasId": "21781fa8-096d-4d9c-b699-75433d579285"
   * });
   */
  GetBuildAlias (request: GetBuildAliasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/GetBuildAlias", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets supported locales for the cognitive services based on the specified service type.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getcognitiveserviceslocales Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetCognitiveServicesLocales({
   *   "CognitiveServicesType": "SpeechToText",
   *   "Region": "WestUs"
   * });
   */
  GetCognitiveServicesLocales (request: GetCognitiveServicesLocalesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCognitiveServicesLocalesResponse>("/MultiplayerServer/GetCognitiveServicesLocales", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a token for the cognitive services based on the specified service type.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getcognitiveservicestoken Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetCognitiveServicesToken({
   *   "CognitiveServicesType": "SpeechToText",
   *   "Region": "AustraliaEast"
   * });
   */
  GetCognitiveServicesToken (request: GetCognitiveServicesTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetCognitiveServicesTokenResponse>("/MultiplayerServer/GetCognitiveServicesToken", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the credentials to the container registry.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getcontainerregistrycredentials Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetContainerRegistryCredentials({});
   */
  GetContainerRegistryCredentials (request: GetContainerRegistryCredentialsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetContainerRegistryCredentialsResponse>("/MultiplayerServer/GetContainerRegistryCredentials", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/getlobby Microsoft Documentation}
   * @example
   * await lobbyClient.GetLobby({
   *   "LobbyId": "12345678-1234-1234-1234-123456789ABC"
   * });
   */
  GetLobby (request: GetLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetLobbyResult>("/Lobby/GetLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a match.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/getmatch Microsoft Documentation}
   * @example
   * await matchClient.GetMatch({
   *   "MatchId": "4e0c5fd7-80e9-4744-b0ce-061a7f067ff5",
   *   "QueueName": "custom123",
   *   "EscapeObject": false,
   *   "ReturnMemberAttributes": false
   * });
   */
  GetMatch (request: GetMatchRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchResult>("/Match/GetMatch", request, "X-EntityToken", extraHeaders);
  }

  /**
   * SDK support is limited to C# and Java for this API. Get a matchmaking queue configuration.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking-admin/getmatchmakingqueue Microsoft Documentation}
   * @example
   * await matchClient.GetMatchmakingQueue({
   *   "QueueName": "custom123"
   * });
   */
  GetMatchmakingQueue (request: GetMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchmakingQueueResult>("/Match/GetMatchmakingQueue", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a matchmaking ticket by ticket Id.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/getmatchmakingticket Microsoft Documentation}
   * @example
   * await matchClient.GetMatchmakingTicket({
   *   "TicketId": "1c4b0daa-150e-47ae-9923-d770c0f9b07c",
   *   "QueueName": "custom123",
   *   "EscapeObject": false
   * });
   */
  GetMatchmakingTicket (request: GetMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMatchmakingTicketResult>("/Match/GetMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the details of a Model.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/getmodeldetails Microsoft Documentation}
   * @example
   * await trueskillClient.GetModelDetails({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf"
   * });
   */
  GetModelDetails (request: GetModelDetailsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetModelDetailsResponse>("/TrueSkill/GetModelDetails", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get all of the models assigned to a specific scenario.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/getmodelsbyscenario Microsoft Documentation}
   * @example
   * await trueskillClient.GetModelsByScenario({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d"
   * });
   */
  GetModelsByScenario (request: GetModelsByScenarioRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetModelsByScenarioResponse>("/TrueSkill/GetModelsByScenario", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets multiplayer server session details and associated user connection tokens for a build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getmultiplayerserverandtoken Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetMultiplayerServerAndToken({
   *   "TokenPlayerIds": [
   *     "User1",
   *     "User2"
   *   ],
   *   "SessionId": "02bdef0e-e01e-4b29-8efe-ff9f47a06d8c"
   * });
   */
  GetMultiplayerServerAndToken (request: GetMultiplayerServerAndTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMultiplayerServerAndTokenResponse>("/MultiplayerServer/GetMultiplayerServerAndToken", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets multiplayer server session details for a build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getmultiplayerserverdetails Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetMultiplayerServerDetails({
   *   "SessionId": "02bdef0e-e01e-4b29-8efe-ff9f47a06d8c"
   * });
   */
  GetMultiplayerServerDetails (request: GetMultiplayerServerDetailsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMultiplayerServerDetailsResponse>("/MultiplayerServer/GetMultiplayerServerDetails", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets multiplayer server logs after a server has terminated.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getmultiplayerserverlogs Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetMultiplayerServerLogs({
   *   "Region": "AustraliaEast",
   *   "ServerId": "SomeServerId"
   * });
   */
  GetMultiplayerServerLogs (request: GetMultiplayerServerLogsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMultiplayerServerLogsResponse>("/MultiplayerServer/GetMultiplayerServerLogs", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets multiplayer server logs after a server has terminated.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getmultiplayersessionlogsbysessionid Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetMultiplayerSessionLogsBySessionId({
   *   "SessionId": "92e29db9-4004-4349-9a1f-b70ac01bdc08"
   * });
   */
  GetMultiplayerSessionLogsBySessionId (request: GetMultiplayerSessionLogsBySessionIdRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetMultiplayerServerLogsResponse>("/MultiplayerServer/GetMultiplayerSessionLogsBySessionId", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets skill values of a set of players from the primary model of a given scenario.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/getplayerskill Microsoft Documentation}
   * @example
   * await trueskillClient.GetPlayerSkill({
   *   "Conditions": {
   *     "Platform": "Xbox",
   *     "Mode": "Deathmatch"
   *   },
   *   "Players": [
   *     {
   *       "Entity": {
   *         "Id": "1234",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       }
   *     },
   *     {
   *       "Entity": {
   *         "Id": "5678",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       },
   *       "SquadSize": 2
   *     }
   *   ],
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "IncludeSkillBreakdown": true
   * });
   */
  GetPlayerSkill (request: GetPlayerSkillRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSkillResponse>("/TrueSkill/GetPlayerSkill", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets skill values of a set of players for multiple sets of conditions from the primary model of a given scenario.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/getplayerskillforconditions Microsoft Documentation}
   * @example
   * await trueskillClient.GetPlayerSkillForConditions({
   *   "Conditions": [
   *     {
   *       "Conditions": {
   *         "Platform": "Xbox",
   *         "Mode": "Deathmatch"
   *       }
   *     },
   *     {
   *       "Conditions": {
   *         "Platform": "Xbox",
   *         "Mode": "Guardian"
   *       }
   *     }
   *   ],
   *   "Players": [
   *     {
   *       "Entity": {
   *         "Id": "1234",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       }
   *     },
   *     {
   *       "Entity": {
   *         "Id": "5678",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       },
   *       "SquadSize": 2
   *     }
   *   ],
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "IncludeSkillBreakdown": true
   * });
   */
  GetPlayerSkillForConditions (request: GetPlayerSkillForConditionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSkillForConditionsResponse>("/TrueSkill/GetPlayerSkillForConditions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets skill values of a set of players for multiple sets of conditions from a specific model.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/getplayerskillforconditionsfrommodel Microsoft Documentation}
   * @example
   * await trueskillClient.GetPlayerSkillForConditionsFromModel({
   *   "ModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf",
   *   "Conditions": [
   *     {
   *       "Conditions": {
   *         "Platform": "Xbox",
   *         "Mode": "Deathmatch"
   *       }
   *     },
   *     {
   *       "Conditions": {
   *         "Platform": "Xbox",
   *         "Mode": "Guardian"
   *       }
   *     }
   *   ],
   *   "Players": [
   *     {
   *       "Entity": {
   *         "Id": "1234",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       }
   *     },
   *     {
   *       "Entity": {
   *         "Id": "5678",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       },
   *       "SquadSize": 2
   *     }
   *   ],
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "IncludeSkillBreakdown": true
   * });
   */
  GetPlayerSkillForConditionsFromModel (request: GetPlayerSkillForConditionsFromModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSkillForConditionsFromModelResponse>("/TrueSkill/GetPlayerSkillForConditionsFromModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets skill values of a set of players from a specific model.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/getplayerskillfrommodel Microsoft Documentation}
   * @example
   * await trueskillClient.GetPlayerSkillFromModel({
   *   "ModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf",
   *   "Conditions": {
   *     "Platform": "Xbox",
   *     "Mode": "Deathmatch"
   *   },
   *   "Players": [
   *     {
   *       "Entity": {
   *         "Id": "1234",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       }
   *     },
   *     {
   *       "Entity": {
   *         "Id": "5678",
   *         "Type": "title_player_account",
   *         "TypeString": "title_player_account"
   *       },
   *       "SquadSize": 2
   *     }
   *   ],
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "IncludeSkillBreakdown": true
   * });
   */
  GetPlayerSkillFromModel (request: GetPlayerSkillFromModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetPlayerSkillFromModelResponse>("/TrueSkill/GetPlayerSkillFromModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get the statistics for a queue.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/getqueuestatistics Microsoft Documentation}
   * @example
   * await matchClient.GetQueueStatistics({
   *   "QueueName": "custom123"
   * });
   */
  GetQueueStatistics (request: GetQueueStatisticsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetQueueStatisticsResult>("/Match/GetQueueStatistics", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a remote login endpoint to a VM that is hosting a multiplayer server build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/getremoteloginendpoint Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetRemoteLoginEndpoint({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "Region": "SouthCentralUs",
   *   "VmId": "VmID1"
   * });
   */
  GetRemoteLoginEndpoint (request: GetRemoteLoginEndpointRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetRemoteLoginEndpointResponse>("/MultiplayerServer/GetRemoteLoginEndpoint", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a scenario configuration.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/getscenarioconfiguration Microsoft Documentation}
   * @example
   * await trueskillClient.GetScenarioConfiguration({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d"
   * });
   */
  GetScenarioConfiguration (request: GetScenarioConfigurationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetScenarioConfigurationResponse>("/TrueSkill/GetScenarioConfiguration", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets all scenario configurations that belong to the title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/getscenarioconfigurations Microsoft Documentation}
   */
  GetScenarioConfigurations (request: GetScenarioConfigurationsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetScenarioConfigurationsResponse>("/TrueSkill/GetScenarioConfigurations", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Get a matchmaking backfill ticket by ticket Id.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/getserverbackfillticket Microsoft Documentation}
   * @example
   * await matchClient.GetServerBackfillTicket({
   *   "TicketId": "1c4b0daa-150e-47ae-9923-d770c0f9b07c",
   *   "QueueName": "custom123",
   *   "EscapeObject": false
   * });
   */
  GetServerBackfillTicket (request: GetServerBackfillTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetServerBackfillTicketResult>("/Match/GetServerBackfillTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the status of whether a title is enabled for the multiplayer server feature.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/gettitleenabledformultiplayerserversstatus Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetTitleEnabledForMultiplayerServersStatus({});
   */
  GetTitleEnabledForMultiplayerServersStatus (request: GetTitleEnabledForMultiplayerServersStatusRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleEnabledForMultiplayerServersStatusResponse>("/MultiplayerServer/GetTitleEnabledForMultiplayerServersStatus", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets a title's server quota change request.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/gettitlemultiplayerserversquotachange Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetTitleMultiplayerServersQuotaChange({
   *   "RequestId": "1234"
   * });
   */
  GetTitleMultiplayerServersQuotaChange (request: GetTitleMultiplayerServersQuotaChangeRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleMultiplayerServersQuotaChangeResponse>("/MultiplayerServer/GetTitleMultiplayerServersQuotaChange", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Gets the quotas for a title in relation to multiplayer servers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/gettitlemultiplayerserversquotas Microsoft Documentation}
   * @example
   * await multiplayerserverClient.GetTitleMultiplayerServersQuotas({});
   */
  GetTitleMultiplayerServersQuotas (request: GetTitleMultiplayerServersQuotasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<GetTitleMultiplayerServersQuotasResponse>("/MultiplayerServer/GetTitleMultiplayerServersQuotas", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Send a notification to invite a player to a lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/invitetolobby Microsoft Documentation}
   * @example
   * await lobbyClient.InviteToLobby({
   *   "LobbyId": "12345678-1234-1234-1234-123456789ABC",
   *   "MemberEntity": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "InviteeEntity": {
   *     "Id": "4321",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  InviteToLobby (request: InviteToLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/InviteToLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Join an Arranged lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/joinarrangedlobby Microsoft Documentation}
   * @example
   * await lobbyClient.JoinArrangedLobby({
   *   "MaxPlayers": 50,
   *   "OwnerMigrationPolicy": "Automatic",
   *   "UseConnections": true,
   *   "AccessPolicy": "Public",
   *   "MemberEntity": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "ArrangementString": "arrangementString",
   *   "MemberData": {
   *     "MyMemberKey": "MyMemberKey value"
   *   },
   *   "RestrictInvitesToLobbyOwner": false
   * });
   */
  JoinArrangedLobby (request: JoinArrangedLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<JoinLobbyResult>("/Lobby/JoinArrangedLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Join a lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/joinlobby Microsoft Documentation}
   * @example
   * await lobbyClient.JoinLobby({
   *   "MemberEntity": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "ConnectionString": "connString",
   *   "MemberData": {
   *     "MyDataKey": "MyDataKey value"
   *   }
   * });
   */
  JoinLobby (request: JoinLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<JoinLobbyResult>("/Lobby/JoinLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Preview: Join a lobby as a server entity. This is restricted to client lobbies which are using connections.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/joinlobbyasserver Microsoft Documentation}
   * @example
   * await lobbyClient.JoinLobbyAsServer({
   *   "ServerEntity": {
   *     "Id": "1234",
   *     "Type": "game_server",
   *     "TypeString": "game_server"
   *   },
   *   "ConnectionString": "connString",
   *   "ServerData": {
   *     "MyDataKey": "MyDataKey value"
   *   }
   * });
   */
  JoinLobbyAsServer (request: JoinLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<JoinLobbyAsServerResult>("/Lobby/JoinLobbyAsServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Join a matchmaking ticket.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/joinmatchmakingticket Microsoft Documentation}
   * @example
   * await matchClient.JoinMatchmakingTicket({
   *   "TicketId": "1c4b0daa-150e-47ae-9923-d770c0f9b07c",
   *   "QueueName": "custom123",
   *   "Member": {}
   * });
   */
  JoinMatchmakingTicket (request: JoinMatchmakingTicketRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<JoinMatchmakingTicketResult>("/Match/JoinMatchmakingTicket", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Leave a lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/leavelobby Microsoft Documentation}
   * @example
   * await lobbyClient.LeaveLobby({
   *   "LobbyId": "12345678-1234-1234-1234-123456789ABC",
   *   "MemberEntity": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  LeaveLobby (request: LeaveLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/LeaveLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Preview: Request for server to leave a lobby. This is restricted to client owned lobbies which are using connections.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/leavelobbyasserver Microsoft Documentation}
   * @example
   * await lobbyClient.LeaveLobbyAsServer({
   *   "ServerEntity": {
   *     "Id": "1234",
   *     "Type": "game_server",
   *     "TypeString": "game_server"
   *   },
   *   "LobbyId": "12345678-1234-1234-1234-123456789ABC"
   * });
   */
  LeaveLobbyAsServer (request: LeaveLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/LeaveLobbyAsServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists archived multiplayer server sessions for a build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listarchivedmultiplayerservers Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListArchivedMultiplayerServers({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "Region": "SouthCentralUs"
   * });
   */
  ListArchivedMultiplayerServers (request: ListMultiplayerServersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMultiplayerServersResponse>("/MultiplayerServer/ListArchivedMultiplayerServers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists multiplayer server game assets for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listassetsummaries Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListAssetSummaries({
   *   "PageSize": 10
   * });
   */
  ListAssetSummaries (request: ListAssetSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListAssetSummariesResponse>("/MultiplayerServer/ListAssetSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists details of all build aliases for a title. Accepts tokens for title and if game client access is enabled, allows
   * game client to request list of builds with player entity token.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listbuildaliases Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListBuildAliases({
   *   "PageSize": 10
   * });
   */
  ListBuildAliases (request: ListBuildAliasesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListBuildAliasesResponse>("/MultiplayerServer/ListBuildAliases", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client
   * access is enabled, allows game client to request list of builds with player entity token.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listbuildsummaries Microsoft Documentation}
   * @deprecated Please use ListBuildSummariesV2 instead.
   */
  ListBuildSummaries (request: ListBuildSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListBuildSummariesResponse>("/MultiplayerServer/ListBuildSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client
   * access is enabled, allows game client to request list of builds with player entity token.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listbuildsummariesv2 Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListBuildSummariesV2({
   *   "PageSize": 10
   * });
   */
  ListBuildSummariesV2 (request: ListBuildSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListBuildSummariesResponse>("/MultiplayerServer/ListBuildSummariesV2", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists multiplayer server game certificates for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listcertificatesummaries Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListCertificateSummaries({
   *   "PageSize": 10
   * });
   */
  ListCertificateSummaries (request: ListCertificateSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListCertificateSummariesResponse>("/MultiplayerServer/ListCertificateSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists custom container images for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listcontainerimages Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListContainerImages({
   *   "PageSize": 10
   * });
   */
  ListContainerImages (request: ListContainerImagesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListContainerImagesResponse>("/MultiplayerServer/ListContainerImages", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists the tags for a custom container image.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listcontainerimagetags Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListContainerImageTags({
   *   "ImageName": "imageName1",
   *   "PageSize": 10
   * });
   */
  ListContainerImageTags (request: ListContainerImageTagsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListContainerImageTagsResponse>("/MultiplayerServer/ListContainerImageTags", request, "X-EntityToken", extraHeaders);
  }

  /**
   * SDK support is limited to C# and Java for this API. List all matchmaking queue configs.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking-admin/listmatchmakingqueues Microsoft Documentation}
   * @example
   * await matchClient.ListMatchmakingQueues({});
   */
  ListMatchmakingQueues (request: ListMatchmakingQueuesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMatchmakingQueuesResult>("/Match/ListMatchmakingQueues", request, "X-EntityToken", extraHeaders);
  }

  /**
   * List all matchmaking ticket Ids the user is a member of.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/listmatchmakingticketsforplayer Microsoft Documentation}
   * @example
   * await matchClient.ListMatchmakingTicketsForPlayer({
   *   "Entity": {
   *     "Id": "123123123",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "QueueName": "custom123"
   * });
   */
  ListMatchmakingTicketsForPlayer (request: ListMatchmakingTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMatchmakingTicketsForPlayerResult>("/Match/ListMatchmakingTicketsForPlayer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists multiplayer server sessions for a build.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listmultiplayerservers Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListMultiplayerServers({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "Region": "SouthCentralUs"
   * });
   */
  ListMultiplayerServers (request: ListMultiplayerServersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListMultiplayerServersResponse>("/MultiplayerServer/ListMultiplayerServers", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists quality of service servers for party.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listpartyqosservers Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListPartyQosServers({
   *   "Version": "1.0.0"
   * });
   */
  ListPartyQosServers (request: ListPartyQosServersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListPartyQosServersResponse>("/MultiplayerServer/ListPartyQosServers", request, null, extraHeaders);
  }

  /**
   * Lists quality of service servers.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listqosservers Microsoft Documentation}
   * @deprecated Please use ListQosServersForTitle instead.
   */
  ListQosServers (request: ListQosServersRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListQosServersResponse>("/MultiplayerServer/ListQosServers", request, null, extraHeaders);
  }

  /**
   * Lists quality of service servers for the title. By default, servers are only returned for regions where a Multiplayer
   * Servers build has been deployed.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listqosserversfortitle Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListQosServersForTitle({
   *   "IncludeAllRegions": true,
   *   "RoutingPreference": "Microsoft"
   * });
   */
  ListQosServersForTitle (request: ListQosServersForTitleRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListQosServersForTitleResponse>("/MultiplayerServer/ListQosServersForTitle", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists multiplayer server game secrets for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listsecretsummaries Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListSecretSummaries({
   *   "PageSize": 10
   * });
   */
  ListSecretSummaries (request: ListSecretSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListSecretSummariesResponse>("/MultiplayerServer/ListSecretSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * List all server backfill ticket Ids the user is a member of.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/listserverbackfillticketsforplayer Microsoft Documentation}
   * @example
   * await matchClient.ListServerBackfillTicketsForPlayer({
   *   "Entity": {
   *     "Id": "123123123",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "QueueName": "custom123"
   * });
   */
  ListServerBackfillTicketsForPlayer (request: ListServerBackfillTicketsForPlayerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListServerBackfillTicketsForPlayerResult>("/Match/ListServerBackfillTicketsForPlayer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * List all server quota change requests for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listtitlemultiplayerserversquotachanges Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListTitleMultiplayerServersQuotaChanges({});
   */
  ListTitleMultiplayerServersQuotaChanges (request: ListTitleMultiplayerServersQuotaChangesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListTitleMultiplayerServersQuotaChangesResponse>("/MultiplayerServer/ListTitleMultiplayerServersQuotaChanges", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Lists virtual machines for a title.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/listvirtualmachinesummaries Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ListVirtualMachineSummaries({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "Region": "SouthCentralUs",
   *   "PageSize": 10
   * });
   */
  ListVirtualMachineSummaries (request: ListVirtualMachineSummariesRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<ListVirtualMachineSummariesResponse>("/MultiplayerServer/ListVirtualMachineSummaries", request, "X-EntityToken", extraHeaders);
  }

  /**
   * SDK support is limited to C# and Java for this API. Remove a matchmaking queue config.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking-admin/removematchmakingqueue Microsoft Documentation}
   * @example
   * await matchClient.RemoveMatchmakingQueue({
   *   "QueueName": "custom123"
   * });
   */
  RemoveMatchmakingQueue (request: RemoveMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RemoveMatchmakingQueueResult>("/Match/RemoveMatchmakingQueue", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Remove a member from a lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/removemember Microsoft Documentation}
   * @example
   * await lobbyClient.RemoveMember({
   *   "LobbyId": "12345678-1234-1234-1234-123456789ABC",
   *   "MemberEntity": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "PreventRejoin": false
   * });
   */
  RemoveMember (request: RemoveMemberFromLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/RemoveMember", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Request a multiplayer server session. Accepts tokens for title and if game client access is enabled, allows game client
   * to request a server with player entity token.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/requestmultiplayerserver Microsoft Documentation}
   * @example
   * await multiplayerserverClient.RequestMultiplayerServer({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "SessionId": "02bdef0e-e01e-4b29-8efe-ff9f47a06d8c",
   *   "SessionCookie": "U2Vzc2lvbkNvb2tpZQ==",
   *   "InitialPlayers": [
   *     "gamer1",
   *     "gamer2"
   *   ],
   *   "PreferredRegions": [
   *     "SouthCentralUs",
   *     "WestUs"
   *   ]
   * });
   */
  RequestMultiplayerServer (request: RequestMultiplayerServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RequestMultiplayerServerResponse>("/MultiplayerServer/RequestMultiplayerServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Request a multiplayer server session and associated user connection tokens. Accepts tokens for title and if game client
   * access is enabled, allows game client to request a server with player entity token.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/requestmultiplayerserverandtoken Microsoft Documentation}
   * @example
   * await multiplayerserverClient.RequestMultiplayerServerAndToken({
   *   "TokenPlayerIds": [
   *     "gamer1",
   *     "gamer2"
   *   ],
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "SessionId": "02bdef0e-e01e-4b29-8efe-ff9f47a06d8c",
   *   "SessionCookie": "U2Vzc2lvbkNvb2tpZQ==",
   *   "InitialPlayers": [
   *     "gamer1",
   *     "gamer2"
   *   ],
   *   "PreferredRegions": [
   *     "SouthCentralUs",
   *     "WestUs"
   *   ]
   * });
   */
  RequestMultiplayerServerAndToken (request: RequestMultiplayerServerAndTokenRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RequestMultiplayerServerAndTokenResponse>("/MultiplayerServer/RequestMultiplayerServerAndToken", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Request a party session.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/party/multiplayerserver/requestparty Microsoft Documentation}
   * @example
   * await partyClient.RequestParty({
   *   "PartyId": "23781fa9-e01e-4b29-4f0b-dd9f37a06a1e",
   *   "PreferredRegions": [
   *     "EastUs",
   *     "WestUs"
   *   ],
   *   "SessionCookie": "FooBarCookie",
   *   "Version": "0.1"
   * });
   */
  RequestParty (request: RequestPartyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RequestPartyResponse>("/Party/RequestParty", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Request a party session.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/party/multiplayerserver/requestpartyservice Microsoft Documentation}
   * @example
   * await partyClient.RequestPartyService({
   *   "TitleId": "12345",
   *   "PartyId": "23781fa9-e01e-4b29-4f0b-dd9f37a06a1e",
   *   "PreferredRegions": [
   *     "EastUs",
   *     "WestUs"
   *   ],
   *   "NetworkConfiguration": {
   *     "MaxUsers": 1024,
   *     "MaxDevices": 128,
   *     "MaxUsersPerDevice": 8,
   *     "MaxDevicesPerUser": 128,
   *     "MaxEndpointsPerDevice": 32,
   *     "DirectPeerConnectivityOptions": "None",
   *     "PartyInvitationConfiguration": {
   *       "Identifier": "f8b73a15-6ec2-48f8-b5fb-6c5946dc10be",
   *       "Revocability": "Anyone",
   *       "EntityKeys": []
   *     }
   *   }
   * });
   */
  RequestPartyService (request: RequestPartyServiceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RequestPartyServiceResponse>("/Party/RequestPartyService", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Rolls over the credentials to the container registry.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/rollovercontainerregistrycredentials Microsoft Documentation}
   * @example
   * await multiplayerserverClient.RolloverContainerRegistryCredentials({});
   */
  RolloverContainerRegistryCredentials (request: RolloverContainerRegistryCredentialsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RolloverContainerRegistryCredentialsResponse>("/MultiplayerServer/RolloverContainerRegistryCredentials", request, "X-EntityToken", extraHeaders);
  }

  /**
   * SDK support is limited to C# and Java for this API. Create or update a matchmaking queue configuration.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking-admin/setmatchmakingqueue Microsoft Documentation}
   * @example
   * await matchClient.SetMatchmakingQueue({
   *   "MatchmakingQueue": {
   *     "Name": "ExampleQueueName",
   *     "MinMatchSize": 7,
   *     "MaxMatchSize": 8,
   *     "MaxTicketSize": 2,
   *     "ServerAllocationEnabled": true,
   *     "BuildId": "065a3208-39af-4691-8794-5f774c367ac2",
   *     "DifferenceRules": [
   *       {
   *         "Difference": 10.0,
   *         "MergeFunction": "Average",
   *         "DefaultAttributeValue": 0.0,
   *         "LinearExpansion": {
   *           "Delta": 0.5,
   *           "Limit": 20.0,
   *           "SecondsBetweenExpansions": 5
   *         },
   *         "Attribute": {
   *           "Path": "ExampleAttributeDifference",
   *           "Source": "User"
   *         },
   *         "AttributeNotSpecifiedBehavior": "UseDefault",
   *         "Weight": 1.0,
   *         "Name": "ExampleNameDifference",
   *         "SecondsUntilOptional": 50
   *       }
   *     ],
   *     "StringEqualityRules": [
   *       {
   *         "DefaultAttributeValue": "ExampleDefault",
   *         "Expansion": {
   *           "EnabledOverrides": [
   *             false,
   *             true,
   *             true,
   *             false
   *           ],
   *           "SecondsBetweenExpansions": 5
   *         },
   *         "Attribute": {
   *           "Path": "ExampleAttributeStringEquality",
   *           "Source": "User"
   *         },
   *         "AttributeNotSpecifiedBehavior": "UseDefault",
   *         "Weight": 1.0,
   *         "Name": "ExampleNameStringEquality",
   *         "SecondsUntilOptional": 50
   *       }
   *     ],
   *     "MatchTotalRules": [
   *       {
   *         "Attribute": {
   *           "Path": "ExampleAttribute",
   *           "Source": "User"
   *         },
   *         "Min": 2.0,
   *         "Max": 0.0,
   *         "Weight": 1.0,
   *         "Expansion": {
   *           "MaxOverrides": [
   *             {
   *               "Value": 4.0
   *             },
   *             {
   *               "Value": 4.0
   *             },
   *             null
   *           ],
   *           "SecondsBetweenExpansions": 5
   *         },
   *         "Name": "MatchTotalRule",
   *         "SecondsUntilOptional": 50
   *       }
   *     ],
   *     "SetIntersectionRules": [
   *       {
   *         "DefaultAttributeValue": [
   *           "a",
   *           "b",
   *           "c"
   *         ],
   *         "MinIntersectionSize": 2,
   *         "LinearExpansion": {
   *           "Delta": 2,
   *           "SecondsBetweenExpansions": 5
   *         },
   *         "Attribute": {
   *           "Path": "ExampleAttributeSetIntersectionRule",
   *           "Source": "User"
   *         },
   *         "AttributeNotSpecifiedBehavior": "UseDefault",
   *         "Weight": 1.0,
   *         "Name": "ExampleNameSetIntersectionRule",
   *         "SecondsUntilOptional": 50
   *       }
   *     ],
   *     "RegionSelectionRule": {
   *       "MaxLatency": 250,
   *       "Path": "Latencies",
   *       "LinearExpansion": {
   *         "Delta": 10,
   *         "Limit": 300,
   *         "SecondsBetweenExpansions": 5
   *       },
   *       "Weight": 1.0,
   *       "Name": "RegionSelectionRule",
   *       "SecondsUntilOptional": 50
   *     },
   *     "TeamSizeBalanceRule": {
   *       "Difference": 1,
   *       "LinearExpansion": {
   *         "Delta": 1,
   *         "Limit": 5,
   *         "SecondsBetweenExpansions": 5
   *       },
   *       "Name": "TeamSizeBalanceRule",
   *       "SecondsUntilOptional": 50
   *     },
   *     "TeamDifferenceRules": [
   *       {
   *         "Attribute": {
   *           "Path": "ExampleAttribute",
   *           "Source": "User"
   *         },
   *         "Difference": 2.0,
   *         "DefaultAttributeValue": 0.0,
   *         "LinearExpansion": {
   *           "Delta": 1.0,
   *           "Limit": 5.0,
   *           "SecondsBetweenExpansions": 5
   *         },
   *         "Name": "TeamDifferenceRule",
   *         "SecondsUntilOptional": 50
   *       }
   *     ],
   *     "TeamTicketSizeSimilarityRule": {
   *       "Name": "TeamTicketSizeSimilarityRule",
   *       "SecondsUntilOptional": 180
   *     },
   *     "Teams": [
   *       {
   *         "Name": "monster",
   *         "MinTeamSize": 1,
   *         "MaxTeamSize": 1
   *       },
   *       {
   *         "Name": "hunters",
   *         "MinTeamSize": 4,
   *         "MaxTeamSize": 8
   *       }
   *     ],
   *     "StatisticsVisibilityToPlayers": {
   *       "ShowNumberOfPlayersMatching": true,
   *       "ShowTimeToMatch": true
   *     }
   *   }
   * });
   */
  SetMatchmakingQueue (request: SetMatchmakingQueueRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SetMatchmakingQueueResult>("/Match/SetMatchmakingQueue", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Shuts down a multiplayer server session.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/shutdownmultiplayerserver Microsoft Documentation}
   * @example
   * await multiplayerserverClient.ShutdownMultiplayerServer({
   *   "Region": "AustraliaEast",
   *   "SessionId": "02bdef0e-e01e-4b29-8efe-ff9f47a06d8c"
   * });
   */
  ShutdownMultiplayerServer (request: ShutdownMultiplayerServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/ShutdownMultiplayerServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Subscribe to lobby resource notifications.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/subscribetolobbyresource Microsoft Documentation}
   * @example
   * await lobbyClient.SubscribeToLobbyResource({
   *   "Type": "LobbyChange",
   *   "ResourceId": "5c905725-0184-4112-a563-2f4187710d06",
   *   "SubscriptionVersion": 1,
   *   "PubSubConnectionHandle": "PubSubConnection",
   *   "EntityKey": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  SubscribeToLobbyResource (request: SubscribeToLobbyResourceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SubscribeToLobbyResourceResult>("/Lobby/SubscribeToLobbyResource", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Subscribe to match resource notifications.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/subscribetomatchmakingresource Microsoft Documentation}
   * @example
   * await matchClient.SubscribeToMatchmakingResource({
   *   "Type": "MatchTicketStatusChange",
   *   "ResourceId": "5a58afee-a9d7-4a47-875b-48bae4dc0590",
   *   "SubscriptionVersion": 1,
   *   "PubSubConnectionHandle": "PubSubConnection",
   *   "EntityKey": {}
   * });
   */
  SubscribeToMatchmakingResource (request: SubscribeToMatchResourceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<SubscribeToMatchResourceResult>("/Match/SubscribeToMatchmakingResource", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unsubscribe from lobby notifications.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/unsubscribefromlobbyresource Microsoft Documentation}
   * @example
   * await lobbyClient.UnsubscribeFromLobbyResource({
   *   "Type": "LobbyChange",
   *   "ResourceId": "5c905725-0184-4112-a563-2f4187710d06",
   *   "SubscriptionVersion": 1,
   *   "PubSubConnectionHandle": "PubSubConnection",
   *   "EntityKey": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   }
   * });
   */
  UnsubscribeFromLobbyResource (request: UnsubscribeFromLobbyResourceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UnsubscribeFromLobbyResource", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Unsubscribe from match resource notifications.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/match/matchmaking/unsubscribefrommatchmakingresource Microsoft Documentation}
   * @example
   * await matchClient.UnsubscribeFromMatchmakingResource({
   *   "Type": "MatchTicketStatusChange",
   *   "ResourceId": "5a58afee-a9d7-4a47-875b-48bae4dc0590",
   *   "SubscriptionVersion": 1,
   *   "PubSubConnectionHandle": "PubSubConnection",
   *   "EntityKey": {}
   * });
   */
  UnsubscribeFromMatchmakingResource (request: UnsubscribeFromMatchResourceRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UnsubscribeFromMatchResourceResult>("/Match/UnsubscribeFromMatchmakingResource", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Untags a container image.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/untagcontainerimage Microsoft Documentation}
   * @example
   * await multiplayerserverClient.UntagContainerImage({
   *   "ImageName": "imageName1",
   *   "Tag": "tag1"
   * });
   */
  UntagContainerImage (request: UntagContainerImageRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UntagContainerImage", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Creates a multiplayer server build alias.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/updatebuildalias Microsoft Documentation}
   * @example
   * await multiplayerserverClient.UpdateBuildAlias({
   *   "AliasName": "AliasName",
   *   "BuildSelectionCriteria": [
   *     {
   *       "BuildWeightDistribution": {
   *         "53781fa8-006d-4e9c-b733-57433d579285": 1
   *       }
   *     }
   *   ],
   *   "AliasId": "21781fa8-096d-4d9c-b699-75433d579285"
   * });
   */
  UpdateBuildAlias (request: UpdateBuildAliasRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<BuildAliasDetailsResponse>("/MultiplayerServer/UpdateBuildAlias", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates a multiplayer server build's name.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/updatebuildname Microsoft Documentation}
   * @example
   * await multiplayerserverClient.UpdateBuildName({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "BuildName": "GameBuildName"
   * });
   */
  UpdateBuildName (request: UpdateBuildNameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildName", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates a multiplayer server build's region. If the region is not yet created, it will be created
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/updatebuildregion Microsoft Documentation}
   * @example
   * await multiplayerserverClient.UpdateBuildRegion({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "BuildRegion": {
   *     "Region": "NorthEurope",
   *     "MaxServers": 7,
   *     "StandbyServers": 3
   *   }
   * });
   */
  UpdateBuildRegion (request: UpdateBuildRegionRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildRegion", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Updates a multiplayer server build's regions.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/updatebuildregions Microsoft Documentation}
   * @example
   * await multiplayerserverClient.UpdateBuildRegions({
   *   "BuildId": "21781fa8-096d-4d9c-b699-75433d579285",
   *   "BuildRegions": [
   *     {
   *       "Region": "EastUs",
   *       "MaxServers": 10,
   *       "StandbyServers": 5
   *     },
   *     {
   *       "Region": "WestUs",
   *       "MaxServers": 12,
   *       "StandbyServers": 8
   *     },
   *     {
   *       "Region": "NorthEurope",
   *       "MaxServers": 7,
   *       "StandbyServers": 3
   *     }
   *   ]
   * });
   */
  UpdateBuildRegions (request: UpdateBuildRegionsRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UpdateBuildRegions", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update a lobby.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/updatelobby Microsoft Documentation}
   * @example
   * await lobbyClient.UpdateLobby({
   *   "LobbyId": "12345678-1234-1234-1234-123456789ABC",
   *   "MaxPlayers": 50,
   *   "AccessPolicy": "Friends",
   *   "MembershipLock": "Locked",
   *   "SearchData": {
   *     "string_key1": "searchable value"
   *   },
   *   "LobbyData": {
   *     "MyGameKey": "MyGameKey value"
   *   },
   *   "MemberEntity": {
   *     "Id": "1234",
   *     "Type": "title_player_account",
   *     "TypeString": "title_player_account"
   *   },
   *   "MemberData": {
   *     "MyDataKey": "MyDataKey updated value"
   *   },
   *   "SearchDataToDelete": [
   *     "number_key1"
   *   ],
   *   "LobbyDataToDelete": [
   *     "MyOldGameKey"
   *   ],
   *   "MemberDataToDelete": []
   * });
   */
  UpdateLobby (request: UpdateLobbyRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UpdateLobby", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Preview: Update fields related to a joined server in the lobby the server is in. Servers can keep a lobby from expiring
   * by being the one to "update" the lobby in some way. Servers have no impact on last member leave/last member disconnect
   * behavior.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/lobby/lobby/updatelobbyasserver Microsoft Documentation}
   * @example
   * await lobbyClient.UpdateLobbyAsServer({
   *   "LobbyId": "12345678-1234-1234-1234-123456789ABC",
   *   "ServerEntity": {
   *     "Id": "1234",
   *     "Type": "game_server",
   *     "TypeString": "game_server"
   *   },
   *   "ServerData": {
   *     "MyDataKey": "MyDataKey value"
   *   },
   *   "ServerDataToDelete": [
   *     "MyOldGameKey"
   *   ]
   * });
   */
  UpdateLobbyAsServer (request: UpdateLobbyAsServerRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<LobbyEmptyResult>("/Lobby/UpdateLobbyAsServer", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update a model.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/updatemodel Microsoft Documentation}
   * @example
   * await trueskillClient.UpdateModel({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf",
   *   "ModelName": "New Model Name",
   *   "AnomalousMatchResultIgnoreThreshold": -21.0
   * });
   */
  UpdateModel (request: UpdateModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateModelResponse>("/TrueSkill/UpdateModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Mark a model as primary for a scenario.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/updateprimarymodel Microsoft Documentation}
   * @example
   * await trueskillClient.UpdatePrimaryModel({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ModelId": "73a2506e-9fd3-4d84-8dd7-570c8e9e02cf"
   * });
   */
  UpdatePrimaryModel (request: UpdatePrimaryModelRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdatePrimaryModelResponse>("/TrueSkill/UpdatePrimaryModel", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Update a scenario configuration.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill-admin/updatescenarioconfiguration Microsoft Documentation}
   * @example
   * await trueskillClient.UpdateScenarioConfiguration({
   *   "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *   "ConditionsToUpdateOrAdd": [
   *     {
   *       "Key": "InputDevice",
   *       "Values": [
   *         "MouseAndKeyboard",
   *         "Controller"
   *       ]
   *     }
   *   ]
   * });
   */
  UpdateScenarioConfiguration (request: UpdateScenarioConfigurationRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UpdateScenarioConfigurationResponse>("/TrueSkill/UpdateScenarioConfiguration", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Uploads a multiplayer server game certificate.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/uploadcertificate Microsoft Documentation}
   * @example
   * await multiplayerserverClient.UploadCertificate({
   *   "GameCertificate": {
   *     "Name": "GameCertificate1",
   *     "Base64EncodedValue": "UGxheUZhYlJvY2tzISEhTGV0J3NtYWtlYWxvdG9mZ2FtZXMh",
   *     "Password": "PasswordForPFXCertificate"
   *   },
   *   "ForceUpdate": false
   * });
   */
  UploadCertificate (request: UploadCertificateRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UploadCertificate", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Uploads a match result.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/trueskill/trueskill/uploadmatchresult Microsoft Documentation}
   * @example
   * await trueskillClient.UploadMatchResult({
   *   "MatchResult": {
   *     "ScenarioId": "f9f0331e-0149-42ba-a994-29b18cac4e4d",
   *     "Teams": [
   *       {
   *         "Players": [
   *           {
   *             "Entity": {
   *               "Id": "5678",
   *               "Type": "title_player_account",
   *               "TypeString": "title_player_account"
   *             },
   *             "PreMatchPartyId": "630a6523-8853-4cf6-9fda-c7da84f3d87a",
   *             "SecondsPlayed": 1800,
   *             "CompletionStatus": "Completed",
   *             "Conditions": {
   *               "Platform": "PC",
   *               "Mode": "Deathmatch"
   *             },
   *             "EventCounts": {
   *               "Kills": 35,
   *               "Deaths": 5
   *             }
   *           },
   *           {
   *             "Entity": {
   *               "Id": "8765",
   *               "Type": "title_player_account",
   *               "TypeString": "title_player_account"
   *             },
   *             "PreMatchPartyId": "630a6523-8853-4cf6-9fda-c7da84f3d87a",
   *             "SecondsPlayed": 1800,
   *             "CompletionStatus": "Completed",
   *             "Conditions": {
   *               "Platform": "Xbox",
   *               "Mode": "Deathmatch"
   *             },
   *             "EventCounts": {
   *               "Kills": 15,
   *               "Deaths": 10
   *             }
   *           }
   *         ],
   *         "Rank": 0
   *       },
   *       {
   *         "Players": [
   *           {
   *             "SecondsPlayed": 1800,
   *             "BotId": 77,
   *             "CompletionStatus": "Completed",
   *             "Conditions": {
   *               "Platform": "Xbox",
   *               "Mode": "Deathmatch"
   *             },
   *             "EventCounts": {
   *               "Kills": 10,
   *               "Deaths": 15
   *             }
   *           },
   *           {
   *             "Entity": {
   *               "Id": "0371",
   *               "Type": "title_player_account",
   *               "TypeString": "title_player_account"
   *             },
   *             "SecondsPlayed": 900,
   *             "CompletionStatus": "Disconnected",
   *             "Conditions": {
   *               "Platform": "PlayStation",
   *               "Mode": "Deathmatch"
   *             },
   *             "EventCounts": {
   *               "Kills": 2,
   *               "Deaths": 20
   *             }
   *           },
   *           {
   *             "Entity": {
   *               "Id": "9731",
   *               "Type": "title_player_account",
   *               "TypeString": "title_player_account"
   *             },
   *             "SecondsPlayed": 900,
   *             "CompletionStatus": "Completed",
   *             "Conditions": {
   *               "Platform": "PlayStation",
   *               "Mode": "Deathmatch"
   *             },
   *             "EventCounts": {
   *               "Kills": 3,
   *               "Deaths": 15
   *             }
   *           }
   *         ],
   *         "Rank": 1
   *       }
   *     ],
   *     "StartDateTimeUtc": "2025-10-10T13:31:54.865Z",
   *     "EndDateTimeUtc": "2025-10-10T14:01:54.865Z"
   *   }
   * });
   */
  UploadMatchResult (request: UploadMatchResultRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UploadMatchResultResponse>("/TrueSkill/UploadMatchResult", request, "X-EntityToken", extraHeaders);
  }

  /**
   * Uploads a multiplayer server game secret.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/multiplayerserver/multiplayerserver/uploadsecret Microsoft Documentation}
   * @example
   * await multiplayerserverClient.UploadSecret({
   *   "GameSecret": {
   *     "Name": "GameSecret1",
   *     "Value": "Value123",
   *     "ExpirationDate": "2025-09-01T00:00:00Z"
   *   },
   *   "ForceUpdate": false
   * });
   */
  UploadSecret (request: UploadSecretRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<EmptyResponse>("/MultiplayerServer/UploadSecret", request, "X-EntityToken", extraHeaders);
  }

};
