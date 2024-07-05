//Questao 5 da lista de exercicios
var nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)); 
//cria array de tamanho 5 com números aleatórios de 0 a 99

for (num of nums){
    if (num%3==0 && num%5==0){
        console.log("fizzbuzz")
    } else if (num%3){
        console.log("fizz")
    } else if (num%5) {
        console.log("buzz")
    }
} // só faz uma verificação simples e imprime o que precisa dependendo do resultado