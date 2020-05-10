var listElement = document.querySelector("#app ul") 
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button") 


var todos = 
[
    "Fazer Café",
    "Estudar JavaScript",
    "Acessar Comunidade da Rocketseaat"
] // o JavaScript ira colocar os "ul" no HTML

function renderTodos()
{
    listElement.innerHTML = "" // Tudo que tiver dentro da "ul" do HTML, eu vou colocar como "vazio"
    // Ou seja, vamos remover todo conteudo que estiver dentro do nosso "ListElement", e iremos imprimir o que tem dentro do Array
    
    for(todo of todos) // Tou percorrendo o Array "todos"
    {
        var todoElement = document.createElement("li") // "li" é a lista, o comando usado no HTML para criar lista
        var todoText = document.createTextNode(todo) // Que vai ficar dentro da nossa "li", posso usar a proprio "todo", pq ela contém o texto de cada "todo"
        
        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
    }
}

renderTodos()
// Nessa aula iremos criar a funcionalidade de adcionar

function addTodo()
{
    var todoText = inputElement.value // Peguei o valor do "Input", do que eu escrevi no HTML
    todos.push(todoText) // Aqui, eu adcionei o que eu escrevi no input, dentro do Array

    // Após eu adcionar um novo texto, eu vou querer que seja apagado o que está escrito no input (caixa de texto para digitar)
    inputElement.value = "" // Então eu faço o Input receber vazio

    renderTodos() // Vou chamar a função "renderTodos()", para ele renderizar, com o que adcionamos de novo.
}

// Agora é o seguinte, eu preciso chamar a função, após eu apertar no botão, como eu faço isso?

buttonElement.onclick = addTodo // pronto.. Após eu clicar, ele vai adcionnar, e depois vai chamar a funnção para "renderizar"
// Apenas no click do botão ele vai adcionar

// Após eu clicar no botão ele está retornando tudo e repetindo, para consertar isso, vamos na função "renderTodos" e colocar  um "innerHTML"