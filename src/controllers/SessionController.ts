import { Request, Response } from "express";
import config from 'config'
import { createSession } from "../services/SessionService";
import { validatePassword } from "../services/UserService";
import { signJwt } from "../utils/jwt";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate user's password
  const user = await validatePassword(req.body)
  if (!user) {
    return res.status(401).send('Invalid email or password')
  }

  // create session
  const session: any = await createSession(user._id, req.get('user-agent') || '')
  
  // create access token
  const accessToken = signJwt(
    {...user, session: session._id},
    { expiresIn: config.get('accessTokenTtl') }
  )

  // create refresh token
  const refreshToken = signJwt(
		{ ...user, session: session._id },
		{ expiresIn: config.get("accessTokenTtl") }
	);

  // return both tokens
  return res.send({accessToken, refreshToken})
}