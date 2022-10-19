/// selecao de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue;


/// funcoes
const saveTodo = (text) => {
/// aqui criaremos o html via js.
const todo = document.createElement("div");
todo.classList.add("todo"); //colocando a class

const todoTitle = document.createElement("h3");
todoTitle.innerText = text;
todo.appendChild(todoTitle);

const doneBtn = document.createElement("button")
doneBtn.classList.add("finish-todo")
doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
todo.appendChild(doneBtn)

const editBtn = document.createElement("button")
editBtn.classList.add("edit-todo")
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
todo.appendChild(editBtn)

const deleteBtn = document.createElement("button");
deleteBtn.classList.add("remove-todo");
deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
todo.appendChild(deleteBtn);

todoList.appendChild(todo);

todoInput.value = "" // apra ele assim que adicionar inicar vazio o campo de text
todoInput.focus(); // so para assim que adicionar a tarefa ele continue no texto para digitar



};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {

const todos = document.querySelectorAll(".todo");

todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if(todoTitle.innerText === oldInputValue) {
        todoTitle.innerText = text;
    }
})


}

function login() {
  window.location.href = "inscricao.html";
}

/// eventos

///preventDefault para nao regarregar a pagina
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    /// para pegar o valor do input
    const inputValue = todoInput.value;

    /// para salvar a resposta
    if(inputValue) {
        saveTodo(inputValue);
    }
    
})

document.addEventListener("click", (e) => {

  const targetEl = e.target
  const parentEl = targetEl.closest("div"); // indentifica a div mais proxima
  let todoTitle;

  if(parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText; // ele seleciojnar pelo titulo
  }

  if(targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done"); // adicionando o a class done ( tem no css ) ao ser clicado
  }


  if(targetEl.classList.contains("remove-todo")) {
    parentEl.remove(); // remove
  }

  if(targetEl.classList.contains("edit-todo")) {
   toggleForms();
  
  editInput.value = todoTitle; // mudar valor do input
  oldInputValue = todoTitle;
}
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
})

editForm.addEventListener("submit", (e) => {

   e.preventDefault();

   const editInputValue = editInput.value;

   if(editInputValue) {
      updateTodo(editInputValue);
   }

   toggleForms();

})