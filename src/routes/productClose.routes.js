const Router = require ("express");
const {getClose, getCloseID, postClose, putClose, deleteClose} = require ("../controllers/productClose.ctrl");

const router = Router() 

router.get ("/", getClose);
router.get ("/:id", getCloseID)
router.post ("/", postClose);
router.put ("/:id", putClose);
router.delete ("/:id", deleteClose);

module.exports = router