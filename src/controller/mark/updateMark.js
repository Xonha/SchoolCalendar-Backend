import { Subject } from '../../class/subject';

export const updateMark = async (id, update) => {
	try {
		const updatedSubject = await Subject.findByIdAndUpdate(id, update);
		if (updatedSubject) {
			return updatedSubject;
		} else {
			throw new Error('Matéria não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por essa matéria');
	}
};

export const updateMarkAPI = async (req, res) => {
	const updatedSubject = await updateMark(req.params.id, req.body);
	res.status(200).json(updatedSubject);
};
