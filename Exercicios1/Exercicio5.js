//Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
//a pessoa deve ser maior de idade e brasileira para ser aprovada.

const candidate ={
    name:'João',
    age: 20,
    gender:'Male',
    profession:'Mechanic',
    nationality:'Brazilian' }

if(candidate.age >= 18 && candidate.nationality === 'Brazilian' ){
    console.log('Aprovado(a) para o processo') }

else{console.log('Não foi aprovado(a)')}



//if(candidate.age >= 18 && (candidate.nationality === 'Brazileiro' || candidate.nationality === 'Brazileira')
    



