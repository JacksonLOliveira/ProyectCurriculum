const campoAno1form = document.querySelector(".ano1form");
const campoInfos1curso = document.querySelector(".infos1curso");
const campoinfos1instituicao = document.querySelector(".infos1instituicao");
const send1form = document.querySelector(".Enviar1cursoform");

send1form.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullAno1form = campoAno1form.value;
    const fullInfos1curso = campoInfos1curso.value;
    const fullInfos1instituicao = campoinfos1instituicao.value;
    document.querySelector("#ano1Form").innerHTML = fullAno1form;
    document.querySelector("#infos1Curso").innerHTML = fullInfos1curso;
    document.querySelector("#infos1instituicao").innerHTML = fullInfos1instituicao;
})

const campoAno2form = document.querySelector(".ano2form");
const campoInfos2curso = document.querySelector(".infos2curso");
const campoinfos2instituicao = document.querySelector(".infos2instituicao");
const send2form = document.querySelector(".Enviar2cursoform");

send2form.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullAno2form = campoAno2form.value;
    const fullInfos2curso = campoInfos2curso.value;
    const fullInfos2instituicao = campoinfos2instituicao.value;
    document.querySelector("#ano2Form").innerHTML = fullAno2form;
    document.querySelector("#infos2Curso").innerHTML = fullInfos2curso;
    document.querySelector("#infos2instituicao").innerHTML = fullInfos2instituicao;
})

const campoAno3form = document.querySelector(".ano3form");
const campoInfos3curso = document.querySelector(".infos3curso");
const campoinfos3instituicao = document.querySelector(".infos3instituicao");
const send3form = document.querySelector(".Enviar3cursoform");

send3form.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullAno3form = campoAno3form.value;
    const fullInfos3curso = campoInfos3curso.value;
    const fullInfos3instituicao = campoinfos3instituicao.value;
    document.querySelector("#ano3Form").innerHTML = fullAno3form;
    document.querySelector("#infos3Curso").innerHTML = fullInfos3curso;
    document.querySelector("#infos3instituicao").innerHTML = fullInfos3instituicao;
})

const campoAno4form = document.querySelector(".ano4form");
const campoInfos4curso = document.querySelector(".infos4curso");
const campoinfos4instituicao = document.querySelector(".infos4instituicao");
const send4form = document.querySelector(".Enviar4cursoform");

send4form.addEventListener("click", (e) =>{
    e.preventDefault();
    const fullAno4form = campoAno4form.value;
    const fullInfos4curso = campoInfos4curso.value;
    const fullInfos4instituicao = campoinfos4instituicao.value;
    document.querySelector("#ano4Form").innerHTML = fullAno4form;
    document.querySelector("#infos4Curso").innerHTML = fullInfos4curso;
    document.querySelector("#infos4instituicao").innerHTML = fullInfos4instituicao;
})