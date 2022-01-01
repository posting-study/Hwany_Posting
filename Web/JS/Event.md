아직까진 click 이벤트 하나만에 대해서만 배웠는데요, 이 외에도 사용자의 동작에 따라 반응할 수 있는 다양한 이벤트들이 있습니다.

이후에도 천천히 살펴볼 예정이지만 어떤 종류의 이벤트들이 있는지 미리 알아두면 필요할 때 알맞은 이벤트 핸들러를 설정할 수 있겠죠?

처음에는 가볍게 참고만 해뒀다가, 나중에 다양한 이벤트들을 살펴본 다음 다시 돌아와 복습한다면 훨씬 더 도움이 될거예요! :)

마우스 이벤트
이벤트 타입	설명
mousedown	마우스 버튼을 누르는 순간
mouseup	마우스 버튼을 눌렀다 떼는 순간
click	왼쪽 버튼을 클릭한 순간
dblclick	왼쪽 버튼을 빠르게 두 번 클릭한 순간
contextmenu	오른쪽 버튼을 클릭한 순간
mousemove	마우스를 움직이는 순간
mouseover	마우스 포인터가 요소 위로 올라온 순간
mouseout	마우스 포인터가 요소에서 벗어나는 순간
mouseenter	마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
mouseleave	마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)
키보드 이벤트
이벤트 타입	설명
keydown	키보드의 버튼을 누르는 순간
keypress	키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)
keyup	키보드의 버튼을 눌렀다 떼는 순간
포커스 이벤트
이벤트 타입	설명
focusin	요소에 포커스가 되는 순간
focusout	요소로부터 포커스가 빠져나가는 순간
focus	요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
blur	요소로부터 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)
입력 이벤트
이벤트 타입	설명
change	입력된 값이 바뀌는 순간
input	값이 입력되는 순간
select	입력 양식의 하나가 선택되는 순간
submit	폼을 전송하는 순간
스크롤 이벤트
이벤트 타입	설명
scroll	스크롤 바가 움직일 때
윈도우 창 이벤트
이벤트 타입	설명
resize	윈도우 사이즈를 움직일 때



이벤트객체
// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

function printEvent(event) {
  console.log(event);
	event.target.style.color = 'red';
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);

지난 시간에 이벤트 핸들러의 첫번째 파라미터에는 자동으로 이벤트 객체가 전달된다는 걸 배웠습니다.
그리고 그 이벤트 객체는 이벤트 타입에 따라서 갖고 있는 프로퍼티들이 조금씩 다른데요.

이번 시간에는 자주 사용되는 이벤트 객체의 프로퍼티들을 한 번 정리해 봅시다.

1. 공통 프로퍼티
아래의 프로퍼티들은 이벤트 타입과 상관없이 모든 이벤트 객체들이 공통적으로 가지고 있는 프로퍼티입니다.

프로퍼티	설명
type	이벤트 이름 ('click', 'mouseup', 'keydown' 등)
target	이벤트가 발생한 요소
currentTarget	이벤트 핸들러가 등록된 요소
timeStamp	이벤트 발생 시각(페이지가 로드된 이후부터 경과한 밀리초)
bubbles	버블링 단계인지를 판단하는 값
2. 마우스 이벤트
마우스와 관련된 이벤트의 경우에는 아래와 같은 이벤트 객체의 프로퍼티들을 가지고 있습니다.

프로퍼티	설명
button	누른 마우스의 버튼 (0: 왼쪽, 1: 가운데(휠), 2: 오른쪽)
clientX, clientY	마우스 커서의 브라우저 표시 영역에서의 위치
pageX, pageY	마우스 커서의 문서 영역에서의 위치
offsetX, offsetY	마우스 커서의 이벤트 발생한 요소에서의 위치
screenX, screenY	마우스 커서의 모니터 화면 영역에서의 위치
altKey	이벤트가 발생할 때 alt키를 눌렀는지
ctrlKey	이벤트가 발생할 때 ctrl키를 눌렀는지
shiftKey	이벤트가 발생할 때 shift키를 눌렀는지
metaKey	이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)
3. 키보드 이벤트
마우스와 관련된 이벤트의 경우에는 아래와 같은 이벤트 객체의 프로퍼티들을 가지고 있습니다.

프로퍼티	설명
key	누른 키가 가지고 있는 값
code	누른 키의 물리적인 위치
altKey	이벤트가 발생할 때 alt키를 눌렀는지
ctrlKey	이벤트가 발생할 때 ctrl키를 눌렀는지
shiftKey	이벤트가 발생할 때 shift키를 눌렀는지
metaKey	이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)
이 프로퍼티들은 자주 사용되는 프로퍼티일 뿐 이벤트 객체의 모든 프로퍼티가 아닙니다.
혹시 이벤트 객체의 더 많은 프로퍼티들이 궁금하시다면 아래 링크를 참고해 보세요! :)

이벤트 : https://developer.mozilla.org/en-US/docs/Web/API/Event
마우스 이벤트 : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

키보드 이벤트: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

이벤트 버블링
// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

content.addEventListener('click', function(e) {
  console.log('content Event');
  console.log(e.currentTarget);
});

title.addEventListener('click', function(e) {
  console.log('title Event');
  console.log(e.currentTarget);
});

list.addEventListener('click', function(e) {
  console.log('list Event');
  console.log(e.currentTarget);
});

for (let item of items) {
  item.addEventListener('click', function(e) {
    console.log('item Event');
    console.log(e.currentTarget);
		e.stopPropagation();
  });
}

target은 부모요소의 핸들러들이 최초 이벤트가 어디서 일어났는지 알게하기위해서 이벤트의 시작점을 가지고 있다.

-> 이벤트 핸들러가 등록된 요소에 접근하고 싶을 땐
target.currentTarget으로 코드를 만들면 됨.

의문** target vs currentTarget
target: 이벤트를 발생시킨 요소
currentTarget : 이벤트 핸들러가 바인딩된 요소


	e.stopPropagation(); :-> 버블링 멈추기
그런데 버블링을 막으면 부모요소가 이벤트를 발생시킬 수 있는 범위가 그만큼 줄어드는 것이므로 꼭 필요한 상황이 아니면 막지않는것이 좋다.


캡처링

사진1

이벤트가 발생하면 가장 먼저 window 객체에서부터 target 까지 이벤트 전파가 일어납니다. (캡쳐링 단계)
그리고 나서 타깃에 도달하면 타깃에 등록된 이벤트 핸들러가 동작하고, (타깃 단계)
이후 다시 window 객체로 이벤트가 전파됩니다. (버블링 단계)

이런 과정을 통해 각 요소에 할당된 이벤트 핸들러가 호출되는데요.

캡쳐링 단계에서 이벤트를 발생시켜야 하는 일은 매우 드문 경우입니다. 보통 타깃 단계에서 target에 등록된 이벤트 핸들러가 있으면 해당 이벤트 핸들러가 먼저 동작한 이 후에 버블링 단계에서 각 부모 요소에 등록된 이벤트 핸들러가 있으면 그 때 해당 이벤트 핸들러가 동작하는 것이 일반적인데요.

하지만 상황에 따라서는 캡쳐링 단계에서 부모 요소의 이벤트 핸들러를 동작시켜야 할 수도 있겠죠? 캡쳐링 단계에서 이벤트 핸들러를 동작시키려면, addEventListener에 세번째 프로퍼티에 true 또는 { capture:true }를 전달하면 됩니다.


자식요소에서 발생하는 이벤트를 부모요소가 다루는 경우를 이벤트 위임이라고 한다.
const list = document.querySelector('#list');
list.addEventListener('click', function(e) {
	// if (e.target.tagName === 'LI')
	if (e.target.classList.contains('item')) {
		e.target.classList.toggle('done');
	}
});

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);
li.addEventListener('click', function(e) {
  e.stopPropagation();
});


브라우저 기본동작
// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

link.addEventListener('click', function(e) {
	e.preventDefault();
	alert('지금은 이동할 수 없습니다.');
});

input.addEventListener('keydown', function(e) {
	if (!checkbox.checked) {
		e.preventDefault();
		alert('체크박스를 먼저 체크해 주세요.');
	}
});

document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
	alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
});
1. 이벤트 핸들러 등록하기
HTML의 속성이나 DOM 프로퍼티를 활용해 이벤트를 등록하는 방법 외에 Element.addEventListener('type', 'handler')를 통해서 이벤트 핸들러를 등록할 수 있습니다.

2. 이벤트 핸들러 삭제하기
addEventListener 메소드를 활용해서 이벤트 핸들러를 등록했다면, Element.removeEventListner('type', 'handler')를 통해서 이벤트 핸들러를 삭제할 수 있습니다.

3. 이벤트 객체 (Event Object)
이벤트가 발생하면 이벤트 핸들러의 첫 번째 파라미터에는 자동으로 이벤트 객체가 전달됩니다.

이벤트 객체는 이벤트 종류마다 가지고 있는 프로퍼티가 다르며, 이벤트에 대한 유용한 정보들을 프로퍼티로 가지고 있습니다.

4. 이벤트 버블링 (Event Bubbling)
이벤트는 전파가 됩니다. 
어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작하는 것뿐만 아니라 부모 요소로 이벤트가 계속해서 전파되면서 각 요소에도 등록된 이벤트 핸들러가 있다면 차례로 이벤트 핸들러가 동작하는데요.

자식 요소에서 부모 요소로 이벤트가 전파되는 것을 이벤트 버블링(Event Bubbling)이라고 부릅니다.

참고로 이벤트 버블링은 이벤트 객체의 stopPropagation 메소드로 전파를 막을 수 있습니다.

5. 이벤트 위임 (Event Delegation)
버블링 개념을 활용하면 훨씬 효과적인 이벤트 관리를 할 수 있습니다. 예를 들어 자식 요소 각각에 이벤트 핸들러를 하나씩 등록할 필요 없이 부모 요소에서 한 번에 자식 요소들에 발생한 이벤트를 관리할 수도 있는데요.

이렇게 이벤트를 다루는 방식을 자식 요소의 이벤트를 부모 요소에 위임한다고 해서 이벤트 위임(Event Delegation)이라고 부릅니다.

이벤트 위임을 잘 활용하면 훨씬 더 효율적으로 이벤트를 다룰 수 있습니다.

6. 브라우저의 기본 동작
브라우저에는 각 태그별 혹은 상황별로 기본적으로 약속된 동작들이 있습니다.

예를 들어 마우스 오른쪽 버튼을 클릭하면 상황에 맞는 메뉴 창이 뜬다거나, input 태그에 커서를 두고 키보드 키를 누르면 해당 값이 입력된다거나..

그런데 만약 이러한 동작들을 막고 싶다면 이벤트 객체의 preventDefault 메소드를 통해 막을 수가 있습니다.

하지만 각 HTML 태그들이 가지고 있는 고유한 역할과 의미를 훼손하게 될 수도 있기 때문에 꼭 필요한 경우에만 주의해서 사용해야 한다는 점. 꼭 기억해 주세요 :)
