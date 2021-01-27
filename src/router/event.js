import express from 'express';
import { createEventAPI } from '../controller/event/createEvent';
import {
	readAllEventsAPI,
	readEventByIdAPI,
} from '../controller/event/readEvent';
import { updateEventAPI } from '../controller/event/updateEvent';
import { deleteEventAPI } from '../controller/event/deleteEvent';

const router = express.Router();

router.post('/', createEventAPI);

router.get('/', readAllEventsAPI);
router.get('/:id', readEventByIdAPI);

router.put('/:id', updateEventAPI);

router.delete('/:id', deleteEventAPI);

export default router;
