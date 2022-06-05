let fs = require('fs');

const CARWASH_FILE_PATH = "./text.txt";




const getCarWashes = () =>{
    return JSON.parse(fs.readFileSync(CARWASH_FILE_PATH, "utf-8"))

}


const getCityId = cityId =>{
    let array = getCarWashes();
    let foundCity = array.filter(item => item.cityId == cityId);

   return (foundCity);

}



module.exports = {
    getCarWashes,
    getCityId
    
}