const {Sequelize} = require("sequelize");

//conetion mysql

const sequelize = new Sequelize('trello' ,'root' ,'Aether01',{
    hostname: 'localhost',
    dialect: 'mysql',
    loggin: false,
})


sequelize.authenticate()
.then(() => {
    console.log('conecteted to database')
})
.catch((err) => {
    console.log('error conected to database',err)
})

module.exports = sequelize;