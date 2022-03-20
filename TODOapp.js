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
  const li = document.createElement("list");
  li.innerText = input.value;
  li.classList.add("list-group-item");
  ul.appendChild(li);
  input.value = "";
}