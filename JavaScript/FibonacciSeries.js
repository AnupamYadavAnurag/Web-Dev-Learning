let n = 10, a = 0, b = 1;
console.log("Fibonacci Series:");
for(let i = 1; i <= n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}
