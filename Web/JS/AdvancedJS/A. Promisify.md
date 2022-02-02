# Promisify

## Promise 객체를 직접 만든다?🧐

Promise 객체를 직접 만드는 이유는 전통적인 형식의 비동기 실행 함수를 Promise 기반의 코드로 변환하기 위해서이다.

<br>

**1. setTimeout 함수 예시**
```js
// traditional
function wait(text, milliseconds) {
  setTimeout(() => text, milliseconds);
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => wait(`${result} by Hwany`, 2000)) // 2초 후에 리턴이 될까?
  .then((result) => { console.log(result); });

```

<br>

🙍‍♂️ 이런식으로 코드를 연결하면 result 값으로 undefined가 출력된다. <br>

**🙋‍♂️ wait 함수는 단지 setTimeout 함수를 실행시키는 함수**일 뿐 리턴값이 없기 때문이다. <br>

🙆‍♂️ setTimeout 함수 안의 콜백이 2초 후에 리턴하는 text는, wait 함수의 리턴값이 아니다. <br>

💁‍♂️ setTimeout 함수는 비동기 실행 함수인데 Promise Chaining 안에서는 그대로 사용할 수 없다. <br>

🤷‍♂️ 따라서 Promise객체를 생성하는 방향으로 wait 함수를 수정해주어야 한다. <br>


<br>

```js
// Promisify - 비동기 함수를 Promise 객체로 감싸는 것
function wait(text, milliseconds) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(text); }, 2000);
  });
  return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => wait(`${result} by Hwany`, 2000)) // 2초 후에 리턴이 될까?
  .then((result) => { console.log(result); });
```
<br>

**2. 콜백 헬(callback hell)과 Promise**

```js
// env = Node.js
fs.readFile('file1.txt', 'utf8', (error, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```

<br>
만약 파일을 순차적으로 3개를 읽어야 한다고 했을 때

```js
fs.readFile('file1.txt', 'utf8', (error1, data1) => {
  if (error1) {
    console.log(error1);
  } else {
    console.log(data1);
    fs.readFile('file2.txt', 'utf8', (error2, data2) => {
      if (error2) {
        console.log(error2);
      } else {
        console.log(data2);
        fs.readFile('file3.txt', 'utf8', (error3, data3) => {
          if (error3) {
            console.log(error3);
          } else {
            console.log(data3);
          }
        });
      }
    });
  }
});
```

<br>

매우 보기 싫어진다. 더러웡! <br>

🙍‍♂️ 이런 콜백 내부에 다른 콜백이 프랙탈로 들어가 있을 때 이런 현상을 **`콜백지옥`** 이라고 한다. <br>

🙋‍♂️ 이를 **`Promisify`** 로 해결할 수 있다. <br>

```js
function readFile_promisified(filename) {
  const p = new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error, data) => {
      if (error) {
        reject(error); // 에러 발생 시 -> rejected
      } else {
        resolve(data); // 파일 내용 읽기 완료 -> fulfilled
      }
    });
  });
  return p;
}
```

<br>

🙆‍♂️ `readFile_promisified`라는 함수는 프로미스 객체를 생성했다. <br> 

💁‍♂️ 그리고 executor 함수에서 readFile 메소드를 선언해 resolve 와 reject의 행위를 정의했다. <br>

🤷‍♂️ `readFile_promisified`로 순차적으로 파일을 읽고 싶으면
```js
readFile_promisified('file1.txt')
  .then((data) => { console.log(data); return readFile_promisified('file2.txt'); })
  .then((data) => { console.log(data); return readFile_promisified('file3.txt'); })
  .then((data) => { console.log(data); })
  .catch((error) => { console.log(error); });
```

<br>

**3. Promisify를 하면 안 되는 함수**

<br>

🙍‍♂️ 전통적인 형식의 비동기 실행 함수라고 해서 모두 Promisify해서 사용해도 되는 것은 아니다. <br>

🙋‍♂️ 기존의 비동기 실행 함수들 중에서도 그 콜백을 **한번만 실행하는 것**들(setTimeout, readFile 등)만 Promisify해서 사용해도 된다. 
<br>

🙆‍♂️ 콜백을 **여러 번 실행**하는 함수들(setInterval, addEventListener 등)인 경우에는 이렇게 Promisify하면 안된다.  <br>



```js
const box = document.getElementById('test');
let count = 0;

function addEventListener_promisified(obj, eventName) { 
  const p = new Promise((resolve, reject) => {
    obj.addEventListener(eventName, () => { // addEventListener 메소드
      count += 1;
      resolve(count);
    });
  });
  return p;
}

addEventListener_promisified(box, 'click').then((eventCount) => { console.log(eventCount); });
```

<br>

이 코드에서 보이는 addEventListener_promisified 함수는 DOM 객체의 addEventListener 메소드를 Promisify한 함수이다. <br>
 
지금 Promise 객체가 생성될 때 실행되는 executor 함수 안에서는, DOM 객체에 어떤 이벤트가 발생할 때, 실행할 콜백을 등록하고 있다. <br>

하지만 이 코드를 실행하고 box를 클릭해보면 
처음에 1이 딱 출력되고 나서 그 다음 count 값들은 출력되지 않는다. <br>
<br>


**🙎‍♂️ 왜냐하면 Promise 객체는 한번 pending 상태에서 fulfilled 또는 rejected 상태가 되고나면 그 뒤로는 그 상태와 결과가 바뀌지 않기 때문!!!** <br>

따라서 지금 위 코드에 보이는 resolve(count)라고 하는 코드가 box 버튼을 클릭할 때마다 여러 번 실행된다고 해도 p 객체가 갖고 있는 상태와 결과는 변하지 않는다.  <br>

그래서 then 메소드 안의 콜백도 처음 클릭했을 때 딱 한번 실행되고 끝인 것! <br>
<br>

**결론 : 이렇게 콜백이 여러 번 실행되어야하는 비동기 실행 함수인 경우에는 Promisify를 하면 안 된다.**


## Stated Promise Object👨‍❤️‍👨

**1. fulfilled 상태의 Promise 객체 만들기**
```js
const p = Promise.resolve('success');
// state = fulfilled / value = 'success'
```
Promise의 resolve라는 메소드를 사용하면 바로 fulfilled 상태의 Promise 객체를 만들 수 있다. 

<br>


**2. rejected 상태의 Promise 객체 만들기**
```js
const p = Promise.reject(new Error('fail'));
// state = rejected / value = 'fail'
```
Promise의 reject라는 메소드를 사용하면 바로 rejected 상태의 Promise 객체를 만들 수 있다. 

<br>


> **위 두 방식은**
> ```js
>const p = new Promise((resolve, reject) => {
>
>});
>```
>**와 동일하게 동작한다.**
>
>어떤 비동기 작업을 처리할 필요가 있다면, new 생성자와 executor 함수를 사용해서 Promise 객체를 만들어야 하지만, 그렇지 않고 **바로 상태가 이미 결정된 Promise 객체를 만들고 싶을 때는 이 resolve 또는 reject 메소드를 사용**


<br>

예를 들어 문제가 발생하는 경우에는 바로 Error 객체를 throw하는데, 만약 문제가 존재하는 경우에도 Promise 객체를 리턴하고 싶다면 reject 메소드를 써서 작성하면 된다.

```js
function doSomething(a, b) {
  // ~~
  if (problem) {
    return Promise.reject(new Error('Failed due to..'));
  } else {
    return fetch('https://~');
  }
}
```
<br>

## Promise Result👀

Promise의 result는 pending 상태일 때 then이 붙어있어야 call back의 parameter로 전달 받을 수 있는 것이 아니라 **이미 stated 된 객체의 경우에도 그 결과를 then 메소드로 result를 받아올 수 있다.**<br>

즉, fulfilled 또는 rejected 상태가 결정된 Promise 객체라도 then 메소드를 붙이면, 콜백에서 해당 작업 성공 결과 또는 작업 실패 정보를 받아올 수 있다. **시점과는 전혀 상관이 없는 개념!!** <br>

<br>

**🙍‍♂️ `Promise 객체`는 항상 결과를 줄 수 있는 `공급자(Provider)`이고 그것의 `then 메소드`는 그 결과를 소비하는 콜백인 `소비자(Consumer)를 설정하는 메소드`이다.**
