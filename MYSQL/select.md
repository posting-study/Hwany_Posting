### ORDER BY
```sql
SELECT NAME, DATETIME FROM ANIMAL_INS ORDER BY ANIMAL_ID DESC
```
```SQL
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC 
```
### GROUP BY
```SQL
SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) FROM ANIMAL_INS GROUP BY ANIMAL_TYPE
ORDER BY ANIMAL_TYPE
```
```SQL
SELECT NAME, COUNT(NAME) FROM ANIMAL_INS GROUP BY NAME HAVING COUNT(NAME) >= 2
ORDER BY NAME
```
```SQL
SELECT hour(DATETIME) as hello, count(DATETIME)
from ANIMAL_OUTS
where hour(DATETIME) between 9 and 19
group by hello
order by hello ;
```

### WHERE
```sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = "Sick" ORDER BY ANIMAL_ID
```
```SQL
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION != "Aged" 
ORDER BY ANIMAL_ID
```

### NULL
```SQL
SELECT ANIMAL_ID FROM ANIMAL_INS
WHERE NAME IS NULL
ORDER BY ANIMAL_ID
```
```SQL
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
ORDER BY ANIMAL_ID
```
```sql
SELECT ANIMAL_TYPE, IFNULL(NAME, "No name") NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```
### LIMIT
```SQL
SELECT NAME FROM ANIMAL_INS 
ORDER BY DATETIME
LIMIT 1
```

### COUNT
```SQL
SELECT COUNT(*) FROM ANIMAL_INS
```
```SQL
SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS
```

## CASE
```SQL
SELECT ANIMAL_ID, NAME, 
CASE WHEN SEX_UPON_INTAKE LIKE '%Neutered%' THEN 'O'
     WHEN SEX_UPON_INTAKE LIKE '%Spayed%' THEN 'O'
     ELSE 'X' END
FROM ANIMAL_INS;
```

---

### CASE
- WHEN과 THEN은 한쌍이어야 합니다.
- WHEN과 THEN은 다수가 존재할 수 있습니다.
- ELSE가 존재하면 모든 조건에 해당하지 않는 경우에 반환 값을 설정할 수 있습니다.
- ELSE가 존재하지 않고, 조건에 맞지 않아서 반환 값이 없으면 NULL를 반환합니다.


```SQL
SELECT 
	id AS id,
	(
    	CASE
	  WHEN number = 1 THEN 'fruit'
	  WHEN number = 2 THEN 'vegetable'
	  WHEN number = 3 THEN 'animal'
	  ELSE 'not'
    	END
	) AS type,
	kind AS type_desc
FROM
	test;

```

---

### 집계함수
1. COUNT 

COUNT 함수는 인수로 주어진 집합의 개수를 반환 <BR>
DISTINCT를 사용해서 집계함수 내에서도 중복을 제거하고 결과 값을 받을 수 있다

```SQL
SELECT COUNT([필드명 or *]) FROM [테이블명];
SELECT COUNT([DISTINCT 필드명 or *]) FROM [테이블명]; 
```


2. AVG <BR>
  
특정 필드의 값들의 평균값을 계산해주는 함수
```SQL
SELECT AVG([Field Name]) FROM [Table Name];
```
3. SUM <BR>
  
특정 필드의 값을 모두 더하여 반환하는 함수
```SQL
SELECT SUM([필드명]) FROM [테이블명];
```
4. MAX/MIN <BR>
  
특정 필드의 값들 중 가장 큰(작은) 값을 반환하는 함수
```SQL
SELECT MAX([필드명]) FROM [테이블명];
SELECT MIN([필드명]) FROM [테이블명];
```

---
  
### ISNULL, IFNULL
#### IF NULL
```SQL
SELECT IFNULL([Field Name], [Replacement]) FROM [Table Name];
```
어떤 필드의 값이 NULL이라면, 그 값을 무엇으로 대체할지 지정하는 함수
#### IS NULL
```SQL
SELECT [Field List] FROM [Table Name] WHERE [Field Name] IS NULL;
```
WHERE절 뒤에 붙어 어떤 Field가 NULL이면 TRUE를, NULL이 아니면 FALSE를 반환 <BR>
  
#### IS NOT NULL
```SQL
SELECT [Field List] FROM [Table Name] WHERE [Field Name] IS NOT NULL;
```

