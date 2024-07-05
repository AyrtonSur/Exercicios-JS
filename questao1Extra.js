//Questão extra número 1 da lista de exercicios
function comparaPositivos(num){
    if (num > 0) return true
    return false
} // vê se num é positivo ou não

function quantPositivos(arrayValores){ //criei uma função para poder dar return nos casos em que a função da errado
    for (n of valores){
        if (parseFloat(n) == 0 || parseFloat(n) == null){
            alert("Foi digitado valor nulo")
            return
        } // se for nulo, programa acaba
    }

    if (valores.length != 6){ // verifica se foram digitados exatamente 6 valores
        alert("Não foi digitado 6 valores.")
        return
    } else {
        var positivos = valores.filter((n) => comparaPositivos(n)) //filtra os valores positivos
        console.log("Quantidade de positivos é: " + positivos.length) 
    }
}

var valores = prompt("Digite 6 valores(separados por espaço): ").split(" ")
// pega os valores digitados e coloca em array

quantPositivos(valores)