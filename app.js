const Tableau = document.querySelector(".tableau");

function AddBtn(number) {
  for (let i = 1; i <= 42; i++) {
    const btn = document.createElement("button");
    btn.classList.add("BtnTableau");
    Tableau.appendChild(btn);
  }
}

AddBtn();

