# 객체

## 객체💪
자바스크립트에서 `객체`는 파이썬의 `딕셔너리`와 형태가 같다.

```javascript
{
	key : "value",
}
```
<br>

위와 같은 객체는 할당해서 사용하는데 이때 담기는 값은 `객체의 주소값`이다.
```javascript
const objects = {
	key1 = "value1",
	key2 = "value2",
}
//objects -> 객체의 주소값이 할당
```
<br>
즉 const로 변수를 상수로 선언해도, 주소값이 바뀌는 것이 아니라 객체의 속성이나 값을 변경할 수 있음
<br>

`key` 는 문자열로 선언해야 하지만 따옴표로 명시할 필요는 없다.

1.  첫 글자는 문자, _, $ 로 시작 2.띄어쓰기 금지
2.  하이픈 금지


*명시하면 대괄호 접근법으로 객체의 값에 접근 가능하다 이정도 차이임😉*

---

<br>

**객체 접근법**📬

```javascript
const objectName = {
	propertyName = "value1",
}

objectName.propertyName // value1
//propertyName이 띄어쓰기가 없어야함.

objectName["propertyName"] // value1
//propertyName을 문자열로 만드는 모든 경우를 사용할 수 있음.
```
---

<br>

**객체 CRUD**📝
```js
const objectName = {
	propertyName = "value1",
}

// Create
objectName.newPropertyName = newValue;

// Update
objectName.propertyName = newValue;

// Read
objectName.propertyName

// Delete
delete objectName.PropertyName

```
<br>

>**in 연산자**
>```js
>"propertyName" in objectName 
>// return type == boolean
>```

---
<br>

**객체와 메소드**📩

property value에 함수를 넣을 수 있다
```js
let objects = {
	sayHello : function(x) {
				// action
			}
}

objects.sayHello(x);
```

#### `메소드`를 사용하는 이유는?
**함수의 활용**에 의미를 두고 **같은 이름으로 여러 기능**을 구현하기 위해!


---

>**for..in 반복문**
>```js
>for (let key in object){
>        console.log(key); // key값 리턴
>        console.log(object.key); // value값 리턴
>}
>``` 

---

## 배열🎢

배열도 참조형 변수로 객체이다. 

### 객체의 활용💡

```js
const array = [a,b,c,d,---];

// array length
array.length;

// array Create
array[undefinedIndex] = newValue;
// undefinedIndex가 step을 가지고 부여될 경우 skip된 자리에 empty값이 할당됨

// array Update
array[definedIndex] = newValue;

// array Delete
array.splice(start);
// start 인덱스 포함 이후의 값 삭제
array.splice(start, deleteCount, item1, item2,---);
// start 인덱스와 삭제할 개수를 정하고 그 자리에 item1, item2, ... 추가함
```

<br>

>**splice tip**
>deleteCount 를 0개로 놓으면 값을 원하는 자리에 추가가능 
>deleteCount를 1개로 놓고 item을 놓으면 값을 수정할 수 있음. 
>2개로놓고 item을 2개로 놓으면 값을 2개 수정할 수 있음

<br>

### Head Tail 손질

1. 배열의 첫 요소 삭제 `array.shift()`

1. 배열의 마지막 요소 삭제 `array.pop()`

1. 배열의 첫 요소 값 추가 `array.unshift(value)`

1. 배열의 마지막 요소 추가 `array.push(value)`

1. 배열 특정값의 인덱스 찾기 `array.indexOf(item)`

<br>

**indexOf**
1. 만약 포함되어 있다면, item이 있는 인덱스가 리턴 
1. 포함되어 있지 않다면, -1이 리턴 
1. 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴

**lastIndexOf**
- indexOf와 다르게 탐색을 뒤에서부터 시작해 가장 처음 발견된 인덱스를 리턴함!

**includes(item)**
- 배열에서 특정 값의 존재여부 확인

<br>

>**for..of 반복문**
>```js
>for (let var of array){
>        // action
>}
>```

---
## 문자열🚄

문자열은 배열과 비슷하지만 `수정할 수 없는 타입`이라는 점에서 차이가 있다.
<br>

```js
// 문자열의 길이
myString.length; 

// 인덱스에 해당하는 문자
myString = "hello";
myString.charAt(3); // l

// indexOf, lastIndexOf 사용가능

// toUpperCase , toLowerCase 사용가능

// trim : 양 끝 공백을 제거
myString = "   he ll o "";
myString.trim(); //he ll o

//slice(start, end) : start~ end-1까지 문자를 가져옴. end 미표기시 끝까지 다 가져옴

```

---

## 참조형 복사하기🚀

참조형 변수는 변수에 `객체의 주소값`이 담기기 때문에 단순히 재할당 한다고 독립적인 객체가 할당되는 것이 아니다.

<br>

```js
num1 = [1, 2, 3, 4];
num2 = num1;
num2.push(5);
// num1 = [1, 2, 3, 4, 5]
// num2 = [1, 2, 3, 4, 5]
```

<br>


### 객체 올바르게 복사하기
```js
// 배열
num1 = [1, 2, 3, 4];
num2 = num1.slice();
num2.push(5);
// num1 = [1, 2, 3, 4]
// num2 = [1, 2, 3, 4, 5]

-------------------------------------------

//객체
course1 = {~~} 
course2 = Object.assign({},course1);

// or

for (let key in course1) { 
    course2[key] = course1[key];
}

```





