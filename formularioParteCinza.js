const campoPalavrasChaves = document.querySelector("#sendPalavrasChaves");
campoPalavrasChaves.addEventListener("click", function(e) {
    e.preventDefault();
    const fullPalavrasChaves = document.querySelector("#inputPalavrasChaves");
    const newPalavrasChaves = fullPalavrasChaves.value;
    document.getElementById("PalavrasChaves").innerHTML = newPalavrasChaves;
});
const campoLinkedIn = document.querySelector("#sendLinkedIn");
campoLinkedIn.addEventListener("click", function(e) {
    e.preventDefault();
    const fullLinkedIn = document.querySelector("#inputLinkedIn");
    const newLinkedIn = fullLinkedIn.value;
    document.getElementById("LinkedIn").innerHTML = newLinkedIn;
});
const campoTelefone = document.querySelector("#sendTelefone");
campoTelefone.addEventListener("click", function(e) {
    e.preventDefault();
    const fullTelefone = document.querySelector("#inputTelefone");
    const newTelefone = fullTelefone.value;
    document.getElementById("Telefone").innerHTML = newTelefone;
});
const campoEmail = document.querySelector("#sendEmail");
campoEmail.addEventListener("click", function(e) {
    e.preventDefault();
    const fullEmail = document.querySelector("#inputEmail");
    const newEmail = fullEmail.value;
    document.getElementById("Email").innerHTML = newEmail;
});
const campoEndereco = document.querySelector("#sendEndereço");
campoEndereco.addEventListener("click", function(e) {
    e.preventDefault();
    const fullEndereco = document.querySelector("#inputEndereço");
    const newFullEndereco = fullEndereco.value;
    document.getElementById("Endereço").innerHTML= newFullEndereco;
});
const campoEstadoCivil = document.querySelector("#sendEstadoCivil");
campoEstadoCivil.addEventListener("click", function(e) {
    e.preventDefault();
    const fullEstadoCivil = document.querySelector("#selectEstadoCivil");
    const newFullEstadoCivil = fullEstadoCivil.value;
    document.getElementById("EstadoCivil").innerHTML= newFullEstadoCivil;
});
const campoIdade = document.querySelector("#sendIdade");
campoIdade.addEventListener("click", function(e) {
    e.preventDefault();
    const fullIdade = document.querySelector("#inputIdade");
    const newFullIdade = fullIdade.value;
    document.getElementById("Idade").innerHTML= newFullIdade;
});
