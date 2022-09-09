import PromptSync from "prompt-sync"

const prompt = PromptSync();

let contador = 0;

console.log("Você é culpado ou inocente?")
console.log('Responda as perguntas com "sim" ou "não".');
prompt("")
console.clear()

function fezendoPergunta1(resposta){
resposta = prompt("Você etava na cidade do dia do crime? ")

if (resposta === "sim") {
    contador++
}
}

function fezendoPergunta2(resposta2){
 resposta2 = prompt("Você conhecia a vítima? ")

if (resposta2 === "sim"){
    contador++
}
}

function fezendoPergunta3(resposta3){
resposta3 = prompt("Você viu a vítima na semana do crime? ")

if (resposta3 === "sim") {
    contador++
}
}

function fezendoPergunta4(resposta4){
 resposta4 = prompt("Você viu a vítima no dia do crime? ")

if (resposta4 === "sim"){
    contador++
}
}

function fezendoPergunta5(resposta5){
 resposta5 = prompt("Você cometeu o crime? ")

if (resposta5 === "sim") {
    contador++
}
}

function resultado(culpabilidade){
    
if (contador >= 4) {
        console.log("Você é CULPADO!!")
    
    }else if (contador === 3){
        console.log("VOCÊ É SUSPEITO!")

    }else if (contador <= 2) {
        console.log("Você é INOCENTE!!")
    }
}

fezendoPergunta1();
fezendoPergunta2();
fezendoPergunta3();
fezendoPergunta4();
fezendoPergunta5();

resultado();