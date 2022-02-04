# axios

```js
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
  //axios 패키지에서 제공하는 axios 객체를 사용해서 GET 리퀘스트를 보내고 
  //그 리스폰스를 받는 코드 
  ```

🙎‍♂️ **axios 객체**에서 리퀘스트를 보내는 많은 메소드들이 fetch 함수처럼 Promise 객체를 리턴한다.

🙋‍♂️ 그래서 fetch 함수와 사용법이 비슷한 부분이 많이 있지만 fetch 함수에는 없는 장점이 있다.

- 모든 리퀘스트, 리스폰스에 대한 **공통 설정 및 공통된 전처리 함수** 삽입 가능
- **`serialization`**, **`deserialization`**을 자동으로 수행
- 특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할지 설정 가능 **`request timeout`** 
- 업로드 시 **진행 상태 정보**를 얻을 수 있음
- 리퀘스트 취소 기능 지원
- `...`

[axios 배우기](https://github.com/axios/axios)


🙆‍♂️ 그러나 axios 는 fetch와 달리 다운로드가 필요한 패키지란 점을 인지해야 한다!!
