## WebPublishing ์์

๐ ํญ์ ๋ฆฌ์กํธ ํ๋ฉด์ **css** ๋๋ฌธ์ ๊ตฌ๊ธ๋งํ๊ธฐ ๊ท์ฐฎ์๋๋ฐ ์ด์ ์ผ ์ ๋ฆฌํ๊ธฐ ์์ํ๋ค..!

๐คฏ ์ ๋ง ๊ธฐ์ด์ ์ด๋๋ผ๋ ์ฐจ๊ณก์ฐจ๊ณก ์์๊ฐ๊ฑฐ๋ค.
## ๐ขHTML 5 ๊ธฐ๋ณธ๊ตฌ์กฐ

```html
<!DOCTYPE html>
<!-- ์ด ๋ฌธ์๊ฐ html 5 ๋ฒ์ ์ด๋๊ฑธ ๋ช์ -->
<html>
<head>
<!-- ์น๋ฌธ์ ์ ๋ณด์ ๊ดํ ๋ด์ฉ์ head ์์ ์ด๋ค -->
  <title>์นํ์ด์ง ํญ์ ๋จ๋ ๋ด์ฉ</title>
  <meta charset="utf-8">
  <!-- ๋ธ๋ผ์ฐ์ ์ ์ธ์ฝ๋ฉ์ utf-8๋ก ์ค์ ํด ํ๊ธ์ด ์๊นจ์ง๊ฒ ํด์ค -->
</head>
<body>
<!-- ์น๋ฌธ์์ ๋ด์ฉ์ ๊ดํ๊ฑด body ์์ ์ด๋ค -->
<b>ํ์คํธ ๊ตต๊ฒ ์ฐ๊ธฐ</b> - ๊ฐ์ธ์ ์๋ฏธ๋ ์์ด
<strong>ํ์คํธ ๊ตต๊ฒ ์ฐ๊ธฐ</strong> - ๊ฐ์ธ์ ์๋ฏธ์ฃผ๋ ค๊ณ  ์จ  

<i>ํ์คํธ ๋ ๋ ค ์ฐ๊ธฐ</i> - ๊ฐ์ธ์ ์๋ฏธ๋ ์์ด
<em>ํ์คํธ ๋ ๋ ค ์ฐ๊ธฐ</em> - ๊ฐ์ธ์ ์๋ฏธ์ฃผ๋ ค๊ณ  ์จ  

</body>
</html>
```
<br>



<b>ํ์คํธ ๊ตต๊ฒ ์ฐ๊ธฐ</b> - ๊ฐ์ธ์ ์๋ฏธ๋ ์์ด</br>
<strong>ํ์คํธ ๊ตต๊ฒ ์ฐ๊ธฐ</strong> - ๊ฐ์ธ์ ์๋ฏธ์ฃผ๋ ค๊ณ  ์จ</br>
<i>ํ์คํธ ๋ ๋ ค ์ฐ๊ธฐ</i> - ๊ฐ์ธ์ ์๋ฏธ๋ ์์ด</br>
<em>ํ์คํธ ๋ ๋ ค ์ฐ๊ธฐ</em> - ๊ฐ์ธ์ ์๋ฏธ์ฃผ๋ ค๊ณ  ์จ</br>


## โ๏ธAnchor ํ๊ทธ
```html
<a href="๊ฒฝ๋ก">
<!-- ๊ฒฝ๋ก์๋ ์๋๊ฒฝ๋ก ์ ๋๊ฒฝ๋ก url id ๋ฑ์ด ๋ค์ด๊ฐ ์ ์์ด -->
```

<br/>
<br/>
์ต์ปค๋ ๊ธฐ๋ณธ์ ์ผ๋ก **ํ์ดํผ๋งํฌ** ์ญํ ์ ํ์ง๋ง ๋ค์ํ๊ฒ ํ์ฉ์ด ๊ฐ๋ฅํด!๐ค
<br/>

---
### - **How to use an image as a link**
```html
<a href="https:/google.com">
<img border="0" alt="Google" src="๋์ถฉ ๊ตฌ๊ธ์ด๋ฏธ์ง ๋งํฌ" width="50%">
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
<!-- ์ด๋ฌ๋ฉด section2 id๋ฅผ ๊ฐ์ง ๋ค๋ฅธ a ํ๊ทธ ์์น๋ก ์ด๋ํด! -->
```
<a href="#section2">Go to Section 2</a>

### - **How to link to a JavaScript**
```html
<a href="javascript:alert('Hello World!');">Execute JavaScript</a>
```

   <a href = "javascript:alert('Hello World!');">Execute JavaScript</a>

---

> ๐ฃ _**ํ์ผ์ ๊ฒฝ๋ก ์ฐพ๊ธฐ**_
> - workSpace
> -- folder1 
> -- -page1.html
> -- index.html
>
>1. index.html์์ page1.html ์ ๊ทผํ๊ธฐ
>-- folder1/page1.html
>2. pag1.html์์ index.html ์ ๊ทผํ๊ธฐ
>-- ../index.html - ์ด๊ฑฐ ์  ๋๊ฐ์ธ๋ฐ ์ ์ธ๊ฐ ์ฐํ๋?

 
## ๐CSS ์ฝ๋์ ์ ์ฉํ๊ธฐ

๐**css ๋ฌธ๋ฒ**์ ์ ํ์์ ์์ฑ, ์์ฑ๊ฐ์ ๋ํ๋ด๋ ๊ฒ์ผ๋ก ์์ํ๋ค.

```css
Selector {
property: value;
}
```
### 1. Style tag ์ด์ฉํ๊ธฐ

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
<br>

### ~~๊ธ์์ ๋ณ๊ฒฝ์ด ์ง์์ ์ํ๋ค๊ณ  ํ๋ ์ด๋ฏธ์ง๋ก ์ฐธ๊ณ ,,์ฐธ๊ณ ํ์...~~ ๐คฅ

<br>

<p align="center"><img src="https://user-images.githubusercontent.com/76484900/147340783-8ba81882-7407-46a8-8fe2-b7ca070cedd6.png"></p>


### 2. Style ์์ฑ ์ด์ฉํ๊ธฐ

```html

<h1 style="color: green; text-align: center;">Hello World!</h1>

<p style="color: green; text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sit amet nunc ornare convallis. Pellentesque ac         posuere lectus. In eu ipsum et quam finibus fermentum vitae sit amet magna.</p>

```

<br>

<p align="center"><img src="https://user-images.githubusercontent.com/76484900/147340783-8ba81882-7407-46a8-8fe2-b7ca070cedd6.png"></p>

### 3. ์ธ๋ถ CSS ํ์ผ + link ํ๊ทธ

```css
/* css/style.css */
h1 {
  color: green;
  text-align: center;
}

p {
  font-size: 18px;
}

```

```html
<!-- index.html -->
<link href="css/styles.css" rel="stylesheet">

<h1>Hello World!</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sit amet nunc ornare convallis. Pellentesque ac posuere lectus. In eu ipsum et quam finibus fermentum vitae sit amet magna.</p>

```
<p align="center"><img src="https://user-images.githubusercontent.com/76484900/147340783-8ba81882-7407-46a8-8fe2-b7ca070cedd6.png"></p>

> ์ผ๋ฐ์ ์ผ๋ก๋ ์ธ๋ถ CSS ํ์ผ์ ์คํ์ผ์ ์ฐ๊ณ  HTML ์ฝ๋์์ `<link>` ํ๊ทธ๋ก ์ฐ๊ฒฐํด์ฃผ๋ ๊ฒ์ด ๊ฐ์ฅ ์ข์ ๋ฐฉ์์ด๋ค.
> 
>ํ์ง๋ง ์กฐ๊ธ์ฉ ์๋ก์ด ์คํ์ผ์ ์๋ํด๋ณผ ๋์๋ ๊ฐํธํจ์ ์ํด์ `<style>`ํ๊ทธ๋ฅผ ์ฐ๋ ๋ฐฉ๋ฒ๋ ์๋ค.
>
>๋๋ style ์์ฑ์์ ํ์คํธ๋ฅผ ํ๊ณ , ๋์ค์ ์ธ๋ถ CSS ํ์ผ๋ก ์ฎ๊ธฐ๋ ๋ฐฉ๋ฒ๋ ์๋ค


