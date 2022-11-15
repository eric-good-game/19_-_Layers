import { Request, Response } from "express";
import AuthorServices from "../services/author-services";

class AuthorController {

    constructor(){
        this.getAllAuthors = this.getAllAuthors.bind(this);
    }
    private authorSerivces = new AuthorServices();

    async getAllAuthors(req: Request, res: Response): Promise<void> {
        try {
            const authors = await this.authorSerivces.getAllAuthors();
            res.status(200).json(authors);
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
}

const  authorController =  new AuthorController();
export default authorController;