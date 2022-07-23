import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import IUserModel from "./IUserModel";

// type for the Product Model
interface IProductModel extends mongoose.Document {
	user: IUserModel["_id"];
	title: string;
	description: string;
	price: number;
	image: string;
	createdAt: Date;
	updatedAt: Date;
}

export default IProductModel;
