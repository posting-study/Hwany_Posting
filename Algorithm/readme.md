
# 공부하다가 메모하는 것들
알고리즘이랑 자료구조는 자주 쓰면서 익숙해지는게 좋다. <br>
굳이 정리하면서 시간 낭비할 필요 없음 진짜. <br>
정리는 오질나게 했잖아. 귀찮아서 구현 안해봤잖아 지금까지. <br>

## ArrayList
#### 배열의 삽입과 삭제가 번번할 때에는 시간복잡도가 O(n)인 ArrayList를 쓰면 안되고 Stack을 써야한다.

---

## Stack
#### 한 개의 데이터 입력과 출력의 시간복잡도는 O(1) 이다.
#### 최대 시간 복잡도는 O(N*logN) 이다.
#### 입력값이 스택의 최상단값과 연관 관계가 있을 때 주로 사용한다.

#### stack 코드구현
```python
import sys
n = int(sys.stdin.readline())

stack = []

for i in range(n):
    command = sys.stdin.readline().split()
    
    if command[0] == 'push':
        stack.append(command[1])
    elif command[0] == 'pop':
        if len(stack) != 0:
            print(stack.pop())
        else:
            print(-1)
    elif command[0] == 'size':
        print(len(stack))
    elif command[0] == 'empty':
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif command[0] == 'top':
        if len(stack) != 0:
            print(stack[-1])
        else:
            print(-1)
```


---

## Queue

#### 큐의 맨 앞의 값을 지우는 것은 O(1) 
#### ArrayList의 맨 앞의 값을 지우는 것은 O(1)
#### Deque 라는 라이브러리를 사용한다.
#### queue 코드 구현
```python
import sys
from collections import deque
n = int(sys.stdin.readline())
queue = deque([])

for i in range(n):
    command = sys.stdin.readline().split()
    if command[0] == 'push':
        queue.append(command[1])
    elif command[0] == 'pop':
        if not queue:
            print(-1)
        else:
            print(queue.popleft())
    elif command[0] == 'size':
        print(len(queue))
    elif command[0] == 'empty':
        if not queue:
            print(1)
        else:
            print(0)
    elif command[0] == 'front':
        if not queue:
            print(-1)
        else:
            print(queue[0])
    elif command[0] == 'back':
        if not queue:
            print(-1)
        else:
            print(queue[-1])

```

#### queue = deque() 의 비밀 : deque는 queue와 stack의 합작품이다
#### deque 사용법
```python
from collections import deque
queue = deque()

queue.popleft() # 디큐의 전단을 삭제
queue.pop() # 디큐의 후단을 삭제
queue.append('data') # 디큐의 후단에 데이터 삽입
queue.appendleft('data') # 디큐의 전단에 데이터 삽입

```