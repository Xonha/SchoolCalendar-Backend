import { Event } from '../../class/event';

export const updateEvent = async (id, update) => {
	try {
		const updatedEvent = await Event.findByIdAndUpdate(id, update, {
			useFindAndModify: true,
		});
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
	const updatedEvent = await updateEvent(req.params.id, req.body);
	res.status(200).json(updatedEvent);
};
