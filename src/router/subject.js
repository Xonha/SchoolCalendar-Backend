import express from 'express';
import { create, createAPI } from '../controller/subject/create';
import { readAllAPI, readByIdAPI } from '../controller/subject/read';

const router = express.Router();

router.post('/', createAPI);

router.get('/', readAllAPI);
router.get('/:id', readByIdAPI);

export default router;
