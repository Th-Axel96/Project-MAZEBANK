let randomAcccount = document.getElementById("random-account");


export const add = (value1, value2) => {
    let user = "axel"
  let result = (value1 += value2);
  randomAcccount.innerHTML = result;
};

export const remove = (value1, value2) => {
  return (value1 -= value2);
};
