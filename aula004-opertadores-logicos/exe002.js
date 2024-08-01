/*
&&  and  e
||  or   ou 
!   not  não
*/
let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

if(n1>n2){
    console.log(n1 + " é maior que " +n2+".")
}else{
    console.log(n1 + " é menor que " +n2)
}
// and  e
if ((n1>n2)&&(n3>n4)){
    console.log("verdadeiro")
}else{
    console.log("falso")
}

// or ou
if ((n1>n2)||(n3>n4)){
    console.log("verdadeiro")
}else{
    console.log("falso")
}

//not  não 
if (!(n1>n2)&&(n3>n4)){
    console.log("verdadeiro")
}else{
    console.log("falso")
}