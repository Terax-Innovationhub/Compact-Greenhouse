import {Sequelize} from 'sequelize';
// import {DB_USER, DB_HOST, DB_PASS} from '@env';
import {} from 'dotenv/config';
const sequelize = new Sequelize(
  'sensorDB',
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mariadb',
    host: process.env.DB_HOST,
  },
);
console.log(process.env.DB_USER);
export default sequelize;
