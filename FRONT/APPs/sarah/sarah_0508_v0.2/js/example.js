// 배열(array)
const arrs = ['a', 'b', 'c', 'd', 'e'];
// console.log(arrs.length);

// 반복문(loop)
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arrs.forEach((arr, index) => {
//   console.log(arr, index);
// });

// arrs.map((arr, index) => {
//   console.log(arr, index);
// });

// 객체(object) - {key1: value1, key2: value2}
// const objs = {
//   a: 1,
//   b: 'a',
//   c: () => {
//     console.log('객체 함수 출력');
//   },
//   d: ['a', 'b', 'c'],
// };

// console.log(objs.d);

// objs.d.forEach((obj) => {
//   console.log(obj);
// });

// 형(type) - 원시타입(primative type), 객체타입(object type)
// 원시타입: 문자, 숫자, null, undefined, boolean(true, false)
// 객체타입: 함수, 배열, 객체 ...

const a = 'b';
const b = 2;

const c = 'a 변수에는 문자 ' + a + '가 있고, b 변수에는 숫자 ' + b + '가 있다.';

// 탬플릿 문자열
const d = `a 변수에는 문자 ${a}가 있고, b 변수에는 숫자 ${b}가 있다.`;
console.log(d);
