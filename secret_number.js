'use strict';
module.exports = function() {
    let randomNum = Math.floor(Math.random()*1000000);

    return function(){
        let num1 = randomNum;
        return num1;
    }



};