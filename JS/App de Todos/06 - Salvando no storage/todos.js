// Nessa aula iremos usar o "storage" que é como se fosse um banco de Dados, mesmo eu atualizando a pagina, eu não vou perder os dados que adcionei ou removi

var listElement = document.querySelector("#app ul") 
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button") 

// Aqui eu passo o que tem dentro do Storage, porem tenho que converter para array denovo, usando JSON
var todos = JSON.parse(localStorage.getItem("list_todos")) || [] // Se não tiver nada dentro do Storage ele vai bugar, porque ele não vai saber oq vai retornar, então eu boto um "ou" para ele retornar um Array vazio

function renderTodos()
{
    listElement.innerHTML = "" 

    for(t of todos) // Tou percorrendo o Array "todos"
    {
        var todoElement = document.createElement("li") 
        var todoText = document.createTextNode(t) 
        

        var linkElement = document.createElement('a') // Criei um link
        var linkText = document.createTextNode("Excluir") 

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


function addTodo()
{
    var todoText = inputElement.value 
    todos.push(todoText) 

    // Após eu adcionar um novo texto, eu vou querer que seja apagado o que está escrito no input (caixa de texto para digitar)
    inputElement.value = "" // Então eu faço o Input receber vazio

    renderTodos() 

    saveStorage() // Adcionei para salvar cada coisa que for adcionado
}


buttonElement.onclick = addTodo 

// Teremos que criar uma função para excluir
function deleteTodo(pos) // esse "pos" é o indice do Array
{
    // na posição "pos" remove 1 item
    todos.splice(pos, 1) // O metodo "splice" remove uma quantidade de itens do Array, baseado na posição que a gente passar
    renderTodos() // E chamo para atualizar tudo

    saveStorage() // Adcionei para salvar cada coisa que foi removida
}

function saveStorage() // Ela vai pegar nossa lista de "todo" e adcionar no "storage"
{
    // o Storage eu posso acessar através da variavel global chamada localStorage
    localStorage.setItem("list_todos", JSON.stringify(todos)) // "setItem" que vai setar valor no "Storage" e também passamos valor

    // Porém o nosso "localStorage" não tem habilidade para guardar vetores, objetos, ele é simplesmente uma chave e valor que guarda de forma string
    // A gente tera que usar uma Estrtura para poder Acessar, é o JSON, então a gentte volta na linha de cima e passa um JSON, e não um Array

    // Agora podemos Adcionar essa função dentro das funções "adcionar" e "remover"
    
}// Esses valores que está gravado no Storage, porém agora eu tenho que pegar-los


// Sabendo que esses itens estão gravados no Storage.
// Eu quero que cada vez que eu atualize a página, fiquem oq foi adcionado ou removido (salvo)
// **ENTÃO EU VOU LA NO ARRAY (linha8) E MODIFICO, COLOCO: localStorage.getItem("list_todos") para acessar o Storage que foi criado na linha75