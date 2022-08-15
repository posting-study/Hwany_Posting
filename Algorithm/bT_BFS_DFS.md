# backTracking
모든 경우의 수를 탐색하지만 배제를 통해 연산횟수를 줄인다. <br>
## 대표문제
https://www.acmicpc.net/problem/15649 

```python
n, m = map(int, input().split())
answer = []

def bT(depth):
    if depth == m:
        print(' '.join(map(str,answer)))
        return
    for i in range(1, n+1):
        if i in answer:
            continue
        answer.append(i)
        bT(depth + 1)
        answer.pop()
bT(0)
```

특징으로는 **수정을 가했던 값을 다시 되돌리는 과정** 이 필요하다. <br>
```python
answer.append(i)
bT(depth + 1)
answer.pop()
```
프로그래머스의 모음 사전문제, 연산자 추가문제, 등등이 여기에 해당한다. <br>

# BFS
넓이 우선 탐색으로 정점에서 가장 가까운 점부터 탐색한다. <br>
queue를 이용해 탐색을 진행하며, 배열로 그래프를 구현한다. <br>
## 대표문제
https://www.acmicpc.net/problem/2178

```python
from collections import deque
n, m = map(int, input().split())

maze = [list(map(int, input())) for _ in range(n)]
queue = deque()
queue.append([0,0])
dx = [0,0,1,-1]
dy = [1,-1,0,0]

def bfs():

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            cx = x + dx[i]
            cy = y + dy[i]
            if 0 <= cx < n and 0 <= cy < m:
            	if maze[cx][cy] == 1:
                    maze[cx][cy] = maze[x][y] + 1
                    queue.append([cx,cy])

bfs()
print(maze[n-1][m-1])
```
길찾기 문제가 여기에 해당한다. **queue에 탐색할 곳을 넣어준다는게 포인트** <br>

# DFS
깊이 우선 탐색은 노드가 최대한 깊이 들어갈 수 있는 곳 까지 탐색 후 다른 자식 트리를 탐색하는 것이다. <br>
배열로 그래프를 만들고 재귀로 탐색한다. <br>
backTracking 문제와 비슷하다. <br>
## 대표문제
https://www.acmicpc.net/problem/1260

```python
from collections import deque
import sys
n, m, v = map(int, sys.stdin.readline().split())
vertex = [[0] * (n+1) for _ in range(n+1)]

for i in range(m):
    a, b = map(int,sys.stdin.readline().split())
    vertex[a][b] = vertex[b][a] = 1

visit = [0] * (n+1)

def dfs(v):
    visit[v] = 1
    print(v, end = ' ')
    for i in range(1, n+1):
        if visit[i] == 0 and vertex[v][i] == 1:
        	dfs(i)
def bfs(v):
    visit[v] = 0
    queue = deque()
    queue.append(v)
    while queue:
        t = queue.popleft()
        print(t, end = ' ')
        for i in range(1,n+1):
            if visit[i] == 1 and vertex[t][i] == 1:
                queue.append(i)
                visit[i] = 0
dfs(v)
print()
bfs(v)

```

여기서는 중요한 포인트가 있다. <br>

### 연결된 노드를 표현하는 방법 ( 두 노드를 알고, 두 노드가 연결됐는지 알고싶을 때 )
```python
vertex = [[0] * (n+1) for _ in range(n+1)]

for i in range(m):
    a, b = map(int,sys.stdin.readline().split())
    vertex[a][b] = vertex[b][a] = 1
```
위 매트릭스에서 a, b는 1이고 b, a는 1이다. 이 말은 a 노드와 b 노드가 연결되어 있다는 것! <br>
방문은 visit list로 해결한다.

### 연결된 노드를 표현하는 방법 ( 하나의 노드를 알고 그 노드와 나머지 다른 임의의 노드가 연결됐는지 알고싶을 때 )
```python
vertex = [[] for _ in range(n+1)]
for a, b in some_link_info:
    vertex[a].append(b)
    vertex[b].append(a)
# a는 어디와 연결돼있나요?
print(vertex[a]) # b 

```











