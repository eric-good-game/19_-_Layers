import { model, Schema } from "mongoose";
import { IGenericModel } from "../types/models";

const authorSchema = new Schema<IGenericModel>({
   value: { type: String, required: true },
});

const Author = model<IGenericModel>('Author', authorSchema);

export default Author;