import { Mark } from '../../class/mark';

export const readMarkById = async (id) => {
	try {
		const mark = await Mark.findById(id);
		if (mark) {
			return mark;
		} else {
			throw new Error('Nota não econtrada');
		}
	} catch (e) {
		throw new Error('Não foi possível buscar por essa nota');
	}
};

export const readMarkByIdAPI = async (req, res) => {
	const mark = await readMarkById(req.params.id);
	res.status(200).json(mark);
};

export const readAllMarks = async () => {
	try {
		const allMarks = await Mark.find();
		return allMarks;
	} catch (e) {
		throw new Error('Não foi possível buscar notas');
	}
};

export const readAllMarksAPI = async (req, res) => {
	const allMarks = await readAllMarks();
	res.status(200).json(allMarks);
};
