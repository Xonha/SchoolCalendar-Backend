import mongoose from 'mongoose';

export const subjectSchema = mongoose.Schema({
	name: String,
	color: String,
	teacherName: String,
	schedules: [
		{
			weekDay: Number,
			startDate: Date,
			endDate: Date,
			room: String,
		},
	],
	events: [
		{
			name: String,
			date: Date,
			time: Date,
			category: String,
			description: String,
		},
	],
	marks: [
		{
			title: String,
			value: Number,
			weight: Number,
			description: String,
		},
	],
});

export const Subject = mongoose.model('Subject', subjectSchema);
