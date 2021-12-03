const request = require('request');

const APINAME = "https://api.thecatapi.com/v1/breeds/search?q=";


const fetchBreedDescription = function (breedName, callback) {


  request(`${APINAME}${breedName}`, (error, response, body) => {
    
    if (error) {
      callback(`${error}`, null);
      return;
    }
    
    else if (body.length < 5) {
      callback(null, ` Requested breed name ${breedName} is not found `)
      return;
    }

    const data = JSON.parse(body);

    callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };