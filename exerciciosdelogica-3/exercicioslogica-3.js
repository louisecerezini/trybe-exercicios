//Utilizando o array abaixo, percorra-o somando todos os valores. 
//Caso o valor final seja maior que 15, imprima-o. 
//Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

//let fruits = [3, 4, 10, 1, 12];
//let sum =0; 
//for (let index = 0; index < fruits.length; index += 1) {
//soma+= numbers[index];
//if (sum> 15) {
//console.log(sum); 
 //} else {
//  console.log("valor menor que 16")


//let sum =0; 
//for (let index = 100; index >= 5; index = index -5) {
//  sum ++; 
//console.log(sum); 

//crie um algoritmo que imprima na tela o fatorial de 10.

 //10! = 10x9x8x7x6x5x4x3x2x1
 //primeiro- declara valor inicial 
//segundo- adiciona a condicao para entrar no for
//terceiro- o que vai ser executado no final de cada repeticao; normalmente muda se o valor inicial para que o laco nao se repita eternamente. 

// let fatorial= [10,9,8,7,6,5,4,3,2,1];
// let resultado=1;
// for (let index=9; index>=1; index-=1){
// resultado=resultado * index; 
// console.log(resultado); 

//
//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. 
//Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo,
//depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

//let word = 'banana';
//let resultado =" "; 
//for(i='banana'.length-1; i>=0; i-=1){
 //resultado = resultado + 'banana'[1]; 
//}

// let word = 'tryber';
// let reverseWord = '';
// reverseWord = word.split('').reverse().join('');
// console.log(reverseWord);


//Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

// let variavel =0;
// for (index =1; index <=50; index +=1){
//   variavel += index;
// }
// console.log(variavel); 

//2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let divisíveis = [];
// for (let index=2 ; index <=150, index +=1){
//   if(index/3 === 0){
//     divisíveis.push(index); 
//   }
// }
// if(divisiveis.length ===50){
//   console.log('Mensagem secreta');
// }
// console.log (divisiveis.length)

//Utilize a estrutura de repetição for para escrever dois algoritmos:
// um que imprima no console a maior palavra desse array e outro que imprima a menor. 
//Considere o número de caracteres de cada palavra.
//um que imprima no console a maior palavra desse array e outro que imprima a menor


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra= array[0];
let menorPalavra= array[0]; 

for(index=0; index <array.length; index+=1){
  if(array[index].length > maiorPalavra.length){
    maiorPalavra=array[index];
  }
 if (array[index].length < menorPalavra.length){
  menorPalavra=array[index]; 
 }
}

console.log(maiorPalavra);
console.log(menorPalavra); 