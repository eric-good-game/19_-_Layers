import { model, Schema } from "mongoose";
import { IGenericModel } from "../types/models";

const genreSchema = new Schema<IGenericModel>({
   value: { type: String, required: true },
});

const Genre = model<IGenericModel>('Genre', genreSchema);

export default Genre;