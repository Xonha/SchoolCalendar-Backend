import mongoose from 'mongoose';

export const eventSchema = mongoose.Schema({
	subjectId: String,
	name: String,
	date: Date,
	time: Date,
	type: String,
	description: String,
});

export const Event = mongoose.model('Event', eventSchema);
