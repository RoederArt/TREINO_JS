console.log('1');


function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {

        let numero = parseFloat(prompt("Digite um número para somar: "));
        if (!isNaN(numero)) {
            soma += numero;
            console.log(soma);
        } else {
            alert("por favor, digite um número valido xapa!");
        }
        continuar = confirm("Deseja adicionar mais algum numero?");
    }
    alert("A soma dos números é: " + soma);
}