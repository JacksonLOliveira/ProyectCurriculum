const campoArea1comp = document.querySelector(".area1comp");
const campoDesc1comp = document.querySelector(".desc1Comp");
const send1comp = document.querySelector(".Enviar1comp");

send1comp.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullArea1comp = campoArea1comp.value;
    const fullDesc1comp = campoDesc1comp.value;
    document.querySelector("#area1Comp").innerHTML = fullArea1comp;
    document.querySelector("#desc1comp").innerHTML = fullDesc1comp;
})

const campoArea2comp = document.querySelector(".area2comp");
const campoDesc2comp = document.querySelector(".desc2Comp");
const send2comp = document.querySelector(".Enviar2comp");

send2comp.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullArea2comp = campoArea2comp.value;
    const fullDesc2comp = campoDesc2comp.value;
    document.querySelector("#area2Comp").innerHTML = fullArea2comp;
    document.querySelector("#desc2comp").innerHTML = fullDesc2comp;
})

const campoArea3comp = document.querySelector(".area3comp");
const campoDesc3comp = document.querySelector(".desc3Comp");
const send3comp = document.querySelector(".Enviar3comp");

send3comp.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullArea3comp = campoArea3comp.value;
    const fullDesc3comp = campoDesc3comp.value;
    document.querySelector("#area3Comp").innerHTML = fullArea3comp;
    document.querySelector("#desc3comp").innerHTML = fullDesc3comp;
})