import Genre from "../models/genre-model";
import { IGenericModel } from "../types/models";

class GenreDao {
    async getGenres(): Promise<IGenericModel[]> {
        try {
            const genres = await Genre.find();
            return genres;
        } catch (err) {
            throw err;            
        }
    }
}

export default GenreDao;