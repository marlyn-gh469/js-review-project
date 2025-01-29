// Todo crud management 

//array to store todos

let todos = [];

//DOM Elements 
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//functions to render todos
function renderTodos() {
    todoList.innerHTML = ''; // clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;

        todoList.appendChild(li);
    });
}
// function to edit a to do 

function addTodo(event) {
    event.preventDefault(); // prevent from submission 
    const newTodo = todoInput.ariaValueMax.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ''; // clear the input 
        renderTodos();

    }
}

// function to edit to do 
function editTodo(index) {
    const updateT
}
