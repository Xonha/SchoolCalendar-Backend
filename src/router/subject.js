import express from 'express';
import { createSubjectAPI } from '../controller/subject/createSubject';
import {
	readAllSubjectsAPI,
	readSubjectByIdAPI,
} from '../controller/subject/readSubject';
import { updateSubjectAPI } from '../controller/subject/updateSubject';
import { deleteSubjectAPI } from '../controller/subject/deleteSubject';

const router = express.Router();

router.post('/', createSubjectAPI);

router.get('/', readAllSubjectsAPI);
router.get('/:id', readSubjectByIdAPI);

router.put('/:id', updateSubjectAPI);

router.delete('/:id', deleteSubjectAPI);

export default router;
