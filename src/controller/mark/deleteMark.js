import { readSubjectById } from '../subject/readSubject';
import { updateSubject } from '../subject/updateSubject';

export const deleteMark = async (subjectId, markId) => {
	try {
		const subject = await readSubjectById(subjectId);

		subject.marks = subject.marks.filter((mark) => {
			if (mark.id === markId) {
				return false;
			}
			return true;
		});

		const updatedSubject = await updateSubject(subjectId, subject);
		if (updatedSubject) {
			return updatedSubject;
		} else {
			throw new Error('Nota não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível deletar nota');
	}
};

export const deleteMarkAPI = async (req, res) => {
	const { subjectId, id } = req.params;
	const deletedMark = await deleteMark(subjectId, id);
	res.status(200).json(deletedMark);
};
