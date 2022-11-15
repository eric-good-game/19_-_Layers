import express from 'express';
import cors from 'cors';
import rootRouter from './routes/index';

import './utils/passport';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// config cors
// app.use(cors);

app.use('/', rootRouter);

export default app;