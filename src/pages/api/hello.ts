// import { withSentry } from '@sentry/nextjs';
import {NextApiRequest, NextApiResponse} from "next";

type Response = {
  text: string;
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Response>) => {
  return res.status(200).json({ text: 'Hello' })
}

export default
// withSentry(
  handler
// );
