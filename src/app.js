import "@fortawesome/fontawesome-free/js/all";
import "./assets/css/styles.css";
import getRandom from "./components/mathRandom";
import menuBurger from "./components/menuBurger";
import * as add from "./components/calculate";



// const add = require("./calculate").add



let randomAcccount = document.getElementById("random-account");
let randomIban = document.getElementById("random-iban");
let randomCodebank = document.getElementById("random-codebank");
let randomCodeguichet = document.getElementById("random-codeguichet");
let randomKeyrib = document.getElementById("random-keyrib");

randomAcccount.innerHTML = getRandom(12345678901, 99999999999);
randomIban.innerHTML = `FR` + getRandom(7630001007941234, 7630099999999999);
randomCodebank.innerHTML = getRandom(10000, 99999);
randomCodeguichet.innerHTML = getRandom(1, 999999);
randomKeyrib.innerHTML = getRandom(10, 99);

// get the date/hour
const dayDate = document.getElementById("day-date");

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function afficherDate() {
  while (true) {
    await pause(1000);
    var cejour = new Date();
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    var date = cejour.toLocaleDateString("fr-FR", options);
    var heure =
      ("0" + cejour.getHours()).slice(-2) +
      ":" +
      ("0" + cejour.getMinutes()).slice(-2) +
      ":" +
      ("0" + cejour.getSeconds()).slice(-2);
    var dateheure = date + " " + heure;
    var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, (lettre) =>
      lettre.toUpperCase()
    );
    dayDate.innerHTML = dateheure;
  }
}
afficherDate();

// ******************* fin de date **************

// fonction add euro

const resultsSold = document.getElementById("results-sold");
let inputDepot = document.getElementById("input-depot");
let btnDepot = document.getElementById("btn-depot");
let inputTrade = document.getElementById("input-trade");
let btnTrade = document.getElementById("btn-trade");

// console.log(typeof randomSold);
let currentSold = getRandom(1, 1000);

resultsSold.innerHTML = currentSold;

const body = document.querySelector("body");

const decouvert = document.getElementById("decouvert");
const warningIcon = document.getElementById("warning-icon");

let decouvertPositif = "Tout vas pour le mieux, vous n'êtes pas à decouvert";
let decouvertNegatif = "ATTENTION vous êtes à decouvert";

const calculate = () => {
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

btnDepot.addEventListener("click", calculate);

// add calcul negative

const calculateNegatif = () => {
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

btnTrade.addEventListener("click", calculateNegatif);

// ***************************************************************
// ***************** input & btn Formulaire **********************
// ***************************************************************

// account formulaire
let btnFormulaire = document.getElementById("btn-formulaire");
let resultsName = document.getElementById("results-name");
let resultsAccount = document.getElementById("results-account");
let resultsIban = document.getElementById("results-iban");
let resultsCodebank = document.getElementById("results-codebank");
let resultsCodeguichet = document.getElementById("results-codeguichet");
let resultsKeyrib = document.getElementById("results-keyrib");
let inputName = document.getElementById("input-name");
let inputAccount = document.getElementById("input-account");
let inputIban = document.getElementById("input-iban");
let inputCodebank = document.getElementById("input-codebank");
let inputCodeguichet = document.getElementById("input-codeguichet");
let inputKeyrib = document.getElementById("input-keyrib");
let btnResfresh = document.getElementById("btn-refresh");

function addFormulaire() {
  resultsAccount.innerHTML = inputAccount.value;
  resultsIban.innerHTML = inputIban.value;
  resultsCodebank.innerHTML = inputCodebank.value;
  resultsCodeguichet.innerHTML = inputCodeguichet.value;
  resultsKeyrib.innerHTML = inputKeyrib.value;
  resultsName.innerHTML =
    `Bonjour ` + inputName.value + `, bienvenue sur votre espace personnelle.`;
}

btnFormulaire.addEventListener("click", addFormulaire);

function refreshFormulaire() {
  randomAcccount.innerHTML = getRandom(12345678901, 99999999999);
  randomIban.innerHTML = `FR` + getRandom(7630001007941234, 7630099999999999);
  randomCodebank.innerHTML = getRandom(10000, 99999);
  randomCodeguichet.innerHTML = getRandom(1, 999999);
  randomKeyrib.innerHTML = getRandom(10, 99);
}

btnResfresh.addEventListener("click", refreshFormulaire);

// **********************************************************
// **************** try humburger menu **********************
// **********************************************************

// ********* virement ***********

const inputVirement = document.getElementById("input-virement");
const btnVirement = document.getElementById("btn-virement");
const resultsVirement = document.getElementById("results-virement");

let soldVirement = getRandom(1, 999);

const calculateVirement = () => {
  let resultsInputVirement = parseInt(inputVirement.value);
  if (currentSold > 1) {
    let total = (soldVirement += resultsInputVirement);
    resultsVirement.innerHTML = total;
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
resultsVirement.innerHTML = soldVirement;

btnVirement.addEventListener("click", calculateVirement);
