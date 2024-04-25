alert("Boas Vindas ao jogo do número secreto");

let nome = prompt("Qual seu nome?")
let numero = prompt("escolha até quantos numeros quer jogar")
let numeroSecreto = parseInt(Math.random() * numero +1);
console.log(numeroSecreto);
let numeroChute;
let tentativas = 1;


while(numeroChute != numeroSecreto){

    numeroChute = prompt(`escolha um número entre 1 e ${numero}`);

    if (numeroChute == numeroSecreto ) {
       break;   
    }else{
        if(numeroChute > numeroSecreto){
            alert(`O numero secreto é menor que ${numeroChute}`);
            
        }else{
            alert(`O numero secreto é maior que ${numeroChute}`);
        } 
    }
    // para atribuir mais um a uma variavel
    tentativas++     
}

let palavraTentativa= tentativas >1? "tentativas" : "tentativa"
alert(`parabens você acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

document.getElementById("usuario").textContent = nome
// if(tentativas>1){
//     alert(`parabens você acertou o numero ${numeroSecreto} com ${tentativas} tentativas`);
// }else{
//     alert(`parabens você acertou o numero ${numeroSecreto} com ${tentativas} tentativa`);
// }


























// -------------------------------------------

// let contador = 1
// while(contador <= 10){
//     alert(contador)
//     contador++
// }
// -------------------------------------------

// let contador =prompt("numero para contagem regressiva")

// while(contador >=1){
//     console.log(contador)
//     contador--
// }
// -------------------------------------------

// -------------------------------------------
// let dia = prompt("Qual dia da semana?")
// dia.toLowerCase
// dia.normalize

// if(dia == "sabado"){
//     alert("Bom fim de semana");
// } else if (dia == "domingo"){
//     alert("Bom fim de semana");
// } else {
//     alert("boa semana")
// }
// -------------------------------------------

// let numero =prompt("Digite um numero")

// if(numero< 0){
//     alert("numero negativo")
// }else{
//     alert("numero positiivo")
// }
// -------------------------------------------
// let saldo= 1500

// alert(`seu saldo é ${saldo}`)

// -------------------------------------------
// alert("Boas vindas aoo nosso site")
// -------------------------------------------
// let nome1 = "Lua";
// let idade1 = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 100;
// -------------------------------------------
// let menssagemDeErro = "erro!! preencha todos os campos!!";

// alert(menssagemDeErro)
// -------------------------------------------
// let nome = prompt("digite seu nome")
// let idade = prompt("digite sua idade")

// if(idade >= 18){
//     alert("Pode tirar a habilitação")
// }