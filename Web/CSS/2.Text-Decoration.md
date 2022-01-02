## 텍스트 꾸미기

### 텍스트 색 꾸미기🎨

#### 1. 색 상수 사용
css에서 정해준 색 상수 중 하나를 사용하는 방법이다. 

대략 140개의 색이 브라우저에서 지원한다!🤓
```css
h1 {
	color: blue;
}
```
#### 2. RGB 값 이용
RGB의 조화로 색을 표현할 수 있다. 

원하는 색상의 rgb 값만 알면 모든 색을 표현할 수 있다.

```css
h1 {
	color: rgb(83, 237, 65);
}
```
#### 3. HEX 값 이용
RGB의 값을 단순히 16진법으로 변경한 방식이다.
위 rgb 값의 경우 83은 53, 237은 ED, 65는 41이다.

```css
h1{
	color: #53ED41
}
```

<br>
<br>

### 폰트 굵기 설정🖋

폰트 굵기를 설정하기 위해 font-weight 속성을 사용하면 된다.

값은 100부터 시작해 100단위로 900까지 있으며 normal은 400, bold는 700과 같은 의미이다.

>150이나 230 같은 값은 사용하면 기본값으로 설정된다. 즉 사용할 수 없는 값이다.

```css
#p1 {  
font-weight: 400;  
}  
  
#p2 {  
font-weight: 700;  
}  
  
#p3 {  
font-weight: normal;  
}  
  
#p4 {  
font-weight: bold;  
}
```
<br>
<br>


### 텍스트 정렬🙆‍♂️

텍스트를 정렬할 때에는 text-align 속성을 사용한다. ( `<div>` 태그의 내용물도 정렬할 수 있다. )

```css
#p1 {  
color: red;  
text-align: left;  
}  
  
#p2 {  
color: green;  
text-align: right;  
}  
  
#p3 {  
color: blue;  
text-align: center;  
}

.navigation {  
text-align: center;  
}
```

> **textDecoration**
> text에 기본적으로 있는 밑줄과 같은 css를 지워주는 역할이다.
>
>
> `<a>` 의 경우 기본적으로 밑줄이 있는데 
> ```css
> a {
> text-decoration:none;
>}
> ```
> `text-decoration` 속성을 통해 삭제할 수 있다

<br>
<br>


### 폰트 크기🌝

폰트의 크기는 절대적 단위인 `px` `pt`와 상대적 단위인 `%` `em`이 있다.

1em = 100%
2em = 200% 

이런 식인데 단 %가 이미지나 다른 꾸밈요소로 갈 때에는 `상위 요쇼의 크기`를 기준으로 작동한다.

em의 경우는 `상위 폰트사이즈 기준`이다.

#### line-height를 이용해 줄간격을 조절할 수 있다. 

```css
.p1 {  
background-color: red;  
line-height: normal;  
}  
  
.p2 {  
background-color: green;  
line-height: 80px;  
}
```

<br>
<br>


### 폰트 설정💡
내장 폰트를 설정할 때에는 `font-family` 속성을 사용한다.

그러나 이미 존재하는 폰트를 사용하고 싶다면??

#### 1. 구글폰트
[https://fonts.google.com/?subset=korean](https://fonts.google.com/?subset=korean) 사이트에서 원하는 폰트가 있으면 `<link>`를 복사해  `<head>`안에 넣고 
스타일 태그 안에 `font-family` 속성을 복사하면 된다.

#### 2. 폰트 파일 적용
css파일에서 `@font-face`를 이용한다.
```css
@font-face{  
src:url("font파일이 있는 경로/파일이름");  
font-family: "폰트이름(사용자지정)";  
}  
  
p{  
font-family : "폰트이름(사용자지정)";  
}
```
