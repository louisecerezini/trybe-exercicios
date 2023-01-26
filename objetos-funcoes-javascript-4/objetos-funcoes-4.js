//Crie a lógica para ligar e desligar o motor
//O que será testado
//Se para o parâmetro 'ligado' a função muda para 'desligado', chama o console.log com o valor "O motor está desligado" e retorna como resultado a string 'desligado';
//Se para o parâmetro 'desligado' a função muda para 'ligado', chama o console.log com o valor "O motor está ligado" e retorna como resultado a string 'ligado';

function ligarDesligar (statusCarro){
 if (statusCarro === "desligado"){
  return "O motor esta desligado";
 statusCarro = "ligado";
  }else{
  statusCarro = "desligado";
  return "o motor esta ligado";
 }
}
    console.log(ligarDesligar('desligado'));
  console.log(ligarDesligar('ligado')); 

//Crie uma função que calcule a área de um círculo
//O que será testado
//Ao receber o parâmetro: 10, o retorno será: Essa é a área do círculo: 314
//Ao receber o parâmetro: 5, o retorno será: Essa é a área do círculo: 78.5
//Ao receber o parâmetro: 'duna', o retorno será: O parâmetro radius deve ser um número

function areaCirculo (radius) {
  if (isNaN(radius)) {
    return "O parâmetro radius deve ser um número"; 
 }
  let resultado = Math.PI*(radius*radius);
  return "Essa e a area do circulo:  " + resultado; 
}
console.log(areaCirculo(10)); 
console.log(areaCirculo(5)); 
console.log(areaCirculo('duna')); 

//Implemente a função longestWord que retornará a maior palavra da frase recebida como parâmetro.
//De olho na dica eyes: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

//O que será testado
//A função longestWord ao receber a frase 'Antônio foi ao banheiro e não sabemos o que aconteceu' e o retorno da função longestWord é: 'aconteceu';
//Ao receber a frase: Eu estudo na Trybe com muita dedicação o retorno será dedicação;



   
    
    
    
    
    