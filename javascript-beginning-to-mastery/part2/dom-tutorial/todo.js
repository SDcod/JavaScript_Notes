const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputValue = todoInput.value;
  const newLi = document.createElement("li");
  const liContent = `
        <span class="text">${inputValue}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = liContent;
  todoList.append(newLi);

  todoInput.value = "";
});

//use of event delegation
todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("done")) {
    const todoTextSpan = e.target.parentNode.previousElementSibling;
    todoTextSpan.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    const todoItem = e.target.parentNode.parentNode;
    todoList.remove(todoItem);
  }
});
