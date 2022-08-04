var valor1 = document.querySelector(".Valor1");
var valor2 = document.querySelector(".Valor2");
var valor3 = document.querySelector(".Valor3");
var sendValores = document.querySelector(".EnviarValores");

sendValores.addEventListener("click", (e) =>{
    e.preventDefault();

    document.querySelector("#valor1").innerHTML = valor1.value;
    document.querySelector("#valor2").innerHTML = valor2.value;
    document.querySelector("#valor3").innerHTML = valor3.value;
    
 
});