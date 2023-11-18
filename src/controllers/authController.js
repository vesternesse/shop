const path = require('path')
const db = require('./dbController');
const users = [{ username: 'john', password: 'john' }]

function registerForm(req, res) {
	const filePath = path.join(__dirname, '..', '..', 'public', 'register.html');
	res.sendFile(filePath);
}

async function registerUser(req, res) {
	const username = req.body.username;
	const password = req.body.password;

	const connection = db.connectToDatabase()
	const dbAddUser = await db.addUser(username, password);

	if(dbAddUser) {
		res.status(200).json({message: 'Registration successful'});
	} else {
		res.status(401).json({message: 'Registration successful'});
	}
}

function loginForm(req, res) {
	const filePath = path.join(__dirname, '..', '..', 'public', 'login.html');
	res.sendFile(filePath);
}

function loginAuth(req, res) {
	const { username, password } = req.body
	console.log(username, password);

	const user = users.find(u => u.username === username && u.password === password);

	if (user) {
		res.status(200).json({ message: 'Login successful' });
	} else {
		res.status(401).json({ message: 'Login failed' });
	}
}


module.exports = {
	loginForm,
	loginAuth,
	registerForm,
	registerUser
};