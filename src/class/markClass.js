import mongoose from 'mongoose';

export const markSchema = mongoose.Schema({
	subjectId: String,
	value: Number,
	weight: Number,
	title: String,
	description: String,
});

export const Mark = mongoose.model('Mark', markSchema);
