const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

// 入力内容を取得
form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(input.value);
    add();
});

// 入力内容のリストを追加
function add(){
  let todoText = input.value;
  if (todoText.length > 0) {
     const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
  }
}