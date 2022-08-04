//Idioma 01
var inputIdioma1 = document.querySelector(".NomeIdioma1");
var Idioma1 = document.querySelector("#progress-barIdioma1");
var sendPort1 = document.querySelector(".EnviarIdioma1");
var progressIdioma1 = document.querySelector(".progressIdioma1")

sendPort1.addEventListener("click", (e) =>{
    e.preventDefault();

    document.querySelector("#idioma1").innerHTML = inputIdioma1.value;
    progressIdioma1.setAttribute("value", Idioma1.value);
 
});

//Idioma 02
var inputIdioma2 = document.querySelector(".NomeIdioma2");
var Idioma2 = document.querySelector("#progress-barIdioma2");
var sendPort2 = document.querySelector(".EnviarIdioma2");
var progressIdioma2 = document.querySelector(".progressIdioma2")

sendPort2.addEventListener("click", (e) =>{
    e.preventDefault();

    document.querySelector("#idioma2").innerHTML = inputIdioma2.value;
    progressIdioma2.setAttribute("value", Idioma2.value);
 
});

//Idioma 03
var inputIdioma3 = document.querySelector(".NomeIdioma3");
var Idioma3 = document.querySelector("#progress-barIdioma3");
var sendPort3 = document.querySelector(".EnviarIdioma3");
var progressIdioma3 = document.querySelector(".progressIdioma3")

sendPort3.addEventListener("click", (e) =>{
    e.preventDefault();

    document.querySelector("#idioma3").innerHTML = inputIdioma3.value;
    progressIdioma3.setAttribute("value", Idioma3.value);
 
});