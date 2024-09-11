// Declaração de variáveis
let n = 0;  // Variável que irá armazenar o valor de 0
let max = 1000;  // Variável que irá armazenar o valor de 1000

// Início do loop while
while (n < max) {  // Enquanto n for menor que max, execute o bloco de código
  console.log("CFB cursos - " + n);  // Imprime na tela a mensagem "CFB cursos - " seguida do valor de n
  if (n > 10) {  // Se n for maior que 10, execute o bloco de código
    break;  // Interrompe o loop while
  }
  n++;  // Incrementa o valor de n em 1
}

console.log('fim do programa');  // Imprime na tela a mensagem "fim do programa"