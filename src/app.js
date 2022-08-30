import "@fortawesome/fontawesome-free/js/all";
import "./assets/css/styles.css";

// ************  Fonction Random  ******************

let randomAcccount = document.getElementById("random-account");
let randomIban = document.getElementById("random-iban");
let randomCodebank = document.getElementById("random-codebank");
let randomCodeguichet = document.getElementById("random-codeguichet");
let randomKeyrib = document.getElementById("random-keyrib");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

function myFunction() {
  let inputDepot = document.getElementById("input-depot").value;
  let resultsSolde = document.getElementById("results-solde");
  resultsSolde.innerHTML = inputDepot;
}

let BtnDepot = document.getElementById("btn-depot");
BtnDepot.addEventListener("click", myFunction);

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

class UserAccount {
  constructor(name, numberAccount, iban, codeBank, codeGuichet, keyRib) {
    this.name = name;
    this.numberAccount = numberAccount;
    this.iban = iban;
    this.codeBank = codeBank;
    this.codeGuichet = codeGuichet;
    this.keyRib = keyRib;
  }
}

let user1 = new UserAccount(
  "Bonjour Edouard",
  12345678901,
  "FR7630001007941234567890185",
  30001,
  "00794",
  85
);

let user2 = new UserAccount(
  "Bonjour Philipe",
  1239999999,
  "FR999999999999999",
  30001,
  "00794",
  85
);

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
let resultsAccount = document.getElementById("results-account");
let resultsIban = document.getElementById("results-iban")

function addFormulaire() {
  let inputAccount = document.getElementById("input-account").value;
  let inputIban = document.getElementById("input-iban").value;
  resultsIban.innerHTML = inputIban;
  resultsAccount.innerHTML = inputAccount;
}

btnFormulaire.addEventListener("click", addFormulaire);

//  Iban formulaire 


function addIban() {
}


// ******* importer notre class creer dans user.js

import User from "./components/user";

const submitUser = document.getElementById("submit-user");
const accountNumber = document.getElementById("account-number");
const resultsAccount2 = document.getElementById("results-account2");

function addUser() {
  let user = new User(accountNumber.value);
  resultsAccount2.append(user.accountNumber);
}

submitUser.addEventListener("click", addUser);

// Import input

// import Input from "./components/input";
// import Button from "./components/input";

// let input1 = Input("number");
// let input2 = Input("text");
// let btn = Button("button", "envoyer");
// const root = document.getElementById("root");
// root.append(input1);
// root.append(input2, btn);
