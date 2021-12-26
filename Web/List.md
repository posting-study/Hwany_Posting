## 리스트
### 리스트의 종류🙄
`<ol>` : **ordered list**
`<ul>` : **unordered list**

#### `<ol>` 리스트의 type 속성
`type="a"` : 순서가 *소문자* 로 나온다 </br>
`type="A"` : 순서가 *대문자* 로 나온다 </br>
`type="i"` : 순서가 *로마숫자* 로 나온다 </br>
`type="I"` : 순서가 *큰 로마숫자* 로 나온다 </br>

---

### 리스트 스타일링😉
#### 리스트에 점이 있는 이유는?

`display: list-item`  이기 때문에! 이 속성을 `block`으로 바꿔주면 된다.

```css
ul{  
	padding-left: 0;  
	width: 200px;  
}  
  
li{  
	list-style-type : square;
	/*사각형의 점들*/ 
	list-style: none; 
	/* 점을 없앰 */  
	margin-bottom: 10px;  
	background-color: #77abff;  
	color: white;  
	padding: 10px 20px  
}  

```


