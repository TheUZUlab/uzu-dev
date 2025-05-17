---
title: 'HTML 속성 정리'
description: 'HTML에서 자주 사용되는 전역 속성과 주요 태그 속성들을 정리하고 비교'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. HTML 속성이란?

HTML 속성(Attribute)은 태그의 동작을 조정하거나 추가 정보를 제공하는 요소입니다. 대부분의 HTML 태그는 속성을 통해 크기, 이름, 값, 링크 등 다양한 정보를 설정할 수 있습니다.

속성은 태그의 시작 태그 안에 작성되며, 보통 `속성명="속성값"` 형태로 사용합니다.

```html
<img src="./images/example-bird.jpg" alt="숲 속 새 사진" width="300" height="200" />
```

---

## 2. 전역 속성(Global Attributes)

모든 HTML 태그에서 공통으로 사용할 수 있는 속성입니다.

| 속성       | 설명                                            |
| ---------- | ----------------------------------------------- |
| `id`       | 고유 식별자. JS, CSS에서 특정 요소 선택 시 사용 |
| `class`    | 공통 스타일 또는 그룹화를 위한 이름 지정        |
| `style`    | 인라인 스타일 지정 (CSS 직접 작성)              |
| `title`    | 마우스 오버 시 툴팁 텍스트 표시                 |
| `hidden`   | 화면에 표시하지 않음 (렌더링되지 않음)          |
| `tabindex` | 키보드 탭 순서 지정                             |
| `data-*`   | 사용자 정의 데이터 속성 (예: `data-id="123"`)   |

---

## 3. 자주 쓰이는 속성 예시

### 3.1 `<a>` 태그

```html
<a href="https://www.uzu-dev.kr" target="_blank" title="외부 링크">사이트 바로가기</a>
```

- `href`: 이동할 주소
- `target`: 새 창(`_blank`) 등 열리는 방식
- `title`: 툴팁 설명

#### 실행 화면 :

![a 태그 사용 예시](/images/blog/web/learn-html/learn-html-10/md-learn-html-1.png)

---

### 3.2 `<img>` 태그

```html
<img src="./images/example-bird.jpg" alt="숲 속 새 사진" width="300" height="200" />
```

- `src`: 이미지 경로
- `alt`: 이미지가 없을 때 표시될 대체 텍스트 (접근성)
- `width`, `height`: 크기 지정

#### 실행 화면 :

![img 태그 사용 예시](/images/blog/web/learn-html/learn-html-10/md-learn-html-2.png)

---

### 3.3 `<input>` 태그

```html
<input type="text" name="username" placeholder="아이디를 입력하세요" required />
```

- `type`: 입력 형식
- `name`: 서버 전송 시 키 이름
- `placeholder`: 힌트 텍스트
- `required`: 필수 입력 여부

#### 실행 화면 :

![input 태그 사용 예시](/images/blog/web/learn-html/learn-html-10/md-learn-html-3.png)

---

## 4. 인라인 스타일 vs 클래스 - CSS

| 구분      | 인라인 스타일                      | 클래스 기반 스타일               |
| --------- | ---------------------------------- | -------------------------------- |
| 적용 방법 | `style` 속성 사용                  | `class` 속성 사용                |
| 예시      | `<p style="color: red">텍스트</p>` | `<p class="red-text">텍스트</p>` |
| 장점      | 빠르고 개별 수정 쉬움              | 재사용성과 유지보수에 좋음       |
| 단점      | 재사용 어려움, CSS와 분리 어려움   | 외부 CSS 필요함                  |

#### 실행 화면 :

![CSS 사용 예시](/images/blog/web/learn-html/learn-html-10/md-learn-html-4.png)

---

## 5. 사용자 정의 속성: `data-*`

- `data-`로 시작하는 속성은 자바스크립트와 연동되는 커스텀 데이터 저장용으로 사용됩니다.
- JS에서 `element.dataset.userId`처럼 접근 가능
-

```html
<div data-user-id="101" data-role="admin">관리자</div>
```

#### 실행 화면 :

![data-* 사용 예시](/images/blog/web/learn-html/learn-html-10/md-learn-html-5.png)
![data-* 사용 예시](/images/blog/web/learn-html/learn-html-10/md-learn-html-6.png)

---

## 6. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/010.html)

---

## 7. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - HTML Attributes](https://developer.mozilla.org/ko/docs/Web/HTML/Attributes)

---
