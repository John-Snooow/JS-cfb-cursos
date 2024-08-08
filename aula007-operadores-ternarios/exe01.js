let num =10

/*let res= +num%2

if(res==0){
  console.log("par")
  }else{
    console.log("impar")
}   O RESULTADO VAI SER (PAR)*/
res = (num % 2 ? "par": "impar")// Esta linha substitui a condição anterior.
// O operador "%" calcula o resto da divisão de "num" por 2, no caso aqui esta dividindo o 10, o resto de 10 é "0".
// O operador ternário "?" verifica se o resto é zero.
// Se for zero, atribui "par" à variável "res", senão atribui "impar".

console.log(res)
//0 = false
//1 = true

//para a operação de cima funcionar corretamente eu devo colocar o operador logico de negação "!" com no exemplo a baixo 

/*
  res = (!(num % 2 ? "par": "impar"))
  console.log(res)
  AGORA VAI DAR UM RESULTADO "PAR" 
*/