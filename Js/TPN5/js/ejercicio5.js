const $cronometroTexto = document.getElementById("cronometro");
const $iniciar = document.getElementById("botonIniciar");
const $reset = document.getElementById("botonReset");
const $pausa = document.getElementById("botonPausa");

$reset.disabled = true
$pausa.disabled = true

let intervalo = null;
let cronometroIniciado = false;
let tiempo = 0;

const cronometro = () => {
  intervalo = setInterval(() => {
    tiempo++;
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;

    $cronometroTexto.textContent = `${formatoNumero(horas)}:${formatoNumero(minutos)}:${formatoNumero(segundos)}`;
  }, 1000);
};

const formatoNumero = (numero) => {
    if (numero < 10) {
        numero = "0" + numero;
    }
    return numero;
}

const habilitarIniciarReset = () => {
    $iniciar.disabled = false;
    $reset.disabled = false;
    $pausa.disabled = true;
  };

  const habilitarPausaReset = () => {
    $pausa.disabled = false;
    $iniciar.disabled = true;
    $reset.disabled = false;
  };

  const habilitarIniciar = () => {
    $reset.disabled = true;
    $iniciar.disabled = false;
    $pausa.disabled = true;
  };


$iniciar.addEventListener("click", () => {
  if (!cronometroIniciado) {
    cronometro();
    cronometroIniciado = true;
    habilitarPausaReset()
  }
});

$pausa.addEventListener("click", () => {
  clearInterval(intervalo);
  cronometroIniciado = false;
  habilitarIniciarReset()
});

$reset.addEventListener("click", () => {
  clearInterval(intervalo);
  tiempo = 0;
  $cronometroTexto.textContent = "00:00:00";
  cronometroIniciado = false;
  habilitarIniciar();
});