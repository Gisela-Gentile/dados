import "./styles.css";
/*Escribir un programa que calcule
la probabilidad de sacar todos los dados 6
siendo que tiramos N dados.*/

let dato = document.getElementById("dato");
let rotulo1 = document.getElementById("rotulo");
let btnEnv = document.getElementById("btnEnviar");

rotulo1.innerHTML = "¿Cuántas veces va a tirar?";

let probabilidadLado: number = 1 / 6;
let probabilidadFinal: number;

btnEnv.addEventListener("click", () => {
  let n: number = Number(dato.value);
  probabilidadFinal = 1;
  let contador: number;
  for (contador = 1; contador <= n; contador++) {
    probabilidadFinal = probabilidadFinal * probabilidadLado;
  }

  console.log("La probabilidad es: ", probabilidadFinal);
});
