import Product from "../models/product-model";
import { IProduct } from "../types/models";


class ProductDao {
    
    async getProducts(): Promise<IProduct[] | null> {
        try {
            const products = await Product.find();
            return products;   
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    async getProductById(id: string): Promise<IProduct | null> {
        try {
            const product = await Product.findById(id);
            return product;
        } catch (err) {
            throw err;
        }
    }
    async addProduct(product: IProduct): Promise<IProduct | null> {
        try {
            const newProduct = await Product.create(product);
            return newProduct;
        } catch (err) {
            throw err;
        }
    }
    async updateProduct(id: string, product: IProduct): Promise<IProduct | null> {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
            return updatedProduct;
        } catch (err) {
            throw err;
        }
    }
    async deleteProduct(id: string): Promise<IProduct | null> {
        try {
            const deletedProduct = await Product.findByIdAndDelete(id);
            return deletedProduct;
        } catch (err) {
            throw err;
        }
    }
}

// const productDao = new ProductDao();

export default ProductDao;