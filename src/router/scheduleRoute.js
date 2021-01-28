import express from 'express';
import { createScheduleAPI } from '../controller/schedule/createSchedule';
import { updateScheduleAPI } from '../controller/schedule/updateSchedule';
import { deleteScheduleAPI } from '../controller/schedule/deleteSchedule';

const router = express.Router();

router.post('/:subjectId', createScheduleAPI);

router.put('/:subjectId/:id', updateScheduleAPI);

router.delete('/:subjectId/:id', deleteScheduleAPI);

export default router;
