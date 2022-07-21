import SessionModel from "../models/SessionModel";
import logger from "../utils/logger";

export async function createSession(userId: string, userAgent: string) {
  try {
    const session = await SessionModel.create({user: userId, userAgent})
    return session.toJSON()   
  } catch (err) {
    logger.error(err)
  }
}