const btnInicioPausa = document.getElementById("btnInicio");
console.log(btnInicioPausa);

const btnReinicio = document.getElementById("btnReinicio");
console.log(btnReinicio);

const cronometro = document.getElementById("cronometro");

//almacenar horas, minutos, segundos
let [segundos, minutos, horas] = [0, 0, 0];

//almacenar el estado del cronometro
let estadoCrono = "pausado";

//almacenar el intervalo de tiempo
let intervaloTiempo;

//actualizar el Cronómetro
function actualizaCrono() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
  }
  if (minutos / 60 === 1) {
    minutos = 0;
    horas++;
  }
  const segundosFormateado = darFormato(segundos);
  const minutosFormateado = darFormato(minutos);
  const horasFormateado = darFormato(horas);

  cronometro.innerText = `${horasFormateado}:${minutosFormateado}:${segundosFormateado}`;
}

//dar formato Cronómetro
function darFormato(unidadTiempo) {
  return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo;
}

btnInicioPausa.addEventListener("click", () => {
  if (estadoCrono === "pausado") {
    //llamamos a la funcion actualizarCrono, para que sea cargada cada 1000 milisegundos

    intervaloTiempo = window.setInterval(actualizaCrono, 1000);
    btnInicioPausa.innerHTML = `<img src="../06-cronometro/img/btnpausa.jpg" alt="" />`;

    //permite ejecutar un fragmento de codigo como un bucle
    btnInicioPausa.classList.remove("inicio");
    btnInicioPausa.classList.add("pausa");
    estadoCrono = "iniciado";
  } else {
    window.clearInterval(intervaloTiempo);
    btnInicioPausa.innerHTML = `<img src="../06-cronometro/img/btninicio1.jpg" alt="" />`;
    btnInicioPausa.classList.remove("pausa");
    btnInicioPausa.classList.add("inicio");
    estadoCrono = "pausado";
  }
});

btnReinicio.addEventListener("click", () => {
  window.clearInterval(intervaloTiempo);
  segundos = 0;
  minutos = 0;
  horas = 0;

  //reiniciamops el valor del cronometro
  cronometro.innerHTML = "00:00:00";

  //cambiamos los valores por defecto
  btnInicioPausa.innerHTML = `<img src="../06-cronometro/img/btninicio1.jpg" alt="" />`;
  btnInicioPausa.classList.remove("pausa");
  btnInicioPausa.classList.add("inicio");

  //cambiamos el estado del cronometro
  estadoCrono = "pausado";
});
