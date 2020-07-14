//Crie uma função que calcule o IMC

function imc(peso,altura){
    return (peso / (altura*altura));
}

var peso = 105;
var altura = 1.86;
console.log(imc(peso,altura));

//função pra verificar se é da terceira idade ou não

function TerceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Digite um número!';
    } else if(idade >= 60){
        return 'Ta idoso';
    } else{
        return 'Ainda não está idoso';
    }
}

var idade = 65;
console.log(TerceiraIdade(idade));

//Função pra verificar quantos países faltam visitar, utilize template String (Sempre envolvida por ACENTOS GRAVES)

function FaltaVisitar(paisesvisitados){
    var totalpais = 193;
    return `Falta visitar ${totalpais - paisesvisitados} países`;
}

var paisesvisitados = 1;
console.log(FaltaVisitar(paisesvisitados));

// Crie uma função para verificar se um valor é Truthy

function VerificaTrue(valor){
    return !!valor;
}

var valor = 10;
console.log(VerificaTrue(valor));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function Perimetro(lado){
    return lado*4;
}

var lado = 4;
console.log(Perimetro(lado));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function NomeCompleto(nome, sobrenome){
    return (nome + sobrenome);
}

var nome = 'Tiago ';
var sobrenome = 'Perri';
console.log(NomeCompleto(nome, sobrenome));

// Crie uma função que verifica se um número é par

function VerificaPar(numero){
    if(numero%2===0){
        return 'Número Par';
    } else {
        return 'Número ímpar';
    }
}

var numero = 8;
console.log(VerificaPar(numero));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function TipoDado(tipo){
    return (typeof tipo);
}

var tipo = 15;
var tipo2 = 'Isso é uma String';
console.log(TipoDado(tipo), TipoDado(tipo2));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    var nome = 'Tiago';
    var sobrenome = 'Perri';

    console.log(nome + ' ' + sobrenome);
});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20)); // CORRIGIDO