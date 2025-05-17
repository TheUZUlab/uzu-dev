---
title: 'HTML 링크와 이미지 태그'
description: '웹 페이지 간 연결을 위한 링크와 이미지 삽입 태그의 사용 방법 및 속성 설명'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. 링크와 이미지 태그란?

HTML에서 웹 페이지를 다른 페이지로 연결하거나 이미지를 삽입하기 위해 각각 `<a>`(anchor) 태그와 `<img>` 태그를 사용합니다. 이 두 태그는 웹 페이지의 사용자 경험과 콘텐츠 전달에서 핵심적인 역할을 합니다.

---

## 2. `<a>` - 하이퍼 링크

`<a>` 태그는 다른 웹페이지나 문서, 이메일 주소 등으로 연결되는 하이퍼링크를 생성합니다.

```html
<a href="https://www.uzu-dev.kr">예시 링크</a>
```

#### 실행 환경

![하이퍼 링크 예시](/images/blog/web/learn-html/learn-html-4/md-learn-html-1.png)

### 2.1 주요 속성

| 속성     | 설명                                     |
| -------- | ---------------------------------------- |
| `href`   | 연결할 주소 (URL, 파일 경로 등)          |
| `target` | 링크를 여는 방식: `\_self`, `\_blank` 등 |
| `title`  | 마우스를 올렸을 때 보여지는 텍스트       |

### 2.2 예제

```html
<a href="https://www.uzu-dev.kr" target="_blank" title="새 창에서 열기">Example</a>
```

#### 실행 환경

![주요 속성 예시](/images/blog/web/learn-html/learn-html-4/md-learn-html-2.png)

### 2.3 이메일 전화 링크

```html
<a href="mailto:uzulab.studio@gamil.com">이메일 보내기</a>

<a href="tel:01012345678">전화 걸기</a>
```

#### 실행 환경

![이메일 전화 링크크 예시](/images/blog/web/learn-html/learn-html-4/md-learn-html-3.png)

---

## 3. `<img>` - 이미지 삽입

`<img>` 태그는 웹 페이지에 이미지를 삽입할 때 사용합니다. 닫는 태그 없이 사용하며, src와 alt 속성이 중요합니다.

### 3.1 주요 속성

| 속성               | 설명                                     |
| ------------------ | ---------------------------------------- |
| `src`              | 이미지 경로 (상대/절대 경로 모두 가능)   |
| `alt`              | 이미지 대체 텍스트 (접근성과 SEO에 중요) |
| `width` / `height` | 이미지 크기 설정 (픽셀 또는 %)           |

### 3.2 예제

```html
<a href="https://www.uzu-dev.kr" target="_blank" title="새 창에서 열기">Example</a>
```

#### 실행 환경

![이미지 예시](/images/blog/web/learn-html/learn-html-4/md-learn-html-4.png)

---

## 4. 경로의 이해: 상대 경로 vs 절대 경로

### 4.1 절대 경로

전체 URL 또는 루트(`/`)부터 시작

```html
<img
  src="https://cdn.pixabay.com/photo/2025/05/06/12/19/hut-9582608_1280.jpg"
  alt="숲 속 오두막"
  width="150"
  height="150"
/>
```

#### 실행 환경

![절대 경로 예시](/images/blog/web/learn-html/learn-html-4/md-learn-html-5.png)

### 4.2 상대 경로

현재 파일 위치 기준으로 상대적인 위치 지정

```html
<img
  src="./images/blog/web/learn-html/learn-html-4/example-bird.jpg"
  alt="숲 속 새"
  width="150"
  height="150"
/>
```

#### 실행 환경

![상대 경로 예시](/images/blog/web/learn-html/learn-html-4/md-learn-html-6.png)

---

## 5. 이미지 링크 만들기

`<a>` 태그 안에 `<img>` 태그를 넣으면 이미지를 클릭할 수 있는 링크로 만들 수 있습니다.

```html
<a href="https://www.uzu-dev.kr">
  <img src="logo.png" alt="로고" />
</a>
```

#### 실행 환경

![이미지 예시](/images/blog/web/learn-html/learn-html-4/md-learn-html-7.png)

---

## 6. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/004.html)

---

## 7. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - HTML hyperlink elements](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/a)
- [MDN Web Docs - HTML images elements](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/img)

---
