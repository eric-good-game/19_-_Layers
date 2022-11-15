import { Request, Response } from "express";
import AuthorDao from "../daos/author-dao";
import { IGenericModel } from "../types/models";

class AuthorServices {

    private authorDao = new AuthorDao();
    async getAllAuthors(): Promise<IGenericModel[]> {
        try {
            const author = await this.authorDao.getAll();
            return author;
        } catch (error) {
            throw error;
            
        }
    
    }
}

export default AuthorServices;