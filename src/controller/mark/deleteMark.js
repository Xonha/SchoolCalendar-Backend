import { Subject } from '../../class/subject';

export const deleteMark = async (id, update) => {
	try {
		const deletedSubject = await Subject.findByIdAndDelete(id);
		if (deletedSubject) {
			return deletedSubject;
		} else {
			throw new Error('Matéria não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por essa matéria');
	}
};

export const deleteMarkAPI = async (req, res) => {
	const deletedSubject = await deleteMark(req.params.id);
	res.status(200).json(deletedSubject);
};
