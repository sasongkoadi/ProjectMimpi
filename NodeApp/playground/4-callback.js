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