const limit = document.getElementById("ate");
const init = document.getElementById("de");
const quant = document.getElementById("quantidade");
const text = document.getElementById("resultado");
const btnRein = document.getElementById("btn-reiniciar")

let randomNumbers = [];
let numero;

function sortear(){
    for (let i = 0; i  < quant.value; i++) {
        numero = obterNumeroAleatorio();
    }
    text.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${randomNumbers}</label>`
    btnRein.className = "container__botao"
}

function obterNumeroAleatorio () {
    let number = (Math.random() * limit.value) + 1;
    if(number > limit.value && number < init.value){
        sortear()
    }else{
        randomNumbers.push(parseInt(number));
        return parseInt(number) 
}
}

function reiniciar () {
    quant.value ="";
    init.value = ""; 
    limit.value = "";
    randomNumbers = [];
    btnRein.className = "container__botao-desabilitado"
    text.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
}