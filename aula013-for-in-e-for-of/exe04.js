// Seleciona todos os elementos HTML do tipo "div" e os armazena em uma variável chamada "objs"
const objs = document.getElementsByTagName("div")

// Cria um array com números de 10 a 50
let num = [10, 20, 30, 40, 50]

// Loop que itera sobre cada elemento do array "objs" (que são os elementos "div" selecionados)
for (o of objs) {
  // Altera o conteúdo interno de cada elemento "div" para "curso"
  console.log(o.innerHTML = "curso")
}

// Loop que itera sobre cada índice do array "objs" (que são os elementos "div" selecionados)
for (o in objs) {
  // Imprime o conteúdo interno de cada elemento "div" no console
  console.log(objs[o].innerHTML)
}

// algo esta errado neste codigo que não esta funcionando 