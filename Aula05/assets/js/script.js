/*
    Aula de JavaScript
    Conceitos Básicos
*/

alert('Oi');

/* ~~~~~~~~~~~~~~~~~~~~~~~~ Variaveis ~~~~~~~~~~~~~~~~~~~~~~~~ */
/* 
    - tipagem dinâmica
    - var e let >> a diferença é que o let pertence ao escopo >> {...}
*/

const PI = 3.14; // Só para lembrar que podemos criar constantes aqui em JS tambem

let nome = 'Ronaldo Fenomeno'; // String
let nome1 = "Ronaldo Fenomeno " + nome; // String
let nome2 = `Ronaldo Fenomeno ${nome}`; // String

let opcao = true; // boolean
let peso = 80.5; // floeat
let idade = 47; // inteiro


/* ~~~~~~~~~~~~~~~~~~~~~~~~ Arrays ~~~~~~~~~~~~~~~~~~~~~~~~ */
/*
    - Arrays em JavaScript podem armazenar multiplos tipos de dados em si
    - Essas informações podem ser acessadas ao apertar na pagina com o botão direito e apertar "inspecionar"
*/ 

let idades = [42, 36, 7, 99]; 
console.log(idades[0]);
console.log(idades[1]);
console.log(idades[2]);
console.log(idades[3]);
console.log(idades[4]);
idades[99] = 'ultimo';
console.log(idades);
let valores = [10, 'Batman', 55.5, true];
console.log(valores);


/* ~~~~~~~~~~~~~~~~~~~~~~~~ Objeto do HTML ~~~~~~~~~~~~~~~~~~~~~~~~ */

let objeto = document.querySelector('h1');
console.log(objeto.textContent);

objeto.textContent = 'Ovo com Banana';


/* ~~~~~~~~~~~~~~~~~~~~~~~~ Funções ~~~~~~~~~~~~~~~~~~~~~~~~ */

function soma(n1=2, n2=3){
    console.log(`Soma: ${n1 + n2}`);
}

soma(8, 10);
soma(3.56, 107);
soma();

let valor1 = Number(prompt('Digite o valor 1: '));
let valor2 = Number(prompt('Digite o valor 2: '));
if (valor1>valor2){
    console.log('Valor 1 é maior que Valor 2');
} else {
    console.log('Valor 2 é maior que Valor 1');
}