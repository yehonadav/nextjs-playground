import dotenv from "dotenv";
import {Environment, STAGE} from "@common/contracts";
import {getEnvironmentVariable} from "application-common-components";

export type CreateEnv = () => Environment;

export const createEnvironment:CreateEnv = () => {
  const stage = getEnvironmentVariable<STAGE>('STAGE');
  const envFilename = `.env.${stage}`;
  const {parsed, error} = dotenv.config({path: envFilename}) ;
  if (error)
    throw error;

  if (!parsed)
    throw new Error(`createEnvironment failed, dotenv parsing .env.\${process.env.STAGE||'dev'}=${envFilename} returned undefined`);

  const environment = parsed as Environment;
  environment.STAGE = stage; // ensure stage is defined correctly
  environment.IS_OFFLINE = process.env.IS_OFFLINE;

  return environment;
}
