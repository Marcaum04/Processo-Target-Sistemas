const prompt = require('prompt-sync')();

var texto = prompt("escreva sua frase: ")
var textoSeparado = texto.split("")
var tamanhoString = textoSeparado.length
var invertidoArray = []
var invertidoTexto = ""
var i = 0;

textoSeparado.forEach(
    function () {
    invertidoArray[i] = textoSeparado[tamanhoString - 1]
    tamanhoString = tamanhoString - 1
    i++
    }
)

for (var i = 0; i < invertidoArray.length; i++) invertidoTexto += invertidoArray[i] + "";
console.log(invertidoTexto);
