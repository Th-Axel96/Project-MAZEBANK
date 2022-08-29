const Button = (type, value) => {
  let btn = document.createElement("button");
  btn.type = type;
  btn.textContent = value;
  return btn;
};

export default Button;