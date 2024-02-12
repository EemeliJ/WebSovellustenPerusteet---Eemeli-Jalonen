const input = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const list = document.getElementById('todoList');
const sortButton = document.getElementById('sort');
const todos = [];

const addRow = () => {
    const newTodo = input.value.trim();
    if (newTodo !== '') {
        todos.push(newTodo);
        renderTodos();
        input.value = '';
    }
}

const deleteRow = (todo) => {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    renderTodos();
}

const renderTodos = () => {
    list.innerHTML = '';
    todos.forEach(todo => addTableRow(todo));
}

const addTableRow = (text) => {
    const row = list.insertRow();
    const col1 = row.insertCell(0);
    const col2 = row.insertCell(1);

    col1.innerHTML = text;
    col2.innerHTML = '<button onClick="deleteRow(\'' + text + '\')">Delete</button>';
}

const sortTodos = () => {
    todos.sort();
    renderTodos();
}

addTodoButton.addEventListener('click', addRow);
sortButton.addEventListener('click', sortTodos);

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addRow();
    }
});






