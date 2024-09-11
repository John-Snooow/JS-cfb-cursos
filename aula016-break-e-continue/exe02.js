// Declaração de variáveis
let n = 0; // Variável que armazena o valor inicial do loop
let max = 1000; // Variável que armazena o valor máximo do loop
let pares = 0; // Variável que armazena a quantidade de números pares encontrados

// Início do loop que irá rodar de n até max
for (let i = n; i < max; i++) {
  // Verifica se o número atual é ímpar (resto da divisão por 2 é diferente de 0)
  if (i % 2 !== 0) {
    // Se for ímpar, pula para a próxima iteração do loop
    continue;
  }
  // Se for par, incrementa a variável pares
  pares++;
}

// Exibe a quantidade de números pares encontrados
console.log("Quantidade de números pares: " + pares);
// Exibe mensagem de fim do programa
console.log("Fim do programa");