## 선택자

css에서 스타일링 해줄 요소는 `선택자`로 결정한다. 

### 선택자의 종류💡

#### 1. 태그 이름

```css
/* 모든 <h1> 태그 */  
h1 {  
	color: orange;  
}
```
<br>

#### 2. 클래스/아이디
```css
/* 'important'라는 클래스를 갖고 있는 모든 태그 */  
.important {  
	color: orange;  
}  
  
/* 'favorite'라는 아이디를 갖고 있는 태그 */  
#favorite {  
	color: blue;  
}
```
<br>

---

#### 3. children 선택자

```css
/* 'div1' 클래스를 갖고 있는 요소의 자식 중 모든 <i> 태그 */  
.div1 i {  
	color: orange;  
}
```
<br>

#### 4. direct children 선택자
```css
/* 'div1' 클래스를 갖고 있는 요소의 직속 자식 중 모든 <i> 태그 */  
.div1 > i {  
	color: orange;  
}
```
<br>

#### 5. 복수 선택자
```css
/* 'two' 클래스를 가지고 있는 태그 모두와 'four' 클래스를 가지고 있는 태그 모두 선택 */  
.two, .four {  
	color: orange;  
}
```
<br>

#### 6. 다조건 선택자
```css
/* 'outside' 클래스를 갖고 있으면서 'one' 클래스도 갖고 있는 태그 */  
.outside.one {  
	color: blue;  
}  
  
/* 'inside' 클래스를 갖고 있으면서 'two' 클래스도 갖고 있는 태그 */  
.inside.two {  
  color: orange;  
}
```
<br>

##### **5번과 6번은 `,`의 유무 차이이다**
<br>

#### 7. Pseudo-class (가상 클래스)
`:`를 사용하면 몇가지 `가상 클래스`를 선택할 수 있다

```css
/* n번째 자식**/

/* .div1의 자식인 <p> 태그 중 3번째 */  
.div1 p:nth-child(3) {  
	color: blue;  
}

/* .div1의 자식인 <p> 태그 중 첫 번째 */  
.div1 p:first-child {  
  color: red;  
}  
  
/* .div1의 자식인 <p> 태그 중 마지막 */  
.div1 p:last-child {  
  color: green;  
}  
  
/* .div1의 자식 중 마지막 자식이 아닌 <p> 태그 */  
.div1 p:not(:last-child) {  
  font-size: 150%;  
}  
  
/* .div1의 자식 중 첫 번째 자식이 아닌 <p> 태그 */  
.div1 p:not(:first-child) {  
  text-decoration: line-through;  
}
```
<br>

#### 8. 마우스 오버(HOVER)
```css
h1 {  
	color: orange;  
}  
  
/* 마우스가 <h1> 태그에 올라갔을 때 */  
h1:hover {  
	color: green;  
}
```
<br>

---

### 상속👨‍👩‍👧‍👦
```html
<div class="div1">  
	<h1>Heading 1</h1>  
	<p>Paragraph bla bla bla</p>  
</div>
```

```css
.div1 {  
	color: blue;  
}
```
부모 컴포넌트의 폰트색만 바꾸었을 뿐인데 자식 컴포넌트인 h1과 p의 폰트 색 또한 바뀌었다.

그 이유는 부모의 속성이 자식에게 `상속(inherit)`됐기 때문!
<br>


**상속되는 속성들**
🙋‍♂️`color` `font-family` `font-size` `font-weight` `line-height` `list-stlye` `text-align` `visibility` `...`

하지만 특정 태그, 예를 들면 `<a>` 태그는 상속되지 않는데 이때 해당 속성값에 `inherit`를 쓰면 된다.

```html
<div class="div1">  
Let's go to <a href="[https://google.com"](https://google.com%22/) target="_blank">google</a>!  
</div>  
  
<div class="div2">  
Let's go to <a href="[https://google.com"](https://google.com%22/) target="_blank">google</a>!  
</div>
```
```css
.div1 {  
color: green;  
}  
  
.div2 {  
color: orange;  
}  
  
.div2 a {  
color: inherit;  
}
```
<br>

---

### 선택자의 우선순위👀

#### 1. 같은 선택자 등장시 이전에 나온 스타일을 덮어쓴다.
```css
h1 {  
	color: blue;  
	text-align: center;  
}  
  
h1 {  
	color: green;  
}
```
<br>

#### 2. 명시도 계산
*우선순위*
 1. `인라인 스타일`
 2. `id`의 수
 3. `class`, `attribute`, `psedu-class`의 수
 4. `요소`가 많은 수

<그림>


