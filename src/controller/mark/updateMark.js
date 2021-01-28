import { readSubjectById } from '../subject/readSubject';
import { updateSubject } from '../subject/updateSubject';

export const updateMark = async (subjectId, markId, newMark) => {
	try {
		const subject = await readSubjectById(subjectId);
		subject.marks = subject.marks.map((mark) => {
			if (mark.id === markId) {
				return {
					...mark._doc,
					...newMark,
				};
			}
			return mark;
		});

		const updatedSubject = await updateSubject(subjectId, subject);
		if (updatedSubject) {
			return updatedSubject;
		} else {
			throw new Error('Nota não econtrada');
		}
	} catch (e) {
		console.log(e);
		throw new Error('Não foi possível buscar por essa nota');
	}
};

export const updateMarkAPI = async (req, res) => {
	const { subjectId, id } = req.params;
	const { title, value, weight, description } = req.body;
	const markData = { title, value, weight, description };
	const updatedMark = await updateMark(subjectId, id, markData);
	res.status(200).json(updatedMark);
};
