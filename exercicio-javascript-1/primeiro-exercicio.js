let salarioa = 3500;
let salariob = 1500; 

console.log(salarioa+salariob); 
console.log(salarioa-salariob);
console.log(salarioa*salariob);
console.log(salarioa/salariob);
console.log(salarioa%salariob);

if(salarioa === 3500|| salariob=== 1500){
  console.log("obrigada, meu salario esta correto")
} else {
  console.log("Ei,meu salario esta errado"); 
}

//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const a=10;
const b=25; 

if(a>b){
   console.log("a");
}else{
  console.log("b"); 
}

//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
 const d= 20;
 const e=30;
 const f=50;

 if(d>e){
  console.log("d");
 }
  else if (e>d && e>f){
    console.log("e");
  }
  else {
  console.log("f")
  }

  //Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, 
  //retorne “positive” se esse valor for positivo, “negative” se for negativo,
  // e caso não seja nem positivo e nem negativo retorne “zero
  
  let x=5; 

  if (x>0){
    console.log("positive");
  }
  else if(x<0){
    console.log("negative");
  }
  else {
      console.log("zero"); 
    }
  
    //Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo.
    // Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
    //Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

// a1,a2,a3<0 (o que eu errei)

const a1= 0;
const a2= 50;
const a3= 50;

if(a1+a2+a3 === 180){
  console.log("true");
}
else if(a1<=0 || a2<=0 ||a3<=0){
  console.log("angulo invalido");
}
else{
  console.log("false");
}

//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

//Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaDoXadrez = 