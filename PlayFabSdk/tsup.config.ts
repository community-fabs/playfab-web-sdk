import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    addon: "src/apis/PlayFabAddonApi.ts",
    authentication: "src/apis/PlayFabAuthenticationApi.ts",
    cloudScript: "src/apis/PlayFabCloudScriptApi.ts",
    economy: "src/apis/PlayFabEconomyApi.ts",
    events: "src/apis/PlayFabEventsApi.ts",
    localization: "src/apis/PlayFabLocalizationApi.ts",
    multiplayer: "src/apis/PlayFabMultiplayerApi.ts",
    profiles: "src/apis/PlayFabProfilesApi.ts",
  },
  tsconfig: "tsconfig.json",
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  platform: "browser",
});
