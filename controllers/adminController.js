const fs  = require("fs");

const path = require('path');

let pathContato = path.join('db',"contato.json")
let pathNewsletter = path.join('db',"newsletter.json")

const adminController = {
  admin: (req, res) => {

    let listaNewsletter = fs.readFileSync(pathNewsletter, { encoding : 'UTF-8'});
    listaNewsletter = JSON.parse(listaNewsletter);

    let listaContato = fs.readFileSync(pathContato, { encoding : 'UTF-8'});
    listaContato = JSON.parse(listaContato);

    console.log(listaNewsletter.inscritos[0])
    res.render(
      'admin', 
      { title: 'admin', listaNewsletter, listaContato }
    );
  }
}

module.exports = adminController;