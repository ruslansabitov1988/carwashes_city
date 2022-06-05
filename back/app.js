const express = require ('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const carWashesRouter = require("./routers/carwashRouter.js");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

app.use("/carwashes", carWashesRouter);


app.listen(8080)
