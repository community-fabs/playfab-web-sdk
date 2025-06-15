import constants, { type ISettings } from "./constants";

export type AuthContext = {
  PlayFabId: string | null;
  EntityId: string | null;
  EntityType: string | null;
  SessionTicket: string | null;
  EntityToken: string | null;
};

export class PlayFabContext {
  private static _instance: PlayFabContext;

  settings: ISettings = constants.defaultSettings;

  authenticationContext: AuthContext = {
    PlayFabId: null,
    EntityId: null,
    EntityType: null,
    SessionTicket: null,
    EntityToken: null,
  };

  sessionTicket: string | null = null;

  entityToken: string | null = null;

  private constructor() {}

  public static get instance(): PlayFabContext {
    if (!PlayFabContext._instance) {
      PlayFabContext._instance = new PlayFabContext();
    }

    return PlayFabContext._instance;
  }
}
