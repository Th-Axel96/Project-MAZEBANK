import "./assets/css/styles.css";
// import _ from "lodash";
// import Icon from './assets/img/img-test-webpack.jpg';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['', ''], ' ');
//   element.classList.add("text-3xl");

//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());

const sum = (value1, value2) => {
  return value1 + value2;
};
console.log(sum(1, 2));

let results = document.getElementById("solde");
let sumResults = sum(1, 2);
results.innerHTML = ` = ${sumResults}`;
