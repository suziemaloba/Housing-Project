const User = require('./../Models/message.model');

exports.createMessage = async (req, res) => {
	try {
		// res.write('Received Request to Create User');
		const data = req.body;

		const message = await Message.create(data);
		// const message = new User(data)
		// message.save();

		res.status(201).json({ message: 'Successs in creating message' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed', error: err });
	}
};

exports.getUMessage = async (req, res) => {
	try {
		const mmessageId = req.params.id;

		const message = await Message.find({ _id: messageId });
		// const message = await User.findById(userId);

		res.status(200).json({ message: 'Success', message });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.getAllMessage = async (req, res) => {
	try {
		const message = await Message.find();

		res.status(200).json({ message: 'success', results: message.length, users });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};

exports.update  = async (req, res) => {
	try {
		const messageId = req.params.id;
		const data = req.body;

		const message = await User.findByIdAndUpdate(messageId, data, { new: true });
		// const message = await User.findOneAndUpdate({_id: userId}, data)

		res.status(200).json({ message: 'success', message });
	} catch (err) {
		res.status(500).json({ message: 'Failed', err });
	}
};