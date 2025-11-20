// Take input from user
let num = parseInt(prompt("Enter a number to print its multiplication table:"));

// Check if input is valid
if (isNaN(num)) {
  console.log("Please enter a valid number!");
} else {
  console.log(`\nMultiplication Table of ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
