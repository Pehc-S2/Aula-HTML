const div = document.getElementById("agenda");



function calcular() {
    let valor = document.getElementById("material").value;
    let quantidade = document.getElementById("janelas").value;

    if (!quantidade || quantidade <= 0) {
        alert("Informe a quantidade de janelas!");
        return;
    }

    let total = valor * quantidade;

    div.style.display = "block";

    document.getElementById("resultado").innerText = "Valor total: R$ " + total.toFixed(2);
}


function agendar(){

let dataHora = document.getElementById("agendamentoInput").value;
if (!dataHora) {
        alert("Informe uma data adequada!");
        return;
    } else{
        alert("Pedido Concluido, Cheque seu Email para mais detalhes!");
    }

}