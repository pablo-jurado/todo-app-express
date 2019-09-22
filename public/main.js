
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    const todoString = document.getElementById("input-txt").value;

    const promise = postData('/api/todos', {todo: todoString});

    promise.then(function(res) {
        rederTodos(res);
    });
});

function getAllTodos() {
    fetch('/api/todos')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            rederTodos(myJson);
        });
}

getAllTodos();

function rederTodos(todos) {
    let div = document.getElementById("todos");
    const todoDom = todos.map((data) => {
        return `<div> ${data.todo}</div>`
    })
    div.innerHTML = todoDom.join("");
}

function postData(url, data) {
    // Default options are marked with *
      return fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native JavaScript objects 
  }