console.log('3');

function balançoFinanceiro() {

    let gastoAnual = 0;
    let ganhoAnual = 0;
    let ganhoMensal = 0;
    let gastoMensal = 0;

    for (let i = 1; i < 12; i++) {


        ganhoMensal = parseFloat(prompt("Ganho do mês " + i + ":"));
        gastoMensal = parseFloat(prompt("Gastos do mês " + i + ":"));

        ganhoAnual += ganhoMensal;
        gastoAnual += gastoMensal;

    }

    alert("O seu ganho anual foi de " + ganhoAnual + "!");
    alert("O seu gasto anual foi de " + gastoAnual + "!");

    let lucro = ganhoAnual - gastoAnual;

    if (lucro <= 0) {

        alert("Você está no prejuízo");

    } else {

        alert("Você está no Lucro");

    }

}