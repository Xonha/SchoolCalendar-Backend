import { Subject } from '../../class/subject';

export const updateSubject = async (id, update) => {
	try {
		const updatedSubject = await Subject.findByIdAndUpdate(id, update, {
			useFindAndModify: true,
		});
		if (updatedSubject) {
			return updatedSubject;
		} else {
			throw new Error('Matéria não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por essa matéria');
	}
};

export const updateSubjectAPI = async (req, res) => {
	const updatedSubject = await updateSubject(req.params.id, req.body);
	res.status(200).json(updatedSubject);
};
