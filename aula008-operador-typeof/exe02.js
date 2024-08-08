//"typeof" tambem conhefcido como operador unario

let v1= 10
let v2= "10"
let v3= v1===v2// é uma variável que armazena o resultado da comparação entre v1 e v2 usando o operador de igualdade estrita
let v4= {nome: "Bruno"}//é uma variável do tipo objeto que armazena um objeto com uma propriedade chamada nome e valor "Bruno"

console.log("Valor: " + v1 + " - tipo: " + typeof(v1))
console.log("Valor: " + v2 + " - tipo: " + typeof(v2))
console.log("Valor: " + v3 + " - tipo: " + typeof(v3))
console.log("Valor: " + v4 + " - tipo: " + typeof(v4))

//O typeof é usado para obter o tipo de cada variável.

//Ao imprimir o valor de v4, o console mostrará [object Object], pois o objeto é convertido para uma string. Se você quiser imprimir o conteúdo do objeto, pode usar console.log(JSON.stringify(v4))
