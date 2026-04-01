console.log('10');

function pagamentoSimples() {
   
   let nome = prompt("digite seu nome: ");

   let paga = parseInt(prompt("digite o valor do salario bruto: "));

   let conta = paga * (8/100);

   alert("seu nome "+nome);

   alert("seu salario bruto: " + paga);

    alert("taxa de desconto do INSS é de: " + conta);

    let bagunca = paga - conta;

    alert("seu salario liquido: " + bagunca);

}