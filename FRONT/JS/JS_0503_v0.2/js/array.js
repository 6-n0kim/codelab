// 배열은 여러 개의 변수를 한 번에 선언해 사용할 수 있는 자료형이다.
// 배열에 삽입되는 데이터를 '요소'라 한다.
// 요소로 등록되는 데이터는 모든 타입이 가능하나 대부분 원시 리터럴(숫자, 문자) 타입을 사용한다.

// 배열 생성
// 1. 생성자
const newArr = new Array(1, 2, 3, 4, 5);
// console.log(newArr);

// 2. 리터럴
const arr = [1, 2, 3, 'a', () => {}, [4, 5, 6], { name: 'marshall' }, true];
// console.log(arr);

// 요소의 접근
// 배열에 등록된 요소는 각각 고유 인덱스를 가진다. 인덱스는 가장 처음 데이터가 0이되고, 이후 1, 2, 3... 순으로 지정된다.
// 배열 요소에 접근할 때는 지정된 인덱스를 [] 안에 작성한다.
// console.log(arr[3]);
// console.log(arr[5][2]);
// console.log(arr[6].name);

// 요소의 갯수
// 배열 요소의 개수는 length를 사용하여 확인할 수 있다.
// 주의할 점은 개수가 인덱스보다 1 크다는 점이다. 이는 length는 총 개수이고, 인덱스는 0부터 시작하기 때문이다.
// console.log(arr);
// console.log(arr.length);

// 요소의 추가
const strArr = ['a', 'b', 'c', 'd'];

// 1. push() 메서드 사용: 배열 뒤에 추가
strArr.push('add');
// console.log(strArr);

// strArr.unshift('front-add');
// console.log(strArr);

// 2. 인덱스 사용
// 배열 요소의 인덱스에 접근하여 배열 요소를 변경할 수 있다.
// 기존에 존재했던 데이터의 인덱스 번호보다 몇 단계 이후의 인덱스에 데이터를 추가하면 건너뛴 단계의 인덱스는 비어있게 된다.(empty)
strArr[2] = 'e'; // 2번 인덱스 자리에 추가(대체)
// console.log(strArr);

strArr[9] = 'f';
// console.log(strArr[8]);

// 배열 요소의 삭제
// 1. splice(): 삭제 시작할 인덱스와 삭제할 데이터 갯수를 지정
// array.splice(start index, length of index)
const numberArr = [0, 1, 2, 3, 4, 5, 6];
// console.log(numberArr);
// numberArr.splice(1, 2);
// console.log(numberArr);

// 2. indexOf(): 요소 인덱스를 직접 선택하여 삭제
// 삭제 선택할 요소를 알고 있을 경우
const removeIndex = numberArr.indexOf(3);
// console.log(removeIndex);
numberArr.splice(removeIndex, 2);
// console.log(numberArr);

// split(): 특정 문자 기준으로 분리
const url = 'https://www.abc.com?qnt=3';
console.log(url[3]); // 문자열은 배열 접근 방식으로 접근 가능
const urlArr = url.split('=');
// console.log(urlArr);

// 전개 연산자(spread: ...)
// 배열에 할당된 요소를 개수와 상관없이 모든 전달할 수 있도록 하는 방식

const spreadArr = [...numberArr, 7, 8, 9];
console.log(numberArr);
console.log(spreadArr);
