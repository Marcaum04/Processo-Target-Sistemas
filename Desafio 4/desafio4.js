var SP = 67836.43, RJ = 36678.66, MG = 29229.88, ES = 27165.48, Outros = 19849.53
Total = SP + RJ + MG + ES + Outros

var calcularPorcentagem = function(valor) {
    var valorFinal = (valor * 100)/Total
    return valorFinal
}


console.log(`SP = ${calcularPorcentagem(SP).toFixed(2)}%`)
console.log(`RJ = ${calcularPorcentagem(RJ).toFixed(2)}%`)
console.log(`MG = ${calcularPorcentagem(MG).toFixed(2)}%`)
console.log(`ES = ${calcularPorcentagem(ES).toFixed(2)}%`)
console.log(`Outros = ${calcularPorcentagem(Outros).toFixed(2)}%`)