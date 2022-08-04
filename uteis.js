
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var data = new Date();
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
let dataFormatada = (( meses[(data.getMonth())] + " de " + data.getFullYear()));
console.log(dataFormatada);

window.onload = (e) => {

    document.querySelector(".datafooter1").innerHTML = dataFormatada;
    document.querySelector(".datafooter2").innerHTML = dataFormatada;

};

//carregar imagem
;(function(){

    const leitorDeArquivos = new FileReader(),
            formulario = document.querySelector('.upload-imagem'),
            previaDaImagem = document.querySelector('.cabeçario-right-image'),
            inputArquivo = document.querySelector('.upload')

            function leEAtualiza(){

                let imagemEnviada = inputArquivo.files[0];

                leitorDeArquivos.readAsDataURL(imagemEnviada);
        
                leitorDeArquivos.addEventListener('loadend', function(load){
            
                console.log(load.target.result);
                previaDaImagem.src = load.target.result
        })
    }

    formulario.addEventListener('submit', function(submit){

        submit.preventDefault();

        leEAtualiza();
    })

})()