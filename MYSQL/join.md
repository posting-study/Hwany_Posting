## OUTER JOIN
```SQL
SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_OUTS O
    LEFT OUTER JOIN ANIMAL_INS I
    ON O.ANIMAL_ID = I.ANIMAL_ID
WHERE I.ANIMAL_ID IS NULL
```
```SQL
SELECT I.NAME NAME, I.DATETIME DATETIME
    FROM ANIMAL_INS I
    LEFT OUTER JOIN ANIMAL_OUTS O
    ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE O.ANIMAL_ID IS NULL
ORDER BY I.DATETIME 
LIMIT 3
```


## INNER JOIN
```SQL
SELECT I.ANIMAL_ID, I.NAME NAME
    FROM ANIMAL_INS I
    INNER JOIN ANIMAL_OUTS O
    ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE O.DATETIME < I.DATETIME
ORDER BY I.DATETIME
```





---
## INNER JOIN
두 테이블을 조인하기 위해서는 테이블이 ONE TO MANY 관계로 연결되어야 한다. <BR>

```SQL
SELECT ['COLUMN']
FROM ['FIRST_TABLE']
  INNER JOIN ['SECOND_TABLE']
  ON ['JOIN_CONDITION']
WHERE ...
```
  
INNER JOIN에 쓰는 테이블은 PRIMARY KEY가 있는 테이블이다. (ONE) <BR>
FROM에 쓰는 테이블은 참조되는 테이블, 즉 FOREIGN KEY가 있는 테이블이다. (MANY) <BR>

이때 각 컬럼의 이름이 같은 경우 TABLE의 NAME을 명시해 주어야 한다.
```sql
  ...
  INNER JOIN member
  ON buy.mem_id == member.mem_id
  ...
```

테이블 이름이 길면 별칭을 줄 수도 있다.
  
```sql
SELECT B.mem_id, M.mem_name
  FROM buy B
    INNER JOIN member M
    ON B.mem_id = M.mem_id
```

## OUTER JOIN
내부조인과 다르게 한쪽에만 데이터가 있어도 된다.
  
```SQL
SELECT ~
  FROM member M
    LEFT OUTER JOIN buy B
    ON M.mem_id = B.mem_id
```
default 는 LEFT OUTER JOIN이다. <BR>
FROM 에 해당되는 테이블이 LEFT, JOIN 문에 들어가는 테이블이 RIGHT이다. <BR>

의미는 LEFT에 있는 TABLE의 내용은 모두 출력되어야 한다. 정도로 이해하면 된다. <BR> 
RIGHT는 그 반대. <BR>

  
  
  
  
  
  
  
