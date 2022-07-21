import { DocumentDefinition } from "mongoose";
import IUserModel from "../interfaces/IUserModel";
import UserModel from "../models/UserModel";


export async function createUser (
    input: DocumentDefinition<Omit<IUserModel, 'createdAt' | 'updatedAt' | 'comparePassword'>> 
  ) {
  try {
    return await UserModel.create(input)
  } catch (err: any) {
    throw new Error(err)
  }
}