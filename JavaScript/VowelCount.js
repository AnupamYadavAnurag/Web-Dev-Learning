let str = "Hello JavaScript";
let count = 0;
for(let char of str.toLowerCase()) {
  if(['a','e','i','o','u'].includes(char)) count++;
}
console.log("Vowel Count:", count);
