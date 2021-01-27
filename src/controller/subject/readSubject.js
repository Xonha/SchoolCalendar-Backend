import { Subject } from '../../class/subjectClass';

export const readSubjectById = async (id) => {
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

export const readSubjectByIdAPI = async (req, res) => {
	const subject = await readSubjectById(req.params.id);
	res.status(200).json(subject);
};

export const readAllSubjects = async () => {
	try {
		const allSubjects = await Subject.find();
		return allSubjects;
	} catch (e) {
		throw new Error('Não foi possível buscar matérias');
	}
};

export const readAllSubjectsAPI = async (req, res) => {
	const allSubjects = await readAllSubjects();
	res.status(200).json(allSubjects);
};
