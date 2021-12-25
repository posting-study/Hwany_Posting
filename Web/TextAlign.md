## 정렬
### 가운데 정렬 🔳
#### 1. `inline` 요소
```css
/* 부모 태그에 속성 부여 */
.div {
	text-align: center;
}
```
#### 2. `block` 요소
```css
.div {
	margin : auto auto;
}
```
<br>

---

### 세로 가운데 정렬 🔲
#### 1. `vertical-align`
`baseline`은 vertical-align의 조건을 충족시키기위해 줄의 높이를 최소화 시키는 곳에 위치한다.

 1. 정렬 시키고자 하는 태그에 `vertical-align: middle;`을 설정한다.
 2. 부모 태그에 세로길이가 100%인 요소를 하나 임의로 만들고 그 요소에도 `vertical-align: middle;`를 설정한다
 3. 2번이 싫다면 부모에 정렬시키고자 하는 태그와 같은 길이의 `line-height` 속성을 부여하고 정렬시키고자 하는 태그에는 `line-height:normal;`을 부여한다. *`상속`됨을 막기 위해!*
<br>

#### 2. `flex`
나중에 또 추가할게용


