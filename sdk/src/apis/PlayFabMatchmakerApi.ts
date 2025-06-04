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
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/authuser Microsoft Documentation}
   * @deprecated Do not use
   */
  AuthUser (request: AuthUserRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<AuthUserResponse>("/Matchmaker/AuthUser", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Inform the matchmaker that a Game Server Instance is removed.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/deregistergame Microsoft Documentation}
   * @deprecated Please use Server/DeregisterGame instead.
   */
  DeregisterGame (request: DeregisterGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<DeregisterGameResponse>("/Matchmaker/DeregisterGame", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Informs the PlayFab game server hosting service that the indicated user has joined the Game Server Instance specified
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/playerjoined Microsoft Documentation}
   * @deprecated Do not use
   */
  PlayerJoined (request: PlayerJoinedRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PlayerJoinedResponse>("/Matchmaker/PlayerJoined", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Informs the PlayFab game server hosting service that the indicated user has left the Game Server Instance specified
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/playerleft Microsoft Documentation}
   * @deprecated Do not use
   */
  PlayerLeft (request: PlayerLeftRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<PlayerLeftResponse>("/Matchmaker/PlayerLeft", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Inform the matchmaker that a new Game Server Instance is added.
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/registergame Microsoft Documentation}
   * @deprecated Please use Server/RegisterGame instead.
   */
  RegisterGame (request: RegisterGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<RegisterGameResponse>("/Matchmaker/RegisterGame", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Instructs the PlayFab game server hosting service to instantiate a new Game Server Instance
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/startgame Microsoft Documentation}
   * @deprecated Do not use
   */
  StartGame (request: StartGameRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<StartGameResponse>("/Matchmaker/StartGame", request, "X-SecretKey", extraHeaders);
  }

  /**
   * Retrieves the relevant details for a specified user, which the external match-making service can then use to compute
   * effective matches
   * 
   * {@link https://docs.microsoft.com/rest/api/playfab/matchmaker/matchmaking/userinfo Microsoft Documentation}
   * @deprecated Do not use
   */
  UserInfo (request: UserInfoRequest, extraHeaders?: Record<string, string>) {
    return this.ExecuteRequestWrapper<UserInfoResponse>("/Matchmaker/UserInfo", request, "X-SecretKey", extraHeaders);
  }

};
