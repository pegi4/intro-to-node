const supervillains = require('supervillains');

var mySuperHero = supervillains.all;

for(var i = 0; i < 10; i++){
    var k = Math.floor(Math.random() * (600 - 1 + 1)) + 1;
    console.log(mySuperHero[k]);
}