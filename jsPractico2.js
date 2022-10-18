const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const resultado = document.querySelector("#resultado");
const form = document.querySelector("form");
h1.textContent = "hola mundo";

form.addEventListener("submit", sumar);

function sumar(e) {
  e.preventDefault();
  //console.log("se escucho el evento y  se ejecuta onclick");
  valor = parseInt(input1.value) + parseInt(input2.value);
  resultado.innerHTML = `${valor}`;
}
