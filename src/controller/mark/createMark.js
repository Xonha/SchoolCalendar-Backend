import { Mark } from '../../class/mark';
import { updateSubject } from '../subject/updateSubject';
import { readSubjectById } from '../subject/readSubject';

export const createMark = async (markData) => {
	try {
		const newMark = await new Mark(markData).save();
		const subject = await readSubjectById(markData.subjectId);
		const subjectMarks = subject.marks;
		subjectMarks.push(newMark);
		const newSubject = updateSubject(markData.subjectId, {
			...subject,
			marks: subjectMarks,
		});
		return newSubject;
	} catch (e) {
		throw new Error('Não foi possível criar nota');
	}
};

export const createMarkAPI = async (req, res) => {
	const { subjectId, value, weight, title, description } = req.body;

	const data = { subjectId, value, weight, title, description };

	const created = await createMark(data);
	res.status(201).json(created);
};
