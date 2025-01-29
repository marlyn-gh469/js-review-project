// Todo CRUD management 

// Array to store todos
let todos = [];

// DOM Elements 
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to render todos
function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
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
} // ✅ Correctly closed renderTodos()

// Function to add a new todo
function addTodo(event) {
    event.preventDefault(); // Prevent form submission 
    const newTodo = todoInput.value.trim(); // ✅ Fixed `.ValueMax`
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ''; // Clear the input 
        renderTodos();
    }
}

// Function to edit a todo
function editTodo(index) {
    const updatedTodo = prompt('Edit your todo:', todos[index]); // ✅ Removed `{0`
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) { // ✅ Removed extra semicolon
        todos.splice(index, 1);
        renderTodos();
    }
}

// Event Listener for form submission
todoForm.addEventListener('submit', addTodo);

// Initial render
renderTodos();
