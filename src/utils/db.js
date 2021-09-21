const Sequelize = require('sequelize');
const CONNECTION_STRING = process.env.DATABASE || "postgres://postgres:helal2244@localhost:5432/urls";
const db = new Sequelize(CONNECTION_STRING);

/* create user table */
const User = db.define('user', {
    name: Sequelize.TEXT,
    email: {
        type: Sequelize.TEXT,
        unique: true
    },
    password: Sequelize.TEXT
});

/* create urls table */
const Direction = db.define('direction', {
    destination: Sequelize.TEXT,
    hash: Sequelize.TEXT
});

db.sync()
    .then(e => {
        console.log('Database Synced!');
    }).catch(e => console.log(e.message));

module.exports = {
    db, User, Direction
}