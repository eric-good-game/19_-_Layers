import Author from "../models/author-model";
import { IGenericModel } from "../types/models";

class AuthorDao {
    async getAll(): Promise<IGenericModel[]> {
        try {
            const authors = await Author.find();
            return authors;
        } catch (err) {
            throw err;            
        }
    }
}

export default AuthorDao;