// metodo mais ultilizado e otimizado para quando eu tenho que tarabalhar com coleções

const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
cursos.map ((el,i)=>{//"el" = elemento: vai pegar cada curo e "i" indici: vai declarara posição  
    console.log("curso: " + el + " - Posição do curso: " + i)
})