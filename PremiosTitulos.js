var AnoPT1 = document.querySelector(".AnoPT1");
var DescPT1 = document.querySelector(".DescPT1");
var EnviarPT1 = document.querySelector(".EnviarPT1");

EnviarPT1.addEventListener("click", (e) =>{
    e.preventDefault();

    document.querySelector("#AnoPT1").innerHTML = AnoPT1.value;
    document.querySelector("#DescPT1").innerHTML = DescPT1.value;
});

var AnoPT2 = document.querySelector(".AnoPT2");
var DescPT2 = document.querySelector(".DescPT2");
var EnviarPT2 = document.querySelector(".EnviarPT2");

EnviarPT2.addEventListener("click", (e) =>{
    e.preventDefault();

    document.querySelector("#AnoPT2").innerHTML = AnoPT2.value;
    document.querySelector("#DescPT2").innerHTML = DescPT2.value;
});