import { model, Schema } from "mongoose";
import { IProduct } from "../types/models";
  
  // 2. Create a Schema corresponding to the document interface.
  const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    author_id: { type: String, required: true },
    type: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: Number, required: true },
    genres_id: { type: [String], required: true },
    image_url: { type: String, required: true },
  });
  
  // 3. Create a Model.
  const Product = model<IProduct>('Product', productSchema);

  export default Product;