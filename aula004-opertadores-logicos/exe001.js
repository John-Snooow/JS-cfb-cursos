/*
&&  and  e
||  or   ou 
!   not  não
*/
let n1, n2, n3, n4
n1 = 10
n2 = 20
n3 = 30
n4 = 40

console.log((n1>n2))// falso porque n1 não é maior que n2
console.log((n1<n2))// verdadeiro porque n1 é menor que n2
console.log((n1==n2))// falso porque n1 não é igual a n

console.log((n1>n2)&&(n1<n3))// Falso porque está firmando que os dois são verdadeiro são verdadeiros, e um deles é falso
console.log((n1>n2)||(n1<n3))// verdadeiro porque está firmando que um ou o outro é verdadeiro 

//com o Not trabalhamos com inverção de operações 
console.log(!((n1>n2)||(n1<n3)))//Esta operação era verdadeira mas como eu coloquei o sinal de exclamação do primeiro parênteses indicando que esta aplicação não é verdadeira assim eu estou negando, tornando ela falsa.
