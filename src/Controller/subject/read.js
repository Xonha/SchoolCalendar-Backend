import { Subject } from '../../Schemas/subject';

export const readById = async (id) => {
	try {
		const subject = await Subject.findById(id);
		if (subject) {
			return subject;
		} else {
			throw new Error('Matéria não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por essa matéria');
	}
};

export const readAll = async () => {
	try {
		const allSubjects = await Subject.find();
		return allSubjects;
	} catch (e) {
		throw new Error('Não foi possível buscar por essa matéria');
	}
};

export const readByIdAPI = async (req, res) => {
	const subject = await readById(req.params.id);
	res.status(200).json(subject);
};

export const readAllAPI = async (req, res) => {
	const allSubjects = await readAll();
	res.status(200).json(allSubjects);
};
