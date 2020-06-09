// nomeie 3 propriedades ou métodos de strings
var palavra = 'Tpgo';

console.log(palavra.length, palavra.toUpperCase(), palavra.replace('pgo', 'iago'));
// lenght verifica o tamanho da string, toUpperCase() transforma a string em maiuscula, replace() substitui partes da string(1 argumento), por aquilo que quero colocar no lugar(2 argumento)

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    alert('Clicou!'.toUpperCase());
});

document.addEventListener() //registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um documento, o documento em si, uma janela, ou um XMLHttpRequest.
document.querySelector()//Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.
document.getElementById() //Retorna a referência do elemento através do seu ID
document.getElementsByClassName() //Retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada.  Quando invocado no objeto document, o documento é examinado por completo, incluindo o nó raiz.
btn.innerHTML; //A propriedade Element.innerHTML define ou obtém a sintaxe HTML descrevendo os elementos descendentes.
