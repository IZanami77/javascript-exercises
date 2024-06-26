const removeFromArray = function(array, ...elementToRemoved) {
    newArray = [];
    array.forEach((element) => {

        if(!elementToRemoved.includes(element)){
            newArray.push(element);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
