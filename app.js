const Tableau = document.querySelector(".tableau");

function createModalRules() {
  //creation de la modale des regles
}

function createModalMenu() {
  const divMenu = document.createElement("div");
  const buttonPlay = document.createElement("button");
  const buttonRule = document.createElement("button");

  divMenu.classList.add("menu");
  buttonPlay.classList.add("menu-button");
  buttonRule.classList.add("menu-button", "yellow-gold");

  buttonPlay.textContent = "PLAY VS PLAYER";
  buttonRule.textContent = "GAME RULES";

  divMenu.appendChild(buttonPlay);
  divMenu.appendChild(buttonRule);

  buttonPlay.addEventListener("click", () => {
    divMenu.remove();
  });

  buttonRule.addEventListener("click", () => {
    const modaleRule = createModalRules();

    document.body.appendChild(modaleRule);
  });

  return divMenu;
}

function AddBtn(number) {
  for (let i = 1; i <= 42; i++) {
    const btn = document.createElement("button");
    btn.classList.add("BtnTableau");
    Tableau.appendChild(btn);
  }
}

AddBtn();

const menuElem = createModalMenu();

document.body.appendChild(menuElem);

const Restart = document.querySelector(".Restart");
const ColorYellowList = document.querySelectorAll(".BtnTableau");

for (let i = 0; i < ColorYellowList.length; i++) {
  const ColorYellow = ColorYellowList[i];

  ColorYellow.addEventListener("click", () => {
    const BtnTableau = document.getElementsByClassName("BtnTableau");
    //ColorYellow.style.background = "#ffce67";
    ColorYellow.classList.add("yellow-gold");
  });
}

Restart.addEventListener("click", () => {
  const BtnTableau = document.getElementsByClassName("BtnTableau");
  document.body.style.background = "#7945ff";
});
