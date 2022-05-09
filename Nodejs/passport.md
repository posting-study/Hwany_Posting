# Passport
회원가입과 로그인을 직접 구현할 수 있지만 보안의 문제, 세션과 쿠키등 복잡한 사항이 많으므로 검증된 모듈을 사용하는 것이 좋다! <br>

```
npm i passport passport-local passport-kakao bcrypt
```
`passport-local` 은 로컬로그인을 구현시 사용하며 <br>
`passport-kakao` 는 카카오 로그인을 구현시 사용한다. <br>

### 전체적인 사용 개요(로그인 전)
1. 라우터를 통해 로그인 요청이 들어온다.
2. 라우터에서 passport.authenticate 메서드 호출
3. 로그인 전략 수행
4. 로그인 성공 시 사용자 정보객체와 함께 req.login 호출
5. req.login 메서드가 passport serializeUser 호출
6. req.session에 사용자 아이디만 저장
7. 로그인완료
### 전체적인 사용 개요(로그인 후)
1. 요청이 들어온다
2. 라우터에 요청이 도달하기 전에 passport.session 미들웨어가 passport.deserializeUser 메서드 호출
3. req.session에 저장된 아이디로 DB에서 사용자 조회
4. 조회된 사용자 정보를 req.user에 저장
5. 라우터에서 req.user 객체 사용가능

### Passport 모듈 기본 설정

**`app.js`**

```js
...
const passport = require('passport');
...

const passportConfig = require('./passport');
// passport 폴더내부의 index.js 파일

...
passportConfig();

...
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());
```
<br>

**`passport.initialize()`** 미들웨어는 req 객체에 passport 설정을 심는다. <br>
**`passport.session`** 미들웨어는 req.session 객체에 passport 정보를 저장한다. <br>

**이때 req.session 객체는 express-session에서 생성하는 것** 이므로 세션 미들웨어보다 뒤에서 passport.session() 미들웨어를 연결해야 한다.
<br>

**`passport/index.js`**
```js
const passport = require('passport');
const local = require('./localStrategy');

const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
    // done(errorObject, wanted data)
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
};
```
**`passport.serializeUser`** : 로그인 시 실행되며 req.session 객체에 어떤 데이터를 저장할지 정하는 메서드이다. 

**`passport.deserializeUser`** : 매 요청시 실행된다. 

<br>

![enter image description here](https://user-images.githubusercontent.com/76484900/167432641-4da3893c-c67a-4d7e-9b2c-91acc89bfb3b.png)

