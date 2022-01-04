import {NextApiRequest, NextApiResponse} from "next";
import { withSentry } from '@sentry/nextjs';

type Response = {
  date: Date
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json({ date: new Date() })
}

export default withSentry(handler);
