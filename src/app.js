import "@fortawesome/fontawesome-free/js/all";
import "./assets/css/styles.css";
import getRandom from "./components/mathRandom";
import menuBurger from "./components/menuBurger";
import showDate from "./components/dailyDate";
import { addMoney } from "./components/calculate";
import { withDraw } from "./components/calculate";
import { refreshFormulaire } from "./components/refreshForm";
import { addFormulaire } from "./components/addForm";
import addUserClass from "./components/classUser";

// const inputBeneficiary = document.getElementById("input-beneficiary");
// const btnBeneficiary = document.getElementById("btn-beneficiary");
// const userBeneficiary = document.getElementById("user-beneficiary");
// const resultsTransfer = document.getElementById("results-virement");
// let soldBeneficiary = getRandom(1, 1000);

const nameBeneficiary = document.getElementById("name-beneficiary")

nameBeneficiary.addEventListener("keydown", (key) => {
  // console.log(key.code);
  // if (key.code === "Enter"){
  //     alert("")
  // }
  key.code === "Enter" ? alert("a") : "";
});


const test = () => {
  let user1 = new addUserClass(inputBeneficiary.value, );
  console.log(user1);
  
}
btnBeneficiary.addEventListener("click", test)







// const addUser = () => {
//   userBeneficiary.innerHTML = inputBeneficiary.value;
//   userBeneficiary.classList.add("block");
//   userBeneficiary.classList.remove("hidden");
// };

// btnBeneficiary.addEventListener("click", addUser);

// const btnChooseUser = document.getElementById("btn-choose-user");

// const showSold = () => {
//   if (userBeneficiary.value = inputBeneficiary.value ) {
//     resultsTransfer.innerHTML = soldBeneficiary
//   }
// };

// btnChooseUser.addEventListener("click", showSold);



//  





