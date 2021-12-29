객체 
{
 key: "value", // property
}

key(propertyName) :문자열로 선언해야하지만 따옴표를 쓸 필요 없다.
1. 첫 글자는 문자, _, $ 로 시작
2.띄어쓰기 금지
3. 하이픈 금지

객체 접근법 - 점표기법

objectName.propertyName
-> 프로퍼티 이름이 띄어쓰기가 없어야함.

objectName["key"]
-> 프로퍼티 이름을 문자열로 만드는 모든 경우를 사용할 수 있음. "" 활용!



객체 프로퍼티 CRUD

수정 : 변수재할당하듯.
추가 : 변수할당하듯.

objectName.newPropertyName = newValue;

삭제 : delete 키워드 사용

delete objectName.PropertyName 

*in연산자
객체의 프로퍼티 존재여부 확인

"propertyname" in objectName
//return 값 boolean type





객체와 메소드

프로퍼티 값에 함수를 넣을 수 있음

let objects = {
 sayHello : function(x){---},
}

objects.sayHello(x);

메소드를 사용하는 이유 : 함수의 활용에 의미를 두고  같은 이름으로 여러 기능을 사용하기 위해.




for..in 반복문
for (변수 in 객체){
 동작부분
}
변수에 객체의 프로퍼티가 할당돼서 동작함.

for (let key in object){
 console.log(key);
}


배열

array.length : 배열의 길이
array[undefinedIndex] = newValue; // 값 추가
// undefinedIndex 가 띄엄 띄엄 인덱스를 추가하면 empty 값이 빈 인덱스 자리에 들어감

array[definedIndex] = newValue ; // 값 수정
array.splice(wantedIndex); // 삭제하고싶은 인덱스 이후의 값 삭제
splice(startIndex, deleteCount, item1, item2, ,,,) // 삭제를 시작할 인덱스와 삭제할 갯수를 정하고 그 자리에 item이 들어감.

tip : deleteCount 를 0개로 놓으면 값을 원하는 자리에 추가가능
deleteCount를 1개로 놓고 item을 놓으면 값을 수정할 수 있음.
// 2개로놓고 item을 2개로 놓으면 값을 2개 수정할 수 있음

배열의 첫 요소 삭제
array.shift()

배열의 마지막 요소 삭제
array.pop()

배열의 첫 요소 값 추가
array.unshift(value)

배열의 마지막 요소 추가
array.push(value)


배열 특정값의 인덱스 찾기
array.indexOf(item)

만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다.
포함되어 있지 않다면, -1이 리턴됩니다.
여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.

그리고 비슷하게 lastIndexOf라는 메소드가 있는데요. indexOf와는 반대로 탐색을 뒤에서 부터 하게 됩니다. 그러니깐 방금과 같은 경우에 'Kakao'를 lastIndexOf 메소드로 찾게 되면 마지막에 있는 인덱스가 리턴되겠죠?

배열에서 특정 값의 존재여부 확인

array.includes(item)




for..of 반복문

for(let 변수 of 배열){ 동작; }
(파이썬의  for in 과 같음.)


문자열

myString.length // length 프로퍼티
myString.charAt(3) //3번인덱스의 값
indexOf, lastIndexOf 메소드 사용 가능
toUpperCase/ toLowerCase 

trim : 양 끝 공백을 제거한 문자열을 리턴

slice(start,end) : start~ end-1 까지 문자를 가져옴
end 표시안할시 끝까지 다.


참조형 복사하기

배열
num1 = [~]
num2 = num1.slice();

num2.push(4)

// num1 = [~]
// num2 = [~,4]

객체
1.
course1 = {~~}
course2 = Object.assign({},course1);
2. 
for let key in course1 {
 course2[key] = course1[key]
}
































