# DOM

## window 객체
window 객체는 **브라우저 창을 대변**하면서 자바스크립트에서 **최상단**에 존재하는 객체이다

자바스크립트 코드 어느 곳에서나 **항상 접근**할 수 있는 객체이기 때문에 전역 객체, 영어로는 `Global Object`라고 부른다.

어떤 프로퍼티나 메소드를 사용하든 결국 전역 객체 내부의 것이기 때문에 앞에 window.을 생략가능하다

>**window 객체 MDN**
>https://developer.mozilla.org/ko/docs/Web/API/Window 


## DOM(Document Object Model)


간단하게 표현하면 웹 페이지에 나타나는 **HTML 문서 전체를 `객체`로 표현한 것**

이때 각 객체를 `노드(Node)`라는 용어로 표현하고, 태그는 요소 노드, 문자는 텍스트 노드로 구분 한다.

`document` 객체로 접근시 웹페이지 요소에 접근가능.

*DOM을활용하면 js로 html 태그들을 객체로 다룰수 있다!*

>**log VS dir**
>log는 파라미터의 값에 더 중점을 두어 대상을 HTML 형태로  출력
>dir은 파라미터 객체의 속성에 더 중점을 두어 객체 형태로 출력

## DOM Tree
사진 1

HTML의 계층 구조는 DOM에서도 반영되는데 이러한 계층구조를 나무에 비유해서 `DOM 트리`라고 부른다.

각 노드 간의 관계는 **부모, 자식, 형제**라는 용어로 표현.

`요소노드`와 `텍스트 노드`로 구성된다.

**텍스트노드는 요소노드의 자식노드이고 스스로 자식노드를 가질 수 없는 노드이다.**

## DOM 트리 이동하기
### 노드 선택하기
```js
const element = document.querySelector("#element");

//element의 자식 요소 모음(HTMLCollection)
element.children

//element의 첫 번째 자식 요소 하나
element.firstElementChild

//element의 마지막 자식 요소 하나
element.lastElementChild

//element의 부모 요소 하나
element.parentElement

//element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
element.previousElementSibling

//element의 다음(next) 혹은 우측(right)에 있는 요소 하나
element.nextElementSibling

//element.parentElement.previousElementSibling 처럼 이어서 요소 선택 가능
```

### 주요 노드 프로퍼티


1. element.innerHTML
요소 노드 **내부의 HTML 코드**를 문자열로 리턴해 줍니다. 
_내부에 있는 줄 바꿈이나 들여쓰기 모두 포함_

```js
const myTag = document.querySelector('#list-1');

//내부의 HTML 자체를 수정할 때 좀 더 자주 활용
myTag.innerHTML
```


2. element.outerHTML
요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해줍니다. 
_내부에 있는 줄 바꿈이나 들여쓰기 모두 포함_

```js
const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);

const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>'
```

3. element.textContent
요소 안의 내용들 중에서 HTML 태그 부분은 제외하고 `텍스트`만 가져온다.
_내부에 있는 줄 바꿈이나 들여쓰기 모두 포함_

```js
const myTag = document.querySelector('#list-1');

// textContext
console.log(myTag.textContent);
```
하지만 textContent는 말그대로 텍스트만 다루기 때문에, **특수문자도 그냥 텍스트**로 처리한다!

## 요소노드 만들어서 추가하기
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>JS with Codeit</title>
</head>
<body>
  <div>
    <h1>오늘 할 일</h1>
		<ol id="today">
			<li>자바스크립트 공부</li>
			<li>고양이 화장실 청소</li>
			<li>고양이 장난감 쇼핑</li>
		</ol>
		<h1>내일 할 일</h1>
		<ol id="tomorrow">
			<li>자바스크립트 공부</li>
			<li>뮤지컬 공연 예매</li>
			<li>유튜브 시청</li>
		</ol>
  </div>
  <script src="index.js"></script>
</body>
</html>
</html>
```

```js
const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);
```



## 요소 삭제하기


```js
// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 삭제하기: Node.remove()
// tomorrow.remove();
// today.children[2].remove();

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);
tomorrow.children[1].after(today.children[1]);
tomorrow.children[2].before(today.children[1]);
tomorrow.lastElementChild.before(today.children[1]);
```

## HTML 속성 다루기

대부분의 HTML 속성은 DOM 객체의 프로퍼티로 변환이 된다.
하지만, 표준 속성이 아닌 경우에는 프로퍼티로 변환이 안 되는데, 아래 메소드를 활용하면 표준이 아닌 HTML 속성들도 다룰 수 있다.

- 속성에 접근하기: element.getAttribute('속성')
- 속성 추가(수정)하기: element.setAttribute('속성', '값')
- 속성 제거하기: element.removeAttribute('속성')

```js
// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'https://www.codeit.kr'); // 수정

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href'); 
tomorrow.removeAttribute('class'); 

// id 속성
console.log(tomorrow);
console.log(tomorrow.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);
console.log(link.href);
console.log(tomorrow.href);
```
## 스타일 다루기


```js
// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
const item = tomorrow.children[1];
item.classList.add('done');
item.classList.remove('done');
//여러개를 관리하고 싶으면 , 로 파라미터 넘겨주기
item.classList.toggle('done');
//toggle('done', true) true -> add의 기능, false -> remove의 기능을 고정.
//toggle 메소드는 클래스를 하나만 다룬다.
// 해결책!

// elem.className
today.children[1].className = 'done';
//원래있던 클래스가 사라지기 때문에 문제가 생길 수 있음


// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';
//스타일을 인라인으로 작성하기에 불필요한 작업이 진행될 수 있어서 사용을 잘 안한다.
```

## 비표준속성

### dataset

비표준 속성을 사용하기 위해 미리 약속된 방식이 존재하는데, 바로 `data-*` 속성이다!

data-로 시작하는 속성은 모두 dataset이라는 프로퍼티에 저장되는데, 예를 들어서 `data-status`라는 속성이 있다면, `element.dataset.status`라는 프로퍼티에 접근해서 그 값을 가져올 수 있는 것

그래서 본문의 코드도 아래와 같이 고치고,
```html
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <title>JS with Codeit</title>
</head>

<body>
  <p>할 일 : <b data-field="title"></b></p>
  <p>담당자 : <b data-field="manager"></b></p>
  <p>상태 : <b data-field="status"></b></p>
  <div>
    상태 변경: 
    <button class="btn" data-status="대기중">대기중</button>
    <button class="btn" data-status="진행중">진행중</button>
    <button class="btn" data-status="완료">완료</button>
  </div>
  <script src="index.js"></script>
</body>

</html>
```

```css
[data-status] {
  padding: 5px 10px;
}

[data-status="대기중"] {
  background-color: #FF6767;
  color: #FFFFFF;
}

[data-status="진행중"] {
  background-color: #5f62ff;
  color: #FFFFFF;
}

[data-status="완료"] {
  background-color: #07c456;
  color: #FFFFFF;
}
```
```js
for (let tag of fields) {
  const field = tag.dataset.field;
  tag.textContent = task[field];
}

const btns = document.querySelectorAll('.btn');
for (let btn of btns) {
  const status = btn.dataset.status;
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].dataset.status = status;
  };
}
```







