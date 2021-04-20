const dotenv = require('dotenv')
const path= require('path')

dotenv.config({path: path.resolve(__dirname, '../.env')})


module.exports.development = {
  database: process.env.DB_NAME,
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}

// module.exports.production = {
//   dialect: 'mysql',
//   seederStorage: 'sequelize',
//   url: process.env.DB_URL
// }
