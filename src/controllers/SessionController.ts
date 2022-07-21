import { Request, Response } from "express";
import { createSession } from "../services/SessionService";
import { validatePassword } from "../services/UserService";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate user's password
  // todo figure out why any
  const user:any = await validatePassword(req.body)
  if (!user) {
    return res.status(401).send('Invalid email or password')
  }

  // create session
  const session = createSession(user._id, req.get('user-agent') || '')
  
  // create access token
  
  // create refresh token

  // return both tokens
}