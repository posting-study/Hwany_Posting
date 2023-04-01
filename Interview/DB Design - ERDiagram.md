# Database Design

## 왜 DB 설계가 필요한가? 
구체적인 구현을 결정하기 전 DB 구조의 팀원 동의를 얻기 위해 진행해야 한다.

## DB Design Process
### Requirements Analysis
1. 무엇이 저장돼야 하는가?
2. 어떻게 사용되어야 하는가?
3. 이 데이터로 무엇을 할 것인가?
4. 누가 이 데이터를 사용해야 하는가?
  
이 분석에는 Tech. and Non-Tech. 유저들이 함께 참여한다.

### Conceptual Design
1. DB에 대한 High-level Description 실시
2. Tech. 유저들이 충분히 이해할 수 있도록 자세히 설명
3. Non-Tech. 유저들도 충분히 이해할 수 있도록 추상적으로 설명

---
Requirements Analysis와 Conceptual Design을 충분히 수행할 수 있도록 해주는 것이 E/R 모델링이다.

## E/R Diagram
### Entity
Entities & Entity sets 는 E/R Model의 근본적인 단위이다.  
- Entity : Individual Objects로 Entity sets의 member  
- Entity Sets : E/R Diagram에서 실질적으로 사용되는 unit  

![enter image description here](https://user-images.githubusercontent.com/76484900/229285999-c313ffb1-99e1-47c8-9f6a-6d52e1ab8bb1.png)
  
Entity Set은 attributes를 가질 수 있으며 후에 DB의 Column명과 대응된다.

Attributes는 Key를 가진다.  
- key : Entity를 uniquely identifies 하는 minimal set을 의미한다.

### Relationship
Relationship은 Entity Sets 사이의 영향을 설명한다.![enter image description here](https://user-images.githubusercontent.com/76484900/229286260-fa2fbfa5-98e7-405f-b2ab-a2c211c3cc39.png)

Entity Sets 사이의 Relationship은 모든 가능한 Entities의 쌍의 subset이며 이는 Entity Sets의 Key가 고유식별자가 되는 경우어야 한다.  

또한 Relationship은 자신의 attributes를 가질 수 있다.

#### 예시
![enter image description here](https://user-images.githubusercontent.com/76484900/229286389-9c0c1a6b-03cf-4c93-a6d4-77425a244dd6.png)

**The Relationship is uniquely determined by the keys of its entites!!**

모델링에 급급해 현실 문제를 배제하면 안된다.  
relationship을 통해 표현할 수 없는 상황이 있는 경우에 언제든 새로운 Entity sets을 도입해 relationship을 대체할 수 있다.  


## E/R Diagram Consideration
### Multiplicity
DB 설계시 일대다 / 일대일 / 다대다 관계를 파악하는 경우도 중요하다.  
이때 E/R Diagram을 사용시 관계를 적용하는 방법중 하나가  Multiplicity이다.  

![enter image description here](https://user-images.githubusercontent.com/76484900/229286675-d7314743-411b-493e-8ec2-cd00ac34e456.png)
Function Mapping이란 단어에 주목하면 이해하기 쉽다.  
화살표는 함수 관계가 성립한다는 것이고 일반 줄은 성립하지 않는다는 뜻이다.  

- 양 쪽 모두 함수 관계 성립 : One to One
- 한 쪽만 함 수 관계 성립 : 함수 관계 성립하는 쪽이 Many
- 양 쪽 모두 성립 X : Many to Many

### Entity? or Attribute? 

![enter image description here](https://user-images.githubusercontent.com/76484900/229286980-3d7a327f-14da-44a4-8b65-c50c261b30b0.png)

Attribute가 단순히 적용될 때는 Attribute로 추가하면 된다.  
하지만 여러 값들을 추가로 기록하고 싶을 때에는 new Entity를 도입해 Diagram을 구성한다.  

## E/R Diagram conversion to Schema
**Both Entity Sets and Relationships become relations of tables in RDBMS**  

- Entity Sets는 Table에 대응되며 set의 attributes는 column에 해당한다.  
- Relationship은 대응되는 Entity Sets의 Key들과 자기 자신의 atrributes을 column으로 가지는 Table을 구성한다.  

![enter image description here](https://user-images.githubusercontent.com/76484900/229287275-db679761-009b-4fde-aaff-ee571899610c.png)

## Advanced E/R Concepts
### Subclass
특별한 class가 존재해서 E/R 에 넣고 싶은데 기존 컨셉을 유지하고 싶을 때 Subclass를 사용한다.

![enter image description here](https://user-images.githubusercontent.com/76484900/229287475-98154b37-cf7e-4b35-b8d1-b57f53ba0be9.png)

### Constraints
#### Bold Line
한 Entry Set (A)가 다른 Entry Set (B)에 total participation 상태여야 할 때 A와 Relationship 사이의 연결선을 **Bold Line** 으로 명시한다.

#### Referential Integrity 
Entry Set (A)가 많아야 하나의 다른 Entry Set (B)와 관계를 맺지만 몇 몇은 관계를 맺지 않는 상황을 없애기 위해 Many to One에서 Many 측의 화살표를 Bold 처리한다.

![enter image description here](https://user-images.githubusercontent.com/76484900/229287929-b8d669ac-a928-4d58-aaee-485a20d40eb8.png)

#### Key
Entity Set의 Key attribute는 Table의 primary Key와 대응되므로 밑줄로 정의한다.  

#### Weak Entity Sets
Primary Key를 정의할 만큼 충분히 Attribute가 존재하지 않는 Entity set을 말한다. 

Weak Entity Set은 Identifying Entity Set에 의존하게 된다. 또한 이 둘의 관계를 Identifying relationship이라고 한다.  

Identifying Relationship은 WE set이 하나로 정해지는 one to Many 관계이며 전체 참여 관계를 통해 맺어져야 한다. 

![enter image description here](https://user-images.githubusercontent.com/76484900/229288516-b4c88391-e5c9-4cd2-a569-00987dcd3aa8.png)

Weak Entity Set의 Primary Key는 WE set의 partial Key와 IE set의 primary key를 합쳐서 만든다. partial key는 dash line으로 처리한다.    


예를 들어 학과는 자신의 구분자를 가질 만큼 충분한 특성이 없지만 학교와 합쳐졌을 때 학교 번호와 학과를 합쳐 의미를 가지는 관계를 형성할 수 있다.  


