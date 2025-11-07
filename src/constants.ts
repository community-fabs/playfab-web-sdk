export interface ISettings {
  /** You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website) */
  titleId: string;
  /** For security reasons you must never expose this value to the client or players - You must set this value for Server-APIs to work properly (Found in the Game Manager for your title, at the PlayFab Website) */
  developerSecretKey: string;
  productionServerUrl: string;
  /** Headers to apply to every request */
  globalHeaders?: Record<string, string>;
  /** The name of a customer vertical. This is only for customers running a private cluster. Generally you shouldn't touch this */
  verticalName?: string | null;
}

export const ErrorMessages = {
  titleId: "Must be have settings.titleId set to call this method",
  loggedIn: "Must be logged in to call this method",
  entityToken: "You must successfully call GetEntityToken before calling this",
  secretKey: "Must have settings.developerSecretKey set to call this method",
};

export const AuthInfoMap = {
  "X-EntityToken": {
    authAttr: "entityToken",
    authError: ErrorMessages.entityToken,
  },
  "X-Authorization": {
    authAttr: "sessionTicket",
    authError: ErrorMessages.loggedIn,
  },
  "X-SecretKey": {
    authAttr: "developerSecretKey",
    authError: ErrorMessages.secretKey,
  },
};

export default {
  sdkVersion: "1.203.251107",
  sdkFingerprint: "JavaScriptSDK-1.203.251107",
  buildIdentifier: "ghactions_community-playfab-web-sdk",
  defaultSettings: {
    titleId: "",
    developerSecretKey: "",
    globalHeaders: {},
    productionServerUrl: ".playfabapi.com",
    verticalName: ""
  } as ISettings
};
