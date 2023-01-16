const dados = require("./dados.json")

// Variável para alterar o array
var um = 0;

var numeroMaior = 0;
var numeroMenor = 0;

// Número menor e maior igual a primeiro valor do array
numeroMaior = dados[um]['valor']
numeroMenor = dados[um]['valor']
var diaMenor = dados[um]
var diaMaior = dados[um]
var media = 0
var numerosMedia = 0

while (um < 30)
{
    //variável que vai ser o array sendo alterado
    var primeiro;
    primeiro = dados[um]['valor']

    if (primeiro === 0) {
        
    } else {

        //adiciona o número a média
        media = media + primeiro
        //guarda quantos numeros foram salvos
        numerosMedia++
        // Se o número maior foi menor que o número atual na variavel "primeiro"
        if (numeroMaior < primeiro)
        {
            // Numero maior igual número atual na variável "primeiro" 
            numeroMaior = primeiro;
            diaMaior = dados[um] 
        }
        // Se o número menor foi maior que o número atual na variavel "primeiro"
        if (numeroMenor >= primeiro)
        {
            // Numero menor igual número atual na variável "primeiro" 
            numeroMenor = primeiro;
            diaMenor = dados[um]
        }
    }
    um++;
}

//calcula a média
var mediaFinal = media/numerosMedia

console.log(`O dia de maior faturamento foi o dia ${diaMaior['dia']} com R$${diaMaior['valor'].toFixed(2)} de faturamento`);
console.log(`O dia de menor faturamento foi o dia ${diaMenor['dia']} com R$${diaMenor['valor'].toFixed(2)} de faturamento`);
console.log(`A média mensal foi de R$${mediaFinal.toFixed(2)}`);
