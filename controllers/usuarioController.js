const path = require('path');
const fs = require('fs');
const bcrypt = require("bcrypt");

let pathUsuario = path.join("db", "usuario.json");

const usuarioController = {
    admin: (req, res) => {
    

      let cadastro = fs.writeFileSync()
      listaNewsletter = JSON.parse(listaNewsletter);
  
      let listaContato = fs.readFileSync(pathContato, { encoding : 'UTF-8'});
      listaContato = JSON.parse(listaContato);
  
      console.log(listaNewsletter.inscritos[0])
      res.render(
        'admin', 
        { title: 'admin', listaNewsletter, listaContato }
      );
    },

    registroUsuario: (req,res) => {


        res.render("cadastroUsuario", {title: "Cadastro Usuario" })
    },

    salvarUsuario: (req, res) => {
    
        let {nome, email, senha} = req.body;

        let senhaCript = bcrypt.hashSync(senha, 10);

        let objUsuario = {nome, email, senha: senhaCript};

        let usuarioJson = JSON.stringify(objUsuario);
        
        let readUsuario = []

        if(fs.existsSync(pathUsuario)){
            readUsuario = fs.readFileSync(pathUsuario, {encoding: "UTF-8"});
            readUsuario = JSON.parse(readUsuario);
            readUsuario.push(objUsuario);
            fs.writeFileSync(pathUsuario, readUsuario);
        }else{
            readUsuario.push(JSON.stringify([objUsuario]));
            fs.writeFileSync(pathUsuario, readUsuario);
        }

        readUsuario = JSON.stringify(readUsuario);

        fs.writeFileSync(pathUsuario, readUsuario);
        
        res.render("salvarUsuario", {title: "Cadastro Sucesso"});

        

    },

    loginForm: (req, res) => {
      res.render(
        'login', 
        { title: 'Login'}
      );
    },
    usuarioLogado: (req,res) => { 
      let {email, senha} = req.body;
      let listaUsuario = fs.readFileSync(pathUsuario, { encoding:'utf-8'});
      listaUsuario = JSON.parse(listaUsuario);
      for(let usuario of listaUsuario){
        console.log(usuario);
        if(!bcrypt.compareSync(senha, usuario.senha)){
          res.send('A senha e invalida');
        }
        req.session.usuario = listaUsuario;
        res.redirect('/admin');
      }
      console.log('sucesso'); 
     
    }
  }
  
  
  module.exports = usuarioController;