// 함수는 특정한 기능을 수행하도록 정의된 코드의 집합이다.

// 1. 함수의 기본 형태(기명함수, 선언함수)
// signiture : function name(parameter){logics};
// - 함수는 먼저 특정 기능 알고리즘을 정의하고(정의부), 정의된 함수를 호출(호출부)하는 형태로 사용한다.
// - 함수의 형태 : https://velog.io/@inyong_pang/JavaScript-Function%ED%95%A8%EC%88%98-7wk400kzxh
// - 함수는 기본 형태, 함수 내부로 전달되는 파라미터, 내부에 정의된 값을 밖으로 내보내는 return으로 구성된다.

// 정의부(defined) - 되어 있지 않으면 ...is not defined 오류
function sumFunc(a, b) {
  return a + b;
}

// 호출부
sumFunc(1, 2);

// 1. 숫자를 더하는 공통 기능
// 2. 총 더해지는 숫자를 지정하는 커스텀 기능
let sum100 = 0;
for (let i = 1; i <= 100; i++) {
  sum100 += i;
}

function sumNumber(num) {
  let sum100 = 0;
  for (let i = 1; i <= num; i++) {
    sum100 += i;
  }
  return sum100;
}

console.log(sumNumber(50));

const zodiac = [
  '원숭이',
  '닭',
  '개',
  '돼지',
  '쥐',
  '소',
  '호랑이',
  '토끼',
  '용',
  '뱀',
  '말',
  '양',
];

function printZodiac(year) {}

printZodiac(2025);

console.log(zodiac[2025 % 12]);
