import { Request, Response } from "express";
import ProductServices from "../services/product-services";
import { IProduct } from "../types/models";

class ProductController {
    private productServices = new ProductServices();
    constructor(){
        this.getAllProducts = this.getAllProducts.bind(this);
        this.getProductById = this.getProductById.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    async getAllProducts(req:Request,res:Response){
        try {
            
            const products = await this.productServices.getAllProducts();
            res.status(200).json(products);
        } catch (err) {
            let message = (err instanceof Error) ? err.message : JSON.stringify(err);
            console.log(err);
            res.status(500).json({ message });
        }
    }
    async getProductById(req:Request,res:Response){
        try {
            const id = req.params.id;
            const product = await this.productServices.getProductById(id);
            res.status(200).json(product);
        } catch (err) {
            let message = (err instanceof Error) ? err.message : JSON.stringify(err);
            console.log(err);
            res.status(500).json({ message });
        }
    }

    async addProduct(req:Request,res:Response){
        try {
            const product:IProduct = req.body;
            const newProduct = await this.productServices.addProduct(product);
            res.status(201).json(newProduct);
        } catch (err) {
            let message = (err instanceof Error) ? err.message : JSON.stringify(err);
            console.log(err);
            res.status(500).json({ message });
        }
    }

    async updateProduct(req:Request,res:Response){
        try {
            const id = req.params.id;
            const product:IProduct = req.body;
            const updatedProduct = await this.productServices.updateProduct(id, product);
            res.status(200).json(updatedProduct);
        } catch (err) {
            let message = (err instanceof Error) ? err.message : JSON.stringify(err);
            console.log(err);
            res.status(500).json({ message });
        }
    }

    async deleteProduct(req:Request,res:Response){
        try {
            const id = req.params.id;
            const deletedProduct = await this.productServices.deleteProduct(id);
            res.status(200).json(deletedProduct);
        } catch (err) {
            let message = (err instanceof Error) ? err.message : JSON.stringify(err);
            console.log(err);
            res.status(500).json({ message });
        }
    }

}
const productController = new ProductController();
export default productController;