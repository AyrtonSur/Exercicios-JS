//Questao 4 da lista de exercicios
// q4.1
gods.forEach((god) => (console.log(god.name + " " + god.features.length)))
//pega cada um dos personagens e imprime o nome e o tamanho das features

// q4.2
//função para verificar se o personagem é Mid ou não
function verifyRole(roles){
    for(role of roles){
        if(role == "Mid") return true
    }
    return false
}

console.log(gods.filter((god) => verifyRole(god.roles)))
// verifica para cada personagem, se ele tem ou não a role "Mid", filtrando os personagens que tem e colocando em um novo array, para então imprimir o array
// obs: no exemplo mostrado a ordem dos Deuses foi alterada, porém como não foi pedido para alterar a ordem deles, deixei da forma que estava
// q4.3

function comparePanth(god1, god2){ 
    if (god1.pantheon > god2.pantheon){
        return 1
    } else if (god1.pantheon < god2.pantheon){
        return -1
    } else {
        if (god1.name > god2.name){
            return 1
        } else if (god1.name < god2.name){
            return -1
        } else {
            return 0
        }
    }
} // função funciona de forma que, se os personagens tiverem o mesmo pantheão, usa name para comparar e coloca em ordem alfabética

console.log(gods.toSorted(comparePanth)) //usei toSorted para criar um cópia da lista e não ordena-la diretamente

// q4.4
// usa o map para retornar nome e classe do personagem, para cada um dos personagens
console.log(gods.map((god) => {return god.name + "(" + god.class + ")"}))
