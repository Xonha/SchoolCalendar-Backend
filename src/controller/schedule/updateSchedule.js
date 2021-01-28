import { readSubjectById } from '../subject/readSubject';
import { updateSubject } from '../subject/updateSubject';

export const updateSchedule = async (subjectId, scheduleId, newSchedule) => {
	try {
		const subject = await readSubjectById(subjectId);
		subject.schedules = subject.schedules.map((schedule) => {
			if (schedule.id === scheduleId) {
				return {
					...schedule._doc,
					...newSchedule,
				};
			}
			return schedule;
		});

		const updatedSchedule = await updateSubject(subjectId, subject);
		if (updatedSchedule) {
			return updatedSchedule;
		} else {
			throw new Error('Horário não econtrado');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por esse scheduleo');
	}
};

export const updateScheduleAPI = async (req, res) => {
	const { subjectId, id } = req.params;
	const { weekDay, startDate, endDate, room } = req.body;
	const scheduleData = { weekDay, startDate, endDate, room };
	const updatedSchedule = await updateSchedule(subjectId, id, scheduleData);
	res.status(200).json(updatedSchedule);
};
