const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const boton4 = document.querySelector("#boton4");
const parrafo1 = document.querySelector("#parrafo1");
const parrafo2 = document.querySelector("#parrafo2");
const parrafo3 = document.querySelector("#parrafo3");
const parrafo4 = document.querySelector("#parrafo4");
const card = document.querySelector(".card");
function handleButtonClick(boton, parrafo, card) {
  parrafo.classList.toggle("visible");
  card.classList.toggle("cardvisible");
  const imgSrc = parrafo.classList.contains("visible")
    ? "./public/icon-minus.svg"
    : "./public/icon-plus.svg";

  boton.querySelector("img").src = imgSrc;
}

boton1.addEventListener("click", () =>
  handleButtonClick(boton1, parrafo1, card)
);
boton2.addEventListener("click", () =>
  handleButtonClick(boton2, parrafo2, card)
);
boton3.addEventListener("click", () =>
  handleButtonClick(boton3, parrafo3, card)
);
boton4.addEventListener("click", () =>
  handleButtonClick(boton4, parrafo4, card)
);
