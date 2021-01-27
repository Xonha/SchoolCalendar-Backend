import { Event } from '../../class/eventClass';

export const createEvent = async (eventData) => {
	try {
		const newEvent = await new Event(eventData).save();
		return newEvent;
	} catch (e) {
		throw new Error('Não foi possível criar evento');
	}
};

export const createEventAPI = async (req, res) => {
	const { subjectId, name, date, time, type, description } = req.body;
	const eventData = { subjectId, name, date, time, type, description };
	const createdEvent = await createEvent(eventData);
	res.status(201).json(createdEvent);
};
