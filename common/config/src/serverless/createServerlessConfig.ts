import {createSlsAppConfig} from "./app-config";
import {createEnvironment} from "./environment";
import {createPlugins} from "./plugins";
import {createProviderSettings} from "./provider-settings";
import {createServerlessOfflineConfig} from "./serverless-offline";

export const createServerlessConfig = () => {
  const environment = createEnvironment();
  const stage = environment.STAGE;
  const appConfig = createSlsAppConfig(environment);
  const providerSettings = createProviderSettings(environment);
  const plugins = createPlugins();
  const serverlessOffline = createServerlessOfflineConfig();
  return {
    stage,
    environment,
    appConfig,
    plugins: plugins.plugins,
    offlinePlugins: plugins.offlinePlugins,
    providerSettings,
    serverlessOffline,
  }
}