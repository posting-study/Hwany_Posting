## 박스모델

### `padding`과 `margin`

박스 모델에서 요소는 `내용`, `패딩`, `테두리`로 이루어져 있다. 

`padding`은 **내용과 테두리 사이의 여유공간**이며 `margin`은 **요소 주위의 여백**이다.

<p align="center"><img width="60%" src="https://user-images.githubusercontent.com/76484900/147253813-66dd5284-202a-43fb-8c97-b9aa99dcbf9d.png"></p>
<br>
<br>

### `padding` 적용법🌜
<br>

#### 1. 직관적
모든 방향을 직접 지정해주는 방법
```css
p {  
border: 1px solid blue;  
padding-top: 20px;  
padding-bottom: 40px;  
padding-left: 120px;  
padding-right: 60px;  
}
```
~~쓰겠..냐..?~~
<br>

#### 2. 한 줄에 딱 쓰기

순서는 Top 부터 시계방향으로 돌아간다

```css
/* 모든 방향의 패딩이 다른 경우*/
p {  
border: 1px solid blue;  
padding: 20px 60px 40px 120px;  
}

/* 모든 방향의 패딩이 같을 경우 */
p {  
border: 1px solid blue;  
padding: 60px;  
}

/* Top-Bottom 같고 Left-Right 같은 경우 */
p {  
border: 1px solid blue;  
padding: 50px 100px;  
}
```


<br>
<br>

### `margin` 적용법
<br>

#### 1. 직관적
```css
p {  
border: 1px solid blue;  
margin-top: 50px;  
margin-bottom: 40px;  
margin-left: 200px;  
margin-right: 60px;  
}
```
~~쓰겠냐고 ㅋㅋ~~
<br>

#### 2. 한 줄에 딱 쓰기

```css
/* 모든 방향의 마진이 다른 경우*/
p {  
margin: 50px 60px 40px 200px;  
}
/* 모든 방향의 마진이 같을 경우 */
p {  
margin: 50px;  
}
/* Top-Bottom 같고 Left-Right 같은 경우 */
p {  
margin: 50px 70px;  
}
```
<br>


>**요소 가운데 정렬**
>margin left와 right를 auto로 지정
>
>```css
>p {  
>    margin: auto auto;  
>}
>```
<br>


### 요소의 크기 설정

`width` `height` 로 요소의 가로 세로 크기를 지정할 수 있다.

`min-*` 혹은 `max-*`로 최소, 최대의 크기를 설정할 수 있다.

하지만 `min/max` 를 사용하다보면 내용물이 컨테이너 밖으로 넘치는 경우가 있는데 이럴 때 사용하는 것이 `overflow` 속성이다.

<br>

### Overflow
#### 1. visible
- 넘쳐나는 내용물이 그대로 보임
#### 2. hidden
- 넘쳐나는 부분을 숨겨버림
#### 3. scroll
- 내용물을 숨겼다가 사용자가 스크롤을 하면 볼 수 있게 해준다
#### 4. auto
- auto는 내용물이 넘쳐날 때만 스크롤바를 보여준다.

_MAC OS에서는 scroll과 auto의 차이가 명확하지 않다._


<br>
<br>

---

### 테두리 설정📏

<br>


#### 1. 한줄에 작성
```css
div {
	border: 굵기 선종류 색상;
}

.p1 {  
border: 2px solid #4d9fff;  
}  
/* 실선 */  
.p2 {  
border: 2px dotted #4d9fff;  
}  
/* 점선 */    
.p3 {  
border: 2px dashed #4d9fff;  
}
/* 파선 */  
```
<br>

#### 2. 개별로 선 작성
```css
.p1 {  
border-top: 3px dotted #4d9fff;  
border-bottom: 2px dashed red;  
border-left: 5px solid green;  
}
```
<br>

#### 3. 테두리 없애기
`<input>` 태그 같은 경우 기본적으로 테두리가 설정돼있다!

이런 요소들의 테두리를 없애고 싶으면 직접 border 설정을 해주면 된다.

```css
input {
	border: none;
}
```
<br>

#### 4. 테두리 둥글게 만들기

```css
.div1 {  
border: 1px solid green;  
border-radius: 5px;  
margin-bottom: 20px;  
}  
  
.div2 {  
border: 1px solid green;  
border-radius: 30px;  
}
```
테두리 곡률도 마찬가지로 각 꼭지점을 다르게 설정할 수 있다.

~~위랑 똑같으니까 굳이 안쓸게?~~
<br>
<br>
---

### 배경색 설정🎨
`background-color` 속성을 사용하면 된다.

```css
div {  
	background-color: Hex코드 or rgb코드 or 색 상수;  
}

div {  
	background-color: #4d9fff;
}

div {
	background-color: transparent;
	/* 배경 투명색 */
}
```
<br>

---

### 어라..? 왜 박스 px이 다르지..?

```css
.div1 {  
border: 10px solid red;  
width: 300px;  
height: 200px;  
margin-bottom: 50px;  
}  
  
.div2 {  
border: 10px solid red;  
width: 300px;  
height: 200px;  
padding: 40px;  
}
```
.div1과 .div2의 width와 height를 똑같이 설정해줬는데, 결과물을 보면 크기가 서로 다르다!

그 이유는`width`와 `height`가 `테두리(border)`와 `패딩(padding)`을 뺀 `내용물(content)`의 크기만 나타내기 때문!

##### 설정 변경!
```css
div {
	box-sizing: border-box;
	/* 기본값은 content-box */
}
```


