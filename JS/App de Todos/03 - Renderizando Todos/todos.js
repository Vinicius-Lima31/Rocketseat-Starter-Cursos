var listElement = document.querySelector("#app ul") // Peguei a Lista, o que tem na lista
var inputElement = document.querySelector("#app input") // Peguei o que foi digitado pelo Usuario
var buttonElement = document.querySelector("#app button") // Peguei o Botão criado em HTML

// Seria melhor eu ter os "todos" (lista) dentro do JavaScript, para ficar mais facil de manipula-las, seria bem mais pratico do que manter elas no HTML
var todos = // Eu crio um Array, que fica bem mais prático para guardar aquela lista
[
    "Fazer Café",
    "Estudar JavaScript",
    "Acessar Comunidade da Rocketseaat"
]// o JavaScript ira colocar os "ul" no HTML

function renderTodos()
{
    for(todo of todos) // Tou percorrendo o Array "todos"
    {
        var todoElement = document.createElement("li")
        var todoText = document.createTextNode(todo) // Que vai ficar dentro da nossa "li", posso usar a proprio "todo", pq ela contém o texto de cada "todo"
        
        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
    }
}

renderTodos()
// pronto, ja está funcionando no HTML, só falta criar o botão de excluir e também a funcionalidade de adcionar
