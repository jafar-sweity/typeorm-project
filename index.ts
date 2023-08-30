import { log } from 'console';
import express from 'express'
import db from './db/index.js';
import USERROUTER from './routes/user.js'

const app = express();
app.use(express.json())

const port = 4000;

app.use('/user', USERROUTER)
app.listen(port, () => {
    console.log(
        `app is in port ${port}`);
    db.initialize();
});