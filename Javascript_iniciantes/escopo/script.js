// Por qual motivo o código abaixo retorna com erros? // Const não deixa a variavel vazar do bloco, portanto não é acessível. Resolvido!
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;

    console.log(cor, marca, portas);
}
  
  // Como corrigir o erro abaixo? // Já corrigido, retirei o const dois do escopo da primeira funcao e deixei ele acessivel globalmente
  const dois = 2;

  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  
  // O que fazer para total retornar 500? // transformar a variavel de dentro do loop em let, ao inves de var, pois let NÃO VAZA DO ESCOPO
  var numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  