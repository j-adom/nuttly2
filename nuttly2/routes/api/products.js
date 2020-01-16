const router = require("express").Router();
const productsController = require("../../controllers/productsController");


// MATCHES with /api/products
router.route("/")
    .get(productsController.findAll)
    .post(productsController.create);


// MATCHES with /api/products/:id
router.route("/:id")
    .get(productsController.findById)
    .put(productsController.update)
    .delete(productsController.remove);

module.exports = router;
