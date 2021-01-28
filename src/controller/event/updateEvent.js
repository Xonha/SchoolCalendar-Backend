import { readSubjectById } from '../subject/readSubject';
import { updateSubject } from '../subject/updateSubject';

export const updateEvent = async (subjectId, eventId, newEvent) => {
	try {
		const subject = await readSubjectById(subjectId);
		subject.events = subject.events.map((event) => {
			if (event.id === eventId) {
				return {
					...event._doc,
					...newEvent,
				};
			}
			return event;
		});

		const updatedEvent = await updateSubject(subjectId, subject);
		if (updatedEvent) {
			return updatedEvent;
		} else {
			throw new Error('Evento não econtrado');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por esse evento');
	}
};

export const updateEventAPI = async (req, res) => {
	const { subjectId, id } = req.params;
	const { name, date, time, category, description } = req.body;
	const eventData = { name, date, time, category, description };
	const updatedEvent = await updateEvent(subjectId, id, eventData);
	res.status(200).json(updatedEvent);
};
