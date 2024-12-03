// metodo mais ultilizado para quando eu tenho coleções
// fazendo retorno de elementos
const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
let c=cursos.map ((el,i)=>{ 
    return "<div>" + el + "</div>"
})
console.log(c)

// exemplificando que eu posso retornar divs