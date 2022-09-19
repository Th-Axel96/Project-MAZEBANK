// let logo = document.getElementById("logo");
// let menu = document.getElementById("menu");

// get the menu burger

const menuBurger = () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("block");
    logo.classList.toggle("text-green-400");
};
logo.addEventListener("click", menuBurger);

export default menuBurger;
