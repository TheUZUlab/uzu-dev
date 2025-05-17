---
title: 'HTML 기본 구조'
description: 'HTML 문서가 어떻게 구성되어 있는지, 필수 태그들과 기본 골격 설명'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. HTML 문서란?

HTML은 HyperText Markup Language의 약자로, 웹 페이지를 구성하는 기본적인 마크업 언어입니다. 텍스트에 의미를 부여하고 구조를 지정하며, 브라우저가 이를 해석하고 시각적으로 표현할 수 있도록 해줍니다.
모든 HTML 문서는 반드시 특정한 구조를 따라야 하며, 이 구조는 웹 표준에 따라 정의되어 있습니다. 이구조를 바르게 이해하는 것은 웹 개발의 기초이자 핵심입니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>practice tilte</title>
  </head>
  <body></body>
</html>
```

---

## 2. `<!DOCTYPE html>` - 문서 유형 선언

HTML 문서의 가장 첫 줄에는 반드시 `<!DOCTYPE html>` 선언이 있어야 합니다. 이것은 이 문서가 HTML Living Standard 문서임을 브라우저에게 알리는 역할을 합니다.

### 2.1 html Living Standard 문서란?

> Living Standard란 특정 버전(예: HTML5)으로 고정되지 않고, 지속적으로 업데이트되고 발전하는 살아있는 표준 문서를 의미합니다.

과거에는 HTML4, XHTML, HTML5처럼 버전 단위로 명세가 나뉘었지만, 웹 기술은 매우 빠르게 진화하고 있기 때문에 다음과 같은 문제점이 발생했습니다.

- 버전마다 단절이 생겨 웹 개발자들의 혼란 유발
- 표준이 실제 브라우저 구현보다 느림
- 새롱누 기능을 표준에 넣으려면 너무 오래 걸림

이를 해결하기 위해 WHATWG(Web Hypertext Application Technology Working Group)에서는 HTML을 Living Standard 형식으로 운영하고 있습니다. HTML 사양은 이제 https://html.spec.whatwg.org/에서 실시간으로 유지되고 있으며, 브라우저(Chrome, Firefox, Safari 등)는 이 명세를 기준으로 동작합니다.

---

## 3. `<html>`, `<head>`, `<body>` - HTML 기본 구조

HTML 문서는 트리 구조를 가지며, 루트 엘리먼트인 `<html>` 내부에 `<head>`와 `<body>`로 나뉘어 구성됩니다.

### 3.1 `<html>` - 루트 요소

문서 전체를 감싸는 최상위 요소입니다. 보통 `lang` 속성을 사용하여 페이지의 주요 언어를 정의합니다.

```html
<html lang="en"></html>
```

#### 3.1.1 `lang="언어코드-국가코드"` - 언어 설정

**언어코드(소문자)-국가코드(대문자)**
| 언어 | 언어코드 | 국가코드 |
| -- | -- | -- |
| 한국어 | ko | KR(대한민국), KP(북한) |
| 영어 | en | US(미국), GB(영국), PH(필리핀) |
| 중국어 | zh | CN(중국), HK(홍콩), TW(대만), Hans(간체), Hant(번체) |
| 일본어 | ja | |
| 독일 | de | |

정확한 언어 설정은 검색 엔진 최적화(SEO), 스크린 리더 접근성 향상, 자동 번역 등에서 매우 중요합니다.

---

### 3.2 `<head>` - 문서의 메타 데이터

<head> 영역에는 다음과 같은 정보가 들어갑니다.

- 문서 제목 (`<title>`) → 브라우저 탭에 표시
- 문자 인코딩 (`<meta charset="UTF-8">`)
- 뷰포트 설정 (`<meta name="viewport">`)
- 외부 리소스 연결 (`<link>`)
- 자바스크립트 로딩 (`<script>`)

---

### 3.3 `<body>` - 사용자에게 보여지는 콘텐츠

텍스트, 이미지, 버튼, 폼, 레이아웃 등 실제 사용자에게 보여지는 모든 요소들이 이 부분에 작성됩니다.

```html
<body>
  <h1>안녕하세요</h1>
  <p>제 이름은 장유주입니다.</p>
</body>
```

---

## 4. 주요 태그들의 역할

### 4.1 `<title>`

브라우저 탭에 표시되는 제목입니다. 검색 결과에도 이 정보가 표시되므로, SEO에서 매우 중요한 요소입니다.

---

### 4.2 `<meta charset="UTF-8">`

문서의 문자 인코딩을 UTF-8로 지정합니다. 이는 대부분의 언어를 안정적으로 표현할 수 있는 인코딩이며, 한국어도 깨지지 않고 잘 출력되도록 보장합니다.

---

### 4.3 `<link>`

외부 CSS 파일, 아이콘(favicon), 폰트 등 다양한 리소스를 문서와 연결할 때 사용합니다.

```html
<link rel="stylesheet" href="styles.css" />
```

---

### 4.4 `<script>`

자바스크립트 코드를 삽입하거나 외부 스크립트 파일을 연결합니다.

```html
<script src="main.js"></script>
```

---

## 5. 기본 HTM5 탬플릿 예제

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>practice title</title>
  </head>
  <body>
    <h1>안녕하세요</h1>
    <p>제 이름은 장유주입니다.</p>
  </body>
</html>
```

---

## 6. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/001.html)

---

## 7. 참고 자료

- [HTML Living Standard (WHATWG)](https://html.spec.whatwg.org/)
- [MDN Web Docs - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)

---
