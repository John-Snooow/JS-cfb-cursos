"use strict"//para que tenhamos que declarar a variavel mantes de ultilizar

var nome="Bruno"// quando eu colocar nome em qualquer lugar esta variavel estara assecivel, menos quando ela começa dentro de um escopo como no exemplo a baixo 

/*
if(true){      -- aqui a variavel esta dentro de um "se" ela não foi declarada fora --
var nome= "Bruno"
}
*/
// outro ex: valido 
function teste(){
    let nome="bruno"
    if(true){ 
      console.log("dentro do IF do teste: " + nome)
    }
    console.log("dentro do teste: " + nome)//esta linha tambem teria dado erro se eu estivesse usado o Var no lugar de let mesmo estando dentro do escopo

}
teste()
console.log("fora do teste: " + nome)// este não fucionara pois a variavel foi declarada dentro do escopo

//de preferencia a declarar variaveis com let por ter um controle maior
