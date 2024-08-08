// Em funcões
const soma=(v1, v2,v3)=>{
    return v1+v2+v3
}
let valores=[1,5,4,10]// ele vai pegar os trez primeiros e relacionar com as propiedades a cima e fazer a soma

console.log(soma(...valores))