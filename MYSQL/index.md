# Index

## INDEX OUTLINE
인덱스는 데이터를 빠르게 찾을 수 있도록 도와주는 도구이다. <br>
**CLUSTERED_INDEX** , **SECONDARY_INDEX** 두 종류가 있다. <BR>
인덱스가 없다고 검색을 못하는 것은 아니지만 DB 구조가 커질 수록 효과가 커지며 실무에서는 INDEX없이 검색하는 경우는 거의 없다. 

### 장단점
INDEX는 책의 찾아보기와 같다. 그래서 검색이 자주 되지 않거나 중복된 데이터가 있는 열을 INDEX로 지정하면 쓸데없이 용량만 차지해 DB의 성능을 떨어뜨린다. <BR>
** 참고 SQL은 INDEX를 써야 검색속도가 빠르다 판단해야만 INDEX를 사용한다.

#### 장점
- SELECT 문으로 검색하는 속도가 매우 빠르다.
- 그로인해 시스템 성능이 향상될 수 있다.

#### 단점
- INDEX도 결국 공간을 차지해 추가적인 공간이 필요하다
- 첫 생성시 시간이 걸릴 수 있다.
- SELECT가 아닌 DELETE, INSERT 등 변경작업이 자주 일어나면 성능이 나빠질 수 있다.

### 인덱스의 종류
1. CLUSTERED_INDEX : 영어사전처럼 정렬돼 있음
2. SECONDARY_INDEX : 찾아보기가 있는 책과 같음

인덱스는 테이블의 COLUMN 단위로 생성할 수 있어 TABLE의 모든 COLUMN에 INDEX를 설정할 수 있다. <BR>
한 COLUMN에 두 개 이상의 INDEX를 설정할 수도 있지만 드문경우이다. <BR>

PRIMARY_KEY는 CLUSTERED_INDEX로 설정된다. 따라서 레코드들이 알파벳순, 숫자순으로 자동 정렬된다. <BR>
UNIQUE는 SECONDARY_INDEX로 설정된다. SECONDARY_INDEX는 책의 찾아보기와 같으므로 본문의 내용이 변경되지 않는다. 따라서 레코드들이 정렬되지 않는다.<BR>

SECONDARY_INDEX는 SIMPLE_SECONDARY_INDEX와 UNIQUE_SECONDARY_INDEX로 나뉜다. <BR>
**UNIQUE_SECONDARY_INDEX** : 중복된 값을 허용하지 않음 ( UNIQUE으로 설정된 COLUMN ) <BR>
**SIMPLE_SECONDARY_INDEX** : 중복된 값을 허용함 <BR>

#### 고유인덱스
UNIQUE INDEX는 인덱스의 값이 중복되지 않는다는 의미이며 PRIMARY_KEY와 UNIQUE가 고유 인덱스로 설정되고 나머지는 단순인덱스로 설정된다

## INDEX LOGIC
INDEX는 균형트리 자료구조를 사용한다. <BR>
검색의 시작은 항상 ROOT PAGE에서 시작하며 PAGE를 몇 개 읽느냐에 따라 검색속도가 확연하게 차이난다. <BR>
페이지는 16KB(16384BYTE)의 용량을 가지며 INDEX의 최소단위이다. 따라서 데이터를 1건만 입력해도 1개의 페이지 (16KB) 가 필요하다. <BR>
#### CLUSTERED
INDEX가 테이블에 있을 때 INSERT/DELETE/UPDATE 등의 작업을 하면 페이지 분할이라는 작업을 해야 하므로 INDEX가 없을 때보다 더 오래걸릴 수 있다. <BR>

#### SECONDARY
데이터 자체의 PAGE를 건들지 않고 SECONDARY INDEX PAGE를 따로 설정해 DATA PAGE의 주소 (데이터의 주소가 아님!) 를 VALUE로 설정한다. 검색시 주소값들을 LINK LINK 해가면서 검색을 한다.

## INDEX USAGE
**CREATE INDEX / DROP INDEX**
```SQL
CREATE [UNIQUE] INDEX INDEX_NAME -- UNIQUE는 고유 인덱스 생성의 의미
	ON TABLE_NAME (COLUMN_NAME) [ASC | DESC]

DROP INDEX INDEX_NAME ON TABLE_NAME
-- 테이블 생성시 PRIMARY_KEY, UNIQUE로 생성된 인덱스는 DROP INDEX로 제거할 수 없음
-- ALERT TABLE 문으로 KEY, UNIQUE를 삭제해야 DROP 가능

ANALYZE TABLE TABLE_NAME -- 생성한 인덱스 테이블에 적용
```
```SQL
-- INDEX로 설정한 열이 WHERE 문에 있어야 INDEX를 사용할 수 있음
-- WHERE 절에 연산이 포함되면 INDEX를 사용하지 않음
SELECT mem_id, mem_name, addr
	FROM member
	WHERE mem_name = '에이핑크';
```
### DROP INDEX
1. CLUSTERED와 SECONDARY 중 SECONDARY 먼저 삭제
2. PRIMARY KEY로 설정된 CLUSTERED는 ALTER TABLE로 KEY를 우선 삭제해주어야 함
3. KEY를 삭제하려면 기준-참조 관계를 DROP해야 하므로 참조 TABLE이 무엇인지 확인해야 함
4. 외래 키 알아내는 방법
```SQL
SELECT TABLE_NAME, CONSTRAINT_NAME
	FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS
	WHERE CONSTRAINT_SCHEMA = '원하는 테이블이 있는 DB'
```
5. 키 제거하기
```SQL
ALTER TABLE A
	DROP FOREIGN KEY FKEY_NAME;
ALTER TABLE B
	DROP PRIMARY KEY;
```

## INDEX SUMMARY
1. 인덱스는 열 단위에 생성된다.
2. WHERE 절에서 사용되는 열에 인덱스를 만들어라
3. 자주 사용하는 열이라 가치가 있다
4. 데이터의 중복이 높은 열에는 인덱스를 만들지 마라
5. 클러스터형 인덱스는 테이블당 하나!
6. 사용하지 않는 인덱스는 제거하자
