var listElement = document.querySelector("#app ul") 
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button") 


var todos = 
[
    "Fazer Café",
    "Estudar JavaScript",
    "Acessar Comunidade da Rocketseat"
] // o JavaScript ira colocar os "ul" no HTML

function renderTodos()
{
    listElement.innerHTML = "" // Tudo que tiver dentro da "ul" do HTML, eu vou colocar como "vazio"
    // Ou seja, vamos remover todo conteudo que estiver dentro do nosso "ListElement", e iremos imprimir o que tem dentro do Array

    for(t of todos) // Tou percorrendo o Array "todos"
    {
        var todoElement = document.createElement("li") // "li" é a lista, o comando usado no HTML para criar lista
        var todoText = document.createTextNode(t) // Que vai ficar dentro da nossa "li", posso usar a proprio "todo", pq ela contém o texto de cada "todo"
        
        // Eu tenho que criar aqui o link de excluir, porque eu quero que tenha para cada coisa que eu adcionar
        var linkElement = document.createElement('a') // Criei um link
        var linkText = document.createTextNode("Excluir") // Aqui será o Texto que ficara no link

        linkElement.setAttribute("href", "#") // O nosso Link é obrigatorio ter um "href"

        // indexOf, que passando um texto, ele retorna em qual posição do Array ele estar
        var pos = todos.indexOf(t) // esse "t" é o indice do "for", vai me retornar a posição dele
        linkElement.setAttribute("onclick", "deleteTodo("+ pos + ")") // passo onclick na atribuição, e também passo o metodo de "excluir", tenho que passar como texto, e uso concatenação também
        // Recebo a posição e o click, usei concatenção para eu poder fazer a variavel em si

        linkElement.appendChild(linkText) // Aqui eu adciono o texto no link.

        todoElement.appendChild(todoText) // Adciono o Texto dentro do li
        todoElement.appendChild(linkElement) // Adciono o link 
        listElement.appendChild(todoElement) // Adciono tudo na lista do HTML
    }
}

renderTodos()
// Nessa aula iremos criar a funcionalidade de Excluir

function addTodo()
{
    var todoText = inputElement.value 
    todos.push(todoText) 

    // Após eu adcionar um novo texto, eu vou querer que seja apagado o que está escrito no input (caixa de texto para digitar)
    inputElement.value = "" // Então eu faço o Input receber vazio

    renderTodos() // Vou chamar a função "renderTodos()", para ele renderizar, com o que adcionamos de novo.
}


buttonElement.onclick = addTodo 

// Teremos que criar uma função para excluir
function deleteTodo(pos) // esse "pos" é o indice do Array
{
    // na posição "pos" remove 1 item
    todos.splice(pos, 1) // O metodo "splice" remove uma quantidade de itens do Array, baseado na posição que a gente passar
    renderTodos() // E chamo para atualizar tudo

    // Agora temos que descobrir qual "todo" foi clicado
}
