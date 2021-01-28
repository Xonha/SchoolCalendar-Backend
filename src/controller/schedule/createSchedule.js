import { updateSubject } from '../subject/updateSubject';
import { readSubjectById } from '../subject/readSubject';

export const createSchedule = async (subjectId, scheduleData) => {
	try {
		const subject = await readSubjectById(subjectId);
		subject.schedules.push(scheduleData);
		const updatedSubject = updateSubject(subjectId, subject);
		return updatedSubject;
	} catch (e) {
		console.log(e);
		throw new Error('Não foi possível criar scheduleo');
	}
};

export const createScheduleAPI = async (req, res) => {
	const { weekDay, startDate, endDate, room } = req.body;
	const scheduleData = { weekDay, startDate, endDate, room };
	const createdSchedule = await createSchedule(
		req.params.subjectId,
		scheduleData
	);
	res.status(201).json(createdSchedule);
};
