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
    todoText = todo;
  }
  if (todoText.length > 0) { //空文字ではリストが作成されない
     const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
    saveDate();
  }
}

function saveDate(){
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach(list => {
    todos.push(list.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}