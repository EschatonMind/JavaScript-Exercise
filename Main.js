let Person = {
  "First name": "Yo",
  "Last name": "yoyo",
  age: 30,
};

console.log(Person["First name"]);
console.log("--------------------------------------");

let Numbers = [1, 2, 3, 4, 5];
console.log(Numbers[3]);
console.log("--------------------------------------");

let IsEven = 10 % 2 === 0 ? "Number is Even" : "Number is Odd";
console.log(IsEven);
console.log("--------------------------------------");

//casting
console.log(parseFloat("3.14"));
//console.log((500).tostring())
console.log(Boolean(10)); // null undefined '' NaN = false
console.log("--------------------------------------");

let Val1 = 10;
let Val2 = "10";
console.log(Val1 == Val2);
console.log(Val1 === Val2);
console.log("--------------------------------------");

const NumArr = [1, 2, 3, 4, 5];
for (const Num of NumArr) {
  console.log("Iteration" + Num);
}
console.log("--------------------------------------");

const arrowsum = (a,b) => a+b
console.log(arrowsum(2,3))