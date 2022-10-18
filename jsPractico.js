console.log("hola mundo");

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const pt = document.querySelectorAll("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
  h1,
  pt,
  p,
  parrafito,
  pid,
  input,
});
h1.innerHTML = " Cambiando el titulo por patito";
h1.innerText = " Cambiando el titulo por patito";

//acceder a actributos html desde java script
h1.getAttribute("class");
h1.setAttribute("class", "azul");
h1.classList.add("titulo");
h1.classList.remove("azul");
//h1.classList.toggle('azul')
//h1.classList.contains('azul')
console.log(h1.getAttribute("class"));

input.value = "789";

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg"
);

console.log(img);
pid.innerHTML = "";
img.classList.add("escala");
pid.append(img);
