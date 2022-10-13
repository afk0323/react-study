# To Do
할 일을 입력하고, 삭제할 수 있는 To Do List 제작

<br>

## 🚀 진행과정
리액트를 사용하는 이유: 최소 단위의 렌더링을 위해


- useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
- props: 태그의 속성 값을 함수의 argument처럼 컴포넌트에 값을 전달해준다.
- useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, dependency가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 dependency는 여러개 입력이 가능하다.

🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(React.memo() 사용)

🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능

<br>

## 🎞 실행 화면
<img width="1206" alt="스크린샷 2022-10-13 오전 11 01 14" src="https://user-images.githubusercontent.com/86689831/195481455-bb361549-c751-4489-84ee-74e8a65e8dc2.png">
