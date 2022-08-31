# Table
## Table Basic Options
1. 테이블 생성하기
```sql
CREATE TABLE tablename 
(
columnName columnType,
columnName columnType,
);
```
2. NULL 옵션 / PRIMARY KEY 설정하기
```sql
CREATE TABLE tablename 
(
columnName columnType NOT NULL PRIMARY KEY,
columnName columnType NULL,
);
```
PRIMARY KEY는 NOT NULL로 취급하므로 생략 가능

3. AUTO_INCREMENT 설정하기
```SQL
CREATE TABLE tablename 
(
columnName columnType NOT NULL PRIMARY KEY,
columnName INT AUTO_INCREMENT NOT NULL,
columnName columnType NULL UNIQUE,
);
```
AUTO_INCREMENT로 지정한 열은 반드시 **PRIMARY KEY** 나 **UNIQUE** 로 지정해주어야 함

4. FOREIGN KEY 설정하기
```SQL
CREATE TABLE tablename 
(
columnName columnType NOT NULL PRIMARY KEY,
columnName INT AUTO_INCREMENT NOT NULL UNIQUE,
REFERENCED_COLUMN_NAME columnType NULL,
FOREIGN KEY (REFERENCED_COLUMN_NAME) REFERENCES referenced_table(REFERENCED_COLUMN_NAME)
);
```
FOREIGN_KEY를 설정한 테이블은 해당 열이 혼자 존재하는 것이 아니라  참조하는 테이블에도 값이 반드시 있어야 함

## Constraint
=> `PRIMARY_KEY` , `FOREIGN_KEY` , `UNIQUE` , `CHECK` , `DEFAULT` , `NOT NULL`  ...
1. PRIMARY_KEY
- 기본키로 설정된 COLUMN은 중복될수 없으며 NOT NULL 제약조건을 포함함.
( 자동으로 클러스터형 인덱스로 설정됨 )
- 기본키는 테이블당 하나만 가질 수 있음
- 외래 KEY가 설정된 테이블이 있다면 해당 테이블을 먼저 삭제한 후 PRIMARY_KEY 테이블을 삭제해야 함.
```SQL
ALTER TABLE tablename
	ADD CONSTRAINT
	PRIMARY KEY (column_name)
-- 이미 생성한 테이블에 PRIMARY_KEY 설정
```

```SQL
CREATE TABLE tableName
(
    ---
	CONSTRAINT PRIMARY KEY NAME_WHAT_U_WANT_TO_CHANGE(primary_key_column_name)
)
```
2. FOREIGN_KEY
- 두 테이블 사이 관계를 연결해주는 COLUMN

```SQL
CREATE TABLE BUY
(
	---
	FOREIGN KEY(COLUMN_NAME) REFERENCES MEMBER(COLUMN_NAME)
)
```
```SQL
ALTER TABLE BUY
	ADD CONSTRAINT
	FOREIGN KEY (COLUMN_NAME)
	REFERENCES MEMBER(COLUMN_NAME);
```
단, 설정해 줄 때 꼭 기준 테이블 (PK) 와 참조 테이블 (FK)의 열 이름이 동일 할 필요는 없다

- KEY RELATIONSHIP이 존재하는 두 테이블에서 PK 값은 변경되지 않는다.
- 단 변경을 원할 시 ON UPDATE/DELETE CASCADE 문을 사용한다.
- 참조 테이블의 값을 변경하면 기준 테이블의 값도 변경되고, 기준 테이블의 값을 삭제하면 참조 테이블의 값도 삭제된다.

```SQL
ALTER TABLE BUY	
	ADD CONSTRAINT
	FOREIGN KEY(COLUMN_NAME) REFERENCES MEMBER(COLUMN_NAME)
	ON UPDATE CASCADE
	ON DELETE CASCADE;
```

3. UNIQUE
- 중복되지 않는 유일한 값
- 기본 키와 다른 점은 NULL값을 허용한다는 점
- 또한 한 테이블에 여러개 설정할 수 있음

4. CHECK
- 입력되는 데이터를 점검하는 기능
- 해당 컬럼에 음수값이 들어가지 않도록 하거나 원하는 값만 입력받기를 원할 때 사용한다.

```SQL
CREATE TABLE MEMBER
(
---
HEIGHT TINYINT UNSIGEND NULL CHECK(HEIGHT >= 100),
)
```
```SQL
ALTER TABLE MEMBER
	ADD CONSTRAINT
	CHECK (COLUMN_NAME IN ('010', '222', '345'));
```

5. DEFAULT
- 값을 입력하지 않았을 때 자동으로 입력될 값을 미리 지정함
```SQL
CREATE TABLE MEMBER
(
---
HEIGHT TINYINT UNSIGEND NULL DEFAULT 160,
)
```
```SQL
ALTER TABLE MEMBER
	ALTER COLUMN COLUMN_NAME SET DEFAULT '020';
```
```SQL
INSERT INTO MEMBER VALUES('SPC', '우주소녀', default, default);
INSERT INTO MEMBER VALUES('SPC', '우주소녀', 161, '054');
```
