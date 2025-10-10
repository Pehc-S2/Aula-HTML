function calcular() {
    let valor = document.getElementById("material").value;
    let quantidade = document.getElementById("janelas").value;

    if (!quantidade || quantidade <= 0) {
        alert("Informe a quantidade de janelas!");
        return;
    }

    let total = valor * quantidade;

    document.getElementById("resultado").innerText = "Valor total: R$ " + total.toFixed(2);
}