//Questao extra numero 6 da lista de exercicios
var property = { 
    receitas: [],
    despesas: []
} // numeros devem ser adicionados manualmente, porém a função está funcionando

function calculaSaldo(prop){
    var saldo = 0
    prop.receitas.forEach((receita) => {saldo += receita})
    prop.despesas.forEach((despesa) => {saldo -= despesa})
    return saldo
} // calcula o saldo normalmente

saldoDaFamilia = calculaSaldo(property)
if (saldoDaFamilia > 0) {
    console.log("Saldo positivo, saldo = " + saldoDaFamilia)
} else if ( saldoDaFamilia < 0) {
    console.log("Saldo negativo, saldo = " + saldoDaFamilia)
} else {
    console.log("Saldo nulo, saldo = " + saldoDaFamilia)
} // verifica se saldo é positivo ou negativo