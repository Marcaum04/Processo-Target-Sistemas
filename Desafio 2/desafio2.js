const prompt = require('prompt-sync')();
var number = prompt("Digite o número deseja inserir: ");

//verifica se o número faz parte da sequência de fibonnaci por essa formula
const isFibonacci = function (n) {
    return isSquare(5*n*n + 4) || isSquare(5*n*n - 4)
}

//verifica se o número tem raiz quadrada perfeita
const isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
};

if(isFibonacci(number)){
    console.log(`Sim, ${number} faz parte da sequência fibonnaci.`)
}else(
    console.log(`Não, ${number} não faz parte da sequência fibonnaci.`)
)
