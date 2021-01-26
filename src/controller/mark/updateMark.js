import { Mark } from '../../class/mark';

export const updateMark = async (id, update) => {
	try {
		const updatedMark = await Mark.findByIdAndUpdate(id, update);
		if (updatedMark) {
			return updatedMark;
		} else {
			throw new Error('Nota não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por essa nota');
	}
};

export const updateMarkAPI = async (req, res) => {
	const updatedMark = await updateMark(req.params.id, req.body);
	res.status(200).json(updatedMark);
};
