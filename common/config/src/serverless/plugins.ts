export const createPlugins = () => {
  const offlinePlugins = [
    'serverless-offline',
    'serverless-export-env',
    'serverless-plugin-typescript',
    'serverless-iam-roles-per-function',
    'serverless-plugin-optimize',
  ]

  const plugins = [
    ...offlinePlugins,
    'serverless-domain-manager',
  ]

  return {
    offlinePlugins,
    plugins,
  }
}

