const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

/*const Agendamentos = sequelize.define('agendamentos', {
    nome: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    origem: {
        type: Sequelize.STRING
    },
    data: {
        type: Sequelize.DATE
    },
    observacao: {
        type: Sequelize.TEXT
    }
})

//Agendamentos.sync({force:true})*/