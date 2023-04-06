//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, 
//e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, 
//se não ganhou, mostra outra mensagem.

const winner = /*console.log*/(Math.floor(Math.random() * (10 - 1) +1)) 

const loser = /*console.log*/(Math.floor(Math.random() * (10 - 1) +1))   //*(onde errei não pode ter console.log)

if(winner === loser){console.log('parabens')}

else {console.log('você perdeu')}

//RESOLUÇÂO

//const winner = Math.floor(Math.random() * (10 - 1) +1)

//const loser = Math.floor(Math.random() * (10 - 1) +1)

//if(winner === loser){console.log("parabens")}

//else {console.log("você perdeu")}



