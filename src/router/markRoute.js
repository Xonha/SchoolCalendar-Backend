import express from 'express';
import { createMarkAPI } from '../controller/mark/createMark';
import { updateMarkAPI } from '../controller/mark/updateMark';
import { deleteMarkAPI } from '../controller/mark/deleteMark';

const router = express.Router();

router.post('/:subjectId', createMarkAPI);

router.put('/:subjectId/:id', updateMarkAPI);

router.delete('/:subjectId/:id', deleteMarkAPI);

export default router;
