//  creer des input en JS avec createElement
// modifier son type , id etc " || ou" ca valeur par defaut
// classList.add("CSS")

const Input = (type, id) => {
  let input = document.createElement("input");
  input.type = type || "text";
  input.id = id || "default";
  input.classList.add("border-2");
  input.classList.add("border-red-500");
  return input;
};

let input2 = Input("number", "");
let input3 = Input("text", "");
let input4 = Input("date", "");
let input5 = Input("color", "");
console.log(input2, input3, input4, input5);

const root = document.getElementById("root");
root.append(input2);
root.append(input3);
root.append(input4);
root.append(input5);
