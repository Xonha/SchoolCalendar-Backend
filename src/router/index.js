import express from 'express';
import subjectRouter from './subjectRoute';
import markRouter from './markRoute';
import eventRouter from './eventRoute';
// import scheduleRouter from './scheduleRoute';

const app = express.Router();

app.use('/subject', subjectRouter);
app.use('/mark', markRouter);
app.use('/event', eventRouter);
// app.use('/schedule', scheduleRouter);

export default app;
