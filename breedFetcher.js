const request = require('request');

//take args from input in terminal and catch node and file name
const args = process.argv.slice(2);

// breed is a first element in array from args in terminal
const BREED = args[0];


//Search for a Breed by using part of it’s name as the ‘q’ query parameter.
//e.g ?q=sib to search for Siberian -->
//https://api.thecatapi.com/v1/breeds/search?q=sib

const APINAME = "https://api.thecatapi.com/v1/breeds/search?q=";


request(`${APINAME}${BREED}`, (error, response, body) => {
  const data = JSON.parse(body);

  // and Edge Case: Request Failed
  if (error) {
    console.log('Your request fails because of this error :', error.code + error.hostname); // Print the error if one occurred

  } else if (data.length === 0) {
    // Edge Case Breed Not Found
    //pop up every time, not only if []
    // if (data.length === 0); {
    console.log(` Requested breed name ${BREED} is not found `);

  } else {
    // deserialization of data, convert  String to Object

    //get access to first el of array
    // then to "description" propperty of object
    console.log(data[0].description);
  }

});