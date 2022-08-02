let inputNome = document.querySelector("#inputnovoNome");//okay
let sendNome = document.querySelector("#btnAddNome");//okay
let listaNomes = document.querySelector("#listaNomes");//okay
let btnAtualizarnomecompleto = document.querySelector('#btnAtualizarnomecompleto');
let idnomecompletoEdicao = document.querySelector('#idnomecompletoEdicao');
let inputnomecompletoNomeEdicao = document.querySelector('#inputnomecompletoNomeEdicao');
let janelaEdicao = document.querySelector('#janelaEdicao');
let janelaEdicaoFundo = document.querySelector('#janelaEdicaoFundo');
let janelaEdicaoBtnFechar = document.querySelector('#janelaEdicaoBtnFechar');
const qtdIdsDisponiveis = Number.MAX_VALUE;//okay

inputNome.addEventListener('keypress', (e) =>{//okay
    if(e.keyCode == 13) {
        let nomecompleto = {
            nome: inputNome.value,
            id: gerarIdV2()
        }
        adicionarNomeCompleto(nomecompleto);

        let confirmacao1 = window.confirm('Deseja enviar o nome para o Currículo? ');
        if(confirmacao1){
            let li = document.querySelector('.textonomecompleto');
        }
    }
})

janelaEdicaoBtnFechar.addEventListener('click', (e) => {
    alternarJanelaEdicao();
});

sendNome.addEventListener('click', (e) => {//okay

    let nomecompleto = {
        nome: inputNome.value,
        id: gerarIdV2(),
    }
    adicionarNomeCompleto(nomecompleto);

    let confirmacao1 = window.confirm('Deseja enviar o nome para o Currículo? ');
    if(confirmacao1){
        let li = document.querySelector('.textonomecompleto');
    }
});

function adicionarNomeCompleto(nomecompleto){//okay
    let li = criarTagLI(nomecompleto);
    listaNomes.appendChild(li);
    inputNome.value = '';
    document.getElementById("NomeCompleto").innerHTML= li.innerText;
}

btnAtualizarnomecompleto.addEventListener('click', (e) => { 
    e.preventDefault();
    let idnomecompleto = idnomecompletoEdicao.innerHTML.replace('#', '');
    let nomecompleto = {
        nome: inputnomecompletoNomeEdicao.value,
        id: idnomecompleto
    }
    let nomecompletoAtual = document.getElementById(''+idnomecompleto+'');
    if(nomecompletoAtual) {
        let li = criarTagLI(nomecompleto);
        listaNomes.replaceChild(li, nomecompletoAtual);
        alternarJanelaEdicao();
    } else {
        alert('Elemento HTML não encontrado!');
    } 
});

function gerarId() {//okay
    return Math.floor(Math.random() * qtdIdsDisponiveis);
}

function gerarIdV2() {//okay
    return gerarIdUnico();
}

function gerarIdUnico() {//okay
    // debugger;
    let itensDaLista = document.querySelector('#listaNomes').children;
    let idsGerados = [];
    for(let i=0;i<itensDaLista.length;i++) {
        idsGerados.push(itensDaLista[i].id);
    }
    let contadorIds = 0;
    let id = gerarId();
    while(contadorIds <= qtdIdsDisponiveis && 
        idsGerados.indexOf(id.toString()) > -1) {
            id = gerarId();
            contadorIds++;
            if(contadorIds >= qtdIdsDisponiveis) {
                alert("Oops, ficamos sem IDS :/");
                throw new Error("Acabou os IDs :/");
            }
        }
    return id;
}

function criarTagLI(nomecompleto) {//okay
    let li = document.createElement('li');
    li.id = nomecompleto.id;

    let span = document.createElement('span');
    span.classList.add('textonomecompleto');
    span.innerHTML = nomecompleto.nome;

    let div  = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil fa-xs"></i>';
    btnEditar.setAttribute('onclick', 'editar('+nomecompleto.id+')');
    
    let btnExcluir  = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa-solid fa-trash-can fa-xs"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+nomecompleto.id+')');
    
    let btnEnviarNome  = document.createElement('button');
    btnEnviarNome.classList.add('btnAcao');
    btnEnviarNome.innerHTML = '<i class="fa fa-plus fa-xs"></i>';
    btnEnviarNome.setAttribute('onclick', 'enviarAtualizacaoNome('+nomecompleto.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);
    div.appendChild(btnEnviarNome);


    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function enviarAtualizacaoNome (){
    let confirmarAtulizacaoNome = window.confirm('Deseja atualizar o nome do Currículo? ');
    if(confirmarAtulizacaoNome){
        let li = document.querySelector('.textonomecompleto');
        document.getElementById("NomeCompleto").innerHTML= li.innerText;
    }
}

function editar(idnomecompleto) {
    let li = document.getElementById(''+ idnomecompleto + '');
    if(li) {
        idnomecompletoEdicao.innerHTML = '#' + idnomecompleto;
        inputnomecompletoNomeEdicao.value = li.innerText;
        alternarJanelaEdicao();
    } else {
        alert('Elemento HTML não encontrado!');
    }
}

function excluir(idnomecompleto) {
    let confirmacao = window.confirm('Tem certeza que deseja excluir? ');
    if(confirmacao) {
        let li = document.getElementById(''+ idnomecompleto + '');
        if(li) {
            listaNomes.removeChild(li);
            return limparCampoNome();
        } else {
            alert('Elemento HTML não encontrado!');
        }
    }
}

function limparCampoNome (){
    document.getElementById("NomeCompleto").textContent = "Nome Completo";
}

function alternarJanelaEdicao() {
    janelaEdicao.classList.toggle('abrir');
    janelaEdicaoFundo.classList.toggle('abrir');
}
