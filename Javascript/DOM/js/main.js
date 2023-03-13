const uiElements = document.getElementsByTagName("div");
const elements2 = document.getElementsByClassName("demo");
const uiUnico = document.getElementById("unico");
let uiEmail = document.querySelector(".grid > #id");
const uiSpan = document.querySelectorAll("span");

for (let i = 0; i < uiElements.length; i++) {
  uiElements[i].style.backgroundColor = "yellow";
}

for (el of uiElements) {
  el.style.border = "4px solid red";
}

for (el of elements2) {
  el.style.border = "3px solid blue";
}

uiUnico.style.backgroundColor = "green";
uiUnico.style.color = "#fff";

uiEmail.style.border = "4px solid blue";

for (sp of uiSpan) {
  sp.style.backgroundColor = "red";
  sp.style.color = "#fff";
}
