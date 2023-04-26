const db = require("./banco")

const Cadastros = db.sequelize.define('cadastros', {
    nome: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.BIGINT
    },
    origem: {
        type: db.Sequelize.STRING
    },
    data: {
        type: db.Sequelize.DATEONLY
    },
    observacao: {
        type: db.Sequelize.TEXT
    }

})

//Cadastros.sync({force:true})

module.exports = Cadastros