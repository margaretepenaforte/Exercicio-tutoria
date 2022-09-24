//ler 10 numeros e imprimir quantos são pares e quantos são impares.

var j=0, pares="", impares="";
while (j<=10){
    //Concatena os números pares
    pares   +=  (j%2 == 0 )?j+",":"";
    //Concatena os números impares
    impares += !(j%2 == 0 )?j+",":"";
    j++;
 };
 //Remove o último caracter, no caso, a virgula final
 pares = pares.substring(0,(pares.length - 1)); 
 impares = impares.substring(0,(impares.length - 1)); 

console.log(pares);
console.log(impares);