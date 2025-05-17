---
title: 'HTML 목록 태그'
description: '순서 있는 목록, 순서 없는 목록, 정의 목록 등 리스트 태그들의 구조와 사용 방법 설명'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. 목록 태그란?

HTML에서는 여러 항목을 나열하고자 할 때 목록 태그(list tag) 를 사용합니다. 목록은 정보를 체계적으로 정리하고, 시각적으로 구분하기 쉽게 해줍니다. HTML에서 사용하는 목록 유형은 세 가지입니다:

- 순서 없는 목록 (`<ul>`) → 점으로 구분
- 순서 있는 목록 (`<ol>`) → 숫자나 문자로 구분
- 정의 목록 (`<dl>`) → 용어-설명 구조

---

## 2. `<ul>` - 순서 없는 목록

`<ul>`(unordered list)은 항목들 간의 순서를 필요로 하지 않을 때 사용합니다. 각 항목은 `<li>`(list item)로 작성합니다.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

#### 실행 화면 :

![순서 없는 목록 태그 사용 예시](/images/blog/web/learn-html/learn-html-3/md-learn-html-1.png)

---

## 3. `<ol>` - 순서 있는 목록

`<ol>`(ordered list)은 항목들의 순서가 중요할 때 사용합니다. 각 항목은 마찬가지로 `<li>`로 작성합니다.

```html
<ol>
  <li>로그인 페이지 제작</li>
  <li>회원가입 기능 추가</li>
  <li>게시판 구현</li>
</ol>
```

#### 실행 화면 :

![순서 있는 목록 태그 사용 예시](/images/blog/web/learn-html/learn-html-3/md-learn-html-2.png)

---

## 4. `<dl>, <dt>, <dd>` - 정의 목록

`<dl>`(definition list)은 용어와 그에 대한 설명을 짝지어 나타낼 때 사용합니다. 용어는 `<dt>`, 설명은 `<dd>`로 작성합니다.

```html
<dl>
  <dt>HTML</dt>
  <dd>웹 페이지의 구조를 정의하는 마크업 언어</dd>

  <dt>CSS</dt>
  <dd>웹 페이지의 스타일을 지정하는 언어</dd>
</dl>
```

#### 실행 화면 :

![정의 목록 태그 사용 예시](/images/blog/web/learn-html/learn-html-3/md-learn-html-3.png)

---

## 5. 중첩 목록 예시

목록 안에 또 다른 목록을 포함시켜 하위 항목을 나타낼 수 있습니다. `<ul>` 또는 `<ol>` 안에 다시 `<ul>` 또는 `<ol>`을 넣습니다.

```html
<ul>
  <li>
    프론트엔드
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>
    백엔드
    <ul>
      <li>Node.js</li>
      <li>Express.js</li>
    </ul>
  </li>
</ul>
```

#### 실행 화면 :

![중첩 목록 예시](/images/blog/web/learn-html/learn-html-3/md-learn-html-4.png)

---

## 6. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/003.html)

---

## 7. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - HTML list elements](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/ul)

---
