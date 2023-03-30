const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Contact = sequelize.define('contact', {
  // Model attributes are defined here
  permanent_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  current_address: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
     tableName : 'contacts',
    //  timestamps : false
    createdAt : false,
    updatedAt : true   
  // Other model options go here
});

module.exports = Contact;