"use strict";

var tesseract = require('node-tesseract');
var options = {
    l: 'eng',
    psm: 6
};
tesseract.process('./docs/PAN_card_front.jpg', options, (err, text) => {
    if(err){
        return console.log("An error occured: ", err);
    }
    // console.log("Recognized text:");
    // the text variable contains the recognized text
    console.log(text);
});