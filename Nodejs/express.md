🙍‍♂️🙋‍♂️🙆‍♂️💁‍♂️🤷‍♂️🙅‍♂️🤦‍♂️
# Express 
저번에 정리했던 Express 글에서 좀 더 살을 붙이고 내용을 보충한 정리글! <br>
공부를 하면 할 수록 정리할 내용이 늘어난다! <br>

한 책으로만 공부하는게 아니라 여러 책을 보라는 이유를 알 것같다. <br>

## Package.json 파일 만들기
package.json 파일은 npm 패키지 관리의 기본이다. 꼭 설정해주고 시작하자.

1. 직접 파일 만들기
2. `npm init`  명령어 사용하기

> npm install은 package.json의 package 설치 명령어

```js
:
:
"script" : {
  "start" : "nodemon app"
  // npm start란 명령어로 app.js 파일을 nodemon을 이용해 구동시키겠다!
}
:
:
```

## express, nodemon 모듈 install

```
npm i express nodemon
```

## app.js 파일 만들기

```js
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send("hello nodejs!");
  // res.writeHead와 res.end를 res.send로 대체한다.
});

app.lisen(app.get('port'), () => {  });
```

process.env는 .env 파일을 참조한다. <br>

.env 파일은 확장자명이 없고 이 파일 내부에 민감한 내용의 설정 값들을 넣어 두고 소스코드에서 불러오는 형식으로 사용한다. <br>

이를 위해 npm에서 **`dotenv`** 라는 패키지를 제공한다. ( 미들웨어는 아니다! )

### dotenv 적용

#### dotenv 설치
```
npm i dotenv
```
<br>

```js
const dotenv = require('dotenv');
:
:
dotenv.config();
```

## HTML 파일 응답하기

**`res.send()`** 대신에 **`res.sendFile()`** 을 사용한다. <br>

이때 메소드 인자에 파일경로를 **`path`** 모듈을 사용해 지정한다.

```js
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/htmlFilePath"));
});
```
 
 ## 미들웨어 사용하기

### 미들웨어란?
요청과 응답의 진행 과정의 **middle** 에 위치한 소프트웨어여서 미들웨어라고 한다. <br>

미들웨어가 express의 전부라고 해도 된다고 책에서 설명한다. 엄청 중요한듯!

### 1. 사용
| 형태 |설명    |
|--|--|
| **app.use(미들웨어)** | 모든 경로와 요청에서 사용 |
| **app.use('/abc', 미들웨어)** | /abc 경로와 모든 요청에서 사용 |
| **app.post('/abc', 미들웨어)** | /abc 경로와 post 요청에서 사용 |

### 2. 미들웨어의 파라미터
```js
app.use((req, res, next) => {
  ~~~
  next();
});

app.get('/', (req,res, next) => {
  ~~~
  next();
}, (req, res) => {
  throw new Error('holy shit');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});
```

1. 미들웨어는 **위에서 아래** 로 실행된다. ( 코드의 위치에 따라 실행 결과가 달라진다)
2. next 함수가 다음 미들웨어를 호출한다
3. 미들웨어를 **라우터 하나에 여러 개** 사용할 수 있다. (이 때도 next 함수가 반드시 필요하다.)
4. **에러처리 미들웨어는 맨 아래 위치**해야 하며 매개변수가 반드시 4개여야한다.
5. npm으로 설치한 패키지들은 대부분 **내부적으로 next 함수가 포함** 돼 있다.

### 3. 주로 사용하는 미들웨어

#### 🙍‍♂️ morgan
기존 로그 이외에 **추가적인 로그** 를 볼 수 있다. <br>

요청과 응답에 대한 정보를 콘솔에 기록한다.

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```
morgan 함수의 파라미터로 `dev` `combined` `common` `short` `tiny` 등을 넣을 수 있는데 개발환경에선 주로 `dev`를, 배포환경에서는 주로 `combined`를 사용한다. <br>

[morgan 함수의 결과](https://chan180.tistory.com/164)

---

#### 🙋‍♂️static 
정적 파일 제공용 라우터이며 정적파일들을 알아서 제공해준다. (sendFile 등의 서버처리 필요 X) <br>

파일을 찾지 못하면 내부적으로 next()를 호출하고 발견했으면 sendFile을 해준다. <br>

기본 express 내장 메소드이다.

```js
app.use('요청경로', express.static('실제경로'));
// 요청경로는 생략 가능
app.use('/', express.static(path.join(__dirname + 'public')));
```

##### 파일구조
| project <br>
|| public <br>
||| stylesheet <br>
|||| style.css

<br>

`서버 경로` : localhost:3000/public/stylesheet/style.css <br>
`요청 경로` : localhost:3000/stylesheet/style.css <br>

즉, 서버 경로와 요청 경로가 다름으로써 클라이언트가 url을 알아내서 내부 파일에 접근할 수 없도록 한다!! <br>

express 내부적으로도 static 메소드를 적용하지 않으면 정적 파일을 사용할 수 없게 설정돼있다.

---

#### 🙆‍♂️  body-parser
원래는 요청 본문의 내용을 스트리밍을 통해 가져와야 한다. ( 웹 메모리 혹은 서버 메모리 용량 문제 ) <br>
이를 위해 `req.on('data')`와 `req.on('end')`로 스트림을 설정해야 했다. <br>

```js
let body = '';

req.on('data', (data) => {
	body += data;  
});

req.on('end', function () {
	let post = qs.parse(body);
	let title = post.title
	let data = post.content;
	fs.writeFile(`data/${title}.txt`, data, 'utf8', function(error){
	});
});

let html = template.writeProcess();
res.writeHead(200);
res.end(html);
```
그러나 `body-parser`를 이용해 요청의 본문 내용을 req.body 객체로 만들 수 있다. <br>

> 요청의 본문 내용은 주로 **form data** 거나 **Ajax** 요청 등이다. <br>

> 기본적으로 express에 내장돼 있지만 요청의 본문이 **text** 이거나 **buffer** 일 때는 따로 설치해 주어야 한다. <br>

**JSON과 URL-encoded 형식의 data** <br>
express 내부의 body-parser 가 처리가능 <br>

```js
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

/*
extended false : Node.js의 querystring 모듈 사용
extended true : npm의 qs 패키지 사용
*/
```

|본문 요청|req.body  |
|--|--|
| JSON 형식 {'name' : 'hwany', 'age' : 24} | {'name' : 'hwany', 'age' : 24} |
| URL 형식 localhost/?name=hwany & age = 24 | {'name' : 'hwany', 'age' : 24} |

**text과 buffer 형식의 data** <br>
```
npm i body-parser
```

```js
const bodyParser = require('body-parser');
app.use(bodyParser.raw()); // buffer type
app.use(bodyParser.text()); // text type
```

---

#### 💁‍♂️ cookie-parser
요청에 동봉된 쿠키를 해석해 req.cookie 객체로 만든다. <br>

```js
const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.COOKIE_SECRET));
// process.env.COOKIE_SECRET를 비밀키로 사용한다
:
:
// router inner

// create cookie
res.cookie('name','hwany', {
  expire : 유효기간,
  httpOnly : true,
  secure : true,
})

// clear cookie
res.clearCookie('name', 'hwany', { httpOnly : true, secure : true});
// 쿠키를 삭제할 때 property & value & option 세 개가 모두 일치해야 한다.
```

> **signed cookie**
> 쿠키 옵션 중 `signed` 를 `true`로 설정하면 쿠키 뒤에 서명이 붙고 이 값은 .env 파일 내의 비밀키 값이다. <br>
> **req.signedCookies** 객체 내부에 들어있다.

---

#### 🤷‍♂️ express-session
세션 관리용 미들웨어로 세션의 내용을 req.session안에 저장시킨다. <br>

```js
const session = require('express-session');
app.use(session({
  resave : false, // 요청이 올 때마다 수정사항이 없더라도 다시 저장할건가?
  saveUninitialized : false, // 세션에 저장할 값이 없더라도 세션 객체를 생성할 것인가?
  secret : process.env.COOKIE_SECRET, // 세션 쿠키의 서명값
  cookie : {
    httpOnly : true,
    secret : true,
  },
  name : 'hwany-cookie' // 세션쿠키의 이름. 기본값 : connect.sid
}));
```

기본적으로 세션은 메모리에 저장 돼 서버를 재시작하면 사라진다. <br>

배포시에는 store 옵션에 DB를 연결해서 세션을 유지하는 것이 좋다. <br>
[store 옵션 사용법](https://www.npmjs.com/package/session-file-store)

---

#### 🙅‍♂️ 미들웨어 특성
라우터 하나에 여러 개의 미들웨어를 장착할 수 있는데 **`미들웨어의 장착 순서`** 에 따라 어떤 미들웨어는 실행되지 않을 수 있다. <br>

뭐 예를 들어 next()를 호출하지 않고 res.sendFile()로 응답하는 경우! <br>
위에서 본 `express.static`이 그렇다.

**next 함수의 특징** <br>
|next|내용  |
|--|--|
| **next()** | 다음 미들웨어 (다음 미들웨어가 없으면 다음 라우터의 다음 미들웨어) |
| **next('route')** | 같은 라우터내부에 다음 미들웨어가 있더라도 다음 라우터로 바로 넘어간다|
| **next(error)** | 에러 핸들링 라우터로 넘어가며 error 객체를 함께 넘긴다|


**미들웨어간 data 전송하기** <br>
세션을 사용하기엔 ... 세션이 유지되는 동안 data가 계속 살아있고... <br>
요청과 응답 사이에 짧게 데이터 저장용으로 사용하고 싶을 때 req.property에 저장한다.

```js
app.use((req, res, next) => {
  req.data = 'data';
  next();
}, (req, res, next) => {
  console.log(req.data); // data
  next();
});
```
> req.property 에서 property 이름이 예약어들과 겹치지 않도록 주의한다. <br>
> ex ) req.body

<br>

> **app.set VS req.data**
> **app.set**은 express 전역에서 사용할 수 있으며 주로 앱 전체 설정을 공유시 사용한다. <br>
> **req.data**는 개인적 data를 미들웨어간 공유할 때 등 일시적으로 사용할 때 유용하다. <br>

**미들웨어안에 미들웨어 넣기** <br>
장점 : 요청에 따라서 분기처리를 통해 다른 미들웨어를 실행할 수 있다. <br>

```js
app.use( (req, res, next) => {
 if (~~) {
	morgan('dev')(req, res, next);
 } else {
	morgan('combine')(req, res, next);
 }
});
```
그런데 morgan 뒤에 (req, res, next) 는 왜 붙이는 걸까..? 뭐라 검색을 해야할까...고민중이다.
(20220502)















