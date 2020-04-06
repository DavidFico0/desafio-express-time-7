const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController");
const autorizado = require("../middleware/autorizado")

router.get("/admin", autorizado ,adminController.admin);


module.exports = router; 