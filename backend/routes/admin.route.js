const router = require("express").Router();
const check = require("express-validator").check;
const multer = require("multer");

const adminController = require("../controllers/admin.controller");
const authGuard=require('./guards/auth.guard');
const adminGuard = require("./guards/admin.guard");

router.post(
    "/add",authGuard.isAuth,adminGuard,
 
    multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "../frontend/src/assets/");
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + "-" + file.originalname);
            }
        })
    }).single("file"),
    check("name")
        .not()
        .isEmpty()
        .withMessage("name is required"),
    check("price")
        .not()
        .isEmpty()
        .withMessage("price is required")
        .isFloat({ min: 0.0000000009 })
        .withMessage("price must be greater than 0"),
    check("description")
        .not()
        .isEmpty()
        .withMessage("description is required"),
    check("category")
        .not()
        .isEmpty()
        .withMessage("category is required"),
  
    adminController.postAdd
);
router.delete(
    "/delete/:id",authGuard.isAuth,adminGuard,adminController.deleteProduct
);

module.exports = router;
