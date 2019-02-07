import axios from 'axios';
import bcrypt from 'bcryptjs';

const RegistrationService = data => {
	const password = data.password;
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);

	data["password"] = hash;

	return axios.post('http://localhost:4000/registration/register', data)
		.then(res => res.status)
}

export default RegistrationService;
