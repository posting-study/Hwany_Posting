## 배경 이미지 설정

### `background-repeat` 속성🥅
이미지를 반복시키는 패턴에 대한 속성이다.

```css
img {
/* 반복하지 않음 */  
background-repeat: no-repeat;  
  
/* 가로 방향으로만 반복 */  
background-repeat: repeat-x;  
  
/* 세로 방향으로만 반복 */  
background-repeat: repeat-y;  
  
/* 가로와 세로 모두 반복 */  
background-repeat: repeat;  
  
/* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 */  
background-repeat: space;  
  
/* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분 */  
background-repeat: round;
}
```
<br>

---

### `background-size` 속성🥅
배경 이미지의 사이즈를 정해주는 속성

```css
#div1 {  
/* 원래 이미지 사이즈대로 출력 */  
background-size: auto;  
}  
  
#div2 {  
/* 화면을 꽉 채우면서, 사진 비율을 유지 */  
background-size: cover;  
}  
  
#div3 {  
/* 가로, 세로 중 먼저 채워지는 쪽에 맞추어서 출력 */  
background-size: contain;  
}  
  
#div4 {  
/* 픽셀값 지정 (가로: 150px, 세로: 10px로 설정) */  
background-size: 150px 10px;  
}  
  
#div5 {  
/* 픽셀값 지정 (가로: 200px, 세로: 200px로 설정) */  
background-size: 200px 200px;  
}  
  
#div6 {  
/* 퍼센트값 지정 (가로: 부모 요소 width의 50%, 세로: 부모 요소 height의 50%로 설정) */  
background-size: 50% 50%;  
  
}  
  
#div7 {  
/* 퍼센트값 지정 (가로: 부모 요소 width의 30%, 세로: 부모 요소 height의 100%로 설정) */  
background-size: 30% 100%;  
}
```
<br>

---

### `background-position` 속성🥅
배경 이미지의 위치를 정해주는 속성으로 브라우저 창이 커지거나 작아질 때 이미지가 **어느 지점을 기준으로 변화**할지 정하는 속성이다.

```css
#div1 {  
/* 단어로 지정해주기 (가로: 왼쪽, 세로: 상단) */  
background-position: left top;  
}  
  
#div2 {  
/* 단어로 지정해주기 (가로: 왼쪽, 세로: 센터) */  
background-position: left center;  
}  
  
#div3 {  
/* 단어로 지정해주기 (가로: 센터, 세로: 상단) */  
background-position: center top;  
}  
  
#div4 {  
/* 단어로 지정해주기 (가로: 오른쪽, 세로: 하단) */  
background-position: right bottom;  
}  
  
#div5 {  
/* 퍼센트로 지정해주기 (가로: 전체 width의 25% 지점, 세로: 전체 height의 75% 지점 ) */  
background-position: 25% 75%;  
}  
  
#div6 {  
/* 퍼센트로 지정해주기 (가로: 전체 width의 50% 지점, 세로: 전체 height의 100% 지점 ) */  
background-position: 50% 100%;  
  
}  
  
#div7 {  
/* 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 10px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 200px 이동한 지점) */  
background-position: 10px 200px;  
}  
  
#div8 {  
/* 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 150px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 20px 이동한 지점) */  
background-position: 150px 20px;  
}

```
