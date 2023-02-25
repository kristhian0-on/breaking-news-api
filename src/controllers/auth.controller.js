import bcrypt from 'bcrypt';
import { generateToken, loginService } from '../services/auth.service.js';

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginService(email);
        if (!user) {
            return res.status(404).send({ message: 'User or Password not found' });
        };
        const isPasswordIsValid = bcrypt.compareSync(password, user.password);
        
        if (!isPasswordIsValid) {
            return res.status(404).send({ message: 'User or Password not found' });
        };

        const token = generateToken(user.id);
        res.send({token});
    } catch (err) {
        res.status(500).send(err.message);
    }
};
