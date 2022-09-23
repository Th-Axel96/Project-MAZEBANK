import getRandom from "./mathRandom";
import classUser from "./classUser";
import addUserClass from "./classUser";
import { addUserBeneficiary } from "./addUserBeneficiary";
import { userBeneficiary } from "./addUserBeneficiary";

let currentSold = getRandom(1, 1000);

const resultsSold = document.getElementById("results-sold");
let inputDepot = document.getElementById("input-depot");
let btnDepot = document.getElementById("btn-depot");
let inputTrade = document.getElementById("input-trade");
let btnTrade = document.getElementById("btn-trade");

resultsSold.innerHTML = currentSold;

const body = document.querySelector("body");
const decouvert = document.getElementById("decouvert");
const warningIcon = document.getElementById("warning-icon");

let decouvertPositif = "Tout vas pour le mieux, vous n'êtes pas à decouvert";
let decouvertNegatif = "ATTENTION vous êtes à decouvert";

// *************************************************************
// ************** get the function add ********************
// *************************************************************

export const addMoney = () => {
  if (currentSold < 1) {
    let results = parseInt(inputDepot.value);
    let total = (currentSold += results);
    resultsSold.innerHTML = total;
    return total;
  } else currentSold > 1;
  {
    decouvert.innerHTML = decouvertPositif;
    body.classList.add("bg-yellow-100");
    body.classList.remove("bg-red-100");
    warningIcon.classList.remove("block");
    warningIcon.classList.add("hidden");
    let results = parseInt(inputDepot.value);
    let total = (currentSold += results);
    resultsSold.innerHTML = total;
    return total;
  }
};
btnDepot.addEventListener("click", addMoney);

// *************************************************************
// ************** get the function withdraw ********************
// *************************************************************

export const withDraw = () => {
  let results = parseInt(inputTrade.value);
  if (currentSold > 1) {
    let total = (currentSold -= results);
    resultsSold.innerHTML = total;
    decouvert.innerHTML = decouvertPositif;
    return total;
  } else currentSold < 1;
  {
    decouvert.innerHTML = decouvertNegatif;
    body.classList.remove("bg-yellow-100");
    body.classList.add("bg-red-100");
    warningIcon.classList.add("block");
    warningIcon.classList.remove("hidden");
  }
};

btnTrade.addEventListener("click", withDraw);

// *************************************************************
// ************** get the function virement ********************
// *************************************************************

const inputVirement = document.getElementById("input-virement");
const btnVirement = document.getElementById("btn-virement");
const soldBeneficiaryResult = document.getElementById(
  "sold-beneficiary-result"
);

// btnVirement.addEventListener("click", () => {
//   console.log(userBeneficiary.sold);
// })


// let btnDepot = document.getElementById("btn-depot");
// btnDepot.addEventListener("click", () => {
//   console.log(userBeneficiary.sold);
// });
// let teste = userBeneficiary
// console.log(teste);

const transfer = () => {
  let test = parseInt(userBeneficiary.sold);
  let resultsInputVirement = parseInt(inputVirement.value);
 
  if (currentSold > 1) {
    let total = (test += resultsInputVirement );
    soldBeneficiaryResult.innerHTML = total;
    let total2 = (currentSold -= resultsInputVirement);
    resultsSold.innerHTML = total2;
    decouvert.innerHTML = decouvertPositif;
    return total2;
  } else currentSold < 1;
  {
    decouvert.innerHTML = decouvertNegatif;
    body.classList.remove("bg-yellow-100");
    body.classList.add("bg-red-100");
    warningIcon.classList.add("block");
    warningIcon.classList.remove("hidden");
  }
};

btnVirement.addEventListener("click", transfer);
