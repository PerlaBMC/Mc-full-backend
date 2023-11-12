const Router = require ("express");
const {getPedidos, getPedido, postPedido, putPedido, deletePedido} = require ("../controllers/pedidos.ctrl");

const router = Router();

router.get ("/", getPedidos);
router.get ("/:id", getPedido)
router.post ("/", postPedido);
router.put ("/:id", putPedido);
router.delete ("/:id", deletePedido);

module.exports = router;  