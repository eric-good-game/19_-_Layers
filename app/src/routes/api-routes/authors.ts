import { Router } from 'express';
import authorController from '../../controllers/author-controller';

const router = Router();

router
    .get('/', authorController.getAllAuthors)

export default router;