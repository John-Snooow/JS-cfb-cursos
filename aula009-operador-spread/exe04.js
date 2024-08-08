const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]//O operador de spread (...) é usado para converter a coleção de elementos div em um array.


/*forEach é um método que executa uma função para cada elemento de um array.
Neste caso, a função é uma arrow function que recebe um parâmetro Element, que é cada elemento div do array objs2.*/
objs2.forEach(Element =>{
    console.log(Element)
});
console.log(objs1)
console.log(objs2)

//visualize no DevToos