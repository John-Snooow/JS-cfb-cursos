// Calcula o fatorial de 5
// 5! = 5*4*3*2*1 = 120

let n = 5 
let fat = 1

while(n >= 1){ // Enquanto n for maior ou igual a 1, execute o bloco de código
  fat *= n // Multiplica o resultado atual do fatorial pelo valor de n
  //fat = fat * n // Essa linha é equivalente à anterior, mas usando a sintaxe de atribuição
  n-- // Decrementa o valor de n em 1
}

console.log(fat) // Imprime o resultado do fatorial, que é 120