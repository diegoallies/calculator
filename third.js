let points = 90;
let customerType = points > 100 ? "Gold" : "Silver";
console.log(points);
points = 110;
console.log(customerType);

// IF ELSE

let hour = 1255;

if (hour > 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour > 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Awe");
}