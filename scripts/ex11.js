console.log('11');

function descontoVar() {

    let nome = prompt("digite seu nome: ");
    let paga = parseInt(prompt("digite o valor do salario bruto: "));
    let conta = 0;

    if (paga < 1000) {

    conta = paga * (8 / 100);

    } else if (paga >= 1001 && paga < 1500) {

    conta = paga * (8.5 / 100);

    } else if (paga => 1500) {

    conta = paga * (9 / 100);

    }

    alert("seu nome " + nome);
    alert("seu salario bruto: " + paga);
    alert("taxa de desconto do INSS é de: " + conta);
    let bagunca = paga - conta;
    alert("seu salario liquido: " + bagunca);

}