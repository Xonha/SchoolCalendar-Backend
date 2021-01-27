import { updateSubject } from '../subject/updateSubject';
import { readSubjectById } from '../subject/readSubject';

// export const createMark = async (markData) => {
// 	try {
// 		const newMark = await new Mark(markData).save();
// 		const subject = await readSubjectById(markData.subjectId);

// 		subject.marks.push(newMark);

// 		const newSubject = await updateSubject(markData.subjectId, subject);
// 		return newSubject;
// 	} catch (e) {
// 		throw new Error('Não foi possível criar nota');
// 	}
// };

// export const createMarkAPI = async (req, res) => {
// 	const { subjectId, value, weight, title, description } = req.body;

// 	const data = { subjectId, value, weight, title, description };

// 	const created = await createMark(data);
// 	res.status(201).json(created);
// };

export const createMark = async (id, markData) => {
	try {
		const subject = await readSubjectById(id);
		subject.marks.push(markData);
		const updatedSubject = updateSubject(id, subject);
		return updatedSubject;
	} catch (e) {
		throw new Error('Não foi possível criar nota');
	}
};

export const createMarkAPI = async (req, res) => {
	const { title, value, weight, description } = req.body;

	const data = { title, value, weight, description };

	const created = await createMark(req.params.subjectId, data);
	res.status(201).json(created);
};
