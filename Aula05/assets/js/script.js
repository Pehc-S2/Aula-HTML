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


let objeto = document.querySelector('h1');
console.log(objeto.textContent);