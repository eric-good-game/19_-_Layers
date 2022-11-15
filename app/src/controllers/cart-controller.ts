import { Request, Response } from "express";
import CartServices from "../services/carts-services";

class CartController {

    static cartSerivces = new CartServices();

    async login(req: Request, res: Response): Promise<void> {
        
    }
}

const  cartController =  new CartController();
export default cartController;