import {Sequelize} from 'sequelize';
import {} from 'dotenv/config';

/**
 * Sequelizes the database using MariaDB
 */
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
