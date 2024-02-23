const limit = document.getElementById("ate");
const init = document.getElementById("de");
const quant = document.getElementById("quantidade");


function sortear(){
    let number = (Math.random() * limit.value) + 1;
    if(number > limit && number < init){
        sortear()
    }else{
        console.log(parseInt(number))
        return parseInt(number) 
    }
    console.log(number)
}

