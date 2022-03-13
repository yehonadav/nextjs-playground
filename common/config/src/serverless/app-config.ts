import {Environment} from "@common/contracts";

export const createSlsAppConfig = (environment:Environment) => {
  return {
    appName: environment.appName,
    webpack: {
      includeModules: true,
      packager: 'yarn',
    },
    certificateName: environment.certificateName,
    // Request a certificate: https://console.aws.amazon.com/acm/home?region=us-east-1#/wizard/
    // run: sls create_domain
    domainName: environment.API_DOMAIN_NAME,
    allowedHeaders: environment.ACCESS_CONTROL_ALLOW_HEADERS.split(','),
    frameworkVersion: '2',
    // can't run with sls:print script
    variablesResolutionMode: undefined, // '20210326'
    configValidationMode: undefined, // 'error'
    packageConfig: {
      individually: true,
    }
  }
};
