# Mysql
## 시작부터 에러?

```sql
Mysql2::Error: Access denied for user 'hwany'@'localhost' to database 'nodejs'
```
이건 이전에 한 번 해결했던 에러다. <br>
유저 권한이 없거나 아직 만들지 않은 유저여서 그런데 일단 유저를 생성해보았다. <br>

```sql
ERROR 1396 (HY000): Operation CREATE  USER  failed  for  'hwany'@'localhost'
```
이 에러는 이미 사용자가 있거나 있었을 경우에 뜬다고 한다.

나는 이미 이전에 만들어놨던 기억이 있어서 바로 grant privilege를 해줬는데 삭제해야 하는 경우는 아래와 같이 하면 된다고 한다.

```sql
REVOKE  ALL  PRIVILEGES, GRANT  OPTION  FROM  'hwany'@HOSTNAME; 
DELETE  FROM mysql.user WHERE  user='hwany'; 
FLUSH  PRIVILEGES; 
CREATE  USER  'hwany'@HOSTNAME [IDENTIFIED  BY  'password'];
```

### privilege
```sql
GRANT ALL privileges on nodejs.* to hwany@localhost identified by '비밀번호';

FLUSH PRIVILEGES;
```

## 데이터 베이스 생성
```sql
CREATE SCHEMA nodejs DEFAULT CHARACTER SET utf8;
use nodejs
```


## 테이블 생성
```sql
CREATE TABLE nodejs.users(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  age INT UNSIGNED NOT NULL,
  married TINYINT NOT NULL,
  comment TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY(id),
  UNIQUE INDEX name_UNIQUE (name ASC))
  COMMENT = '사용자 정보'
  DEFAULT CHARACTER SET = utf8
  ENGINE = InnoDB;
```

```sql
CREATE TABLE nodejs.comments(
  id INT NOT NULL AUTO_INCREMENT,
  commenter INT NOT NULL,
  comment VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY(id),
  INDEX commenter_idx (commenter ASC),
  CONSTRAINT commenter
  FOREIGN KEY(commenter)
  REFERENCE nodejs.users (id)
  ON DELETE CASCADE
  ON UPDATE CASCADE)
  COMMENT ='댓글'
  DEFAULT CHARACTER SET = utf8mb4
  ENGINE=InnoDB;
  

```

### FOREIGN KEY
다른 테이블의 기본 키를 저장하는 컬럼을 FOREIGN KEY 라 부른다. <br> 
commenter 란 컬럼이 users 테이블의  id 컬럼을 저장한다. <br>

```sql
 CONSTRAINT [제약 조건이 들어간다]
 FOREIGN KEY(컬럼명)
 REFERENCE 참조테이블의 컬럼 (참조되는 컬럼명)
```
<br>
아래 두 옵션은 사용자 정보가 삭제되거나 수정될 때 연결된 댓글 정보도 수정하거나 삭제한다.

```sql
ON DELETE CASCADE
ON UPDATE CASCADE
```


### 자료형

|자료형|의미  |
|--|--|
| INT | 정수 (소수를 저장하고 싶으면 DOUBLE 혹은 FLOAT 이용) |
| VARCHAR(자릿수) | 최대 길이가 자릿수만큼인 문자열을 넣을 수 있다. |
| CHAR(자릿수) | 자릿수의 고정길이를 가지는 문자열을 넣을 수 있다. 자릿수보다 작은 문자열이 올 때에는 빈 자리가 채워진다. |
| TEXT | 수백 자 이상의 문자열을 처리할 때 사용한다. |
| TINYINT | -128~127 사이 정수를 저장할 때 사용하고, 1혹은 0만 사용할 시 BOOLEAN과 같은 역할을 할 수 있다. |
| DATETIME | 날짜와 시간에 대한 정보를 담고있다. |

### 옵션
|옵션|의미  |
|--|--|
| NULL / NOTNULL | NULL : 빈칸을 허용  / NOT NULL : 빈칸을 허용하지 않음 |
| AUTO_INCREMENT | 해당 필드의 값을 순차적으로 올리겠다는 옵션 |
| UNSIGNED | 숫자 자료형의 FLAG BIT를 UNSIGNED FLAG BIT로 변환. |
| ZEROFILL | 숫자의 자릿수가 고정되어 있을 때(INT(4)와 같이) 빈 자리에 0을 채워넣음|
| now() | 현재 시각을 넣어줌. CURRENT_TIMESTAMP와 같은 기능 |
| PRIMARY KEY(id) | 데이터 베이스의 로우들을 식별할 수 있는 고유한 식별자. |
| UNIQUE INDEX | 해당 값이 고유해야 하는지에 대한 옵션. columnName_UNIQUE 로 지정 |

### 테이블 자체 옵션
| 옵션 | 의미 |
|--|--|
| COMMENT | 테이블에 대한 보충설명. 필수는 아니다. |
| DEFAULT CHARACTER SET = utf8 | 한글 입력이 가능하게 해준다. |
| ENGINE | 어떤 DB 엔진을 사용할지 설정한다. |


## 관련 명령어
### 테이블 컬럼 조회
```sql
DESC TABLENAME;
```
### 테이블 삭제
```sql
DROP TABLE TABLENAME;
```

### 테이블 조회
```SQL
SHOW TABLES;
```

### CREATE
```SQL
INSERT INTO nodejs.users (name, age, married, comment) VALUES ('HWANY', 24, 0, '안녕하세요?');
```
id 컬럼은 `AUTO_INCREMENT `옵션을 주었기 때문에 자동으로 값이 적용된다.

### READ

#### 모든 데이터 조회
```SQL
SELECT * FROM TABLENAME;
```

#### 특정 컬럼만 조회
```SQL
SELECT name, married FROM nodejs.users;
```

#### 특정 조건의 컬럼만 조회
```sql
SELECT name, age FROM nodejs.users WHERE married = 1 AND age > 30;
SELECT name, age FROM nodejs.users WHERE married = 0 OR age > 30;
```

#### 정렬 및 필터링
**1. `ORDER BY [컬럼 명] [ASC | DESC]`** : 정렬 
```SQL	
SELECT name, age FROM nodejs.users ORDER BY age DESC;
```
**2. `LIMIT [숫자]`** : 조회할 키워드의 개수
```SQL
SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1;
```
**3. `OFFSET [건너뛸 숫자]`** : 게시판의 페이지네이션등에 이용되며 처음 20개를 검색하고 다음 20개를 조회해야 할 때 처음 20개를 건너뛸 수 있도록 한다.
```SQL
SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1 OFFSET 1;
```

### UPDATE
```SQL
UPDATE nodejs.users SET commet = '바꿀내용` WHRER id = 2;
```

### DELETE
```SQL
DELETE FROM nodejs.users WHERE id = 2;
```

