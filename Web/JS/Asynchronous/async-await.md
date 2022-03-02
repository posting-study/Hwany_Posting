# async - await

## async와 await 실행
```js
// fetch 비동기 실행
/* fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => { console.log(result); }); */

// async keyword 사용 함수 선언
async function fetchAndPrint() {
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7);
  const result = await response.text();
  console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
```
<br>

- ``fetchAndPrint()`` 가 일반 함수였다면
```
1
2
7
[fetch 함수의 result]
3
4
5
6
```
<br>

- **비동기 함수**일 때
```
1
2
3
4
5
6
7
[fetch 함수의 result]
``` 

🙎‍♂️ fetchAndPrint 함수는 선언방식만 보면 동기 함수와 동일하다.
<br>
🙋‍♂️ 이는 Promise 객체를 사용하는 **``Promise Chaining``** 을 가독성있게 작성하기 위해 도입된 문법이다.
<br>

🙆‍♂️ 즉 바로 async/await 구문이 Promise 객체를 **우리에게 이미 익숙한 동기 실행 코드 방식**으로 다룰 수 있게 해주는 문법인 것!
<br>

💁‍♂️ 만일 ``async/await`` 문법을 사용하지 않았다면

```js
// fetch 비동기 실행
/* fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => { console.log(result); }); */

// fetch 함수 사용
function fetchAndPrint() {
  console.log(2);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(7);
      return response.text();
    })
    .then((result) => { console.log(result); });
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
```

## async/await 함수의 실행 흐름

1. 함수가 호출되고 순차적으로 명령문을 실행
2. await을 만나면 일단 await 뒤의 코드가 실행된 후 **스레드가 함수 밖으로 전환**돼 나머지 코드를 진행
3. Promise 객체가 fulfilled 상태가 되면 await이 작업 성공 결과를 리턴

### 만일 Promise 객체가 rejected 상태라면?

상관없다. 사실 async 함수는 Promise 객체를 리턴하기 때문에 **함수 내부의 리턴 값을 작업 성공결과로 갖는 객체를 리턴한다.**

## async 함수가 return 하는 Promise 객체

**1. 어떤 값을 리턴하는 경우** <br>

🙎‍♂️ **Promise 객체 리턴** : 해당 Promise 객체와 동일한 상태와 작업 결과를 가진 Promise 객체를 리턴<br>

🙋‍♂️ **이외의 값을 리턴** : fulfilled 상태이면서 리턴된 값을 작업 성공 결과로 가지는 Promise 객체를 리턴<br>

**2. 아무 값도 리턴하지 않은 경우** 
🙎‍♂️ fulfilled 상태이면서 undefined 값을 작업 성공 결과로 가지는 Promise 객체를 리턴<br>

**3. async 함수 내부에서 에러가 발생했을 때**
🙎‍♂️ rejected 상태이면서 해당 에러 객체를 작업 실패 결과로 가지는 Promise 객체 리턴<br>

## async Keyword Position
```js
// 1) Function Declaration  
async  function  example1(a, b) { return a + b; } 

// 2-1) Function Expression(Named) 
const example2_1= async  function  add(a, b) { return a + b; }; 
// 2-2) Function Expression(Anonymous)  
const example2_2 = async  function(a, b) { return a + b; }; 

// 3-1) Arrow Function  
const example3_1 = async (a, b) => { return a + b; }; 
// 3-2) Arrow Function(shortened)  
const example3_2 = async (a, b) => a + b;
```

<br>

> **즉시 실행 함수 (IIFE)** 에서 async 위치
> ```js
> (async  function  print(sentence) { 
> console.log(sentence); 
> return sentence; }('I love JavaScript!')); 
>
>(async  function (a, b) { 
>return a + b; }(1, 2)); 
>
>(async (a, b) => { return a + b; })(1, 2); 
>
>(async (a, b) => a + b)(1, 2);
> ```

## 순차적인 작업이 필요 없을 때 반복문 처리 방법

```js
async  function  getResponses(urls) { 
	for(const url of urls){ 
		const response = await  fetch(url); 
		console.log(await response.text()); 
	} 
}

async  function  fetchUrls(urls){
 	for(const url of urls){ 
	 	(async () => { // 추가된 부분!
	 	  const response = await  fetch(url); 
	 	  console.log(await response.text()); 
	 	  })(); // 추가된 부분! 
	} 
}
```

<br>

🙎‍♂️ for 반복문을 돌면서 비동기 함수 (fetch)의 Promise 객체를 기다리지 않고 실행하라 해놓고 다음 스레드 (여기서는 다음 차례의 url)을 처리해서 다중스레드의 효과를 볼 수 있다.

<br>

🙋‍♂️ 순서가 중요하지 않은 작업이라면 **IIFE async**를 이용해 더 효율적이고 빠른 작업을 할 수 있다.
