## STRING
```SQL
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
ORDER BY ANIMAL_ID
```

## LIKE
```SQL
SELECT ANIMAL_ID, NAME 
FROM ANIMAL_INS
WHERE NAME LIKE '%el%' AND ANIMAL_TYPE = "Dog"
ORDER BY NAME
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

## CASE
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
