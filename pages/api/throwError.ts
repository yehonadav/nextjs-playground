// import { withSentry } from '@sentry/nextjs';
import {NextApiRequest, NextApiResponse} from "next";

type Response = {
  text: string;
}

const handler = (_req: NextApiRequest, _res: NextApiResponse<Response>) => {
  throw new Error("Sentry Backend Error")
}

export default
// withSentry(
  handler
// );
