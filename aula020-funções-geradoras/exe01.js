function* cores(){// Definindo uma função geradora chamada 'cores'
    yield 'vermelho'
    yield 'azul'
    yield 'verde'
}

let itc=cores()// Criando um iterador a partir da função geradora 'cores'
console.log(itc.next().value) // imprime: vermelho
console.log(itc.next().value) // imprime: azul
console.log(itc.next().value) // imprime: verde
console.log(itc.next().value) // retorna undefined, pois o itc já terminou
