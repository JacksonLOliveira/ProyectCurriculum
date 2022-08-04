
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var data = new Date();
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
let dataFormatada = (( meses[(data.getMonth())] + " de " + data.getFullYear()));
console.log(dataFormatada);

window.onload = (e) => {

    document.querySelector(".datafooter1").innerHTML = dataFormatada;
    document.querySelector(".datafooter2").innerHTML = dataFormatada;

};

