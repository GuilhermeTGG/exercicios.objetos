import PromptSync from "prompt-sync";

const prompt = PromptSync();

//!1. Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso, ela deve ter os métodos: envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.

const pessoa = {
    nome: 'Guilherme',
    idade: 18,
    peso: 80,
    altura: 1.75,
   
    envelhecer: function(){
        if (this.idade < 21){
        this.idade++;
        this.altura = this.altura + 0.05;
    }
    },

    engordar: function(){
        this.peso = this.peso + 1;
    },

    emagrecer: function(){
        this.peso = this.peso - 1;
    },

    crescer: function(){
        this.altura++
    },
    
    bio: function(){
        console.log(`Dados da pessoa: \n Nome: ${this.nome} \n Idade: ${this.idade} \n Peso: ${this.peso} \n Altura: ${this.altura}`)
    }
}

pessoa.bio()
pessoa.envelhecer()
pessoa.bio()
pessoa.envelhecer()
pessoa.bio()