//Questao extra numero 5 da lista de exercicios
const booksByCategory = [ {
    category: "Riqueza",
        books: [ {
            title: "Os segredos da mente milionária",
            author: "T. Harv Eker",
        } , {
            title: "O homem mais rico da Babilônia",
            author: "George S. Clason",
        } , {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter",
        } ],
    }, {
    category: "Inteligência Emocional",
        books: [ {
            title: "Você é Insubstituível",
            author: "Augusto Cury",
        } , {
            title: "Ansiedade – Como enfrentar o mal do século",
            author: "Augusto Cury",
        } , {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Stephen R. Covey"
        }]
    }
]

console.log("Numero de categorias: " + booksByCategory.length)
//imprime número de categorias

for (category of booksByCategory){
    console.log("Numero de livros na categoria "+ category.category + ": "  + category.books.length)
} // imprime número de livros, para cada categoria

for (category of booksByCategory){
    var count = 0
    for (book of category.books){
        var autores = book.author.split(" e " || ",")
        count += autores.length
    }
    console.log("Numero de autores na categoria " + category.category + " é:" + count)
} // imprime o número de autores em cada categoria de livros

for (category of booksByCategory){
    for (book of category.books){
        var bool = false
        var autores = book.author.split(" e " || ",")
        for (author of autores){ // verifica se autor é Augusto
            if (author == "Augusto Cury") bool = true
        }
        if (bool == true) console.log("Livros escritos por Augusto Cury: " + book.title)
    }
} // imprime os livros do autor Augusto

function authorBooks(author, categoryAndBooks){
    listaDeLivros = []
    for (category of categoryAndBooks){
        for (book of category.books){
            var bool = false
            var autores = book.author.split(" e " || ",")
            for (autor of autores){ // verifica se autor é Augusto
                if (autor == author) bool = true
            }
            if (bool == true) listaDeLivros.push(book)
        }
    } //transformando a ação feita em cima em uma função que recebe o nome do autor e devolve os livros que ele escreveu
    return listaDeLivros
} // função retorna array de livros

