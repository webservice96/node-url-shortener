const Sequelize = require('sequelize');
const CONNECTION_STRING = precess.env.DATABASE || "postgres://postgres:helal2244@localhost.com:5432/urls";
const db = new Sequelize(CONNECTION_STRING);

/* create user table */
const User = db.define('user', {
    name: Sequelize.TEXT,
    email: Sequelize.TEXT,
    password: Sequelize.TEXT
});

/* create urls table */
const Direction = db.define('direction', {
    destination: Sequelize.TEXT,
    hash: Sequelize.TEXT
});

module.exports = {
    db,User,Direction
}