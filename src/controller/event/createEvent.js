import { updateSubject } from '../subject/updateSubject';
import { readSubjectById } from '../subject/readSubject';

export const createEvent = async (subjectId, eventData) => {
	try {
		const subject = await readSubjectById(subjectId);
		subject.events.push(eventData);
		const updatedSubject = updateSubject(subjectId, subject);
		return updatedSubject;
	} catch (e) {
		console.log(e);
		throw new Error('Não foi possível criar evento');
	}
};

export const createEventAPI = async (req, res) => {
	const { name, date, time, category, description } = req.body;
	const eventData = { name, date, time, category, description };
	const createdEvent = await createEvent(req.params.subjectId, eventData);
	res.status(201).json(createdEvent);
};
