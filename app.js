const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.render("cadastro")
})

app.get("/consulta", function(req, res){
    post.findAll().then(function(post){
        res.render("consulta", {post})
    }).catch(function(erro){
        console.log("Erro ao carregar dados do banco: " + erro)
    })
})

app.get("/excluir/:id", function(req, res){
    const id = req.params.id;
    post.destroy({
        where: {
            id : id
        }
    }).then(function() {
        res.redirect("/consulta");
    }).catch(function(erro) {
        res.send("Erro ao excluir dados" + erro)
    })
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data: req.body.data,
        observacao: req.body.observacao
    }).then(function(){
        res.send("Dados Enviados com sucesso")
    }).catch(function(erro){
        res.send("Falha ao cadastrar dados: " + erro)
    })
})


app.listen(8081, function(){
    console.log("Servidor ativo!")
})