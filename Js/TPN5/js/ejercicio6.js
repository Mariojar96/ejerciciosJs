const $temporizadorTexto = document.getElementById("temporizador");
const $iniciar = document.getElementById("botonIniciar");
const $reset = document.getElementById("botonReset");
const $pausa = document.getElementById("botonPausa");
const $establecerBoton = document.getElementById("botonEstablecer");
const $inputTiempo = document.getElementById("tiempoInput");

let intervalo = null;
let tiempoRestante = 0;
let temporizadorIniciado = false;

$iniciar.disabled = true;
$pausa.disabled = true;
$reset.disabled = true;

const establecerTiempo = () => {
  const tiempo = $inputTiempo.value.trim();
  const regex = /^(\d{2}):(\d{2}):(\d{2})$/;
  if (!regex.test(tiempo)) {
    alert(
      "Formato de tiempo no valido. Vuelva a ingresarlo con el siguiente formato hh:mm:ss"
    );
    return;
  }

  const horas = parseInt(tiempo.split(":")[0]) * 3600000;
  const minutos = parseInt(tiempo.split(":")[1]) * 60000;
  const segundos = parseInt(tiempo.split(":")[2]) * 1000;

  tiempoRestante = horas + minutos + segundos;
  actualizarTemporizador();
  $establecerBoton.disabled = true;
  $iniciar.disabled = false;
};

const actualizarTemporizador = () => {
  const horas = Math.floor(tiempoRestante / 3600000);
  const minutos = Math.floor((tiempoRestante % 3600000) / 60000);
  const segundos = Math.floor((tiempoRestante % 60000) / 1000);

  $temporizadorTexto.textContent = `${formatoNumero(horas)}:${formatoNumero(minutos)}:${formatoNumero(segundos)}`;
};

const formatoNumero = (numero) => {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
};

$establecerBoton.addEventListener("click", establecerTiempo);

$iniciar.addEventListener("click", () => {
  if (tiempoRestante <= 0) return;

  intervalo = setInterval(() => {
    tiempoRestante -= 1000;
    actualizarTemporizador();

    if (tiempoRestante === 0) {
      clearInterval(intervalo);
      alert("El tiempo a terminado");
      $iniciar.disabled = true;
      $pausa.disabled = true;
      $reset.disabled = false;
      temporizadorIniciado = false;
    }
  }, 1000);
  $pausa.disabled = false;
  $reset.disabled = false;
  $iniciar.disabled = true;
  $establecerBoton.disabled = true;
  temporizadorIniciado = true;
});

$pausa.addEventListener("click", () => {
  if (!temporizadorIniciado) return;

  clearInterval(intervalo);
  temporizadorIniciado = false;
  $iniciar.disabled = false;
  $pausa.disabled = true;
});

$reset.addEventListener("click", () => {
  clearInterval(intervalo);
  tiempoRestante = 0;
  $temporizadorTexto.textContent = "00:00:00";
  temporizadorIniciado = false;
  $establecerBoton.disabled = false;
  $iniciar.disabled = true;
  $pausa.disabled = true;
  $reset.disabled = true;
});