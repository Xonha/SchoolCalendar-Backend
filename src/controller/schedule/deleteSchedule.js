import { updateSubject } from '../subject/updateSubject';
import { readSubjectById } from '../subject/readSubject';

export const deleteSchedule = async (subjectId, scheduleId) => {
	try {
		const subject = await readSubjectById(subjectId);

		subject.schedules = subject.schedules.filter((schedule) => {
			if (schedule.id === scheduleId) {
				return false;
			}
			return true;
		});

		const updatedSubject = await updateSubject(subjectId, subject);
		if (updatedSubject) {
			console.log({ updatedSubject });

			return updatedSubject;
		} else {
			throw new Error('Horário não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por esse scheduleo');
	}
};

export const deleteScheduleAPI = async (req, res) => {
	const { subjectId, id } = req.params;
	try {
		const deletedSchedule = await deleteSchedule(subjectId, id);
		console.log(deletedSchedule);
		res.status(200).json(deletedSchedule);
	} catch (e) {
		res.status(500).json(e.message);
	}
};
