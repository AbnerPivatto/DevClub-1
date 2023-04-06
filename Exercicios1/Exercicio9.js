/*Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - 
Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.*/



let allNumbers = [2, 4, 6, 8]

for(let number of allNumbers){
    
    console.log(number) }
    
    console.log('Todos os número são pares')

//RESOLUÇÃO

const numberOne = 7
const numberTwo = 3
const numberThree = 1
const numberFour = 9

if(numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0){
    console.log("Todos são pares")
} else if(numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0){
   console.log("Todos são ímpares")
} else {
    console.log("Tudo misturado, ímpares e pares")
}

       
