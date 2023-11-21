// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as trace from 'next/dist/trace';
type Data = {
  name: string
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const span = trace.trace('api');
  span.stop()
  res.status(200).json({ name: 'John Doe' })
}
