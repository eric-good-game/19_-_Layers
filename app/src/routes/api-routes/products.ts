import { Router } from "express";
import productController from "../../controllers/product-controller";

const router = Router();

router
    .get('/', productController.getAllProducts)
    .get('/:id', productController.getProductById)
    .post('/', productController.addProduct)
    .put('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);

export default router;
