import express from 'express';
import subjectRouter from './subject';

const app = express.Router();

app.use('/subject', subjectRouter);

export default app;
