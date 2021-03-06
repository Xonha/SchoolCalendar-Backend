import { updateSubject } from '../subject/updateSubject';
import { readSubjectById } from '../subject/readSubject';

export const deleteEvent = async (subjectId, eventId) => {
	try {
		const subject = await readSubjectById(subjectId);

		subject.events = subject.events.filter((event) => {
			if (event.id === eventId) {
				return false;
			}
			return true;
		});

		const updatedSubject = await updateSubject(subjectId, subject);
		if (updatedSubject) {
			console.log({ updatedSubject });

			return updatedSubject;
		} else {
			throw new Error('Evento não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por esse evento');
	}
};

export const deleteEventAPI = async (req, res) => {
	const { subjectId, id } = req.params;
	try {
		const deletedEvent = await deleteEvent(subjectId, id);
		console.log(deletedEvent);
		res.status(200).json(deletedEvent);
	} catch (e) {
		res.status(500).json(e.message);
	}
};
