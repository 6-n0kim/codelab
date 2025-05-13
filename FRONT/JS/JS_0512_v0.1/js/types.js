// 프로그래밍 언어에서 다루는 모든 데이터는 각자의 형태를 지닌다. 이를 타입이라 한다.
// 원시 타입 : string, number, boolean, undefined, null
// 객체 타입 : function, array, object

// type 체크는 typeof() 메서드를 사용한다.
// console.log(typeof 'a');

// 문자열(string)
// "" 안에 작성되는 원시타입
const str = 'hello';
// console.log(str, typeof str);

// 홀따옴표 내부는 겹따옴표, 겹따옴표 내부는 홀따옴표 사용
// console.log("She's gone");

// 탬플릿 리터럴 - 문자열
// - 변수와 문자열을 함께 사용할 때 es6 버전 부터는 + 기호 없이 편리하게 조합할 수 있는 방식을 제공한다. 이를 템플릿 리터릴 이라 한다
// - 전체 문자열을 백틱으로 감싸고, 변수 부분을 ${} 안에 작성한다

const num = 2;
// console.log('작성한 변수는 ' + num + ' 입니다.');
// console.log(`작성한 변수는 ${num} 입니다.`);

const cls = 'top';
const headerContent = 'sub header';

// const header = '<header class="' + cls + '">' + headerContent + '</header>';

const header = `<header class="${cls}">${headerContent}</header>`;

// console.log(header);

// 숫자(number)
// 숫자는 따옴표 없이 사용하며, 말 그대로 숫자를 사용한다. 숫자 형태이므로 연산이 가능하다.
// 자바스크립트는 엔진이 타입을 추론하므로 별도의 선언문 없이 숫자, 문자, 객체 등의 타입을 지정할 수 있다.
// 따라서 소수를 작성해도 숫자 타입으로 지정된다.
const number = 1.24;
// console.log(typeof number);

const strnum = '3';
const strnum1 = Number(strnum); // 명시적 타입변환(형변환)
const strnum2 = 5;

const sum = strnum + strnum2;
const minus = strnum - strnum2;
// console.log(minus, typeof minus); // 암묵적 타입변환(형변환)
// console.log(strnum1, typeof strnum1);

// 4. NaN(Not a Number): 연산 불가능한 데이터 - number
const nannum = 'a' * 3;
// console.log(nannum, typeof nannum);

// Boolean
// 컴퓨터는 모든 데이터를 0과 1로 읽는다. 이를 이용하여 true와 false를 나타내는 방식을 표현하는데 이를 boolean이라 한다.
// George Boole이라는 수학자가 고안해서 붙여진 이름이다.
// 직접적으로 true와 false를 사용하는 경우도 있지만 대부분 한 로직이 여러가지 경우의 수에 따라 흐름을 달리할 때 사용한다.(로그인 했을때와 아닐때 등)

const age = 25;

const isAge = age ? 'true' : 'false';
// console.log(isAge);

// const promAge = prompt('나이를 입력해 주세요');

// if (promAge >= 18) {
//   console.log('술을 먹을 수 있어요..');
// } else {
//   console.log('빈대떡이나 드세요.');
// }

// undefined
// 원시타입이고, 변수를 선언한 후에 값을 할당하지 않을 때 자동으로 할당되는 값
let noname;
console.log(noname);

noname = 1;
console.log(noname);

// let noname = 1

// null
// 값을 의도적으로 비울때 null 추가
let nullvar = null;
console.log(nullvar);
nullvar = 3;
console.log(nullvar);
