//var numOfDrinks = 5;

//var drinks = function () {
//var tea = 6 + numOfDrinks;
//console.log(tea);
//};

//drinks();

//if (numOfDrinks === 5) {
//var soda = "lemon-lime";
//console.log(soda);
//};

//console.log (tea);

//if (numOfDrinks === 5) {
//let soda = "lemon-lime";
//console.log(soda);
//};

//With the "let" keyword, the value of soda is protected!
//console.log(soda);

const numOfDrinks = 5;

const drinks = function () {
  const tea = 6 + numOfDrinks;
  console.log(tea);
};

drinks();

//If you tried to reassign any of the variables declared with const, like numOfDrinks, you’d receive an error that the value is read-only.
numOfDrinks = 7;
console.log(numOfDrinks);
