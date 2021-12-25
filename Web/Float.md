## float

### float 🚗
3차원으로 요소가 다른 층으로 올라가는 것이다. 
이때 `inline`요소는 붕 뜬 아래로 들어갈 수 없기 때문에 신문기사의 레이아웃에서 사용한다
```css
#codeit {
  display: block;
  width: 180px;
  height: 180px;
  float: left;
  margin: 0 15px 15px 0;
}

#youtoo {
  display: block;
  width: 180px;
  height: 180px;
  float: right;
  margin: 0 0 15px 15px;
}
```

<사진>


### multi float🚕

`float`은 선언한 순서대로 차곡  차곡 float됨.
되게 유동적으로 안올라가지면 **옆으로 쓱** 옮기고, 아래로 내려오고 브라우저 길이를 늘렸다가 줄이면 유동적으로 쓱쓱 변함

```css
body {
  margin: 0;
}

/* 전체 */

div {
  height: 200px;
  float: left;
}

/* 개별 */

#red {
  width : 100%;
  background-color: #FF0000;
  
}

#orange {
  width: 25%;
  background-color: #FFA500;
}

#yellow {
  width: 50%;
  background-color: #FFFF00;
}

#green {
  width: 25%;
  background-color: #00F000;
}

#blue {
  width: 50%;
  background-color: #0000FF;
}

#indigo {
  width: 50%;
  background-color: #4B0C82;
}

#purple {
  width: 100%;
  background-color: #B0C0B0;
}
```
```html
<!DOCTYPE html>

<html>
  <head>
    <title>그리드 연습</title>
    <meta charset="utf-8" />
    <link href="css/styles.css" rel="stylesheet" />
  </head>

  <body>
    <div id="red"></div>
    <div id="orange"></div>
    <div id="yellow"></div>
    <div id="green"></div>
    <div id="blue"></div>
    <div id="indigo"></div>
    <div id="purple"></div>
  </body>
</html>
```
<사진>

### clear 속성🚙
```css
div {
	clear : left;
}
```

해당 속성을 먹인놈의 왼쪽에 떠있는 놈이 없도록 함 ->  **줄바꿈!**
```html
<style>
.clear_fix {
 clear: left;
}
</style>


<div class="grid">
~~
<div class ="clear_fix"></div>
</div>
```


grid 영역이 붕 떠있어서 세로 길이를 인식하지 못한 상태임. 
따라서 `clear div` 요소를 추가해줘서 float된 요소가 없는 부분까지 세로 길이를 쭈욱 늘려서 다른 요소가 grid 영역 안으로 침범하지 못하게 함.


