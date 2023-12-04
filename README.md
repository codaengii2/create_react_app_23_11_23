## [1차] 개발 계획서

▪ 11/23 (목)

- 제작의도 및 주제선정

▪ 11/24 (금)

- 제작의도 및 주제선정
- 사이트맵 구성, 라우터 구성 => 컨펌
- 와이어프레임 작업

▪ 11/25 ~ 11/26 (토, 일)

- 디자인 작업

▪ 11/27 (월)

- 디자인 시안 => 컨펌
- 시안 수정 및 라우터 구성

▪ 11/28 (화)

- 시안 및 라우터 구성 => 컨펌
- 할일
  => Router 연결, Home ui, header, footer 컴포넌트 ui 구성
  => GlobalStyled 구성
- detail page 질문

▪ 11/29 (수)

- router 연결, api 연결 => 컨펌
- 할일
  => MovieBanner, Slide api 연결 및 ui 구성

▪ 11/30 (목)

- Home ui 질문 => 컨펌
- 할일
  => Genre page 구성 및 api 연결
  => Login page 구성

▪ 12/01 (금)

- api연결 => 컨펌
- 할일
  => detail ui 및 연결
  => 반응형
- 질문
  => genre api 연결

▪ 12/02 ~ 12/03 (토, 일)

- PageNotFound ui
- login page
- 반응형
- 배포 1차 테스트

▪ 12/04 (월)

<!-- [x] header menu 반응형 -->
<!-- [x] 모바일 메뉴 클릭시 모바일메뉴 사라지게 -->
<!-- home 반응형 슬라이드 -->
<!-- [x] home label 버튼 색깔 -->
<!-- detail page -->
<!-- [x] search page -->
<!-- login page -->
<!--[x] pagenotfound -->
<!-- helmet -->

- 배포 2차 테스트 => 컨펌

▪ 12/05 (화)

- 컨펌 종료

# 기획서

## 이름: cocha(코챠)

## 1. 제작의도

- 인기있는 영화를 추천 받고 , 검색을 통해 영화 정보를 볼 수 있으면 좋겠음.

## 2. 기술 스택(stack)

- HTML, css, javascript, Node.js, React

## 3. 서비스 목표

- 수많은 영화 정보를 하나의 웹사이트에서 검색하여 정보를 볼 수 있게 함.

## 4. 사이트맵 구성 이미지 제작

- 레퍼런스

1. https://laftel.net/finder (라프텔 => 다양한 장르 테마별로 애니메이션을 검색할 수 있음)
2. https://anime.onnada.com/quarter.php (애니메 => 카테고리가 다양하게 구성되어있음)
3. https://9animetv.to/(9애니티비 => 검색창에 키워드 검색시 키워드와 관련된 작품들을 한번에 볼 수 있음)
4. https://www.aniplustv.com/ (애니플러스 => 넷플릭스와 같이 컨텐츠를 큼직하게 구성, 인터렉션 요소들..? 흥미도를 높임)

## 5. 클라이언트 요구사항 분석 (페르소나 설정)

▪ 페르소나

- 영화를 즐겨보는 20대 강씨
- 영화를 좋아하지만 인기있거나 사람들이 많이 보는 영화을 어디서 보는지 잘 몰라서 불편함을 겪음
- 인기순위로 리스트업 되어있는 사이트들 중에 골라서 보았으면 좋겠음
- 내가 좋아하는 장르를 따로 찾아서 검색가능하면 더 편리할 것 같음

1. 메인

- 메인 배너는 이벤트가 나올때마다 다른 영화 홍보 배너를 보여주도록 구성
- header에서는 네비게이션과 검색창 로그인 회원가입 구성
- footer 에서는 sns와 (회사소개 / 고객센터 / 개인정보 처리방침 / 저작권 표기) 푸터메뉴 구성
- 인기순위의 영화를 분기별로 구성
- 최근 업데이트 작품 / 이벤트 구성
- 영화 예고편 보기

2. 작품 검색 page

- 각 장르를 다양하고 접근하기 쉽도록 구성

## 개발

1. react router dom 을 사용하여 전체 페이지 구성
2. Router 연결
3. header 컴포넌트 제작 - 스크롤 이벤트 추가
4. footer 컴포넌트 제작
5. Home ui 구성
6. MovieBanner ui 구성 및 api 연결
7. Slide ui 구성 및 api 연결
8. Genre ui 구성
9. ShowAni ui 구성 및 api 연결
10. Detail ui 구성 및 api 연결
11. Login ui 구성 및 Sign ui 구성
12. PageNotFound ui 구성

## 배포

- 깃허브

### npm 설치

[x] npm i react-router-dom
[x] npm i styled-components
[x] npm i styled-reset
[x] font awesome

- npm i --save @fortawesome/fontawesome-svg-core
- npm i --save @fortawesome/free-solid-svg-icons
- npm i --save @fortawesome/free-regular-svg-icons
- npm i --save @fortawesome/free-brands-svg-icons
- npm i --save @fortawesome/react-fontawesome@latest

[x] npm install node-fetch@2 --save
[x] npm i react-hook-form
[x] npm i swiper
[x] npm i react-spinners
[x] npm i react-helmet
