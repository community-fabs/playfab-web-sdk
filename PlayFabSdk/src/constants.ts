export interface ISettings {
  /** You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website) */
  titleId: string;
  /** For security reasons you must never expose this value to the client or players - You must set this value for Server-APIs to work properly (Found in the Game Manager for your title, at the PlayFab Website) */
  developerSecretKey: string;
  productionServerUrl: string;
  GlobalHeaderInjection?: { [key: string]: string };
  /** The name of a customer vertical. This is only for customers running a private cluster. Generally you shouldn't touch this */
  verticalName?: string;
}

export default {
  sdkVersion: "1.192.250526",
  sdkFingerprint: "JavaScriptSDK-1.192.250526",
  buildIdentifier: "adobuild_javascriptsdk_8",
  defaultSettings: {
    titleId: "",
    developerSecretKey: "",
    GlobalHeaderInjection: {},
    productionServerUrl: ".playfabapi.com",
  } as ISettings,
};
