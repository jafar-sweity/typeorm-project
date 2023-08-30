import express from 'express';
import { User } from '../db/enitnies/User.js';
const router = express.Router();
router.post('/register', async (req, res) => {
    const [username, password, email] = [req.body.username, req.body.password, req.body.email];
    const newUser = new User();
    try {
        const find = await User.findOneBy({ username });
        if (find) {
            res.status(400).send(`Username already exists `);
        }
        else {
            newUser.username = username;
            newUser.password = password;
            newUser.email = email;
            await newUser.save();
            res.status(200).send(`User created ...`);
        }
    }
    catch (err) {
        console.error('Error while registering user:', err);
        res.status(500).send({ message: 'An error occurred while registering user' });
    }
});
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOneBy({ id });
        if (!user) {
            res.status(400).send(`user not found ...`);
        }
        else {
            await user.remove();
            res.status(200).send(`user deleted `);
        }
    }
    catch (err) {
        console.error('Error while registering user:', err);
        res.status(500).send({ message: 'An error occurred while registering user' });
    }
});
export default router;
