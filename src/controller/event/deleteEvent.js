import { Event } from '../../class/eventClass';

export const deleteEvent = async (id) => {
	try {
		const deletedEvent = await Event.findByIdAndDelete(id);
		if (deletedEvent) {
			return deletedEvent;
		} else {
			throw new Error('Evento não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por esse evento');
	}
};

export const deleteEventAPI = async (req, res) => {
	const deletedEvent = await deleteEvent(req.params.id);
	res.status(200).json(deletedEvent);
};
