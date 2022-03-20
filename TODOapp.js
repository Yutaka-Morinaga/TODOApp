const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach(todo => {
    add(todo);
  })
}

// 入力内容を取得
form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(input.value);
    add();
});

// 入力内容のリストを追加
function add(todo){
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  if (todoText) { //空文字ではリストが作成されない
     const li = document.createElement("li");

    li.innerText = todoText;
    li.classList.add('list-group-item');

    if (todo && todo.completed) {
      li.classList.add("text-decoration-line-through");
    }

    li.addEventListener("contextmenu", function(event) { //右クリックでリストを削除
      event.preventDefault();
      li.remove();
      saveDate();
    });

    li.addEventListener("click", function() { //クリックで打消し線
      li.classList.toggle("text-decoration-line-through");
      saveDate();
    });

    ul.appendChild(li);
    input.value = "";
    saveDate();
  }
}

function saveDate() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  
  lists.forEach((li) => {
    todos.push({
      text: li.innerText,
      completed: li.classList.contains("text-decoration-line-through"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  
}