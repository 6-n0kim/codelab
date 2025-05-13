// 산술연산자(+, -, *, /)
// 숫자형 문자의 경우 암묵적 타입변환
// console.log('java' + 'script');

const a = '7';
const b = '5';
// console.log(a + b, typeof (a + b));
// console.log(a - b, typeof (a - b));
// console.log(a * b, typeof (a * b));
// console.log(a / b, typeof String(a / b));

// % 연산자(나머지 연산자)
// 두 수를 나눈 나머지 값을 반환
// 두 숫자 중 앞을 숫자가 작으면 앞의 숫자와 뒤의 숫자가 같아지기 이전까지 앞의 숫자를 반환한다.
// 두 숫자가 같아지면 나눈 값이 0이므로 0을 반환한다.
console.log(1 % 5);

const num = 21;
if (num % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}

console.log('---------------------');

// 비교연산자
// boolean 타입 반환: >, <, <=, >=, ==, ===
// console.log('2' == 2); // 값이 같다
// console.log('2' === 2); // 값이 같고, 타입이 다르다
// console.log(2 === 2);

// 부정연산자: 현재 boolean 타입의 반대를 반환: !
console.log(!true);

const email = '한창호';
const password = '1234';

// if (!email) {
//   alert('없는 이름 입니다.');
// } else {
//   if (!password) {
//     alert('비밀번호가 없습니다.');
//   } else {
//     alert('메인창으로 이동합니다.');
//   }
// }

// 논리 연산자
// && : 합성곱 - 좌우가 모두 true일 때 true
// || : 합성합 - 좌우 중 하나만 true이면 true
console.log('-----------------');
console.log(2 > 1 && 3 > 1);
console.log(2 > 1 || 3 < 1);

// 복합 대입 연산자
// +=, -=, *=, /=, %=

let num1 = 10;
num1++; // num1 += 1 -> num1 = num1 + 1
num1++; // 단위를 1씩 변경한다
num1 += 3; // 단위를 지정할 수 있다.

console.log(num1);

let mnum = 10;
mnum = mnum - 1;
console.log(mnum);
mnum -= 1;
console.log(mnum);
mnum--;
console.log(mnum);

for (let i = 0; i < 10; i++) {}
