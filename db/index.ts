import { DataSource } from "typeorm";
import { User } from "./enitnies/User.js";
import { error } from "console";

const dataSource = new DataSource(
    {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'typeormHW',
        entities: [User],
        synchronize: true,
        logging: true
    }
)

const initialize = () => dataSource.initialize().then(() => console.log('connect done to DB ^_^')
).catch((err) => {
    console.error('SOME THING WENT WRONG ...' + err);

})
export default { initialize, dataSource }