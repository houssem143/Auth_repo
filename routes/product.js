const express=require ('express');
const { getProducts, addProducts, getProduct, deleteProducts, editProducts } = require('../controllers/product.controller');
const auth = require('../middlewares/auth');
const roleCheck = require('../middlewares/role');
const router = express.Router()


router.get('/get_products',getProducts) 
router.post("/add_products",auth,roleCheck(['Admin']),addProducts)
router.get("/get_products/:id",getProduct)
router.delete("/delete_products/:id",auth,roleCheck(['Admin']),deleteProducts)
router.put('/edit_product/:id',auth,roleCheck(['Admin']),editProducts)

module.exports = router;