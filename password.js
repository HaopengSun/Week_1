const input = process.argv.slice(2);
const obfuscate = function(arr){
    let newArray = "";
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            switch(arr[i][j]){
                case 'a':
                    newArray += "4";
                    break;
                case 'e':
                    newArray += "3";
                    break;
                case 'o':
                    newArray += "0";
                    break;
                case 'l':
                    newArray += "1";
                    break;
                default:
                    newArray += arr[i][j];
            }
        }
    }
    return newArray;
}
console.log(obfuscate(input));