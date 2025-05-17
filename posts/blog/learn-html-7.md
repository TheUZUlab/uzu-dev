---
title: 'HTML 시맨틱 태그'
description: '웹 페이지의 구조와 의미를 명확하게 만드는 시맨틱 태그의 종류와 사용 목적 설명'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. 시맨틱 태그란?

시맨틱(Semantic)은 "의미론적인"이라는 뜻으로, 시맨틱 태그는 HTML 요소에 의미와 역할을 부여하는 태그를 말합니다. 웹 페이지를 구성할 때 단순히 시각적인 구분뿐만 아니라, 각 영역이 어떤 역할을 하는지 명확하게 정의해줍니다.

#### 왜 중요할까?

- 코드 가독성 향상: 의미 있는 태그 이름 덕분에 구조 파악이 쉬움
- SEO(검색 엔진 최적화)에 유리
- 스크린 리더 등 보조 기술에서 콘텐츠를 더 정확히 해석 가능

---

## 2. 주요 시맨틱 태그 정리

| 태그        | 설명                                                   |
| ----------- | ------------------------------------------------------ |
| `<header>`  | 문서나 섹션의 머리말 영역 (로고, 내비게이션 포함 가능) |
| `<nav>`     | 주요 탐색 링크(내비게이션 메뉴)를 담는 영역            |
| `<main>`    | 문서의 주요 콘텐츠 영역. 한 문서에 하나만 존재해야 함  |
| `<section>` | 주제별 구역. 제목을 갖는 논리적인 덩어리               |
| `<article>` | 독립적인 콘텐츠 단위 (예: 블로그 글, 뉴스 기사 등)     |
| `<aside>`   | 사이드 콘텐츠 영역 (광고, 추천 글 등)                  |
| `<footer>`  | 문서나 섹션의 맨 아래쪽 영역 (저작권, 연락처 등)       |

---

## 3. 시맨틱 태그 예제

```html
<header>
  <h1>UZU 블로그</h1>
  <nav>
    <ul>
      <li><a href="#home">홈</a></li>
      <li><a href="#about">소개</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>최신 게시물</h2>
    <article>
      <h3>HTML5에 대해 알아보기</h3>
      <p>시맨틱 태그를 사용하면 웹 접근성과 SEO를 높일 수 있습니다.</p>
    </article>
  </section>
  <aside>
    <h4>추천 글</h4>
    <ul>
      <li><a href="#">CSS Flexbox 정복하기</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2025 UZUlabs. All rights reserved.</p>
</footer>
```

#### 실행 화면 :

![시맨틱 태그 예시](/images/blog/web/learn-html/learn-html-7/md-learn-html-1.png)

---

## 4. `<div>`, `<span>`과의 차이점

| 구분 | 시맨틱 태그                  | 비시맨틱 태그               |
| ---- | ---------------------------- | --------------------------- |
| 예시 | `<header>`, `<article>`      | `<div>`, `<span>`           |
| 목적 | 의미 전달                    | 단순 레이아웃 또는 스타일링 |
| 장점 | SEO, 접근성, 유지보수에 좋음 | 범용성이 높지만 의미 없음   |

> 비시맨틱 태그는 의미가 없는 구분일 뿐, 시각적 스타일만 담당합니다.

---

## 5. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/007.html)

---

## 6. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - semantics](https://developer.mozilla.org/ko/docs/Glossary/Semantics)

---
