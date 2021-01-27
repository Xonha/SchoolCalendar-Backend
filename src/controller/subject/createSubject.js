import { Subject } from '../../class/subjectClass';

export const createSubject = async (subjectData) => {
	try {
		const newSubject = await new Subject(subjectData).save();
		return newSubject;
	} catch (e) {
		throw new Error('Não foi possível criar matéria');
	}
};

export const createSubjectAPI = async (req, res) => {
	const { name, color, teacherName } = req.body;

	const subjectData = {
		name,
		color,
		teacherName,
		schedule: [],
		event: [],
		mark: [],
	};

	const createdSubject = await createSubject(subjectData);
	res.status(201).json(createdSubject);
};
