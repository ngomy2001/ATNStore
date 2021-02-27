/* Import packages */
const Sequelize = require("sequelize");

/* Import env variables */
//const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : "test";

/* Import connection */
const connection = require("./connection")['production'];

/* Get db connection info */
const {
  database: dbName,
  username: dbUsername,
  password: dbPassword,
  host: dbHost,
} = connection;

/* Init sequelize instance */
const sequelize = new Sequelize('postgres://kzzwfwehwglxtn:bacd51945a4d3d2bae04e440560d8dd98233a3025258b1a5a71604c39866e9c9@ec2-18-207-95-219.compute-1.amazonaws.com:5432/daahuh3p26sc2f', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
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
