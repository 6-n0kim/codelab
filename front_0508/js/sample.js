// 전역변수 설정
const todoInput = document.getElementById('todoInput');
const readonlyInput = document.getElementById('readonlyInput');
const list = document.querySelector('#list');
let idx = 0;
function insertTodo() {
    let value = todoInput.value.trim();
    if (value != "") {
        list.insertAdjacentHTML("beforeend",
            `<li id="idx${idx}"> <input type="text" class="todoItem" value="${value}">
            <button id="edit" onclick="editTodo(${idx},this) ">수정</button>
            <button id="delete" onclick="deleteTodo(${idx})">삭제</button> </li>`);

        idx++;
    }
    todoInput.value = "";
}

function deleteTodo(n) {
    let currentList = document.getElementById('idx' + n);
    currentList.remove();
    idx--;
}

function editTodo(n , btn) {
    let currentList = document.getElementById('idx' + n);
    let input = currentList.querySelector('.todoItem');
    if (input.readOnly) {
        input.readOnly = false;
        input.focus();
        btn.textContent = "저장";
    } else {
        input.readOnly = true;
        btn.textContent = "수정";
    }
}