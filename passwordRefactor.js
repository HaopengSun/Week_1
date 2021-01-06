const input = process.argv.slice(2);
const obfuscate = function(arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray.push(wordObfuscate(arr[i]));
    }
    return newArray;
}
const wordObfuscate = function(word){
  let output = '';
  for (let j = 0; j < word.length; j++){
    switch(word[j]){
        case 'a':
          output += "4";
          break;
        case 'e':
          output += "3";
          break;
        case 'o':
          output += "0";
          break;
        case 'l':
          output += "1";
          break;
        default:
          output += word[j];
    }
  }
  return output;
}
console.log(obfuscate(input));