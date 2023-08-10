// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.


const validateNumber = (n) =>{
    if(n < 0){
        console.log(`${n} is a negative number`);
    }else if(n > 0){
        console.log(`${n} is a positive number`);
    }else {
        console.log(`number is zero`);
    }
}

validateNumber(-1)


// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.


// const factorial = (n) =>{
//     let fact = 1;
//     if(n > 0){
//         for(let i = 1; i <= n; i++){
//             fact*= i;
//         }
//         console.log(`Factorial of ${n} is ${fact}`);
//     }else{
//         console.log(`Factorial of zero or negative number is not possible`);
//     }
// }

// factorial(5);


// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

// const findLargestNumber = (x,y) =>{
//     return largeNum = x > y ? x : y;
// }

// let result = findLargestNumber(2,-3)
// console.log(result);


// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// const checkPalindrome = (str) =>{
//     let reverse = "";
//     for(let i=str.length-1; i>=0; i--){
//         reverse = reverse + str[i]
//     }
//     return reverse == str ? console.log(`${str} is a palindrome`) : console.log(`${str} is not a palindrome`);
// }
// checkPalindrome('madam');



// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// const findPrimeNumber = (n) =>{
//     if(n == 1 || n == 0){
//         return false;
//     }
//     for(let i=2; i<n; i++){
//         if(n%i == 0){
//             return false;
//         }
//     }
//     return true;
// }
// let num = 100;

// for(let i=1; i<= num; i++){
//     if(findPrimeNumber(i)){
//         console.log(i);
//     }
// }


// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.


// const simpleCalculator = (num1, num2, operator) =>{
//    if(operator == '+'){
//     return result = num1 + num2
//    }else if(operator == '-'){
//     return result = num1 - num2;
//    }else if(operator == '*'){
//     return result = num1 * num2;
//    }else{
//     return result = num1/num2
//    }
// }
// console.log(simpleCalculator(2,5,'/'));


// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

// const countVowels = (str) =>{
//     let vowelsArray = ['a', 'e', 'i', 'o', 'u']
//     let stringArray = str.split('')
//     let count = 0;
//     for(let i=0; i<stringArray.length-1; i++){
//         if((stringArray[i] == 'a') || (stringArray[i] == 'e') || (stringArray[i] == 'i') || (stringArray[i] == 'o') || (stringArray[i] == 'u')){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels('yogesh'));


// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

// const findPerfectNumber = (num) =>{
//     let sum = 0;
//     for(let i=1; i<num; i++){
//         if(num%i == 0){
//             sum += i;
//         }
//     }
//     return sum == num ? true : false;
// }
// let result = findPerfectNumber(28)
// console.log(result);


// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.


// const fibonacciSeries = (num) =>{
//     let n1 = 0;
//     let n2 = 1;
//     let nextTerm;
//     for(let i=1; i<=num; i++){
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
// }

// fibonacciSeries(30);


// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.


// const printMultiplicationTable = (num) => {
//     for(let i=1; i<=10; i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }
// printMultiplicationTable(4)