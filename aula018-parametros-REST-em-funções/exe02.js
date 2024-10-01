// Aqui vamos fazer a soma dos valores do exercício anterior

// Função que soma todos os valores passados como parâmetros
function soma(...valores){
    // Tamanho do array de valores
    let tam = valores.length
    // Variável que armazenará o resultado da soma
    let res = 0
    // Loop que percorre todos os valores do array
    for(let i = 0; i < tam; i++){
        // Soma o valor atual ao resultado
        res += valores[i]
    }
    // Retorna o resultado da soma
    return res 
}
// Chama a função soma com os valores 10, 5, 4, 8 e 232 e imprime o resultado na tela
console.log(soma(10, 5, 4, 8, 232))