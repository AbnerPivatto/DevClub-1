//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em dois objetos separados. 
//Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. 
//João e Maria, imprime false.
//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em um objeto. 
//Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. 
//João e Maria, imprime false.

//Primeira parte
const object1 = {name:"João"}, object2 = {name:"Maria"}
console.log ( object1 == object2 )

const objeto1 = {name:"João"}, objeto2 = {name:"João"}
console.log ( objeto1[0] == objeto2[0] )

//Segunda parte
const parte2 = {firstName:"João", seccondName:"Maria"}
const parte3 = {firstName:"João", seccondName:"Maria"}
console.log ( parte2 == parte3 )

const part4 = {name:"João"}, part5 = {name:"João"}
console.log ( part4[0] == part5[0] )

    //Resolução

    const maria = {
        name: 'maria',
        age: 23,
        height: 1.55,
        sex: "female",
        profession: "surgical instrumentation" }
      
        const joao = {
            name: 'joao',
            age: 23,
            height: 1.55,
            sex: "female",
            profession: "surgical instrumentation" }

        console.log (maria.name === joao.name)
              


