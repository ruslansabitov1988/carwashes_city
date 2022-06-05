const express = require ("express");
const carWashesRouter = express.Router();

const fileCarWashes = require("../module/carwashFile.js");

carWashesRouter.get('/',(request, response)=>{
    let array = fileCarWashes.getCarWashes()
    response.send(array);
});

carWashesRouter.get('/city/:cityId',(request, response)=>{
    let useCityId = request.params.cityId;

    let foundCity = fileCarWashes.getCityId(useCityId)

    response.status(200).send(foundCity)
});


module.exports = carWashesRouter;