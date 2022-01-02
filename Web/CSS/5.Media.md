## 반응형 웹  
 
핸드폰, 데스크탑, 테블릿 등 브라우저 화면에 따라 레이아웃을 바꾸면 따로 전용 웹버전을 관리할 필요가 없다. 

이때 사용하는 것이 `@media` 이다.

#### media 속성🎥
##### 1. min-width : Apx
가로가 Apx이상일 때 적용
##### 2. max-width: Apx
가로가 Apx이하일 때 적용
```css
h1{  
  font-size: 25px  
 }  
  
p{  
  font-size: 25px  
}  
  
/* 가로길이가 768 이상일때는! */  
@media (min-width: 768px) {  
  h1{  
    font-size: 36px  
  }  

  p{  
    font-size: 24px  
  }  
  
}  
/* 가로길이가 992px 이상일때는! */  
@media (min-width: 992px) {  
	h1{  
		font-size: 48px  
	}  
	  
	p{  
		font-size: 32px  
	}  
  
}
```
#### media 쿼리는 순서대로 적용되며 위에 적용한 것이 우선적으로 적용된다!

