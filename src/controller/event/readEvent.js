import { Event } from '../../class/event';

export const readEventById = async (id) => {
	try {
		const event = await Event.findById(id);
		if (event) {
			return event;
		} else {
			throw new Error('Evento não encontrado');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por esse evento');
	}
};

export const readEventByIdAPI = async (req, res) => {
	const event = await readEventById(req.params.id);
	res.status(200).json(event);
};

export const readAllEvents = async () => {
	try {
		const allEvents = await Event.find();
		return allEvents;
	} catch (e) {
		throw new Error('Não foi possível buscar eventos');
	}
};

export const readAllEventsAPI = async (req, res) => {
	const allEvents = await readAllEvents();
	res.status(200).json(allEvents);
};
