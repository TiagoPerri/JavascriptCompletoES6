// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var myage = 18;
var idadeparente = 42;

if(myage>idadeparente){
    console.log('Sua idade é maior');
} else if(myage===idadeparente){
    console.log('Idades iguais');
} else{
    console.log('Idade do seu parente é maior');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // retorna sempre o ultimo verdadeiro ou o primeiro valor falso
console.log(expressao); //retornará 3, pois é o ultimo verdadeiro, já que todos são true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; // false

console.log(!!nome,!!idade,!!possuiDoutorado,!!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil<china){
    console.log('População da China é maior');
} else {
    console.log('População do Brasil é maior');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); // irá aparecer falso pois Gato é diferente de gato
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso'); // aparecerá Cão, pois temos uma sentença verdadeira na condicional ||, logo iremos pro primeiro if, em que as duas são true, pegando a ultima true, que é cão
}