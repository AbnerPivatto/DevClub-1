//Faça um programa onde leia um número e diga se ele é:
// - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

    var n = 17;
    var total = n / 2;
            if (n % 2 === 0) {
                 console.log("par"); }
            else {
                console.log("impar"); }
        
    let primo = 19;
    let divisor = 2;
            while(primo%divisor !== 0)
                divisor++;
            
            if(primo === divisor)
                console.log("Número Primo e impar");
            else
                console.log("Número NÃO primo!");

    let primo1 = 50;
    let divisor1 = 5;
            while(primo1%divisor1 !== 0)
                divisor++;
                        
            if (primo1 === divisor1)
                 console.log("Número Primo e impar");
            
            else console.log("Número NÃO primo!"); 
            
            //RESOLUÇÃO
    /*const number = 17
    
    if (number % 2 === 0) {

        if (number % 5 === 0) console.log("O número é par e divisível por 5")
        else console.log("O número é par e não divisível por 5")
    }   
        else {

          for (let i = 2; i < number; i++)
              if (number % i === 0) {
                console.log("Ele é impar, mas não é primo")
                break
            } else{
                if (i === number -1) console.log("Ele é um número primo")
              }  
              } */
        
    