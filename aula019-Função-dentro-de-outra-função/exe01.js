//meioi complexo mas vamos lá

// Definindo uma função chamada 'soma' que aceita um número variável de argumentos
const soma = (...valores) => {
    // Definindo uma função interna chamada 'soma' que aceita um array 'val'
    const soma = (val) => {
      // Inicializando uma variável 'res' com 0, que irá armazenar o resultado da soma
      let res = 0;
      // Percorrendo cada elemento 'v' do array 'val'
      for (v of val) res += v; // Adicionando cada elemento 'v' à variável 'res'
      // Retornando o resultado da soma
      return res;
    };
    // Chamando a função interna 'soma' passando o array de valores e retornando o resultado
    return soma(valores);
  };
  
  // Chamando a função 'soma' com os argumentos 10, 5 e 15 e exibindo o resultado no console
  console.log(soma(10, 5, 15));
