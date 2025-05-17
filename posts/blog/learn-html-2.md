---
title: 'HTML 텍스트 관련 태그'
description: '문단, 제목, 강조, 줄바꿈 등 텍스트 표시와 관련된 기본 태그 설명'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. 텍스트 태그란?

HTML에서 텍스트를 표현하고 꾸미기 위하여 사용하는 다양한 태그들이 있습니다. 이들 태그를 사용하면 제목을 정의하고, 문단을 나누며, 특정 부분을 강조하거나 취소선 등을 추가할 수 있습니다. 웹 페이지의 가독성과 의미 전달에 매우 중요한 역할을 합니다.

---

## 2. `<h1>` ~ `<h6>` - 제목 태그

제목을 나타내는 태그입니다. 숫자가 작을수록 크고 중요한 제목을 의미합니다

- `h1`은 보통 문서 전체의 제목으로 사용됩니다.
- `h2` 이하 태그는 소제목이나 구역 제목에 사용됩니다.
- 브라우저는 기본적으로 크기와 굵기를 다르게 렌더링합니다.

```html
<h1>제목 1</h1>
<h2>제목 2</**h2**>
<h3>제목 3</h3>
<h4>제목 4</h4>
<h5>제목 5</h5>
<h6>제목 6</h6>
```

#### 실행 화면 :

![제목 태그 사용 예시](/images/blog/web/learn-html/learn-html-2/md-learn-html-1.png)

---

## 3. 문단 및 줄바꿈 태그

### 3.1 `<p>` - 문단

문단을 정의하는 태그로, 일반적인 텍스트 단위를 나타냅니다.

```html
<p>이것은 하나의 문단입니다.</p>
```

#### 실행 화면 :

![문단 태그 사용 예시](/images/blog/web/learn-html/learn-html-2/md-learn-html-2.png)

---

### 3.2 `<br>` - 줄바꿈

강제로 줄을 바꾸고 싶을 때 사용합니다.

```html
<p>
  안녕하세요. <br />
  제 이름은 장유주입니다.
</p>
```

#### 실행 화면 :

![줄바꿈 태그 사용 예](/images/blog/web/learn-html/learn-html-2/md-learn-html-3.png)

---

### 3.3 `<hr>` - 수평선

내용을 구분하는 수평선을 추가합니다.

```html
<p>위 내용</p>
<hr />
<p>아래 내용</p>
```

#### 실행 화면 :

![수평선 태그 사용 예](/images/blog/web/learn-html/learn-html-2/md-learn-html-4.png)

---

## 4. 텍스트 강조 및 의미 태그

### 4.1 `<strong>` - 중요 강조

텍스트의 중요도를 강조할 때 사용합니다. 스크린 리더에서는 강조된 정보로 읽으며, 기본적으로 굵은 글씨로 표시됩니다.

```html
<strong>중요한 정보입니다.</strong>
```

#### 실행 화면 :

![중요 강조 태그 사용 예시](/images/blog/web/learn-html/learn-html-2/md-learn-html-5.png)

---

### 4.2 `<em>` - 강세 강조

문장에서 특히 강조하고 싶은 단어나 구문에 사용합니다. 스크린 리더는 이 부분을 강한 억양으로 읽어줍니다. 브라우저에서는 보통 기울임체로 표현됩니다.

```html
<em>강조하고 싶은 텍스트입니다.</em>
```

#### 실행 화면 :

![강세 강조 태그 사용 예시](/images/blog/web/learn-html/learn-html-2/md-learn-html-6.png)

---

### 4.3 `<mark>` - 형광펜 강조

특정 텍스트를 형광펜으로 칠한 것처럼 강조하고 싶을 때 사용합니다. 기본적으로 배경이 노란색으로 표시됩니다.

```html
<mark>이 부분은 눈에 띄게 강조합니다.</mark>
```

#### 실행 화면 :

![형광펜 강조 태그 사용 예시](/images/blog/web/learn-html/learn-html-2/md-learn-html-7.png)

---

### 4.4 `<del>` - 삭제선 (취소선)

삭제된 텍스트나 더 이상 유효하지 않은 내용을 나타냅니다. 일반적으로 텍스트에 가로줄(취소선)이 생깁니다.

```html
<del>이 텍스트는 삭제된 내용입니다.</del>
```

#### 실행 화면 :

![삭제선 (취소선) 태그 사용 예시](/images/blog/web/learn-html/learn-html-2/md-learn-html-8.png)

---

### 4.5 `<ins>` - 삽입된 내용 (밑줄 강조)

새로 추가된 텍스트를 의미합니다. 브라우저에서는 보통 밑줄로 표시됩니다. 버전 관리 문서나 변경사항 표시 등에 사용됩니다.

```html
<ins>이 텍스트는 새로 삽입된 내용입니다.</ins>
```

#### 실행 화면 :

![삽입된 내용 (밑줄 강조) 태그 사용 예시](/images/blog/web/learn-html/learn-html-2/md-learn-html-9.png)

---

## 5. 예제: 텍스트 태그 종합

```html
<h1>제목 1</h1>
<h2>제목 2</h2>
<h3>제목 3</h3>
<h4>제목 4</h4>
<h5>제목 5</h5>
<h6>제목 6</h6>

<p>이것은 하나의 문단입니다.</p>

<p>
  안녕하세요. <br />
  제 이름은 장유주입니다.
</p>

<p>위 내용</p>
<hr />
<p>아래 내용</p>

<strong>중요한 정보입니다.</strong>
<em>강조하고 싶은 텍스트입니다.</em>
<mark>이 부분은 눈에 띄게 강조합니다.</mark>
<del>이 텍스트는 삭제된 내용입니다.</del>
<ins>이 텍스트는 새로 삽입된 내용입니다.</ins>
```

---

## 6. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/002.html)

---

## 7. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - Text-level semantics](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements#text-level_semantics)

---
