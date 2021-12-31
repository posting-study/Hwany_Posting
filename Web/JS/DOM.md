브라우저도 객체다?

console.log(window);
window객체 = 브라우저의 창을 대변.
window객체의 프로퍼티를 이용하면 브라우저 창을 컨트롤할수있음

// https://developer.mozilla.org/ko/docs/Web/API/Window 
window 객체 mdn

window 객체(Global Object 라고부름): javascript 최 상위 객체. -> 자바스크립트의 모든 객체를 포함하는 객체이다.
console.log 도 사실 window.console.log 이지만 모든 js가 window 객체 내부에 존재하기때문에 생략이 가능한 것이다.


DOM (Document Object Model) 문서 객체 모델

document 객체로 접근시 웹페이지 요소에 접근가능.

DOM을활용하면 js로 html 태그들을 객체로 다룰수 있다!


console.xxx(document);
값에 좀 더 중점을 둔 log 메소드는 대상을 HTML 형태로 출력하고, 객체의 속성에 좀 더 중점을 둔 dir 메소드는 대상을 객체 형태로 출력합니다.
콘솔에서 값 자체를 확인하고 싶다면 log메소드를, 객체의 속성들을 살펴보고 싶다면 dir 메소드를 활용하면 좋을 것 같습니다.




DOM Tree
사진1.

요소노드와 텍스트 노드로 구성된다.

텍스트노드는 요소노드의 자식노드이고 스스로 자식노드를 가질 수 없는 노드이다.

DOM 트리 이동하기
노드 선택하기 

myTag = ~~querySelector();


//자식요소노드
myTag.children : 자식요소들을 배열로 담고있음
myTag.firstElementChild: 자식요소들ㅇ중 첫 자식
.lastElemetnChild : 자식요ㅅ들중 마지막

//부모요소노드
myTag.parentElement : 부모 요소노드 선택

//형제요소노드
myTag.previousElementSibiling; 이전형제
myTag.nextElementSibiling; 다음형제

myTag.parentElement.firstElementChild 처럼 이어서 선택할 수도 있음



요소 노드에 대한 이동 프로퍼티
프로퍼티	유형	결과
element.children	자식 요소 노드	element의 자식 요소 모음(HTMLCollection)
element.firstElementChild	자식 요소 노드	element의 첫 번째 자식 요소 하나
element.lastElementChild	자식 요소 노드	element의 마지막 자식 요소 하나
element.parentElement	부모 요소 노드	element의 부모 요소 하나
element.previousElementSibling	형제 요소 노드	element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
element.nextElementSibling	형제 요소 노드	element의 다음(next) 혹은 우측(right)에 있는 요소 하나


1. element.innerHTML
요소 노드 내부의 HTML 코드를 문자열로 리턴해 줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)

const myTag = document.querySelector('#list-1');

// innerHTML
console.log(myTag.innerHTML);
, 내부의 HTML 자체를 수정할 때 좀 더 자주 활용



2. element.outerHTML
요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)

const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);


const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>'



3. element.textContent
요소 안의 내용들 중에서 HTML 태그 부분은 제외하고 텍스트만 가져옵니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)
const myTag = document.querySelector('#list-1');

// textContext
console.log(myTag.textContent);
하지만 textContent는 말그대로 텍스트만 다루기 때문에, 특수문자도 그냥 텍스트로 처리한다는 점, 꼭 기억해주세요!


요소노드 더 확실히 추가하기.



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



요소 삭제하기

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



HTML 속성 다루기
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





스타일 다루기
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



<비표준속성>
좀 더 안전하게, dataset 프로퍼티
다양한 방식으로 활용되는 비표준 속성에는 한 가지 문제가 있습니다.
비표준 속성을 사용해 코드를 작성했을 때 시간이 지나서 나중에 그 속성이 표준으로 등록되면 문제가 발생할 수 있다는 건데요.
HTML은 아직까지도 개발자들의 요구를 반영하기 위해 계속해서 발전하는 언어입니다. 그래서 이런 경우 예기치 못한 부작용이 발생할 수 있는 것이죠.

예를 들어서, 만약 glitter라는 비표준 속성을 만들어서 glitter 속성값이 true면 마우스를 올렸을 때 주변에 별이 반짝이는 애니메이션이 동작하도록 프로그램를 설계했다고 가정해봅시다.
그런데 갑자기 glitter라는 속성이 true일 때 태그가 계속 깜빡거리는 기능을 하는 표준으로 생겨나버리면 우리가 처음에 설계한 방식대로 동작하지 않을 수 있겠죠?

그래서 비표준 속성을 사용하기 위해 미리 약속된 방식이 존재하는데요. 바로 data-* 속성입니다.

data-로 시작하는 속성은 모두 dataset이라는 프로퍼티에 저장되는데요. 예를 들어서 data-status라는 속성이 있다면, element.dataset.status라는 프로퍼티에 접근해서 그 값을 가져올 수 있는 것이죠.

그래서 본문의 코드도 아래와 같이 고치고,

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


1. window 객체
window 객체는 브라우저 창을 대변하면서 자바스크립트에서 최상단에 존재하는 객체입니다.
자바스크립트 코드 어느 곳에서나 항상 접근할 수 있는 객체이기 때문에 전역 객체, 영어로는 Global Object라고 부릅니다.
어떤 프로퍼티나 메소드를 사용하든 결국 전역 객체 내부의 것이기 때문에 앞에 window.을 생략할 수도 있습니다.

2. DOM
DOM이란 Document Object Model의 약자로, 한국어로는 문서 객체 모델입니다.
간단하게 표현하면 웹 페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것으로 생각하면 됩니다.
이때 각 객체를 노드(Node)라는 용어로 표현하고, 태그는 요소 노드, 문자는 텍스트 노드로 구분됩니다.

3. DOM 트리
HTML의 계층 구조는 DOM에서도 반영되는데 이러한 계층구조를 나무에 비유해서 DOM 트리라고 부릅니다.
각 노드 간의 관계는 부모, 자식, 형제라는 용어로 표현합니다.

4. DOM 이동 시 활용 가능한 프로퍼티
프로퍼티	유형	결과
element.children	자식 요소 노드	element의 자식 요소 모음(HTMLCollection)
element.firstElementChild	자식 요소 노드	element의 첫 번째 자식 요소 하나
element.lastElementChild	자식 요소 노드	element의 마지막 자식 요소 하나
element.parentElement	부모 요소 노드	element의 부모 요소 하나
element.previousElementSibling	형제 요소 노드	element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나
element.nextElementSibling	형제 요소 노드	element의 다음(next) 혹은 우측(right)에 있는 요소 하나
node.childNodes	자식 노드	node의 자식 노드 모음(NodeList)
node.firstChild	자식 노드	node의 첫 번째 자식 노드 하나
node.lastChild	자식 노드	node의 마지막 자식 노드 하나
node.parentNode	부모 노드	node의 부모 요소 하나
node.previousSibling	형제 노드	node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나
node.nextSibling	형제 노드	node의 다음(next) 혹은 우측(right)에 있는 노드 하나
5. 주요 요소 노드 프로퍼티
프로퍼티	내용	참고사항
element.innerHTML	요소 노드 내부의 HTML코드 문자열로 리턴	요소 안의 정보를 확인할 수도 있지만,
내부의 HTML 자체를 수정할 때 좀 더 자주 활용
element.outerHTML	요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴	outerHTML은 새로운 값을 할당하면
요소 자체가 교체되어 버리기 때문에 주의
element.textContent	요소 노드 내부의 내용들 중에서 HTML을 제외하고 텍스트만 리턴	textContent는 말그대로 텍스트만 다루기 때문에
HTML태그를 쓰더라도 모두 텍스트로 처리됨
6. 요소 노드 다루기
요소 노드 만들기: document.createElement('태그이름')
요소 노드 꾸미기: element.textContent, element.innerHTML, ...
요소 노드 추가 혹은 이동하기: element.prepend, element.append, element.after, element.before
요소 노드 삭제하기: element.remove()
7. HTML 속성 다루기
대부분의 HTML 속성은 DOM 객체의 프로퍼티로 변환이 됩니다.
하지만, 표준 속성이 아닌 경우에는 프로퍼티로 변환이 안 되는데요. 아래 메소드를 활용하면 표준이 아닌 HTML 속성들도 다룰 수 있습니다.

속성에 접근하기: element.getAttribute('속성')
속성 추가(수정)하기: element.setAttribute('속성', '값')
속성 제거하기: element.removeAttribute('속성')
8. 스타일 다루기
자바스크립트로 태그의 스타일을 다루는 방법에는 크게 두 가지가 있습니다.

style 프로퍼티 활용하기: element.style.styleName = 'value';
class 변경을 통해 간접적으로 스타일 적용하기: element.className, element.classList
8-1. classList의 유용한 메소드
메소드	내용	참고사항
classList.add	클래스 추가하기	여러 개의 값을 전달하면 여러 클래스 추가 가능
classList.remove	클래스 삭제하기	여러 개의 값을 전달하면 여러 클래스 삭제 가능
classList.toggle	클래스 없으면 추가, 있으면 삭제하기	하나의 값만 적용 가능하고,
두 번째 파라미터로 추가 또는 삭제 기능을 강제할 수 있음
관련 질문


