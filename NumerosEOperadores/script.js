// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total); // Resultado da expressão é 35, () Dá a prioridade, senão segue regra normal

// Crie duas expressões que retornem NaN
var altura = 'A altura é 1.66'
var result = altura * 2;
console.log(result);

var peso = 'O peso é de 100 kg'
var result2 = peso / 4;
console.log(result2); // qualquer expressão de numero com string que não seja a de concatenação irá retornar NaN

// Somar a string '200' com o número 50 e retornar 250
var string = '200';
console.log(+string + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var teste = 5;
console.log(++teste);

// Como dividir o peso por 2?
var numero = +'100';
var unidade = 'kg';
var peso = numero + unidade;
console.log(peso); // o operador + antes de string força uma conversão para number

