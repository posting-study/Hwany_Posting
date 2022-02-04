# Promise Handling
👨‍💻 Promise는 한 번에 여러 개를 다룰 수 도 있다.

## All method🍋

```js
// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  });
```

<br>

🙍‍♂️ **`Promise.all([promiseA, PromiseB, PromiseC])`** 는 then 메소드처럼 새로운 Promise 객체를 리턴하는데 메소드 안에 파라미터로 넘겨진 리스트의 프로미스 객체들이 pending 상태에서 fulfilled 상태가 될 때까지 기다리다가, **모든 프로미스 객체가 fulfilled 상태**가 되면 **새로운 Promise 객체 또한 fulfilled 상태**가 되며 **결과값으로는 프로미스 객체들의 작업 결과값의 배열**을 얻는다.

<br>

🙋‍♂️ 그러나 단 하나의 프로미스 객체들이라도 rejected가 된다면 rejected 상태가 되고 동일한 작업 실패 정보를 갖게 된다.

<br>

🙆‍♂️ 즉, all 메소드는 하나의 promise 객체라도 rejected가 되면 전체가 실패한 것으로 간주하는 작업에서 사용한다.

<br>

💁‍♂️ 만일 rejected 상태를 대비하려면 catch 메소드를 붙여주면 된다.
<br>

```js
Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  })
  .catch((error) => {
    console.log(error);
  });
```

<br>

## Race method🏃‍♂️

🙍‍♂️ **`Promise.race([p1, p2, p3])`** 는 all 메소드와 같이 Promise 객체를 리턴하는다. <br>

🙋‍♂️ 파라미터로 넘겨진 배열의 Promise 객체들 중에서 가장 먼저 pending 상태를 벗어난 객체와 동일한 상태와 결과를 갖는다.

```js
Promise
  .race([p1, p2, p3])
  .then((result) => {
    console.log(result); // hello 출력
  })
  .catch((value) => {
    console.log(value);
  });
```

<br>

## AllSettled method

🙍‍♂️ 파라미터에 넘겨진 **모든 Promise 객체가 pending 상태를 벗어나면** **`allSettled`** 가 리턴한 Promise 객체는 fulfilled 상태가 되고 작업 결과로 하나의 배열을 갖게 된다.

🙋‍♂️ 이 배열은 최종상태를 status, 작업 성공 결과는 value, 작업 실패 정보는 reason 에 담는다.

```js
[
   {status: "fulfilled", value: 1},
   {status: "fulfilled", value: 2},
   {status: "fulfilled", value: 3},
   {status: "rejected",  reason: Error: an error}
]
```
> fulfilled 상태와 rejected 상태를 묶어서 settled 상태라 한다.

<br>

## Any method

🙍‍♂️ 파라미터로 넘겨진 Promise 객체들 중에서 **가장 먼저 fulfilled 상태가 된 객체의 상태와 결과**가 메소드가  리턴한 Promise 객체의 상태와 결과가 된다.

🙋‍♂️ 만일 **모든 Promise 객체가 rejected 상태**가 되면 **`AggregateError`** 라는 작업 실패 정보를 갖고 rejected 상태가 된다.
