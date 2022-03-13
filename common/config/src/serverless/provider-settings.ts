// https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/
import {Environment, STAGE} from "@common/contracts";
import {Serverless} from "serverless/aws";

export const createProviderSettings = (environment:Environment) => {
  const profile = environment.profile;
  const name = 'aws';
  const region = 'us-east-1';

// we can't parse comma separated files:
// https://github.com/serverless/serverless/issues/5235
// stage = ${opt:stage, 'dev'}
  const defaultStage:STAGE = 'dev'
  const runtime = 'nodejs12.x'
  const logRetentionInDays = 30
  const apiGateway = {
    shouldStartNameWithService: true
  }
  const lambdaHashingVersion = 20201221
  const provider:Serverless['provider'] = {
    profile,
    name,
    region,
    stage: environment.STAGE,
    runtime,
    logRetentionInDays,
    apiGateway,
    lambdaHashingVersion,
    environment,
  };

  return {
    profile,
    name,
    region,
    defaultStage,
    runtime,
    logRetentionInDays,
    apiGateway,
    lambdaHashingVersion,
    provider,
  }
}