import getRandom from "./mathRandom";

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

// get the function addFormulaire

export const addFormulaire = () => {
  resultsAccount.innerHTML = inputAccount.value;
  resultsIban.innerHTML = inputIban.value;
  resultsCodebank.innerHTML = inputCodebank.value;
  resultsCodeguichet.innerHTML = inputCodeguichet.value;
  resultsKeyrib.innerHTML = inputKeyrib.value;
  resultsName.innerHTML =
    `Bonjour ` + inputName.value + `, bienvenue sur votre espace personnelle.`;
}

btnFormulaire.addEventListener("click", addFormulaire);