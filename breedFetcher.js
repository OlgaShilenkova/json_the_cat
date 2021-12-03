const request = require('request');

const APINAME = "https://api.thecatapi.com/v1/breeds/search?q=";


const fetchBreedDescription = function(breedName, callback) {


  request(`${APINAME}${breedName}`, (error, response, body) => {
   
    const data = JSON.parse(body);

   
    if (error) {
      callback(error, null);
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };