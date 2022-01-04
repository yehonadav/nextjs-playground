// https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok
// import { getPreviewPostBySlug } from '@/lib/api'
import {NextApiRequest, NextApiResponse} from "next";

export default async function preview(req:NextApiRequest, res:NextApiResponse) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  // TODO: secret should not come from querystring as the token is long lived.
  if (req.query.secret !== process.env.PREVIEW_SECRET)
    return res.status(401).json({ message: 'Invalid token' });

  // Fetch the headless CMS to check if the provided `slug` exists
  // const post = await getPreviewPostBySlug(req.query.slug)
  const postId = req.query.id

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!postId)
    return res.status(401).json({ message: 'Invalid Post ID' });

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/posts/${postId}` })
  res.end()
}