//Questão extra número 3 da lista de exercicios
var nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)); 
// "escolhendo" valores

numsOrdenados = nums.toSorted()
// criando array ordenado de valores

console.log("Valores ordenados: " + numsOrdenados + " Valores: " + nums)