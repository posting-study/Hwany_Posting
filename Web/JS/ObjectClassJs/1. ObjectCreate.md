1. Object literal과 Factory function 사용하기
function createUser(email, birthdate) {
  const user = {
    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
const user2 = createUser('jerry99@google.com', '19950719');
const user3 = createUser('alice@google.com', '19931224');
객체를 생성하는 Factory function을 만들고, 그 안에서 Object literal로 객체를 생성하여 리턴하는 방법입니다.

2. Constructor function 사용하기
function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
객체를 생성하는 용도로 사용하는 Constructor function을 정의하고, 그 안에서 this 키워드를 사용하여 생성될 객체의 프로퍼티와 메소드를 설정하는 방법입니다. Constructor function으로 객체를 생성하려면 그 앞에 new를 붙여서 실행해야 한다는 사실, 반드시 기억하세요.

3. class 키워드 사용하기
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
class 키워드를 사용해서 객체의 틀을 정의하고, 마찬가지로 그 앞에 new를 붙여서 객체를 생성하는 방법입니다. class를 사용할 때는 보통 프로퍼티의 경우 constructor 안에 정의하고, 메소드의 경우 constructor 밖에 정의합니다.

이 밖에도 자바스크립트로 객체를 만들 수 있는 방법에는 여러 가지가 있지만 일단은 이 정도만 아셔도 충분합니다.

이제 다음 챕터에서는 객체 지향 프로그래밍을 할 때 알아야 하는 기본 개념들을 배울 건데요. 이때 위의 세 가지 방법 중에서 class 키워드를 사용하는 방법을 쓸 겁니다. Factory function이나 Constructor function을 사용해도 문제는 없지만, class는 자바스크립트 뿐만 아니라 Java 등의 다른 언어에서도 등장하는 보편적인 용어이고, 그 자체로 객체 지향의 원리를 나타내기에 적절해서 React 등의 유명 프레임워크에서도 사용하던 방식이기 때문입니다.

다음 챕터에서는 class 키워드만 사용할 테니까 class 안에 어떤 식으로 코드들이 들어가는지 미리 잘 봐두고 넘어가세요.
