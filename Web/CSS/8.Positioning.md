## 포지셔닝

### 1. relative

```css
.div {
	position: relative;
	top: 30px;
	right: 10px;
}
/* 원래 요소가 있어야 할 공간에서 아래로 30px, 좌로 10px 이동 */
```
<br>

>**margin과 차이점**
>margin은 다른 요소를 고려하여 움직이지만 relative는 아니다!

<br>

### 2. fixed
```css
.div {
	position: fixed;
	top: 30px;
	right: 10px;
}
/* 브라우저 왼쪽 위를 기준으로 아래로 30px, 좌로 10px 이동 */
```
**스크롤시 `위치`가 변하지 않는다.**

<br>

### 3. absolute
```css
.div {
	position: absolute;
	top: 30px;
	right: 10px;
}
/* 가장 가까운 포지셔닝된 `부모`요소를 기준으로 아래로 30px, 좌로 10px 이동 */
```
<br>

>**포지셔닝 유뮤**
>`position`의 기본값인  `static`은 포지셔닝이 안된 것이고 `fixed` `relative` `absolute`는 포지셔닝이 된 것이다.
