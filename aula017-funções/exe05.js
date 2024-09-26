//FUBÇÃO PARAMETRIZADA

/*
function soma(n1,n2){
    console.log(n1+n2)
}

soma(4, 15)
*/

//ou 

/*
function soma(n1=4,n2=15){  //AQUI EU COLIOQUEI O VALOR NA PROPIA FUNCTION
    console.log(n1+n2)
}
soma()
*/

//ou

/*
function soma(n1=0,n2=0){
    return n1+n2
}
console.log(soma(4,15))
*/

//ou

function soma(n1=0,n2=0){
    let res
    res=n1+n2
    return res
}
let resultado_soma=soma(4,15)
console.log(soma(resultado_soma))
