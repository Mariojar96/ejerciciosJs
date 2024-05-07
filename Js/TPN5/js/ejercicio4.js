let intervalo = null;

const reloj = () => {
    intervalo = setInterval(() => {

        const diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
        const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

        let hora = new Date().getHours()
        let minutos = new Date().getMinutes()
        let segundos = new Date().getSeconds()
        let diaSemana = diasSemana[new Date().getDay()]
        let mes = meses[new Date().getMonth()]
        let año = new Date().getFullYear()
        let dia = new Date().getDate()

        let ampm;
        if(hora >= 12){
            ampm = "PM"
        } else {
            ampm = "AM"
        }

        let fecha =`${diaSemana} ${dia} de ${mes} del ${año}`
        let tiempo = `${hora}:${minutos}:${segundos} ${ampm}`

        document.getElementById("fecha").textContent = fecha;
        document.getElementById("reloj").textContent = tiempo;
    }, 1000)
}

document.addEventListener("DOMContentLoaded",reloj())