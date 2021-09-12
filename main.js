/* // Question 1A
let ages = [3,9,23,64,2,8,28,93];


function findValue(firstNum, lastNum){

    return lastNum[lastNum.length -1] -firstNum[0];
    
}


console.log(findValue(ages, ages)); */


// Question 1B
/* let ages = [3,9,23,64,2,8,28,93];


function findValue(newNum, firstNum, lastNum){

    lastNum.push(newNum);


    return lastNum[lastNum.length -1] -firstNum[0];
    
}


console.log(findValue(50, ages, ages)); */



// Question 1C

// let ages = [3,9,23,64,2,8,28,93];
// let ageAverage = 0;



// function findValue(){
//     let i = 0;
//     for (let i = 0; i < ages.length; i++){
    
//         ageAverage = ageAverage + ages[i];
//     }

//     let result = ageAverage / ages.length;

//     return Math.round(result);
// }


// console.log(findValue());




// Question 2A

// let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// average = 0;

// function averageNameLength(){
//     for(let i = 0; i < names.length; i++)

//     {

//         average = average + names[i].length;

//     }

//     let result = average / names.length;

//     return Math.round(result);
// }

// console.log(averageNameLength());

// Question 2b 
// let concatNames = names[0];

// for(let i = 1; i < names.length; i++)

// {

//     concatNames = concatNames.concat(" ",names[i]);

// }

// console.log("Concatenated  names :",concatNames);




// Question 3

// console.log(names[names.length -1]);


// Question 4

// console.log(names[0]);



// Question 5

// var nameLengths = [];

// for(let i = 0; i < names.length; i++){

//     nameLengths[i] = names[i].length;
//     // console.log(nameLengths[i]);
// }

// Question 6

// sum = 0;

// for(let i = 0; i < nameLengths.length; i++){
//     sum = sum + nameLengths[i];
// }

// console.log(sum);



// Question 7

// function multiWordCopy(word, n){

//     let concatWord = word;

//     for(let i = 1; i < n; i++)

//     {
//         concatWord = concatWord.concat(word);

//     }

//     return concatWord;

// }
// console.log(multiWordCopy("Meow", 4));


// Question 8

// function fullName(firstName, lastName){
//     return firstName + ' ' + lastName;
// }

// console.log(fullName('John','Wick'));



// Question 9



// let numberlist = [50, 20 ,60, 10];


// function greaterThan100(array){

//     num = 0;

//     for(let i = 0; i < array.length; i++)

//     {
//         num = num + array[i];

//     }

//     if(num > 100){

//         return true;

//     } else{

//         return false;
//     }

// }

// console.log(greaterThan100(numberlist));



// Question 10

// let numberlist = [50, 20 ,60, 10];

// function listAverage(array){

//     sum = 0;

//     for(let i = 0; i < array.length; i++){

//         sum = sum + array[i];

//     }

//     return (sum/array.length);

// }

// console.log(listAverage(numberlist));



// Question 11

// let array1 = [1,2,3];
// let array2 = [9,8,7]; 


// function arrayComparsion(a, b){

//     if(a > b){

//         return true;

//     }else{

//         return false;

//     }

// }

// console.log(arrayComparsion(array1, array2));


// Question 12 

// function willBuyDrink(isHotOutside, moneyInPocket){

//     if((isHotOutside) && (moneyInPocket > 10.50)){

//         return true;
//     }else{

//         return false;
//     }

// }


// console.log(willBuyDrink(80, 20));


// Question 13

//This function cheeks someones age. If legal, you can continue with registration. If not, you aren't allowed to join.
function howOldAreYou(yourAge){

    if(yourAge < 21){
       return 'Your not old enough to join club.';
    } 
    return   "Fill out member's form below";

}

console.log(howOldAreYou(30));