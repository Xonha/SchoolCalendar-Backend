import mongoose from 'mongoose';

export const Subject = mongoose.model('Subject', {
	name: String,
	color: String,
	teacherName: String,
	startDate: Date,
	endDate: Date,
	weekDay: Number,
	comment: String,
});
