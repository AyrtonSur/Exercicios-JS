//Questão extra número 4 da lista de exercicios
var nota = parseInt(prompt("Digite nota de 1 a 100 (nao coloque ponto flutuante): "))

function transformaNota(nota){
    if (nota > 90 && nota <= 100){
        return "A"
    } else if(nota <= 90 && nota >= 80){
        return "B"
    } else if(nota < 80 && nota >= 70){
        return "C"
    } else if(nota < 70 && nota >= 60){
        return "D"
    } else if(nota < 60 && nota >= 0){
        return "E"
    }
}//função irá transformar a nota dada

console.log(transformaNota(nota))