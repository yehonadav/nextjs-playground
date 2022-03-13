import { STAGE } from "./STAGE";

export type Environment = {
  STAGE: STAGE;
  IS_OFFLINE?: string;

  DB_PROTOCOL: "mongodb+srv",
  DB_USER: string,
  DB_PASS: string,
  DB_URL: string,
  DB_NAME: STAGE | "test" | "db",
  DB_PARAMS: string,

  APP_NAME: string,
  ACCOUNT_ORIGIN: string,
  API_DOMAIN: string, // example.com: using this domain in set-cookie ensure sharing between subdomains
  API_DOMAIN_NAME: string, // api.example.com: for serverless domain naming
  API_URL: string,
  ACCESS_CONTROL_ALLOW_HEADERS: string,
  ACCESS_CONTROL_EXPOSE_HEADERS: "ACCESS_CONTROL_ALLOW_HEADERS",

  // serverless config
  profile: string,
  appName: string,
  certificateName: string,
}