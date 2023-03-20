const htmlCasillas = document.querySelectorAll(".casilla");

const manageClick = (element) => {
  console.log(element.innerHTML);

  if ((element.innerHTML = " ")) {
    element.innerHTML = "X";
  }

  manageBoard(htmlCasillas);
};

const manageBoard = (uiCasillas) => {
  for (let casilla of uiCasillas) {
    console.log(casilla.innerHTML);
  }
};

for (let casilla of htmlCasillas) {
  casilla.addEventListener("click", (event) => {
    const element = event.target;
    manageClick(element);
  });
}
