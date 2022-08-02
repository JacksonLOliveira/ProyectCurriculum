const campoApresentacao = document.querySelector("#sendApresentação");
campoApresentacao.addEventListener("click", function(e) {
    e.preventDefault();
    const fullApresentacao = document.querySelector("#textoApresentação");
    const newFullApresentacao = fullApresentacao.value;
    document.getElementById("Apresentação").innerHTML= newFullApresentacao;
});