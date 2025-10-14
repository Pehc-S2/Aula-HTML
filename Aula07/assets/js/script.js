// a) Selecionar o elemento <h1> e alterar texto
let titulo = document.getElementById('titulo');
titulo.innerText = "Bem vindo ao meu site";

// b) Selecionar elementos com classe texto e alterar cores 
let texto = document.getElementsByClassName('texto');
texto[0].style.color = "blue";
texto[1].style.color = "green";
// texto[1].style.backgroundColor = "yellow";

// c) Selecionar o primeiro paragrao e alterar texto
let primeiroTexto = document.querySelector('.texto');
primeiroTexto.innerText = "Este é um novo texto";

// d) Selecionar todos os paragrafos e mostrar qtde
let todosParagrafos = document.querySelectorAll('p');
console.log(`Existem ${todosParagrafos.length} parágrafos`);

// e1) Criando um novo elemento <p>
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = "Este é um novo parágrafo";

// e2) Adicionar o novo parágrafo ao elemento <div>
let novaDiv = document.getElementById('novaDiv');
novaDiv.appendChild(novoParagrafo);