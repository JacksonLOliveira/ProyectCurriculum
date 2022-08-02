var inputAreaComp = document.querySelector("#inputAreaCompetencia");
var inputNovaComp = document.querySelector("#inputnovaCompetencia");
var btnAddareaCompetencia = document.querySelector("#btnAddareaCompetencia");
var btnAddnovaCompetencia = document.querySelector("#btnAddnovaCompetencia");
var listaareaPCompetencias = document.querySelector('#listaareaPCompetencias');
var listanovaCompetencia = document.querySelector('#listanovaCompetencia');
const qtdIdsDisponiveisNovaComp = Number.MAX_VALUE;
const qtdIdsDisponiveisAreaComp = Number.MAX_VALUE;

inputAreaComp.addEventListener('keypress', (e) =>{
    if(e.keyCode == 13) {
        let novaareacompetencia = {
            nome: inputAreaComp.value,
            id: gerarIdV2AreaComp()
        }
        adicionarAreaCompetencia(novaareacompetencia);
    }
})

inputNovaComp.addEventListener('keypress', (e) =>{
    if(e.keyCode == 13) {
        let novacompetencia = {
            nome: inputNovaComp.value,
            id: gerarIdV2NovaComp()
        }
        adicionarnovaCompetencia(novacompetencia);
    }
})

btnAddareaCompetencia.addEventListener('click', (e) => {

    let novaareacompetencia = {
        nomenovaAreacompetencia: inputAreaComp.value,
        id: gerarIdV2AreaComp(),
    }
    
    adicionarAreaCompetencia(novaareacompetencia);

    let confirmacaoEnvioareaComp = window.confirm('Deseja enviar a área da competência para o Currículo? ');
    if(confirmacaoEnvioareaComp){
        let liareaCompetencia = document.querySelector('.textoAreaCompetencia');
    }
});

btnAddnovaCompetencia.addEventListener('click', (e) => {

    let novacompetencia = {
        nomenovaCompetencia: inputNovaComp.value,
        id: gerarIdV2NovaComp(),
    }
    adicionarnovaCompetencia(novacompetencia);

    let confirmacaoEnvioComp = window.confirm('Deseja enviar a Nova Competência para o Currículo? ');
    if(confirmacaoEnvioComp){
        let linovaCompetencia = document.querySelector('.textonovaCompetencia');
    }
});

function gerarIdAreaComp() {
    return Math.floor(Math.random() * qtdIdsDisponiveisAreaComp);
};

function gerarIdNovaComp() {
    return Math.floor(Math.random() * qtdIdsDisponiveisNovaComp);
}

function criarTagLInovaCompetencia(novacompetencia) {
    let linovaComp = document.createElement('li');
    linovaComp.id = novacompetencia.id;

    let spannovacompetencia = document.createElement('spannovacompetencia');
    spannovacompetencia.classList.add('textonovacompetencia');
    spannovacompetencia.innerHTML = novacompetencia.nome;

    let divNovaComp  = document.createElement('div');

    let btnEditarnovaComp = document.createElement('button');
    btnEditarnovaComp.classList.add('btnAcao');
    btnEditarnovaComp.innerHTML = '<i class="fa fa-pencil fa-xs"></i>';
    btnEditarnovaComp.setAttribute('onclick', 'editarnovaComp('+novacompetencia.id+')');

    let btnExcluirnovaComp  = document.createElement('button');
    btnExcluirnovaComp.classList.add('btnAcao');
    btnExcluirnovaComp.innerHTML = '<i class="fa-solid fa-trash-can fa-xs"></i>';
    btnExcluirnovaComp.setAttribute('onclick', 'excluirnovacomp('+novacompetencia.id+')');
    
    let btnEnviarnovaComp  = document.createElement('button');
    btnEnviarnovaComp.classList.add('btnAcao');
    btnEnviarnovaComp.innerHTML = '<i class="fa fa-plus fa-xs"></i>';
    btnEnviarnovaComp.setAttribute('onclick', 'enviarAtualizacaonovaComp('+novacompetencia.id+')');

    divNovaComp.appendChild(btnEditarnovaComp);
    divNovaComp.appendChild(btnExcluirnovaComp);
    divNovaComp.appendChild(btnEnviarnovaComp);


    linovaComp.appendChild(spannovacompetencia);
    linovaComp.appendChild(divNovaComp);
    return linovaComp;
;}

function criarTagLIareaCompetencia(novaareacompetencia) {
    let linovaAreaComp = document.createElement('li');
    linovaAreaComp.id = novaareacompetencia.id;

    let spannovaareacompetencia = document.createElement('spannovaareacompetencia');
    spannovaareacompetencia.classList.add('textoareacompetencia');
    spannovaareacompetencia.innerHTML = novaareacompetencia.nome;

    let divNovaAreaComp  = document.createElement('div');

    let btnEditarareaComp = document.createElement('button');
    btnEditarareaComp.classList.add('btnAcao');
    btnEditarareaComp.innerHTML = '<i class="fa fa-pencil fa-xs"></i>';
    btnEditarareaComp.setAttribute('onclick', 'editarareacomp('+novaareacompetencia.id+')');
    
    let btnExcluirareaComp  = document.createElement('button');
    btnExcluirareaComp.classList.add('btnAcao');
    btnExcluirareaComp.innerHTML = '<i class="fa-solid fa-trash-can fa-xs"></i>';
    btnExcluirareaComp.setAttribute('onclick', 'excluirareacomp('+novaareacompetencia.id+')');
    
    let btnEnviarareaComp  = document.createElement('button');
    btnEnviarareaComp.classList.add('btnAcao');
    btnEnviarareaComp.innerHTML = '<i class="fa fa-plus fa-xs"></i>';
    btnEnviarareaComp.setAttribute('onclick', 'enviarAtualizacaoareaComp('+novaareacompetencia.id+')');

    divNovaAreaComp.appendChild(btnEditarareaComp);
    divNovaAreaComp.appendChild(btnExcluirareaComp);
    divNovaAreaComp.appendChild(btnEnviarareaComp);


    linovaAreaComp.appendChild(spannovaareacompetencia);
    linovaAreaComp.appendChild(divNovaAreaComp);
    return linovaAreaComp;
}

function gerarIdV2AreaComp() {
    return gerarIdUnicoAreaComp();
};

function gerarIdV2NovaComp() {
    return gerarIdUnicoNovaComp();
};

function gerarIdUnicoNovaComp() {
    // debugger;
    let itensDaListaNovaComp = document.querySelector('#listaareaPCompetencias').children;
    let idsGeradosNovaComp = [];
    for(let i=0;i<itensDaListaNovaComp.length;i++) {
        idsGeradosNovaComp.push(itensDaListaNovaComp[i].id);
    }
    let contadorIdsNovaComp = 0;
    let idNovaComp = gerarIdNovaComp();
    while(contadorIdsNovaComp <= qtdIdsDisponiveisNovaComp && 
        idsGeradosNovaComp.indexOf(idNovaComp.toString()) > -1) {
            idNovaComp = gerarIdNovaComp();
            contadorIdsNovaComp++;
            if(contadorIdsNovaComp >= qtdIdsDisponiveisNovaComp) {
                alert("Oops, ficamos sem IDS :/");
                throw new Error("Acabou os IDs :/");
            }
        }
    return idNovaComp;
}

function gerarIdUnicoAreaComp() {
    // debugger;
    let itensDaListaAreaComp = document.querySelector('#listaareaPCompetencias').children;
    let idsGeradosAreaComp = [];
    for(let i=0;i<itensDaListaAreaComp.length;i++) {
        idsGeradosAreaComp.push(itensDaListaAreaComp[i].id);
    }
    let contadorIdsAreaComp = 0;
    let idAreaComp = gerarIdAreaComp();
    while(contadorIdsAreaComp <= qtdIdsDisponiveisAreaComp && 
        idsGeradosAreaComp.indexOf(idAreaComp.toString()) > -1) {
            idAreaComp = gerarIdAreaComp();
            contadorIdsAreaComp++;
            if(contadorIdsAreaComp >= qtdIdsDisponiveisAreaComp) {
                alert("Oops, ficamos sem IDS :/");
                throw new Error("Acabou os IDs :/");
            }
        }
    return idAreaComp;
}

function adicionarAreaCompetencia(novaareacompetencia) {
    let liareaCompetencia = criarTagLIareaCompetencia(novaareacompetencia);
    listaareaPCompetencias.appendChild(liareaCompetencia);
    inputAreaComp.value = '';
    document.getElementById("areaComp").innerHTML= liareaCompetencia.innerText;
};

function adicionarnovaCompetencia(novacompetencia) {
    let linovaCompetencia = criarTagLInovaCompetencia(novacompetencia);
    listanovaCompetencia.appendChild(linovaCompetencia);
    inputNovaComp.value = '';
    document.getElementById("competencias").innerHTML= linovaCompetencia.innerText;
};