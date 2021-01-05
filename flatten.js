const flatten = function(arr){
    let output = [];
    for (const element of arr){
        if (Array.isArray(element) === true){
            for (const individual of element){
                output.push(individual);
            }
        } else {
            output.push(element);
        }
    }
    return output;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));