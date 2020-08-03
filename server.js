const express = require('express')
const server = express()

const ideas = [
    {
        img: "./img/codeGuy.svg",
        title: "Cursos de Progamação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident sed quidem a suscipit ",
        url: "https://rocketseat.com.br",
    },
    {
        img: "./img/at-home.svg",
        title: "Exercicios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident sed quidem a suscipit ",
        url: "https://rocketseat.com.br",
    },
    {
        img: "./img/yoga-mat.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident sed quidem a suscipit ",
        url: "https://rocketseat.com.br",
    },
    {
        img: "./img/mic.svg",
        title: "Karaôke",
        category: "Lazer em casa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident sed quidem a suscipit ",
        url: "https://rocketseat.com.br",
    }
    
]

server.use(express.static("public"))
//Configuração do Numjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache:true,})

server.get("/",function(req,res){

    const reversedIdeas = [...ideas].reverse();
    
    let lastIdeas = [];
    for(idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea);
        }
    }

    return res.render("index.html",{ ideas:lastIdeas })
})
server.get("/ideas",function(req,res){
    return res.render("ideas.html",{ ideas })
})

server.listen(3000);



