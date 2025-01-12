console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log("Hi there,", helloName( "Steve" ));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('The number should be 10:', addNumbers(6, 4));
console.log('The number should be -5:', addNumbers(-2, -3));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}
console.log('multiplyThree returns:', multiplyThree(2.3, 3.5, 4.7));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
console.log('The number should be negative:', isPositive(-3));
console.log('The number should be positive:', isPositive(3));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  //debugger
  if( array.length > 0){
    let last = array[array.length - 1]; 
    return last;
  }else{
    return 'undefined';
  }
}
console.log('last number should be 5:', getLast([2, 4, 12, 5]));
console.log('last string should be chair:', getLast(['pizza', 'airplane', 'plate' , 'chair' ]));
console.log('last number should be 5:', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(i=0; i<array.length ; i++){
    //console.log(value, array[i]);
    if (value === array[i]){
    return true;
  } 
}
return false;
}
console.log('is 5 in the array, yes:', find(5, [4, 28, 23, 78, 5]));
console.log('is 5 in the array, no:', find(5, ['car', 'teapot', 'armrest']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  for(i=0; i<array.length; i++){
    sum += array[i];
  }
  // TODO: loop to add items
  return sum;
  
}
console.log('the sum of numbers is 15:', sumAll([1,2,3,4,5]) );
console.log('the sum of numbers is 55:', sumAll([1,2,3,4,5,6,7,8,9,10]) );
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
