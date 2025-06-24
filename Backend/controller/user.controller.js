const User = require('../Models/user.model');

const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
	host: "gmail",
	port: 587,
	secure: true === 'true',
	service: 'gmail',
	auth: {
		user: "landmarktechcrm@gmail.com",
		pass: "iyoxsooelqrgzsrz" ,
	},
});
// https://github.com/clintjeff2/internship-backend/blob/master/internController.js
exports.sendEmails = async (req, res) => {
	const data = req.body;
	console.log(data)
	await transporter.sendMail({
			from: `DwElLnEsT <landmarktechcrm@gmail.com>`,
			to: data.email,
			subject: 'New Tenant',
			text: data.message,
			html: data.message,
		})
}


exports.createUser = async (req, res) => {
	try {
		// res.write('Received Request to Create User');
		const data = req.body;

		const user = await User.create(data);
		// const user = new User(data)
		// user.save();

		res.status(201).json({ message: 'Successs in creating user' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed', error: err });
	}
};

exports.getUser = async (req, res) => {
	try {
		const userId = req.params.id;

		const user = await User.find({ _id: userId });
		// const user = await User.findById(userId);

		res.status(200).json({ message: 'Success', user });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find();

		res.status(200).json({ message: 'success', results: users.length, users });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const userId = req.params.id;
		const data = req.body;

		const user = await User.findByIdAndUpdate(userId, data, { new: true });
		// const user = await User.findOneAndUpdate({_id: userId}, data)

		res.status(200).json({ message: 'success', user });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};                                                           