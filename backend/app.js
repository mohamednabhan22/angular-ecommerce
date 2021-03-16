const express = require("express");
const path = require("path");
const cors =require('cors');
const bodyParser =require('body-parser');
const homeRouter = require("./routes/home.route");
const productRouter = require("./routes/product.route");
const authRouter = require("./routes/auth.route");
const cartRouter = require("./routes/cart.route");
const adminRouter = require("./routes/admin.route");
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")));
//app.set("views", "views");

app.use("/", homeRouter);
app.use("/", authRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/admin", adminRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server listen on port " + port);
});
