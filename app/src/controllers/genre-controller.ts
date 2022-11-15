import { Request, Response } from "express";
import GenreServices from '../services/genre-services';

class GenreController {
    static genreServices = new GenreServices();

    async getGenres(req:Request,res:Response): Promise<void> {
        try {
            const genres = await GenreController.genreServices.getGenres();
            res.status(200).json({ genres });
        } catch (err) {
            let message = (err instanceof Error) ? err.message : JSON.stringify(err);;
            console.log(err);
            res.status(500).json({ message });
        }
    }
}

const genreController = new GenreController();
export default genreController;