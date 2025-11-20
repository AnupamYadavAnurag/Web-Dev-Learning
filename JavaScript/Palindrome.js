let word = "madam";
let reversed = word.split('').reverse().join('');
if(word === reversed)
  console.log("Palindrome");
else
  console.log("Not Palindrome");
