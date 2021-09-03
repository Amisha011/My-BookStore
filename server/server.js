const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
//const User=require("./models/user.schema")

//import router
const userRouter = require("./routers/user.route");
const productRouter = require("../server/routers/product.route");
const orderRouter=require('../server/routers/orders.route');
const wishlistRouter=require("./routers/wishlist.route");
//create server
const app = express();

//use middlewars
app.use(cors())
app.use(bodyParser.json());


//mongodb url
const dbURL = "mongodb+srv://Amisha:amisha011@cluster0.dujaf.mongodb.net/projectBookStore?retryWrites=true&w=majority"
//coonecting with db

//connect with mongoose
mongoose.connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log("Connected to MongoDb");


        app.listen(8001, () => {
            console.log("server is on port 8001")
        })

    })
    .catch(error => {
        console.log("error in coonecting with db", error)
    })

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/orders",orderRouter);
app.use("/api/wishlist",wishlistRouter);