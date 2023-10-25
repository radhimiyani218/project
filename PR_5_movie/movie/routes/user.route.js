const {Router}=require("express")
const {Home, signup,login, deleted,creat,dele,updated,filter,rating,comment} = require("../controllers/user.controllers")
const {middlewares} = require("../middlewares/user.middleware")
const router = Router()


// user routes
router.get("/",Home)
router.post("/user/signup",signup)
router.post("/user/login",middlewares, login)
router.delete("/user/delete/:id",deleted)

// movie routes

router.post("/movie/create",creat)
router.delete("/movie/delete/:id",dele)
router.patch("/movie/update/:id",updated)
router.patch("/movie/rating/:id",rating);
router.patch("/movie/comment/:id",comment );
router.get("/movie/filter",filter)

module.exports=router