const Router = require ("express");
const { getShoes, getShoesID, postShoes, putShoes, deleteShoes } = require("../controllers/productShoes.ctrl");

const router = Router()

router.get ("/", getShoes);
router.get ("/:id", getShoesID)
router.post("/", postShoes);
router.put ("/:id", putShoes);
router.delete ("/:id", deleteShoes);

module.exports = router;
