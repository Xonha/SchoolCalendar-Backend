import express from 'express';
import subjectRouter from './subject';
import markRouter from './mark';
import eventRouter from './event';

const app = express.Router();

app.use('/subject', subjectRouter);
app.use('/mark', markRouter);
app.use('/event', eventRouter);

export default app;
