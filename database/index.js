/* Import packages */
const Sequelize = require("sequelize");

/* Import env variables */
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

/* Import connection */
const connection = require("./connection")[nodeEnv];

/* Get db connection info */
const {
  database: dbName,
  username: dbUsername,
  password: dbPassword,
  host: dbHost,
} = connection;

/* Init sequelize instance */
const sequelize = new Sequelize({
  database: dbName,
  username: dbUsername,
  password: dbPassword,
  host: dbHost,
  port: 5432,
  dialect: "postgres",
});

/* Test database connection */
const testConnection = () => {
  return sequelize
    .authenticate()
    .then(() => {
      console.log("[✨ Database] Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("[❌ Database] Unable to connect to the database:", err);
    });
};

/* Export */
module.exports = {
  sequelize,
  testConnection,
};
