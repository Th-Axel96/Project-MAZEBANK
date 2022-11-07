import "@fortawesome/fontawesome-free/js/all";
import "./assets/css/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import getRandom from "./components/mathRandom";
// import menuBurger from "./components/menuBurger";
import showDate from "./components/dailyDate";
import { addMoney } from "./components/calculate";
import { withDraw } from "./components/calculate";
import { refreshFormulaire } from "./components/refreshForm";
import { addFormulaire } from "./components/addForm";
import addUserClass from "./components/classUser";
import { AddUserBeneficiary } from "./components/addUserBeneficiary";
import { userBeneficiary } from "./components/addUserBeneficiary";

// let btnDepot = document.getElementById("btn-depot");
// btnDepot.addEventListener("click", () => {

//     console.log(userBeneficiary.sold);
// })
