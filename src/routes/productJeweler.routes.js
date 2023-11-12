const Router = require ("express");
const {getJewelers, getJewelwer, postJeweler, putJeweler, deleteJeweler} = require ("../controllers/productJeweler.ctrl");

const router = Router();

router.get ("/", getJewelers);
router.get ("/:id", getJewelwer)
router.post ("/", postJeweler);
router.put ("/:id", putJeweler);
router.delete ("/:id", deleteJeweler);

module.exports = router;  