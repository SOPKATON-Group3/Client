## 팀원 소개

<div align="center">
	<table>
  <th>서혜은 @henization</th>
	<th>이서영 @leeseooo</th>
  <th>이혜준 @solar3070</th>
	<tr>
		<td><img src="https://github.com/henization.png"></td>
		<td><img src="https://github.com/leeseooo.png"></td>
		<td><img src="https://github.com/solar3070.png"></td>
	</tr>
	<tr>
	<td>
		<ul>
		<li>웹파트의 애기🍼</li>
		</ul>
	</td>
	<td>
	<ul>
		<li>웹파트의 이하이🎤</li>
	</ul>
	</td>
	<td>
		<ul>
		<li>웹파트의 마라샹궈🔥</li>
		</ul>
	</tr>
	<tr>
	<td>
		<ul>
		<li>메인 페이지 & 쪽지 열람 모달 </li>
		</ul>
	</td>
	<td>
	<ul>
		<li>보관함 페이지 & 보관함 세부</li>
	</ul>
	</td>
	<td>
		<ul>
		<li>랜딩 페이지 & 쪽지 작성 모달 & 온보딩 모달 & 열쇠 획득 모달</li>
		</ul>
	</tr>
	</table>
</div>

## 기술 스택

<div align="center">
  <img src="https://img.shields.io/badge/Javascript-F2CE04?style=flat-square&logo=javascript&logoColor=white"/><br>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/github action-2671E5?style=flat-square&logo=GitHub%20Actions&logoColor=white"/>
</div>


## 서비스 소개
**언락 **🔑 - 즐거운 일상을 쪽지로 공유하는 서비스


## 코드 컨벤션


### 컴포넌트 선언

최상위는 function ~
아래 함수는 const ~

```jsx
function Component() {
  const handleaaaa = () => {};
}
```

<!-- ### 핸들러 함수

기능 기준으로 쓰되 (`modalOpen` 등),
정말 이 함수가 하는 일이 특정 이벤트 전용이라면 `handle[이벤트당한요소][이벤트]` (`handleInputChange` 등)
 -->

### 컴포넌트 이름

camelCase 사용합시다 ~

1. `buttonSearch`
2. `searchButton` ✅
3. `btnSearch`
4. `searchBtn`

### style 붙인 거

스타일만을 위해서 만든 컴포넌트는 styled를 붙이자
명칭 명확히 할 것!

1. ❌ `StyledDiv`
2. `StyledTitle`
3. 최상위 div는 StyledRoot로 고정
4. `StyledWrapper`
5. `StyledImage`

### export , import

export한 친구의 이름 바꿔서 쓰지 말기!
되도록 변수/함수 이름은 자세하게 쓰기

## commit message 컨벤션
- 커밋 컨벤션은 대표적인거만 지키좌!!

![스크린샷 2022-03-31 오전 5 02 34](https://user-images.githubusercontent.com/89568030/169188859-74a48236-949e-483b-8ddb-c3cfb3ce44ec.png)


## 브랜치 전략 (ex. github flow)

- github flow 사용
- main에서 feat/[브랜치명] 생성하기
- 작업이 다 끝나면 피쳐 브랜치에서 main 브랜치로 Pull Request 작성

## 기타
- 단위 : rem, em 사용
- 절대경로 사용 & rc 기준으로 경로 작성 (/components/…      x ,  components/…       o )
	 

## 폴더 구조

```
.
├── data.json 🗂 목 데이터 저장
├── apis 🗂 api 폴더
├── package.json 📦 설치된 패키지를 관리하는 파일
└── src
    ├── App.jsx ✡️ 앱의 라우팅과 글로벌 스타일 지정
    ├── index.js
    ├── component
    │   ├── common 🗂 공통으로 쓰일 컴포넌트 저장
    │   │   └── assets
    │   │       ├── icon
    │   │       └── images
    │   ├── landing 🗂 landing 페이지에 쓰일 컴포넌트 저장
    │   ├── main 🗂 main 페이지에 쓰일 컴포넌트 저장
    │   └── messageFeed 🗂 messageFeed 페이지에 쓰일 컴포넌트 저장
    ├── pages 🗂 라우팅 시 보여질 페이지 컴포넌트 저장
    │   ├── Landing
    │   ├── Main
    │   └── MessageFeed
    └── styles
        └── color.js
```


