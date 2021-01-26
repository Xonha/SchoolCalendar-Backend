import mongoose, { Schema } from 'mongoose';
import { Mark } from './mark';

export const subjectSchema = mongoose.Schema({
	name: String,
	color: String,
	teacherName: String,
	startDate: Date,
	endDate: Date,
	weekDay: Number,
	comment: String,
	marks: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Mark',
		},
	],
});

export const Subject = mongoose.model('Subject', subjectSchema);
