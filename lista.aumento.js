import PromptSync from "prompt-sync";

const prompt = PromptSync();

let lista = [];
let resposta = [];

do {

console.log ("Bem vindo ao sistema de registro de funcionarios.");

let funcionarios = new Object();

funcionarios.nome = prompt(`Digite o nome do novo funcionário: `);
console.log("____________________________________");
console.log("Os cargos disponíveis são Pedreiro, Bombeiro e Eletricista")
do{
funcionarios.cargo = prompt(`Digite qual o cargo a ser exercido pelo novo funcionário: `)
.toLowerCase()
.trim();
console.log("____________________________________");

if(funcionarios.cargo !== 'pedreiro' && funcionarios.cargo !== 'bombeiro' && funcionarios.cargo !== 'eletricista') {
console.log("O cargo só pode ser Pedreiro, Bombeiro ou Eletricista")
}
} while (funcionarios.cargo !== 'pedreiro' && funcionarios.cargo !== 'bombeiro' && funcionarios.cargo !== 'eletricista')

funcionarios.salario = +prompt(`Digite o salário a ser recebido pelo novo funcionário: `);
console.log("____________________________________");

console.log(funcionarios);
console.log("");

lista.push(funcionarios);

console.log("Gostaria de registrar mais funcionários? ")
console.log(`Digite "SIM" ou "NÃO:"`)
resposta = prompt(">> ")
.trim()
.toLowerCase();

console.clear()

}while (resposta === "sim");

console.log(`Você tem um total de ${lista.length} funcionários registrados.`)
console.log(lista);

function exibirCargos() {
  const pedreiro = lista.filter((item) => item.cargo === "pedreiro").length;
  const bombeiro = lista.filter((item) => item.cargo === "bombeiro").length;
  const eletricista = lista.filter((item) => item.cargo === "eletricista").length;
  console.log("___________________________________")
  console.log(`No cargo de Pedreiro temos ${pedreiro} funcionários registrados.\n No cargo de Bombeiro temos ${bombeiro} funcionários registrados.\n No cargo de Eletricista temos ${eletricista} funcionários registrados.`);
}
prompt("")
console.clear();

exibirCargos();

function aumentarSalario(cargo, taxa) {
  for (const objeto of lista) {
    if (objeto.cargo === cargo) objeto.salario = objeto.salario + (objeto.salario * (taxa/100));
  }
  console.log("____________________________________");
  console.log(lista);
  console.log("____________________________________");
  console.log(`Todos os funcionarios contrados como ${cargo} vão receber um aumento de ${taxa}%.`)
  console.log("____________________________________");
}

aumentarSalario("bombeiro", 20);