import { Sequelize } from "sequelize"

const db = new Sequelize('konect', 'root', '',{
    host:'localhost',
    dialect:"mysql"
})

export default db
