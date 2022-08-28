### ORDER BY
```sql
SELECT NAME, DATETIME FROM ANIMAL_INS ORDER BY ANIMAL_ID DESC
```
```SQL
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC 
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


