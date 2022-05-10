
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

### 로컬 로그인 구현
로그인을 구현하려면 로그인, 로그아웃, 회원가입 라우터를 만들어야 한다.
이때 Passport는 로그인 전략만 실행한다!

먼저 사용자의 상태에 따라 접근 가능한 라우터를 제한해야 한다.

passport가 req 객체에 심어놓는 `isAuthenticated` 메소드를 사용하자.
로그인 한 상태면 req.isAuthenticated() 는 true를 리턴하고 아니면 false를 리턴한다.

**`routes/middlewares.js`**
```js
exports.isLoggedIn = (res, req, next) => {
  if(isAuthenticated()) {
    next();
  } else {
    res.status(403).send('You need to login');
  }
}

exports.isNotLoggedIn = (res, req, next) => {
  if(!isAuthenticated()) {
    next();
  } else {
    const message = encodedURIComponent('You already log in status')
    res.redirect(`/?error=${message}`);
  }
}
```

이 미들웨어를 route의 page에 부착해주자.

**`routes/page.js`**
```js
const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();
...
...
router.get('/profile',isLoggedIn ,(req, res) => {
	res.render('profile', { title : '내 정보 - Node-Bird' });
});

router.get('/join',isNotLoggedIn, (req, res) => {
	res.render('join', {title : '회원가입'});
});

...
```
이런 논리로 팔로우 여부, 관리자 여부등의 미들웨어를 만들 수도 있으므로 참고하자!

로그인, 로그아웃, 회원가입은 인증의 기능 안에 있으므로 라우터를 따로 분리하자.

**`routes/auth.js`**
```js
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
```

로그인 라우터가 중요한데, 로그인 요청이 들어오면 passport.authenticate('local') 미들웨어가 로그인 전략을 수행한다. 

로그인 전략이 실패시 첫 번째 매개변수에 값이 들어가고 성공시 두 번째 매개변수에 값이 들어간다.

성공 후 req.login 메서드를 호출하고 req.login 메서드는 passport.serializeUser를 호출한다. 

req.login에서 제공하는 user 객체가 serializeUser로 넘어간다
