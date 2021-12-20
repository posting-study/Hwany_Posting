## WebPublishing 시작

😙 항상 리액트 하면서 **css** 때문에 구글링하기 귀찮았는데 이제야 정리하기 시작한다..!

🤯 정말 기초적이더라도 차곡차곡 쌓아갈거다.
## 🏢HTML 5 기본구조

```html
<!DOCTYPE html>
<!-- 이 문서가 html 5 버전이란걸 명시 -->
<html>
<head>
<!-- 웹문서 정보에 관한 내용은 head 안에 쓴다 -->
  <title>웹페이지 탭에 뜨는 내용</title>
  <meta charset="utf-8">
  <!-- 브라우저의 인코딩을 utf-8로 설정해 한글이 안깨지게 해줘 -->
</head>
<body>
<!-- 웹문서의 내용에 관한건 body 안에 쓴다 -->
<b>텍스트 굵게 쓰기</b> - 강세의 의미는 없어
<strong>텍스트 굵게 쓰기</strong> - 강세의 의미주려고 써  

<i>텍스트 날려 쓰기</i> - 강세의 의미는 없어
<em>텍스트 날려 쓰기</em> - 강세의 의미주려고 써  

</body>
</html>
```
<br>



<b>텍스트 굵게 쓰기</b> - 강세의 의미는 없어</br>
<strong>텍스트 굵게 쓰기</strong> - 강세의 의미주려고 써</br>
<i>텍스트 날려 쓰기</i> - 강세의 의미는 없어</br>
<em>텍스트 날려 쓰기</em> - 강세의 의미주려고 써</br>


## ⚓️Anchor 태그
```html
<a href="경로">
<!-- 경로에는 상대경로 절대경로 url id 등이 들어갈 수 있어 -->
```

<br/>
<br/>
앵커는 기본적으로 **하이퍼링크** 역할을 하지만 다양하게 활용이 가능해!🐤
<br/>

---
### - **How to use an image as a link**
```html
<a href="https:/google.com">
<img border="0" alt="Google" src="대충 구글이미지 링크" width="50%">
</a>
```

<a href="https://google.com">
<img border="0" alt="Google" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" width="50%" >
</a>

### - **How to open a link in a new browser window**
```html
<a href="https://google.com" target="_blank">Visit Google.com!</a>
```
<a href="https://google.com" target="_blank">Visit Google.com!</a>


### - **How to link to another section on the same page**
```html
<a href="#section2">Go to Section 2</a>
<!-- 이러면 section2 id를 가진 다른 a 태그 위치로 이동해! -->
```
<a href="#section2">Go to Section 2</a>

### - **How to link to a JavaScript**
```html
<a href="javascript:alert('Hello World!');">Execute JavaScript</a>
```

   <a href = "javascript:alert('Hello World!');">Execute JavaScript</a>

---

> 🐣 _**파일의 경로 찾기**_
> - workSpace
> -- folder1 
> -- -page1.html
> -- index.html
>
>1. index.html에서 page1.html 접근하기
>-- folder1/page1.html
>2. pag1.html에서 index.html 접근하기
>-- ../index.html - 이거 점 두개인데 왜 세개 찍히냐?

 
## 🌝CSS 코드에 적용하기

🙉**css 문법**은 선택자와 속성, 속성값을 나타내는 것으로 시작한다.

```css
Selector {
property: value;
}
```
### 1. Style tag 이용하기

```html
  <style>
    h1 {
      color: green;
      text-align: center;
    }

    p {
      font-size: 18px;
    }
  </style>
```

```html
<h1>Hello World!</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sit amet nunc ornare convallis. Pellentesque ac posuere lectus. In eu ipsum et quam finibus fermentum vitae sit amet magna.</p>
```
마크다운 글자색 변경에 대해서 더 알아보자..
