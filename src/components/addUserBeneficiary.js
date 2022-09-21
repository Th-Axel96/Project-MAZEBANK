import addUserClass from "./classUser";

const nameBeneficiary = document.getElementById("name-beneficiary");
const accountBeneficiary = document.getElementById("account-beneficiary");
const soldBeneficiary = document.getElementById("sold-beneficiary");

// get the succes account add

const accountSucces = document.getElementById("account-succes");
const accountNotSucces = document.getElementById("account-notsucces");

// get the results
const soldBeneficiaryResult = document.getElementById(
  "sold-beneficiary-result"
);
const nameBeneficiaryResult = document.getElementById(
  "name-beneficiary-result"
);
// get the btn submit beneficiary

const btnSubmitBeneficiary = document.getElementById("btn-submit-beneficiary");

export let userBeneficiary;

export const AddUserBeneficiary = () => {
  userBeneficiary = new addUserClass(
    nameBeneficiary.value,
    accountBeneficiary.value,
    soldBeneficiary.value
  );
  // if (
  //   (userBeneficiary =
  //     nameBeneficiary.value &&
  //     accountBeneficiary.value &&
  //     soldBeneficiary.value)
  // ) {
  //   accountSucces.classList.remove("hidden");
  //   accountNotSucces.classList.add("hidden");
  //   soldBeneficiaryResult.innerHTML = soldBeneficiary.value;
  //   nameBeneficiaryResult.innerHTML = nameBeneficiary.value;
  // } else {
  //   accountNotSucces.classList.remove("hidden");
  //   accountSucces.classList.add("hidden");
  // }
};
btnSubmitBeneficiary.addEventListener("click", AddUserBeneficiary);
