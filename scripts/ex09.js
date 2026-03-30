console.log('9');

function ordenacao() {

    let valor = [];

    for (let i = 0; i < 2; i++) {

    valor[i] = parseInt(prompt("digite o numero " + i + " de 2: "));

    }

    valor.sort ((a, b) => b-a); 

    alert(valor);

}