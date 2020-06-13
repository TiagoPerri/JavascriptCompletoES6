// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copawin = [1959, 1962, 1970, 1994, 2002];
copawin.forEach((item, index)=>{console.log(item, index)});

for(var i=0;i<copawin.length;i++){
    console.log(`O Brasil ganhou a copa de ${copawin[i]}`);
}

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for(i=0;i<frutas.length;i++){
    console.log(frutas[i]);
    if(frutas[i] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimoitem = frutas[frutas.length - 1]; // nao podemos usar o .pop() pois ele remove o ultimo item do array
console.log(ultimoitem);
