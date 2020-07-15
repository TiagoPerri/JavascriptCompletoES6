// Document object Model: interface que representa o HTML através de objetos, possivel manipular estrutura, estilo e conteúdo destes documentos;    O objeto global do browser é o window (objeto padrão), possui doferentes métodos e propriedades, engloba todo o DOM // ACESSAMOS OBJETOS COM O . (ponto)
// Manipular bem o DOM é questão de entender bem os métodos e propriedades, dando interatividade do browser com o JS
//Se a propriedade retorna um objeto, eu posso ir acessando as propriedades dela com . de forma infinita, EX: window.location.port;
/*
ESTRUTURA DE ARVORE - Window e Document são os objetos principais do DOM

window
location - Document (O nosso HTML) - ... (MUITOS METODOS)
            HTML
            head - body
                    h1 section
                        h2
                        p
*/

//Pra selecionar uma TAG dentro do nosso HTML - document.querySelector('A forma que iriamos tratar essa tag dentro do CSS')  Não é só o querySelector que obtem a tag, classList puxa o nome da classe, tem como acessar as classes como um array. Ex: h1Selecionada.classList[0], h1Selecionada.innerText retorna o texto, h1Selecionada.id retorna o id, h1Selecionada.offsetHeight retorna a altura do elemento;

//adicionar evento, util demais h1Selecionada.addEventListener('click', callback(função)), da pra criar a function do lado de fora, da pra criar arrow function e da pra criar a função dentro dos paraemntros, logo após o 'click',poe ex.

const h1Selecionada = document.querySelector('.titulo');
h1Selecionada.addEventListener('click', () => {
    alert('Clicou no h1');
});

// toda tag HTML é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto NODE

// Retorne o url da página atual utilizando o objeto window
const href = window.location.href; // retorna a URL da página
console.log(href);
// a maginação é o limite, da pra fazer tudo com JS, ex validação de página:
if(href === 'http://127.0.0.1:5500/DOM_iniciantes/Teoria_DOM/index.html'){
    alert('Página correta'); // cria um alerta na página (modalzinha)
}

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo'); // seleciona o primeiro elemento que achar.
console.log(ativo);

// Retorne a linguagem do navegador
const idioma = navigator.language;
console.log(idioma);

// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura);
