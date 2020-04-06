let express = require('express');
let router = express.Router();

let homeController = require('../controllers/homeController');
let adminController = require('../controllers/adminController');
const autorizado = require('../middleware/autorizado');

/* GET home page. */
router.get('/', homeController.index);

router.post('/contato', homeController.contato);

router.get('/newsletter', homeController.newsletter);

router.get('/admin', autorizado , adminController.admin);

module.exports = router;
