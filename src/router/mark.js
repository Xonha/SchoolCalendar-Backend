import express from 'express';
import { createMarkAPI } from '../controller/mark/createMark';
import { readAllMarksAPI, readMarkByIdAPI } from '../controller/mark/readMark';
import { updateMarkAPI } from '../controller/mark/updateMark';
import { deleteMarkAPI } from '../controller/mark/deleteMark';

const router = express.Router();

router.post('/', createMarkAPI);

router.get('/', readAllMarksAPI);
router.get('/:id', readMarkByIdAPI);

router.put('/:id', updateMarkAPI);

router.delete('/:id', deleteMarkAPI);

export default router;
