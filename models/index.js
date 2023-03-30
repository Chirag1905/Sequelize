const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize({
     database : 'demo',
     username : 'root',
     password : 'olivestart72',
     host: 'localhost',
     dialect: 'mysql'
});

try {
     sequelize.authenticate();
     console.log('Connection has been established successfully.');
} catch (err) {
     console.error('Unable to connect to the database:', err);
}

// sequelize.sync({force: true});

module.exports = sequelize