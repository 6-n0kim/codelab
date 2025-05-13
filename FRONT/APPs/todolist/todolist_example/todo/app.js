// JSON.parse
// JSON.stringify
// const json = '{"result":true, "count":42}';
// console.log(JSON.parse(json));
// localStorage 가져오기: localStorage.getItem('key');
// localStorage 저장하기: localStorage.setItem('key', 'value');
// document.createElement('tag name'): 태그 생성

// 기능
// 1. input 창에 할일 입력 후 추가 버튼 클릭 또는 엔터
// 2. 할일 목록 로컬 스토리지에 저장
// 3. 로컬 스토리지 데이터 화면에 렌더링
// 4. 추가된 할일 데이터를 바탕으로 DOM 요소 추가
// 5. 삭제 버튼 클릭 시 삭제 기능 실행
// 6. 완료 버튼 클릭 시 데이터 DOM 이동 기능 실행

// local storage에 저장된 데이터 가져오기
const data = localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList'))
  : {
      todo: [],
      completed: [],
    };

console.log(data);

// DOM 변수 저장
const removeIcon = `<i class="ri-delete-bin-line"></i>`;
const completeIcon = `<i class="ri-checkbox-line"></i>`;

// 1. input 창에 할일 입력 후 추가 버튼 클릭 또는 엔터 -----
const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function () {
  const value = document.querySelector('#item').value;

  if (value) {
    addItem(value);
  }
});

document.querySelector('#item').addEventListener('keypress', function (e) {
  const value = this.value;
  if (e.code === 'Enter' && value) {
    addItem(value);
  }
});

// -------------------------------------------------------

function addItem(value) {
  document.querySelector('#item').value = ''; // input 창 초기화
  data.todo.push(value); // data.todo 배열에 value 추가
  dataObjectUpdated(); // local storage에 data 업데이트
  addItemToDOM(value); // DOM에 value 추가
}

// 5. 삭제 버튼 클릭 시 삭제 기능 실행 -----
// 삭제 버튼 클릭 시 실행 함수 정의
function removeItem() {
  const item = this.parentNode.parentNode; // li 태그
  const parent = item.parentNode; // ul 태그
  const selectedId = parent.id; // ul 태그의 id 값
  const text = item.innerText; // li 태그의 text 값

  if (selectedId === 'todo') {
    data.todo.splice(data.todo.indexOf(text), 1);
  } else {
    data.completed.splice(data.completed.indexOf(text), 1);
  }

  dataObjectUpdated(); // local storage에 data 업데이트

  parent.removeChild(item);
}

// -------------------------------------------------------

// 6. 완료 버튼 클릭 시 데이터 DOM 이동 기능 실행 -----
// 완료 버튼 클릭 시 실행 함수 정의
function completeItem() {
  const item = this.parentNode.parentNode; // li 태그
  const parent = item.parentNode; // ul 태그
  const selectedId = parent.id; // ul 태그의 id 값
  const text = item.innerText; // li 태그의 text 값

  if (selectedId === 'todo') {
    data.todo.splice(data.todo.indexOf(text), 1);
    data.completed.push(text);
  } else {
    data.completed.splice(data.completed.indexOf(text), 1);
    data.todo.push(text);
  }

  dataObjectUpdated(); // local storage에 data 업데이트

  const target =
    selectedId === 'todo'
      ? document.querySelector('#completed')
      : document.querySelector('#todo');

  parent.removeChild(item); // 완료를 클릭하면 해당 li 태그 삭제
  target.insertBefore(item, target.childNodes[0]); // 완료를 클릭하면 해당 li 태그가 다른 ul의 자식요소로 이동
}

// -------------------------------------------------------

// 2. 할일 목록 로컬 스토리지에 저장 -----
// local storage에 data 업데이트
function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}

// --------------------------------------

// 4. 추가된 할일 데이터를 바탕으로 DOM 요소 추가 -----
// DOM에 value 추가
function addItemToDOM(value, completed) {
  const list = completed
    ? document.querySelector('#completed')
    : document.querySelector('#todo');

  const item = document.createElement('li'); // li 태그 생성
  item.innerText = value; // li 태그에 value 추가

  const buttons = document.createElement('div'); // div 태그 생성
  buttons.classList.add('buttons'); // 클래스 추가

  // 삭제 버튼 추가
  const remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;

  // 삭제 버튼 클릭 시 함수 연결
  remove.addEventListener('click', removeItem);

  // 완료 버튼 추가
  const complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeIcon;

  // 완료 버튼 클릭 시 함수 연결
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove); // div 태그에 삭제 버튼 추가
  buttons.appendChild(complete); // div 태그에 완료 버튼 추가
  item.appendChild(buttons); // li 태그에 div 태그 추가

  list.insertBefore(item, list.childNodes[0]);
}

// -------------------------------------------------------

// 3. 로컬 스토리지 데이터 화면에 렌더링 -----
// DOM 요소 화면에 추가
function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return; // 값이 비어 있다면 함수 종료

  for (let i = 0; i < data.todo.length; i++) {
    const value = data.todo[i];
    addItemToDOM(value);
  }

  for (let j = 0; j < data.completed.length; j++) {
    const value = data.completed[j];
    addItemToDOM(value, true);
  }
}

renderTodoList();

// ------------------------------
