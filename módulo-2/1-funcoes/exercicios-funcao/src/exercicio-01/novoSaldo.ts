type TSaldo = number;

function calcularNovoSaldo(saldo: number, valor: number): TSaldo { 
    return saldo + valor
}

export default calcularNovoSaldo;

let saldo: TSaldo = 50;
let valor: TSaldo = 10;

console.log(calcularNovoSaldo(saldo, valor));