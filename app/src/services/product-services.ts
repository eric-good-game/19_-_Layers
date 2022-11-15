import ProductDao from "../daos/product-dao";
import { IProduct } from "../types/models";

class ProductServices {

    private productDao = new ProductDao();

    constructor(){
        this.getAllProducts = this.getAllProducts.bind(this);
        this.getProductById = this.getProductById.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    async getAllProducts(): Promise<IProduct[]|null> {
        try {
            const products = await this.productDao.getProducts();
            return products;
        } catch (err) {
            throw err;
        }
    }

    async getProductById(id: string): Promise<IProduct|null> {
        try {
            const product = await this.productDao.getProductById(id);
            return product;
        } catch (err) {
            throw err;
        }
    }

    async addProduct(product: IProduct): Promise<IProduct|null> {
        try {
            const newProduct = await this.productDao.addProduct(product);
            return newProduct;
        } catch (err) {
            throw err;
        }
    }

    async updateProduct(id: string, product: IProduct): Promise<IProduct|null> {
        try {
            const updatedProduct = await this.productDao.updateProduct(id, product);
            return updatedProduct;
        } catch (err) {
            throw err;
        }
    }

    async deleteProduct(id: string): Promise<IProduct | null> {
        try {
            const deletedProduct = await this.productDao.deleteProduct(id);
            return deletedProduct;
        } catch (err) {
            throw err;
        }
    }
}

export default ProductServices;