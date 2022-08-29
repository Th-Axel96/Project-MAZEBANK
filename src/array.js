let array = [1, 2, 3, 4];
let array2 = [5];
let array3 = array.concat(array2);
let initial = 0;

console.log(array);
array.push(5);
console.log(array);
array.pop();

console.log(array.map((value) => value));
console.log(
  array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initial
  )
);
console.log(array3);

// operateur spread

[...array] = [...array, 20];
console.log(array);
console.log(array[4]);

let arrayObject = [
  {
    id: 0
  },
  {
    id: 1, userName: "safwan"
  },
];
console.log(arrayObject[1].userName);
// vas chercher que le tableau 1 de l'objet