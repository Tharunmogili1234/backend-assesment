const express = require('express');
const router = express.Router();
const { getAll, create, update, delete: del } = require('../controllers/productController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.get('/', getAll);
router.post('/', auth, role('admin'), create);
router.put('/:id', auth, role('admin'), update);
router.delete('/:id', auth, role('admin'), del);

module.exports = router;
