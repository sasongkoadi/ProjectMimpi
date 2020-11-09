//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (number1, number2, callback) => {
  setTimeout(() => {
    const sum = number1 + number2;
    callback(sum);
  }, 2000);
};

add(2, 3, (sum) => {
  console.log(sum);
});

/*
callback is function that can call inside function

*/
const greeting = (callback) => {
  setTimeout(() => {
      //This condition when error 
      callback('Unable to connect', undefined)
      //This condition when result is true
      //callback(undefined, [1,2,3])
  }, 2000);
}
//If error is true, it show error message
//If result is true it show result message
greeting((error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
})