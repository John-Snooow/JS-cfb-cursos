// Aqui vamos fazer a soma dos valores do exercício anterior

function soma(...valores){
    let res = 0
    for(let v of valores){
        res += v
    }
    return res 
}
console.log(soma(10, 5, 4, 8, 232))