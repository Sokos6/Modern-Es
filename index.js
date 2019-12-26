function checkVars() {
  console.log(username);
  var username = "Hunter";
  console.log(username);
}
checkVars();

let myArray = ['one', 'two', 'three', 'four'];
myArray.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});
console.log(myArray);

let numberArray = [1,2,3,4,5,6,7,8,9];
let oddNumbers = numberArray.filter((value, index, array) => {
  if(value % 2) {
    console.log(value);
    return value;
  }
});

let mappedValue = [1, 2, 3].map(( value, currentValue, currentIndex, array) => {
  return value * 10;
});
console.log(mappedValue);

// let reducedValue = [10,1,2,3,4,5,6,7,8,9].reduce( (value, index, array) => {
//   return value + currentValue;
// });
// console.log(reducedValue);

console.log(this);