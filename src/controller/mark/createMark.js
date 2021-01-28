import { updateSubject } from '../subject/updateSubject';
import { readSubjectById } from '../subject/readSubject';

export const createMark = async (subjectId, markData) => {
	try {
		const subject = await readSubjectById(subjectId);
		subject.marks.push(markData);
		const updatedSubject = updateSubject(subjectId, subject);
		return updatedSubject;
	} catch (e) {
		throw new Error('Não foi possível criar nota');
	}
};

export const createMarkAPI = async (req, res) => {
	const { title, value, weight, description } = req.body;
	const markData = { title, value, weight, description };
	const createdMark = await createMark(req.params.subjectId, markData);
	res.status(201).json(createdMark);
};
