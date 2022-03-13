import {createEnvironment} from "@common/config";
import {createAll} from "./src/createAll";
import {STAGE} from "@common/contracts";

const stage:STAGE = 'prod';
process.env.STAGE = stage;
createEnvironment();
createAll();