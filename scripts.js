var a= prompt("Enter value a");
var	b= prompt("Enter value b");
var	value=(a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value>0) {
  console.log("Positive result")
} else if (value<0) {
  console.log("Negative result")
} else {
  console.log("Result equal '0'")
}