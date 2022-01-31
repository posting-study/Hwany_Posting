이때까지 우리는 하나의 Promise 객체를 다루기 위해 알아야 하는 지식들을 배웠습니다. 
하지만 실무 개발에서는 여러 개의 Promise 객체를 동시에 다뤄야 하는 경우도 있는데요. 
이번 노트에서는 여러 개의 Promise 객체를 다뤄야 할 때 사용되는 Promise의 메소드들을 배워보겠습니다.

1. all 메소드
설명을 하기에 앞서 바로 코드를 보겠습니다.

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
지금 이 코드에는 서로 다른 3개의 URL로 리퀘스트를 보내는 fetch 함수들이 보입니다. URL을 자세히 보니 이전에 사용했던 직원 정보에 관한 학습용 URL이네요. 지금 1번, 2번, 3번 직원의 정보를 각각 요청하고 있죠?

그 다음 부분을 보면, Promise의 all이라는 메소드를 호출하고 있고, all 메소드의 아규먼트로는 배열 하나가 들어있습니다. 그 배열의 요소들은, 각 직원 정보를 요청하고 받아서 Deserialize까지 수행한 작업 성공 결과를 담고 있는 Promise 객체들인 p1, p2, p3 객체입니다.

이 all 메소드는 무슨 기능을 하는 걸까요? all 메소드도 then 메소드처럼 새로운 Promise 객체를 리턴하는데요. 
all 메소드는 이렇게 아규먼트로 들어온 배열 안에 있는 모든 Promise 객체가 pending 상태에서 fulfilled 상태가 될 때까지 기다립니다. 
그리고 모든 Promise 객체들이 fulfilled 상태가 되면, all 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고, 
각 Promise 객체의 작업 성공 결과들로 이루어진 배열을, 그 작업 성공 결과로 갖게 됩니다.

이 코드를 직접 실행해보면,



이렇게 all 메소드가 리턴한 Promise 객체는,

(1) 각 개별 Promise 객체의 작업 성공 결과로 이루어진 배열을 
(2) 자신의 작업 성공 결과로 갖는다는 것을 알 수 있습니다.

배열의 각 요소로 각 직원 정보 객체가 잘 보이죠? 이렇게 all 메소드는 여러 Promise 객체의 작업 성공 결과를 기다렸다가 모두 한 번에 취합하기 위해서 사용합니다.

그런데 만약 p1~3 객체들 중 하나라도, rejected 상태가 되면 어떻게 될까요?

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learnnnnnn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  });
마지막 fetch 함수에 존재하지 않는 URL 주소를 적고 코드를 다시 실행해보겠습니다. 코드를 실행해보면



마지막 fetch 함수에서 문제가 발생해서 p3가 rejected 상태가 되면, 
all 메소드가 리턴한 Promise 객체는 p3 객체처럼 rejected 상태가 되고 동일한 작업 실패 정보를 갖게 됩니다. 
이렇게 all 메소드는 하나의 Promise 객체라도 rejected 상태가 되면, 전체 작업이 실패한 것으로 간주해야 할 때 사용합니다. 
그리고 이렇게 Promise 객체가 하나라도 rejected 상태가 되는 경우에 대비하려면 
이전에 배웠던 것처럼

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learnnnnnn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  })
  .catch((error) => {
    console.log(error);
  });
그냥 이렇게 catch 메소드를 붙여주면 됩니다. 어차피 all 메소드도 Promise 객체를 리턴하니까 특별히 새로울 건 없겠죠?

2. race 메소드
race 메소드도 all 메소드와 마찬가지로 여러 Promise 객체들이 있는 배열을 아규먼트로 받습니다. 그리고 race 메소드도 all 메소드처럼 Promise 객체를 리턴하는데요. 하지만 그 적용 원리가 다릅니다.
race 메소드가 리턴한 Promise 객체는 아규먼트로 들어온 배열의 여러 Promise 객체들 중에서 
가장 먼저 fulfilled 상태 또는 rejected 상태가 된 Promise 객체와 동일한 상태와 결과를 갖게 됩니다.

예를 들어 이런 코드가 있다고 할 때,

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail')), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail2')), 4000);
});

Promise
  .race([p1, p2, p3])
  .then((result) => {
    console.log(result); // hello 출력
  })
  .catch((value) => {
    console.log(value);
  });
지금 race 메소드 안의 배열에 들어있는 Promise 객체들 중에서 무엇이 가장 빨리 fulfileld 또는 rejected 상태가 될까요? 
답은 1초 후에 fulfilled 상태가 되는 p1 객체입니다.
p1 객체는 1초 후에 fulfilled 상태가 되고, 그 작업 성공 결과로 문자열 Success를 가지게 되는데요. 
p2는 2초 후에, p3는 4초 후에 rejected 상태가 됩니다.

race 메소드가 리턴한 Promise 객체는 이 중에서 가장 빨리 상태 정보가 결정된 p1 객체와 동일한 상태와 결과를 가집니다. 
말그대로 race 메소드는 여러 Promise 객체들을 레이스(race, 경쟁)시켜서 가장 빨리 상태가 결정된 Promise 객체를 선택하는 메소드입니다. 
이 코드를 실행하면



p1 객체의 작업 성공 결과였던 문자열 Success가 잘 출력됩니다.

만약 setTimeout에 넣었던 밀리세컨즈를 이렇게 바꾼다면

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 6000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail')), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail2')), 4000);
});

Promise
  .race([p1, p2, p3])
  .then((result) => {
    console.log(result); // hello 출력
  })
  .catch((value) => {
    console.log(value);
  });
이번에는 p2가 p1보다 더 빨리 상태가 결정됩니다. 그럼 결국 race 메소드가 리턴한 Promise 객체는 p2처럼 rejected 상태가 되고 동일한 작업 실패 정보를 갖게 됩니다. 이 코드를 실행해보면



Error 객체의 정보가 잘 출력되는 것을 알 수 있습니다. 


자, all 메소드와 race 메소드 잘 이해되시나요? 실무에서는 이렇게 여러 Promise 객체들을 한꺼번에 다뤄야할 때도 있습니다. 그럴 때 각 용도에 적합한 메소드를 사용하면 되는데요.  
all 메소드나 race 메소드 말고 allSettled, any라는 메소드도 있습니다. 
이것들도 all, race 메소드처럼 Promise 객체 배열을 아규먼트로 받고 Promise 객체를 리턴하는데요.

이것들도 간단하게 설명하겠습니다.

각 메소드가 리턴한 Promise 객체가 A라고 할 때,

allSettled 메소드 : 배열 내의 모든 Promise 객체가 fulfilled 또는 rejected 상태가 되기까지 기다리고, pending 상태의 Promise 객체가 하나도 없게 되면, A의 상태값은 fulfilled 상태가 되고 그 작업 성공 결과로, 하나의 배열을 갖게 됩니다. 
이 배열에는 아규먼트로 받았던 배열 내의 각 promise 객체의

(1) 최종 상태를 status 프로퍼티, 
(2) 그 작업 성공 결과는 value 프로퍼티, 
(3) 그 작업 실패 정보는 reason 프로퍼티

에 담은 객체들이 요소로 존재합니다. 
이런 식으로 말이죠.

[
   {status: "fulfilled", value: 1},
   {status: "fulfilled", value: 2},
   {status: "fulfilled", value: 3},
   {status: "rejected",  reason: Error: an error}
]
참고로 fulfilled 상태와 rejected 상태를 묶어서 settled 상태라고 하는데요. allSettled 메소드는 말 그대로 배열 속 Promise 객체들이 settled 상태가 되기만 하면 되는 겁니다. 이에 반해 위에서 배운 all 메소드는 모든 Promise 객체들이 fulfilled 상태가 되기를 기다리는 거구요.

any 메소드 : 여러 Promise 객체들 중에서 가장 먼저 fulfilled 상태가 된 Promise 객체의 상태와 결과가 A에도 똑같이 반영됩니다. 만약 모든 Promise 객체가 rejected 상태가 되어버리면 AggregateError라고 하는 에러를 작업 실패 정보로 갖고 rejected 상태가 됩니다. any라는 단어의 뜻처럼 배열 속의 Promise 객체 중 단 하나라도 fulfilled 상태가 되면 되는 겁니다.

자, 각 메소드의 이름과 그 성질을 매칭해서 기억해보세요. 나중에 혹시 정확한 성질이 기억나지 않더라도 다시 찾아보면 되니까 지금 잘 이해해두는 것이 중요합니다. 참고로 어떤 메소드든 결국 하나의 Promise 객체를 리턴하기 때문에 그 리턴 결과를 Promise Chain에서 자유롭게 사용할 수 있다는 점을 기억해두세요.

혹시 각 메소드들의 사용법을 좀더 자세히 보고 싶은 분들은 아래 링크를 참조하세요.
