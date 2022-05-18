# Python Input
**1. 하나를 입력받기**
```python
num = int(input())
```

<br>

**2. 한 줄을 입력받기**
```python
# 한 줄에 숫자 변수 여러 개 입력할 때
num1, num2, num3 = map(int, input().split())

# 한 줄에 입력한 숫자를 리스트로 관리하고 싶을 때
numberList = list(map(int, input().split()))

# 한 줄에 문자열 변수 여러 개 입력할 때
a, b = input.split()

# 한 줄에 띄어쓰기 없이 정수를 여러 개 입력받고 2차원 배열로 저장하기
# range 내 숫자로 줄을 정할 수 있음
arr = [list(map(int, input())) for _ in range(4)] 

# 한 줄에 띄어쓰기가 있는 배열을 여러개의 줄을 통해 입력받을 때 2차원 배열 형태로 저장하기
arr = [list(map(int, input().split())) for _ in range(4)]
```

<br>

**3.  여러 줄을 입력받기**
```python
string = [input() for _ in range(3)]
```
