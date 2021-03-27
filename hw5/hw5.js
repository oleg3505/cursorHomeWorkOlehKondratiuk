const length = prompt(`length =`);
const min = prompt(`min = `);
const max = prompt(`max = `);

function getRandomArray(length, min, max) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    randomArray[i] = rand;
  }
  return randomArray;
}
const randomArray = getRandomArray(length, min, max);
console.log(randomArray);




const arrayForFunctionGetAverage = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 1.3];

function getAverage(...arrayForFunctionGetAverage){
    

    let sumOfArray = 0;
    j = 0;
    for (let i = 0; i < arrayForFunctionGetAverage.length; i++){
        if(Number.isInteger(arrayForFunctionGetAverage[i])){
            sumOfArray = sumOfArray + arrayForFunctionGetAverage[i];
            j++;
        }
    
     
}
    const average = Math.round((sumOfArray/j)*100)/100; 
    return average;
}
const average = getAverage(...arrayForFunctionGetAverage);
console.log(average);




const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];


function getMedian(...numbers){
    numbers.sort( function(a, b) {
        return a - b;
    });
    if (numbers.length % 2 === 1){
        const indexMedian = Math.floor(numbers.length/2);
        const median = numbers[indexMedian];
        return median;  
    } else {
        const indexMedian1 = numbers.length / 2;
        const indexMedian2 = indexMedian1 - 1;
        const median = (numbers[indexMedian1] + numbers[indexMedian2]) / 2;
        return median;
    }
    
}

const medianLog = getMedian(...numbers);
console.log(medianLog);



function filterEvenNumbers(...numbers){
    numbers.sort( function(a, b) {
        return a - b;
    });
    let numbersSorted = numbers.filter(function(number){
        if (number % 2 === 1){
            return number;
        }
    });
    return numbersSorted;
}    
const numbersSorted = filterEvenNumbers(...numbers);
console.log(numbersSorted);


function countPositiveNumbers(...numbers){
    let positiveNumbers = 0;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > 0){
            positiveNumbers++;
        }
    }
    return positiveNumbers;
} 
const positiveNumbers = countPositiveNumbers(...numbers);
console.log(positiveNumbers);


function getDividetByFive(...numbers){
    return dividedByFive = numbers.filter(function(number){
        if (number % 5 === 0){
            return number;
        }
    })
}
const dividedByFiv = getDividetByFive(...numbers);
console.log(dividedByFiv);
    