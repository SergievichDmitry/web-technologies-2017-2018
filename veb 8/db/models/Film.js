const Sequelize = require('sequelize');

const connection = new Sequelize('dmitriy123', 'root', 'password', {
    dialect: 'mysql'
});



connection.sync()
    .then(function(){
        console.log('OK');
    })
    .catch(function(error){
        console.log(error);
    });



const Film = connection.define('film', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    popularity: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Film;