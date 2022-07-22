import SessionModel from "../models/SessionModel";
import logger from "../utils/logger";

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent })
  return session.toJSON()   
  // try {
  // } catch (err) {
  //   logger.error(err)
  // }
}