const {Sequelize} = require("sequelize")
const {env} = require("../config/env");

const sequelize = new Sequelize(env.MYSQL_DATABASE, env.MYSQL_USERNAME, env.MYSQL_PASSWORD, {
    host: env.MYSQL_HOST,
    dialect: env.MYSQL_DIALECT
});

const connectDB = async () => {
    await sequelize.sync();
}

module.exports = {connectDB, sequelize}