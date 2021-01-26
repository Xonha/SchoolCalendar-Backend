import { Mark } from '../../class/mark';
import { readSubjectById } from '../subject/readSubject';
import { updateSubject } from '../subject/updateSubject';

export const deleteMark = async (id) => {
	try {
		const deletedMark = await Mark.findByIdAndDelete(id, {
			useFindAndModify: true,
		});

		if (deletedMark) {
			const subjectToUpdate = await readSubjectById(deletedMark.subjectId);

			subjectToUpdate.marks = subjectToUpdate.marks.filter((markId) => {
				if (markId._id.equals(deletedMark.id)) {
					return false;
				}
				return true;
			});

			updateSubject(subjectToUpdate.id, subjectToUpdate);

			return deletedMark;
		} else {
			throw new Error('Nota não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível deletar nota');
	}
};

export const deleteMarkAPI = async (req, res) => {
	const deletedMark = await deleteMark(req.params.id);
	res.status(200).json(deletedMark);
};
