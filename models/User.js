// ORM table
// student table in db

// for database connection
const { Sequelize, DataTypes } = require("sequelize");


// prevent sequelize from pluralizing table names
const opts = {
    define: {
        freezeTableName: true
    }
}

// connect to db
// postgres://user:pass@example.com:5432/dbname
const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`, opts
);

// test the connection
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));

// student table in the nodeproject database
// model will be defined
// modelname, attribute, options
const UserModel = sequelize.define(
    "student",
    {
        // attribute
        // id, firstName, lastName, createdAt, updatedAt
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        // options
    }
);

module.exports = UserModel;