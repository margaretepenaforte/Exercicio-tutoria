//Fazer um programa para encontrar os números pares entre 1 e 100.

var j=0, msg="";
while (j<=100){
     if(j ==100){
       msg +=j;
       break;
     }
     if(j%2 !=0){
       msg += "";
     }else{
       msg += j + ", ";
    }
    j++;
  };
console.log(msg);