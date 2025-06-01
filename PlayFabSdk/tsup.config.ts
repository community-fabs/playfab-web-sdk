import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    Admin: "src/apis/PlayFabAdminApi.ts",
    Client: "src/apis/PlayFabClientApi.ts",
    Server: "src/apis/PlayFabServerApi.ts",
    Authentication: "src/apis/PlayFabAuthenticationApi.ts",
    CloudScript: "src/apis/PlayFabCloudScriptApi.ts",
    Data: "src/apis/PlayFabDataApi.ts",
    Economy: "src/apis/PlayFabEconomyApi.ts",
    Events: "src/apis/PlayFabEventsApi.ts",
    Experimentation: "src/apis/PlayFabExperimentationApi.ts",
    Insights: "src/apis/PlayFabInsightsApi.ts",
    Groups: "src/apis/PlayFabGroupsApi.ts",
    Progression: "src/apis/PlayFabProgressionApi.ts",
    Localization: "src/apis/PlayFabLocalizationApi.ts",
    Multiplayer: "src/apis/PlayFabMultiplayerApi.ts",
    Profiles: "src/apis/PlayFabProfilesApi.ts",
    Addon: "src/apis/PlayFabAddonApi.ts",
  },
  tsconfig: "tsconfig.json",
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  platform: "browser",
});
