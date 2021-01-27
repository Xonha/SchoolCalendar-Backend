import { Subject } from '../../class/subject';

export const createSubject = async (subjectData) => {
	try {
		const newSubject = await new Subject(subjectData).save();
		return newSubject;
	} catch (e) {
		throw new Error('Não foi possível criar matéria');
	}
};

export const createSubjectAPI = async (req, res) => {
	const {
		name,
		color,
		teacherName,
		startDate,
		endDate,
		weekDay,
		comment,
	} = req.body;

	const subjectData = {
		name,
		color,
		teacherName,
		startDate,
		endDate,
		weekDay,
		comment,
		mark: [],
	};

	const createdSubject = await createSubject(subjectData);
	res.status(201).json(createdSubject);
};
