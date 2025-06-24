const PORT=4000
const mongoose = require('mongoose');
const app = require('./App');

const connectToDb = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/DwElLnEsT');
		console.log('Connected to Database ');
	} catch (err) {
		console.log('Error Connecting to database: ', err);
	}
};

connectToDb();

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});