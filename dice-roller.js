'use strict';
const input = process.argv.slice(2);
const diceRoller = function(number){
    let returnArray = [];
    for (let i = 0; i < Number(number); i++){
        returnArray.push(Math.floor(Math.random() * 6) + 1);
    }
    return 'Rolled ' + number + ' dice: ' + returnArray.join();
}
console.log(diceRoller(input));