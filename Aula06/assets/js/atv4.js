/*

*/

const btn = document.querySelector("#btnCalcular");
const tabela = document.querySelector("#tabela tbody");

btn.addEventListener('click', () => {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    if (!num1 || !num2 || num2 === 0) {
        alert("Valores invalidos");
        return;
    }

    let soma = num1 + num2;
    let multiplica = num1 * num2;
    let divide = num1 / num2;
    let resto = num1 % num2;

    tabela.innerHTML = "";
    // Cria uma nova linha
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>Soma</td>
        <td>${soma}</td>
    `;
    tabela.appendChild(novaLinha);

    const linhaMult = document.createElement('tr');
    linhaMult.innerHTML = `
        <td>Multiplicação</td>
        <td>${multiplica}</td>
    `;
    tabela.appendChild(linhaMult);

    const linhaDivi = document.createElement('tr');
    linhaDivi.innerHTML = `
        <td>Divisão</td>
        <td>${divide}</td>
    `;
    tabela.appendChild(linhaDivi);

    const linhaResto = document.createElement('tr');
    linhaResto.innerHTML = `
        <td>Resto Divisão</td>
        <td>${resto}</td>
    `;
    tabela.appendChild(linhaResto);

})
