# 이벤트
## 이벤트 핸들러 사용하기⚓️
1. 이벤트 핸들러 **등록**하기
HTML의 속성이나 DOM 프로퍼티를 활용해 이벤트를 등록하는 방법 외에  **`Element.addEventListener('type', 'handler')`** 를 통해서 이벤트 핸들러를 등록할 수 있다.

2. 이벤트 핸들러 **삭제**하기
`addEventListener` 메소드를 활용해서 이벤트 핸들러를 등록했다면,  **`Element.removeEventListner('type', 'handler')`** 를 통해서 이벤트 핸들러를 삭제할 수 있다.

>이벤트 핸들러를 삭제할 때에는 **handler에 들어가는 함수객체가 동일한 객체**여야 한다. 익명함수를 넣으면 삭제할 수 없다. 선언하고 넣자!

<br>

## 이벤트 종류🔮
### 마우스 이벤트🐀


|  이벤트 이름  |  내용  |
|--|--|
| **mousedown** | 마우스 버튼을 누르는 순간 |
| **mouseup**	| 마우스 버튼을 **눌렀다 떼는** 순간 |
| **click**	| 왼쪽 버튼을 클릭한 순간 |
| **dblclick**	| 왼쪽 버튼을 **빠르게 두 번** 클릭한 순간 |
| **contextmenu**	| 오른쪽 버튼을 클릭한 순간 |
| **mousemove**	| 마우스를 **움직이는 순간** |
| **mouseover**	| 마우스 포인터가 **요소 위로** 올라온 순간 |
| **mouseout**	|마우스 포인터가 **요소에서 벗어나는** 순간 |
| **mouseenter**	|마우스 포인터가 요소 위로 올라온 순간 **(버블링이 일어나지 않음)** |
| **mouseleave**	|마우스 포인터가 요소에서 벗어나는 순간 **(버블링이 일어나지 않음)** |

---

<br>

### 키보드 이벤트⌨️
|이벤트 이름 |내용  |
|--|--|
| **keydown** | 키보드의 버튼을 누르는 순간 |
| **keypress** | 키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음) |
| **keyup** | 키보드의 버튼을 눌렀다 떼는 순간 |

---

<br>

### 포커스 이벤트📸
|이벤트 이름|내용  |
|--|--|
| **focusin** | 요소에 포커스가 되는 순간 |
| **focusout** | 요소로부터 포커스가 빠져나가는 순간 |
| **focus** |요소에 포커스가 되는 순간 **(버블링이 일어나지 않음)** |
| **blur** |요소로부터 포커스가 빠져나가는 순간 **(버블링이 일어나지 않음)** |

---

<br>

### 입력 이벤트🖨
|이벤트 이름|내용  |
|--|--|
| **change** | 입력된 값이 바뀌는 순간 |
| **input** | 값이 입력되는 순간 |
| **select** |입력 양식의 하나가 선택되는 순간 |
| **submit** |폼을 전송하는 순간 |

---

<br>

### 기타 이벤트🤹‍♂️
|이벤트 이름|내용  |
|--|--|
| **scroll** | 스크롤 바가 움직일 때 |
| **resize** | 윈도우 사이즈를 움직일 때 |

---

<br>

## 이벤트 객체🏗


```js
// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

//이벤트 핸들러
function printEvent(event) { // event는 이벤트 객체
  console.log(event);
	event.target.style.color = 'red';
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);
```

<br>

- 이벤트가 발생하면 **이벤트 핸들러**의 첫 번째 파라미터에는 자동으로 이벤트 객체가 전달된다.

이벤트 객체는 이벤트 종류마다 가지고 있는 프로퍼티가 다르며, 이벤트에 대한 유용한 정보들을 프로퍼티로 가지고 있다.

<br>

🙋‍♂️**자주 사용되는 이벤트 객체의 프로퍼티들**

**1. 공통 프로퍼티**

<br>

|Property| 설명 |
|--|--|
| **type** | 이벤트 이름 ('click', 'mouseup', 'keydown' 등) |
| **target** | 이벤트가 발생한 요소 |
| **currentTarget** | 이벤트 핸들러가 등록된 요소 |
| **timeStamp** | 이벤트 발생 시각(페이지가 로드된 이후부터 경과한 밀리초) |
| **bubbles** | 버블링 단계인지를 판단하는 값 |
	
---
<br>

**2. 마우스 이벤트**

|Property| 설명 |
|--|--|
| **button** | 누른 마우스의 버튼 (0: 왼쪽, 1: 가운데(휠), 2: 오른쪽) |
| **clientX, clientY** | 마우스 커서의 **브라우저 표시 영역**에서의 위치 |
| **pageX, pageY** | 마우스 커서의 **문서 영역**에서의 위치 |
| **offsetX, offsetY** | 마우스 커서의 **이벤트 발생한 요소**에서의 위치 |
| **screenX, screenY** | 마우스 커서의 **모니터 화면 영역**에서의 위치 |
| **altKey** | 이벤트가 발생할 때 alt키를 눌렀는지 |
| **ctrlKey** | 이벤트가 발생할 때 ctrl키를 눌렀는지 |
| **shiftKey** | 이벤트가 발생할 때 shift키를 눌렀는지 |
| **metaKey** | 이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키) |

---
<br>

**3. 키보드 이벤트**

|Property| 설명 |
|--|--|
| **key** | 누른 키가 가지고 있는 값 |
| **code** | 누른 키의 물리적인 위치 |
| **altKey** | 이벤트가 발생할 때 alt키를 눌렀는지 |
| **ctrlKey** | 이벤트가 발생할 때 ctrl키를 눌렀는지 |
| **shiftKey** | 이벤트가 발생할 때 shift키를 눌렀는지 |
| **metaKey** | 이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키) |

<br>
<br>

>**추가적인 이벤트 탐색**
>
>이벤트 : https://developer.mozilla.org/en-US/docs/Web/API/Event
>
>마우스 이벤트 : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
>
>키보드 이벤트: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

---
<br>


## 이벤트 버블링🧜‍♀️


이벤트는 **전파**가 된다. 어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작하는 것뿐만 아니라 부모 요소로 이벤트가 계속해서 전파되면서 각 요소에도 등록된 이벤트 핸들러가 있다면 차례로 이벤트 핸들러가 동작한다.

자식 요소에서 부모 요소로 이벤트가 전파되는 것을 `이벤트 버블링(Event Bubbling)`이라고 부른다.

```js
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
```

<br>


>**target VS currentTarget**
>
>**target**은 부모요소의 핸들러들이 최초 이벤트가 어디서 일어났는지 알게하기위해서 `이벤트의 시작점`을 가지고 있다.
>
>**currentTarget**은 이벤트 핸들러가 바인딩된 요소만을 가리킨다.

<br>

버블링을 멈추려면 `e.stopPropagation()` 을 사용하면 되지만 부모요소가 이벤트를 발생시킬 수 있는 범위가 그만큼 줄어드는 것이므로 꼭 필요한 상황이 아니면 막지않는것이 좋다.


## 이벤트 캡처링📸

사진1

1. 이벤트가 발생하면 가장 먼저 window 객체에서부터 target 까지 이벤트 전파가 일어난다. **(캡쳐링 단계)**
2. 그리고 나서 타깃에 도달하면 타깃에 등록된 이벤트 핸들러가 동작하고 **(타깃 단계)**
3. 이후 다시 window 객체로 이벤트가 전파된다. **(버블링 단계)**
<br>

상황에 따라 캡처링 단계에서 부모 요소의 이벤트 핸들러를 동작시켜야 하는경우에 addEventListener의 세번째 프로퍼티에 **`true`** 를 전달하면 된다.

<br>

## 이벤트 위임👨‍👨‍👦

버블링 개념을 이용하면 부모 요소에서 한 번에 자식 요소들에서 발생한 이벤트를 관리할 수 있다.
##### 자식요소에서 발생하는 이벤트를 부모요소가 다루는 경우를 이벤트 위임이라고 한다.
```js
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
```

---
<br>

## 브라우저의 기본 동작🕶

브라우저에는 각 태그별 혹은 상황별로 기본적으로 약속된 동작들이 있다.

🤷‍♂️예를 들어 마우스 오른쪽 버튼을 클릭하면 상황에 맞는 메뉴 창이 뜬다거나, input 태그에 커서를 두고 키보드 키를 누르면 해당 값이 입력된다거나..

그런데 만약 이러한 동작들을 막고 싶다면 이벤트 객체의 **`preventDefault`** 메소드를 통해 막을 수가 있다.

```js
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
```

