const sumAll = function(numStart,numFinal) {

    if (!Number.isInteger(numStart) || !Number.isInteger(numFinal)) return "ERROR";
    if (numStart < 0 || numFinal < 0) return "ERROR";
    if (numStart > numFinal){
        const temp = numStart;
        numStart = numFinal;
        numFinal = temp;
    }
    let totalSum = 0;

    do{
        totalSum += numStart;
        numStart++;
    }while(numFinal >= numStart);
    


    return totalSum;
   
};

// Do not edit below this line
module.exports = sumAll;

// let totalSum = 0;
// do{
//     totalSum += numStart;
//     numStart++;
// }while(numFinal >= numStart)
// return totalSum;
