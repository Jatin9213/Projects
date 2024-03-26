let buttns = document.querySelectorAll("button");
let inputs = document.querySelector("input");

for (let button of buttns) {
  button.addEventListener("click", (e) => {
    let bttnsText = e.target.innerText;
    if (bttnsText == "AC") {
      inputs.value = "";
    } else if (bttnsText == "=") {
      try {
        inputs.value = eval(inputs.value);
      } catch (e) {
        inputs.value = "invalid";
      }
    } else inputs.value = inputs.value + bttnsText;
  });
}
