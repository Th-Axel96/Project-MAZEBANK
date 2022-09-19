import getRandom from "./mathRandom"

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


let btnResfresh = document.getElementById("btn-refresh");

// get the refresh function

export const refreshFormulaire = () => {
  randomAcccount.innerHTML = getRandom(12345678901, 99999999999);
  randomIban.innerHTML = `FR` + getRandom(7630001007941234, 7630099999999999);
  randomCodebank.innerHTML = getRandom(10000, 99999);
  randomCodeguichet.innerHTML = getRandom(1, 999999);
  randomKeyrib.innerHTML = getRandom(10, 99);
}
btnResfresh.addEventListener("click", refreshFormulaire);
