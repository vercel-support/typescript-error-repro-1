import { NowRequest, NowResponse } from '@vercel/node'

// TODO put this behind recaptcha
export default async function hello(request: NowRequest, response: NowResponse) {
  return response.status(200).json({ now: new Date().getTime() })
}
