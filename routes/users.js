var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const usuarioController = require("../controllers/usuarioController");




/* GET users listing. */
router.get('/cadastroUsuario', usuarioController.registroUsuario);
router.get('/formLogin', usuarioController.loginForm);
router.post('/formLogin', usuarioController.usuarioLogado);
router.post("/salvarUsuario", usuarioController.salvarUsuario);


module.exports = router;
