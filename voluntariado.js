const campoDataEntradaVol1 = document.querySelector(".DataEntradaVol1");
const campoDataSaidaVol1 = document.querySelector(".DataSaidaVol1");
const campoEmpresaVol1 = document.querySelector(".EmpresaVol1");
const campoCargoVol1 = document.querySelector(".CargoVol1");
const campodescCargoVol1 = document.querySelector(".descCargoVol1");
const campoPChavesVol1 = document.querySelector(".PChavesVol1");
const sendVol1 = document.querySelector(".EnviarVol1");

sendVol1.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullDataEntradaVol1 = campoDataEntradaVol1.value;
    const fullDataSaidaVol1 = campoDataSaidaVol1.value;
    const fullEmpresaVol1 = campoEmpresaVol1.value;
    const fullCargoVol1 = campoCargoVol1.value;
    const fulldescCargoVol1 = campodescCargoVol1.value;
    const fullPChavesVol1 = campoPChavesVol1.value;
    document.querySelector("#DataEntradaVol1").innerHTML = fullDataEntradaVol1;
    document.querySelector("#DataSaidaVol1").innerHTML = fullDataSaidaVol1;
    document.querySelector("#EmpresaVol1").innerHTML = fullEmpresaVol1;
    document.querySelector("#CargoVol1").innerHTML = fullCargoVol1;
    document.querySelector("#descCargoVol1").innerHTML = fulldescCargoVol1;
    document.querySelector("#PChavesVol1").innerHTML = fullPChavesVol1;
});

const campoDataEntradaVol2 = document.querySelector(".DataEntradaVol2");
const campoDataSaidaVol2 = document.querySelector(".DataSaidaVol2");
const campoEmpresaVol2 = document.querySelector(".EmpresaVol2");
const campoCargoVol2 = document.querySelector(".CargoVol2");
const campodescCargoVol2 = document.querySelector(".descCargoVol2");
const campoPChavesVol2 = document.querySelector(".PChavesVol2");
const sendVol2 = document.querySelector(".EnviarVol2");

sendVol2.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullDataEntradaVol2 = campoDataEntradaVol2.value;
    const fullDataSaidaVol2 = campoDataSaidaVol2.value;
    const fullEmpresaVol2 = campoEmpresaVol2.value;
    const fullCargoVol2 = campoCargoVol2.value;
    const fulldescCargoVol2 = campodescCargoVol2.value;
    const fullPChavesVol2 = campoPChavesVol2.value;
    document.querySelector("#DataEntradaVol2").innerHTML = fullDataEntradaVol2;
    document.querySelector("#DataSaidaVol2").innerHTML = fullDataSaidaVol2;
    document.querySelector("#EmpresaVol2").innerHTML = fullEmpresaVol2;
    document.querySelector("#CargoVol2").innerHTML = fullCargoVol2;
    document.querySelector("#descCargoVol2").innerHTML = fulldescCargoVol2;
    document.querySelector("#PChavesVol2").innerHTML = fullPChavesVol2;
});