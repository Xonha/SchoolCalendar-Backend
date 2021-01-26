import express from 'express';
import subjectRouter from './subject';
import markRouter from './mark';

const app = express.Router();

app.use('/subject', subjectRouter);
app.use('/mark', markRouter);

export default app;
