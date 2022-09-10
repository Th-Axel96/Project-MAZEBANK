import "@fortawesome/fontawesome-free/js/all";
import "./assets/css/styles.css";

// ************  Fonction Random  ******************

let randomAcccount = document.getElementById("random-account");
let randomIban = document.getElementById("random-iban");
let randomCodebank = document.getElementById("random-codebank");
let randomCodeguichet = document.getElementById("random-codeguichet");
let randomKeyrib = document.getElementById("random-keyrib");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min));
}

randomAcccount.innerHTML = getRandom(12345678901, 99999999999);
randomIban.innerHTML = `FR` + getRandom(7630001007941234, 7630099999999999);
randomCodebank.innerHTML = getRandom(10000, 99999);
randomCodeguichet.innerHTML = getRandom(1, 999999);
randomKeyrib.innerHTML = getRandom(10, 99);

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
    document.getElementById("dateheure").innerHTML = dateheure;
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
let randomSold = getRandom(-100, 1000);

resultsSold.innerHTML = randomSold;

const body = document.querySelector("body");

const calculate = () => {
  if (randomSold < 1) {
    let results = parseInt(inputDepot.value);
    let total = (randomSold += results);
    resultsSold.innerHTML = total;
    return total;
  } else randomSold > 1;
  {
    body.classList.add("bg-green-200");
    body.classList.remove("bg-red-500");
    let results = parseInt(inputDepot.value);
    let total = (randomSold += results);
    resultsSold.innerHTML = total;
    return total;
  }
};

btnDepot.addEventListener("click", calculate);

// add calcul negative

const calculateNegatif = () => {
  if (randomSold > 1) {
    let results = parseInt(inputTrade.value);
    let total = (randomSold -= results);
    resultsSold.innerHTML = total;
    Math.max(-100);
    return total;
  } else randomSold < 1;
  {
    body.classList.remove("bg-green-200");
    body.classList.add("bg-red-500");
  }
};
// let soldee =-10;
// soldee <= 100 ? console.log("true") : console.log("false");

btnTrade.addEventListener("click", calculateNegatif);

// ***********************************************************************

// let user = {
//   numberAccount: 12548545,
//   iban: "FR76584755",
//   codeBank: 454578,
//   codeGuichet: "00854",
//   keyRib: 85,
// };

// let resultAccount = document.getElementById("results-account");

// resultAccount.append(user.numberAccount);

// class User {
//   constructor(numberAccount, iban, codeBank, codeGuichet, keyRib) {
//     this.numberAccount = numberAccount;
//     this.iban = iban;
//     this.codeBank = codeBank;
//     this.codeGuichet = codeGuichet;
//     this.keyRib = keyRib;
//   }
// }

// let axel = new User(12548545, "FR76584755", 454578, "00854", 85);
// let safwan = new User(12548545, "FR78945", 454578, "00854", 85);
// let warren = new User(12548545, "FR76584759", 454578, "00854", 85);

// let resultsIban = document.getElementById("results-iban");

// resultsIban.append(safwan.iban);



// ************   Profil ***************

let resultsAccountProfil = document.getElementById("results-accountprofil");
let btnProfil1 = document.getElementById("btn-profil1");
let btnProfil2 = document.getElementById("btn-profil2");
let welcome = document.getElementById("welcome");

function addUser1() {
  resultsAccountProfil.innerHTML = user1.numberAccount;
  welcome.innerHTML = user1.name;
}

btnProfil1.addEventListener("click", addUser1);

function addUser2() {
  resultsAccountProfil.innerHTML = user2.numberAccount;
  welcome.innerHTML = user2.name;
}

btnProfil2.addEventListener("click", addUser2);

// ****************** profil end ************************

// function myFunction() {
//   let input = document.getElementById("input").value;
//   let solde = document.getElementById("solde");
//   solde.innerHTML = input;
// }

// document.getElementById("btn-depot").addEventListener("click", myFunction);

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

//

btnFormulaire.addEventListener("click", addFormulaire);

function refreshFormulaire() {
  randomAcccount.innerHTML = getRandom(12345678901, 99999999999);
  randomIban.innerHTML = `FR` + getRandom(7630001007941234, 7630099999999999);
  randomCodebank.innerHTML = getRandom(10000, 99999);
  randomCodeguichet.innerHTML = getRandom(1, 999999);
  randomKeyrib.innerHTML = getRandom(10, 99);
}

btnResfresh.addEventListener("click", refreshFormulaire);

// ******* importer notre class creer dans user.js

// import User from "./components/user";

// const submitUser = document.getElementById("submit-user");
// const accountNumber = document.getElementById("account-number");
// const resultsAccount2 = document.getElementById("results-account2");

// function addUser() {
//   let user = new User(accountNumber.value);
//   resultsAccount2.append(user.accountNumber);
// }

// submitUser.addEventListener("click", addUser);

// Import input

// import Input from "./components/input";
// import Button from "./components/input";

// let input1 = Input("number");
// let input2 = Input("text");
// let btn = Button("button", "envoyer");
// const root = document.getElementById("root");
// root.append(input1);
// root.append(input2, btn);

// **********************************************************
// **************** try humburger menu **********************
// **********************************************************

let logo = document.getElementById("logo");
let menu = document.getElementById("menu");

logo.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("block");
  logo.classList.toggle("text-green-400");
});

// ****************** MENU exo BURGER ********************

// const menuMobile = document.getElementById("menu-mobile");
// const navMobile = document.getElementById("nav-mobile");
// const root = document.getElementById("root");

// // ? = if

// const Menu = () => {
//   const showMenu = () => {
//     navMobile.classList.toggle("hidden");
//   };
//   const closeMenu = () => {
//     navMobile.classList.contains("hidden")
//       ? console.log("true")
//       : navMobile.classList.add("hidden");
//   };

//   menuMobile.addEventListener("click", showMenu);

//   root.addEventListener("click", closeMenu);
// };

// export default + nom de la variable
// import Menu

// export default Menu;

// ********* virement ***********

const inputVirement = document.getElementById("input-virement");
const btnVirement = document.getElementById("btn-virement");
const resultsVirement = document.getElementById("results-virement");

let soldVirement = 0;

const calculateVirement = () => {
  let resultsInputVirement = parseInt(inputVirement.value);
  let total = (soldVirement += resultsInputVirement);
  resultsVirement.innerHTML = total;
  let total2 = (randomSold -= resultsInputVirement);
  resultsSold.innerHTML = total2;
  return total2
};

btnVirement.addEventListener("click", calculateVirement);
