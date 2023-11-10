const path = require('path')
const users = [{username: 'john', password: 'john'}]

function registerForm(req,res) {
    const filePath = path.join(__dirname, '..','..','public','register.html');
	res.sendFile(filePath);
}

function loginForm(req,res) {
    const filePath = path.join(__dirname, '..','..','public','login.html');
	res.sendFile(filePath);
}

function loginAuth(req,res) {
    const {username, password} = req.body
    console.log(username,password);

	const user = users.find(u => u.username ===username && u.password === password);

	if (user) {
		res.status(200).json({message: 'Login successful'});	
	} else {
		res.status(401).json({message: 'Login failed'});
	}
}


module.exports = {
    loginForm,
    loginAuth,
	registerForm
};