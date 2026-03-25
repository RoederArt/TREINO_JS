console.log('4');

function ordenaValor() {

    let valor = [];

    for (let i = 0; i < 4; i++) {

    valor[i] = parseInt(prompt("digite o numero " + i + " de 4:"));

    }

valor.sort ((a, b) => b-a); 

alert(valor);

}