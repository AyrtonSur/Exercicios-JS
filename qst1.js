//Questao 1 da lista de exercicios
// Implementação geral (não somente para matrizes 2x2)
var tamLinha1 = parseInt(prompt("Digite a dimensão linha da matriz1: "))
var tamColuna1 = parseInt(prompt("Digite a dimensão coluna da matriz1: "))
// pede o tamanho da linha e da coluna

var matriz1 = []
for (var l = 0; l < tamLinha1; l++){
    var linha = prompt("Digite a linha " + (l+1) +"(inteira e separando por virgulas somente)").split(",")
    matriz1.push(linha)
} // pede linha por linha, para criar a matriz

var tamLinha2 = parseInt(prompt("Digite a dimensão linha da matriz2: "))
var tamColuna2 = parseInt(prompt("Digite a dimensão coluna da matriz2: "))
// pede o tamanho da linha e da coluna

var matriz2 = []
for (var l = 0; l < tamLinha2; l++){
    linha = prompt("Digite a linha " + (l+1) +"(inteira e separando por virgulas somente)").split(",")
    matriz2.push(linha)
} // pede linha por linha, para criar a matriz

if (tamColuna1 == tamLinha2){ // verifica se coluna da matriz1 e linha da matriz2 tem mesmo tamanho
    var matriz = []
    var num
    for (var lc = 0; lc < tamLinha1; lc++){ //percorre linha da matriz1
        linha = []
        for (var cl = 0; cl < tamColuna2; cl++){ //percorre coluna da matriz2
            num = 0
            for(var count = 0; count < tamColuna1; count++){ //percorre coluna da matriz1 e linha da matriz2
                num += parseFloat(matriz1[lc][count]) * parseFloat(matriz2[count][cl]) // para garantir que não vai dar erro, resolvi fazer uma tipagem
            }
            linha.push(num)
        }
        matriz.push(linha)
    }
    console.log(matriz)

} else {// se coluna da matriz1 e linha da matriz2 tiverem tamanho diferentes não podemos realizar operação, por isso o aviso
    alert("Não é possível fazer a multiplicação de matrizes.")
}
