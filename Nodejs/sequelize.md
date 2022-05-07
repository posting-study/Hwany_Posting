# Sequelize

시퀄라이즈는 자바스크립트 객체와 데이터베이스의 릴레이션을 맵핑해주는 도구이다. <br>
**ORM (Object-relation Mapping)**

### 왜 써?
`자바스크립트 구문`을 `mysql 구문`으로 바꿔주기 때문!

---

## package.json 생성
```json
{
  "name": "learn-practice",
  "version": "1.0.0",
  "description": "practice sequelize",
  "main": "app.js",
  "scripts": {
    "test": "nodemon app"
  },
  "author": "hwany",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.1",
    "nodemon": "^2.0.16"
  },
  "devDependencies": {}
}
```

---

## package 설치
```
npm i express morgan nunjucks sequelize sequelize-cli mysql2
```

- **sequelize-cli** : 시퀄라이즈 명령어 실행을 위한 패키지
- **mysql2** : mysql과 시퀄라이즈를 이어주는 driver

전역설치 없이 명령어로 사용하려면 **npx를 구동어로 사용**하면 된다.

```
npx sequelize init
```
<br>

### 구동 후
`config` , `models`, `migrations`, `seeders` 폴더가 생성된다.
<br>
models 폴더안에 모델을 구성하고, index.js에서 모델들을 하나로 종합받아 db객체에 적용시킨다.
<br>
config/config.json 에서 DB 접속 설정을 한다.

---

## mysql 연결

기본적인 app.js 틀을 잡아놓는다. <br>

```js
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');

const app = express();
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');
nunjucks.configure('views', {
	express : app,
	watch : true
});
sequelize.sync({ force : false })
	.then(() => {
	console.log('DB Connected!');
}).catch((err) => {
	console.error(err);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use((req, res, next) => {
	const error = new Error(`${req.method} ${req.url} 라우터가 없습니다요?`);
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.local.message = error.message;
	res.local.error = process.env.NODE_ENV !== 'production' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});

app.listen(app.get('port'), () => {
	console.log(`${app.get('port')}에서 대기중`);
});
```
<br>

### sequelize 연결부분
```js
sequelize.sync({ force : false })
	.then(() => {
	console.log('DB Connected!');
}).catch((err) => {
	console.error(err);
});
```

위 코드에서 **`force : false`** 란 옵션이 있는데 이 옵션을 `true`로 설정시 서버 재실행마다 테이블을 재생성한다. 
<br>
테이블을 잘못 만든 경우 true로 설정하면 된다.

### config 파일 설정

```json
{
  "development": {
    "username": "알아서뭐할티비?",
    "password": "안알려줄거지롱?",
    "database": "안보여줄거지롱?",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

<br>

config 파일은 mysql 커넥션과 동일하게 설정하면 된다.

---

## 모델 적용하기

|MYSQL| Sequelize |
|--|--|
| table | model |
| users | User |
| comments | Comment |

MySQL의 **테이블**은 시퀄라이즈에서 **모델**이고, **테이블은 주로 복수형**, 모델은 **단수형의 카멜케이스**를 사용한다.

<br>

### 자료형 차이
|MYSQL| Sequelize |
|--|--|
|VARCHAR(100)  | STRING(100) |
| INT |INTEGER  |
| TINYINT |BOOLEAN  |
|  DATETIME| DATE |
|  INT UNSIGNED| INTEGER.UNSIGNED |
| NOT NULL | allowNull : false |
| UNIQUE | unique : true |
|  DEFAULT now()| defaultValue : Sequelize.NOW |


### User 모델
```js
const Sequelize = require('sequelize');

const modelOpt = {
			// created_At 과 updated_At 컬럼을 ture일 때 자동설정
			timestamps : false,
			underscored : false,
			// 모델의 이름 - 노드 프로젝트에서 설정
			modelName : 'User',
			// 실제 DB에 저장할 테이블 이름
			tableName : 'users',
			// true로 설정시 deletedAt 컬럼 생성.
			// 나중에 로우를 복원할 수 있음
			paranoid : false,
			// 한글 인코딩 지원
			charset : 'utf8',
			collate : 'utf8_general_ci'
			// 이모티콘까지 사용하고 싶다면
			// utf8mb4, utf8mb4_general_ci 사용
		}

module.exports = class User extends Sequelize.Model {
	static init(sequelize) {
		return super.init({
			name : {
				type : Sequelize.STRING(50),
				allowNull: false,
				unique : true
			},
			age : {
				type : Sequelize.INTEGER.UNSIGNED,
				allowNull : false
			},
			married : {
				type : Sequelize.BOOLEAN,
				allowNull : false,
			},
			comment : {
				type : Sequelize.TEXT,
				allowNull : false,
			},
			created_at : {
				type : Sequelize.DATE,
				allowNull : false,
				defaultValue : Sequelize.NOW,
			},
		}, {sequelize, ...modelOpt}  );
	}
	
	static associate(db) {}
	
}
```

모델은 `static init` 과 `static associate` 부분으로 나뉜다. <br>

static init은 **모델의 컬럼과 옵션**을 설정하는 부분이고<br> 

static associate는 **다른 모델과의 관계**를 설정하는 부분이다. <br>

시퀄라이즈는 기본적으로 id를 기본키로 연결하므로 id 컬럼은 설정할 필요가 없다. <br>

### Comment 모델
```js
const Sequelize = require('sequelize');

const modelOpt = {
			
			timestamps : false,
			modelName : 'Comment',
			tableName : 'comments',
			paranoid : false,
			charset : 'utf8',
			collate : 'utf8_general_ci'
		}

module.exports = class Comment extends Sequelize.Model {
	static init(sequelize) {
		return super.init({
			
			comment : {
				type : Sequelize.STRING(100),
				allowNull : false,
			},
			created_at : {
				type : Sequelize.DATE,
				allowNull : true,
				defaultValue : Sequelize.NOW,
			},
		}, {sequelize, ...modelOpt} );
	}
	
	static associate(db) {}
	
}
```
<br>

모델 생성시 init 부분에서는 foreign key와 primary key의 구분을 짓지 않는다. <br>
( associate 에서 관계 설정시 구분한다. )

---

## 모델을 index에서 종합하기

```js
const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

moduel.exports = db;

```

## 모델의 관계 정의하기

사용자 한 명 (User)에 여러 댓글(Comment)가 달릴 수 있다. <br>
하지만 그 반대는 존재하지 않는다.

따라서 User와 Comment 는 **1:N** 관계이다. <br>

시퀄라이즈에서는 1:N 관계를 **`hasMany`** 란 메서드로 표현한다. <br>

#### models/user.js
```js
static associate(db) {
	db.User.hasMany(db.Comment, { foreignKey : 'commenter', sourceKey : 'id' });
	}
```

#### models/comment.js
```js
static associate(db) {
	db.Comment.belongsTo(db.User, { foreignKey : 'commenter', targetKey :'id' });
	}
```

<br>

**`belongsTo`** 는 다른 모델의 정보가 들어가는 테이블에 붙는다고 생각하면 쉽다. <br>

예로 **`User의 id 컬럼`** 이 **`belongsTo의 commenter 컬럼`** 에 들어가기 때문에 belongsTo가 Comment에 붙었다. <br>

`foreignKey` 는 **belongsTo가 붙는 table의 foreignKey 이름**을 넣으면 되고, <br>
`sourceKey`는 **Primary Key가 될 컬럼 이름**을 넣으면 된다. <br>

`targetKey`는 **foreignKey가 pointing 하고 있는 컬럼 (Primary Key)** 을 적어주면 된다.

---

## 관계의 종류
1:N 관계 외에도 `1:1`, `N:M` 관계가 있다.

### 1:1

1:1 관계에서는 **`hasOne`** , **`belongsTo`** 메소드를 사용한다. <br>
1:1 관계더라도 **primaryKey와 foreignKey 관계가 존재**하기 때문에 belongsTo가 붙는 위치가 중요하다. <br>
<br>
User모델과 User의 정보를 담고있는 Info 모델이 있다고 하자. <br>

```js
db.User.hasOne(db.Info, { foreignKey : 'UserId', sourceKey : 'id' });
db.Info.belongsTo(db.User, { foreignKey : 'UserId', targetKey : 'id' });
```

### N:M 
N:M 관계에서는 **`belongsToMany`** 메소드를 사용한다. <br>

게시글과 해시태그의 관계가 대표적인 N:M 관계이다. <br>

```js
db.Post.belongsToMany(db.Hashtag, { through : 'PostHashtag' });
db.Hashtag.belongsToMany(db.Post, { through : 'PostHashtag' });
```

N:M 관계는 탐색시 특별히 중간에 `Relation Model`이 자동으로 생성된다. <br>

자동으로 생성된 모델은 
```js
db.sequelize.models.PostHashtag 
```
로 접근할 수 있다. <br>

![RelationModel](https://user-images.githubusercontent.com/76484900/167258527-cd7a1b22-7a0a-4e24-babd-592fc6bc9b09.png)

`through` 속성에 Relation Model의 이름을 적으면 된다. <br>

### N:M 관계에서 데이터를 조회할 때
1. `Hashtag` 모델에서 조회할 id를 찾는다.
2. 찾은 id로 `PostHashtag` 에서 대응되는 Post id를 찾는다.
3. 찾은 id로 `Post 모델`에서 해당되는 게시글들을 찾는다.
