//Escrever um programa para exibir os números de 1 a 50.

var j=0, msg="";
while (j<=50){
     if(j ==50){
       msg +=j;
       break;
     }
     if(j%2 !=0){
       msg += "";
     }
    msg += j + ", ";
    j++;
  };
console.log(msg);