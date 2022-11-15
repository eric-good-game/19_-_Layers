import GenreDao from "../daos/genre-dao";
import { IGenericModel } from "../types/models";

class GenreServices {
    static genreDao = new GenreDao();
    async getGenres(): Promise<IGenericModel[]> {
        try {
            const genres = await GenreServices.genreDao.getGenres();
            return genres;   
        } catch (err) {
            throw err;
            
        }
    }
}

export default GenreServices;