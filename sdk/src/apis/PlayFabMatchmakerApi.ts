import type {
  AuthUserRequest,
  DeregisterGameRequest,
  PlayerJoinedRequest,
  PlayerLeftRequest,
  RegisterGameRequest,
  StartGameRequest,
  UserInfoRequest,
  AuthUserResponse,
  DeregisterGameResponse,
  PlayerJoinedResponse,
  PlayerLeftResponse,
  RegisterGameResponse,
  StartGameResponse,
  UserInfoResponse,
} from "../types/PlayFabMatchmakerApi";
import { PlayFabCommon } from "../PlayFabCommon";

export default class PlayFabMatchmakerApi extends PlayFabCommon {

  /**
   * Validates a user with the PlayFab service
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/authuser
   */
  AuthUser (request: AuthUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AuthUserResponse>("/Matchmaker/AuthUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Inform the matchmaker that a Game Server Instance is removed.
   * @deprecated Please use Server/DeregisterGame instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/deregistergame
   */
  DeregisterGame (request: DeregisterGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeregisterGameResponse>("/Matchmaker/DeregisterGame", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Informs the PlayFab game server hosting service that the indicated user has joined the Game Server Instance specified
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/playerjoined
   */
  PlayerJoined (request: PlayerJoinedRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PlayerJoinedResponse>("/Matchmaker/PlayerJoined", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Informs the PlayFab game server hosting service that the indicated user has left the Game Server Instance specified
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/playerleft
   */
  PlayerLeft (request: PlayerLeftRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PlayerLeftResponse>("/Matchmaker/PlayerLeft", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Inform the matchmaker that a new Game Server Instance is added.
   * @deprecated Please use Server/RegisterGame instead.
   * Reference: https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/registergame
   */
  RegisterGame (request: RegisterGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RegisterGameResponse>("/Matchmaker/RegisterGame", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Instructs the PlayFab game server hosting service to instantiate a new Game Server Instance
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/startgame
   */
  StartGame (request: StartGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<StartGameResponse>("/Matchmaker/StartGame", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the relevant details for a specified user, which the external match-making service can then use to compute
   * effective matches
   * @deprecated Do not use
   * Reference: https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/userinfo
   */
  UserInfo (request: UserInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UserInfoResponse>("/Matchmaker/UserInfo", request, "X-SecretKey", extraHeaders);
  }

};
