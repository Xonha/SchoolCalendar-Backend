const mongoose = require('mongoose');

export function initDB() {
	mongoose.connect('mongodb://localhost:27017/studentCalendar', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
}
