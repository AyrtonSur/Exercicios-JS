//Questão extra número 3 da lista de exercicios
var nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)); 
// "escolhendo" valores

function comparaFunc(n1, n2){
    if (n1 < n2){
        return -1
    } else if (n1 > n2){
        return 1
    } else {
        return 0
    }
}

numsOrdenados = nums.toSorted(comparaFunc)
// criando array ordenado de valores

console.log("Valores ordenados: " + numsOrdenados + " Valores: " + nums)