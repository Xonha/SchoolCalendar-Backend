import express from 'express';
import { createEventAPI } from '../controller/event/createEvent';
import { updateEventAPI } from '../controller/event/updateEvent';
import { deleteEventAPI } from '../controller/event/deleteEvent';

const router = express.Router();

router.post('/:subjectId', createEventAPI);

router.put('/:subjectId/:id', updateEventAPI);

router.delete('/:subjectId/:id', deleteEventAPI);

export default router;
