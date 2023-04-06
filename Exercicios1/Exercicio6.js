//Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.


const grades = Math.floor(Math.random() * (10 - 1) +1)
    console.log(grades)

if(grades === 0) {
    console.log('Você não estudou nada!') }

else if(grades === 1){
    console.log('Não prestou atenção nas aulas?') }

else if(grades === 2){
    console.log('Você precisa se dedicar mais aos estudos') }

else if(grades === 3){
    console.log('Passe mais tempo estudando que você consegue') }

else if(grades === 4){
    console.log('Com mais dedicação você chega lá') }

else if(grades === 5){
    console.log('Bom trabalho, mas pode melhorar') }

else if(grades === 6){
    console.log('Você pode melhorar, acredito em você') }

else if(grades === 7){
    console.log('Bom trabalho!') }

else if(grades === 8){
    console.log('Muito bom! Parabéns') }

else if(grades === 9){
    console.log('Parabéns, você está indo muito bem') }

else if(grades === 10){
    console.log('Nota máxima, Parabéns') }


//RESOLUÇAO

/*const score = 10

switch (score) {
    case 0:
        console.log('Foi muito ruim')
        
        break;

    case 10:
         console.log('Foi muito bem')
            
         break;

    default:
        break;*/





