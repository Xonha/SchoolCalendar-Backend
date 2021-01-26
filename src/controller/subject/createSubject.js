import { Subject } from '../../class/subject';

export const createSubject = async (data) => {
	try {
		const newSubject = await new Subject(data).save();
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

	const data = {
		name,
		color,
		teacherName,
		startDate,
		endDate,
		weekDay,
		comment,
		mark: [],
	};

	const created = await createSubject(data);
	res.status(201).json(created);
};
