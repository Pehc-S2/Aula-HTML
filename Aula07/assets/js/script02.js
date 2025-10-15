// Minha resolução:
/*
// a) Alterar texto do <h1> para "Bem vindo ao meu site!"
let titulo = document.getElementById('titulo');
titulo.innerText = "Bem vindo ao meu site!";

// b) Adicionar um novo paragrafo a <div> com o texto "Este é um novo parágrafo."
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = "Este é um novo parágrafo.";

let minhaDiv = document.getElementById('minhaDiv');
minhaDiv.appendChild(novoParagrafo);

// c) Mudar endereço do link para "https://www.senac.br/"
let link = document.getElementById('meuLink');
link.setAttribute('href', 'https://www.senac.br/');

// d) Adicionar a classe 'destaque' ao parágrafo
let paragrafo = document.getElementById('meuParagrafo');
paragrafo.classList.add('destaque');

// e)  Crie um novo elemento <p> com o texto "Este é outro parágrafo." 
// e adicione-o ao final do <body> usando appendChild.
let maisParagrafo = document.createElement('p');
maisParagrafo.innerText = "Este é outro parágrafo.";
document.body.appendChild(maisParagrafo);
*/

//----------------------------------------------------------------------
// Resolução do Professor:

// a)
document.getElementById('titulo').innerText = "Bienvenido";

// b)
document.getElementById('minhaDiv').innerHTML = '<p>Este é um novo paragrafo</p>';

// c)
document.getElementById('meuLink').setAttribute('href', 'https://www.senac.br/');

// d)
document.getElementById('meuParagrafo').classList.add('destaque');

// e)
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Esse é outro paragrafo';
document.body.appendChild(novoParagrafo);