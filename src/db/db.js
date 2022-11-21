const {Sequelize} = require("sequelize")
const path = require("path")

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(_dirname, "movie-theatre.sqlite")
})

module.exports = db