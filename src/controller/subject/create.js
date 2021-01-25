import { Subject } from '../../Schemas/subject';

export const create = async (data) => {
	try {
		const newSubject = await new Subject(data).save();
		return newSubject;
	} catch (e) {
		throw new Error('Não foi possível criar');
	}
};

export const createAPI = async (req, res) => {
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
	};

	const created = await create(data);
	res.status(201).json(created);
};
