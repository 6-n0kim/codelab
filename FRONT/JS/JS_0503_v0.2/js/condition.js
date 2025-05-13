// 조건문(conditional statement)은 프로그램의 흐름을 변경할 때 사용된다. 특정 조건에 따라 흐름이 분기되는데, 해당 조건은 boolean 타입으로 지정된다.

// if (조건) {
//   true 일 경우의 반환값
// } else {
//   false 일 경우의 반환값
// }

const date = new Date();
const hour = date.getHours();
console.log(hour);

if (hour > 12) {
  console.log('오후 입니다.');
  // 조건 중첩
  if (hour > 19) {
    console.log('어둡습니다.');
  } else {
    console.log('아직 밝습니다.');
  }
} else {
  console.log('오전 입니다.');
}

// if else if
if (hour < 12) {
  console.log('오전 입니다.');
} else if (hour < 18) {
  console.log('오후 입니다.');
} else {
  console.log('밤 입니다.');
}

// switch 조건문
// switch 조건문은 조건식이 true일 경우 조건식 각각의 상황을 분개한다.
// signiture : switch(condition){case : true logic}
// 특정 조건이 true일 때 그 이하는 실행을 멈춰야 한다. 이때 break를 만들어준다.
const swinum = 1;

switch (swinum) {
  case 1:
    console.log('num 1');
    break;
  case 2:
    console.log('num 2');
    break;
  case 3:
    console.log('num 3');
    break;
  default:
    console.log('over 3');
}

console.log(2025 % 12); // 9 -> 0 - 원숭이

const year = 2000;

let result = '';

switch (year % 12) {
  case 0:
    result = '원숭이';
    break;
  case 1:
    result = '닭';
    break;
  case 2:
    result = '개';
    break;
  case 3:
    result = '돼지';
    break;
  case 4:
    result = '쥐';
    break;
  case 5:
    result = '소';
    break;
  case 6:
    result = '호랑이';
    break;
  case 7:
    result = '토끼';
    break;
  case 8:
    result = '용';
    break;
  case 9:
    result = '뱀';
    break;
  case 10:
    result = '말';
    break;
  case 11:
    result = '양';
    break;
}

console.log(`당신은 ${result}띠 입니다.`);
