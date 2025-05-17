---
title: 'HTML 표(table) 태그'
description: '표를 구성하는 HTML 태그와 병합, 스타일, 구조적 사용 방법 설명'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. 표(table)란?

HTML의 `<table>` 태그는 데이터를 행(row)과 열(column)로 구성하여 시각적으로 구조화 된 방식으로 표현할 때 사용됩니다. 주간 계획표, 통계 데이터 등의 표현에 매우 유용합니다.

---

## 2. 기본 구조

표는 크게 표 전체(`<table>`), 행(`<tr>`), 열 제목(`<th>`), 셀(`<td>`)로 구성됩니다.

```html
<table>
  <caption>
    학생 정보
  </caption>
  <tr>
    <th>이름</th>
    <th>나이</th>
  </tr>
  <tr>
    <td>장유주</td>
    <td>22</td>
  </tr>
</table>
```

#### 실행 화면 :

![기본 구조 예시](/images/blog/web/learn-html/learn-html-5/md-learn-html-1.png)

---

#### 2.1 `<table>`

웹 페이지에 표를 생성하는 기본 태그입니다. `<caption>`,`<tr>`, `<th>`, `<td>` 등의 태그와 함께 사용하여 데이터를 표 형식으로 표시합니다.

#### 2.2 `<caption>`

표의 제목을 정의하는 태그입니다. 표의 상단에 표시되며 표의 내용을 요약하는 데에 사용됩니다.

#### 2.3 `<tr>`

표의 행(row)을 정의하는 태그로, 각 행을 구분합니다.

#### 2.4 `<th>`

표의 헤더 셀을 정의하며, 기본적으로 볼드체와 가운데 정렬이 적용됩니다.

#### 2.5 `<td>`

표의 데이터 셀을 정의하는 태그로, `<th>`와 달리 일반 데이터 값을 담습니다.

---

## 3. `<thead>, <tbody>, <tfoot>` - 구조 구분 태그

표의 구조를 명확히 구분하기 위하여 `<thead>`, `<tbody>`, `<tfoot>`을 사용할 수 있습니다.

```html
<table>
  <thead>
    <tr>
      <th>과목</th>
      <th>점수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>수학</td>
      <td>90</td>
    </tr>
    <tr>
      <td>영어</td>
      <td>85</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>총점</td>
      <td>175</td>
    </tr>
  </tfoot>
</table>
```

#### 실행 화면 :

![구조 구분 태그 예시](/images/blog/web/learn-html/learn-html-5/md-learn-html-2.png)

---

#### 3.1 `<thead>`

표의 머리 부분을 정의하며, 주로 `<th>` 태그를 포함해 열 제목을 나타냅니다.

#### 3.2 `<tbody>`

표의 본문을 정의하며, 데이터 행을 담습니다.

#### 3.3 `<tfoot>`

표의 하단을 정의하며, 요약 정보나 합계 등을 표시하는 데에 사용됩니다.

---

## 4. `colspan, rowspan` - 셀 병합

셀을 수평 또는 수직으로 병합할 때 사용하는 속성입니다.

```html
<table>
  <tr>
    <th>이름</th>
    <th>나이</th>
  </tr>
  <tr>
    <td colspan="2">이 셀은 2열을 병합함</td>
    <td rowspan="2">이 셀은 2행을 병합함</td>
  </tr>
</table>
```

#### 실행 화면 :

![셀 병합 예시](/images/blog/web/learn-html/learn-html-5/md-learn-html-3.png)

---

#### 4.1 `colspan` - 열 병합

```html
<td colspan="2">이 셀은 2열을 병합함</td>
```

#### 4.2 `rowspan` - 행 병합

```html
<td rowspan="2">이 셀은 2행을 병합함</td>
```

---

## 5. 예제: 주간 일정표

```html
<table border="1">
  <thead>
    <tr>
      <th>시간</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00</td>
      <td>영어</td>
      <td>수학</td>
      <td>국어</td>
      <td>과학</td>
      <td>체육</td>
    </tr>
  </tbody>
</table>
```

#### 실행 화면 :

![주간 일정표](/images/blog/web/learn-html/learn-html-5/md-learn-html-4.png)

---

## 6. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/005.html)

---

## 7. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - HTML table elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table)

---
