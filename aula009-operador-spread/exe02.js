const jogador1={nome:"Bruno",eneergia:100,vidas:3,magia:150}
const jogador2={nome:"Bruce",eneergia:100,vidas:5,velocidade:80}
const jogador3={...jogador1,...jogador2}// aqui ele vai concatenar os dois jogadores com spread

console.log(jogador3)// ele vai imprimir { nome: 'Bruce', eneergia: 100, vidas: 5, magia: 150, velocidade: 80 } Fazendo uma concatenação mas colocando o nome do último jogador.