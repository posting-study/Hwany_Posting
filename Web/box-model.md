## 박스모델

### `padding`과 `margin`

박스 모델에서 요소는 `내용`, `패딩`, `테두리`로 이루어져 있다. 

`padding`은 **내용과 테두리 사이의 여유공간**이며 `margin`은 **요소 주위의 여백**이다.

<p align="center"><img width="60%" src="https://user-images.githubusercontent.com/76484900/147253813-66dd5284-202a-43fb-8c97-b9aa99dcbf9d.png"></p>

### `padding` 적용법🌜

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



### `margin` 적용법

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

>**요소 가운데 정렬**
>margin left와 right를 auto로 지정
>
>```css
>p {  
>    margin: auto auto;  
>}
>```

### 요소의 크기 설정

`width` `height` 로 요소의 가로 세로 크기를 지정할 수 있다.

`min-*` 혹은 `max-*`로 최소, 최대의 크기를 설정할 수 있다.

하지만 `min/max` 를 사용하다보면 내용물이 컨테이너 밖으로 넘치는 경우가 있는데 이럴 때 사용하는 것이 `overflow` 속성이다.


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








테두리 설정

1. 한줄에 작성

border: 굵기  선종류 색상;

2. 개별로 선 작성

3. 테두리 없애기
border: none;

4. 테두리 둥글게 만들기
border-radius
*개별로 둥글게 만들기




배경색 설정

background-color: 색상 값;


width와 heigth 값을 줬는데 실제 영역의 크기와 다를 때!

box-sizing 문제.




