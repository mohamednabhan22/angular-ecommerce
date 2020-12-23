const router = require("express").Router();
const check = require("express-validator").check;
const authGuard=require('./guards/auth.guard');
const cartController = require("../controllers/cart.controller");

router.get("/",authGuard.isAuth, cartController.getCart);
router.get("/:productId",authGuard.isAuth,cartController.getItemByUserAndProduct);
router.post(
    "/",authGuard.isAuth,
      check("amount")
        .not()
        .isEmpty()
        .withMessage("amount is required")
        .isInt({ min: 1 })
        .withMessage("amount must be grater then 0"),
    cartController.postCart
);



router.post(
    "/delete",authGuard.isAuth,
       cartController.postDelete
);

router.post(
    "/decrease",authGuard.isAuth,
       cartController.postDecrease
);
router.delete(
    "/deleteAll",authGuard.isAuth,cartController.postDeleteAll
);
module.exports = router;
