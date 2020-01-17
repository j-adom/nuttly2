const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./users");

router.use("/users",userRoutes);
router.use("/products",productRoutes);


module.exports = router;

