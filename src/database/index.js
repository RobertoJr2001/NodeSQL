// Database Connection
const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbconfig);

User.init(connection); // Register the model within the connection
Address.init(connection);// Register the model within the connection
Tech.init(connection);// Register the model within the connection

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;