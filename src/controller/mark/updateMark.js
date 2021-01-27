import { Mark } from '../../class/markClass';
import { readSubjectById } from '../subject/readSubject';
import { updateSubject } from '../subject/updateSubject';

// export const updateMark = async (id, update) => {
// 	try {
// 		const updatedMark = await Mark.findByIdAndUpdate(id, update);
// 		if (updatedMark) {
// 			return updatedMark;
// 		} else {
// 			throw new Error('Nota não econtrada');
// 		}
// 	} catch (e) {
// 		throw new Error('Não foi possível buscar por essa nota');
// 	}
// };

// export const updateMarkAPI = async (req, res) => {
// 	const updatedMark = await updateMark(req.params.id, req.body);
// 	res.status(200).json(updatedMark);
// };

export const updateMark = async (subjectId, markId, newMark) => {
	try {
		const updatedSubject = await readSubjectById(subjectId);
		console.log(updatedSubject);
		updatedSubject.marks = updatedSubject.marks.map((mark) => {
			console.log(mark.id, markId);
			if (mark._id === markId) {
				console.log(markId);
				return {
					...mark,
					...newMark,
				};
			}
			return mark;
		});
		updateSubject(subjectId, updatedSubject);

		if (updatedMark) {
			return updatedMark;
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
