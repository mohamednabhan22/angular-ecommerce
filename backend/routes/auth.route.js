const router = require("express").Router();
const check = require("express-validator").check;

const authGuard = require("./guards/auth.guard");

const authController = require("../controllers/auth.controller");


router.post(
    "/signup",
    check("username")
        .not()
        .isEmpty()
        .withMessage("username is required"),
    check("email")
        .not()
        .isEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("invalid format"),
    check("password")
        .not()
        .isEmpty()
        .withMessage("password is required")
        .isLength({ min: 6 })
        .withMessage("password must be at least 6 charachters"),
    check("confirmPassword").custom((value, { req }) => {
        if (value === req.body.password) return true;
        else throw "passwords dont equal";
    }),
    authController.postSignup
);
router.get('/user',authGuard.isAuth,(req,res)=>{
   res.json(req.decoded); 
})

router.post(
    "/login",
   
    check("email")
        .not()
        .isEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("invalid format"),
    check("password")
        .not()
        .isEmpty()
        .withMessage("password is required")
        .isLength({ min: 6 })
        .withMessage("password must be at least 6 charachters"),
    authController.postLogin
);


module.exports = router;
