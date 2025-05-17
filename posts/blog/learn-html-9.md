---
title: 'HTML iframe 및 기타 삽입 태그'
description: '외부 웹페이지, 유튜브 영상, 지도 등을 HTML에 삽입하는 방법과 iframe 태그 사용법 정리'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. 삽입 태그란?

HTML에서는 외부 콘텐츠(웹사이트, 영상, 지도 등)를 현재 페이지 안에 표시하고자 할 때 삽입 태그(embed elements)를 사용합니다. 대표적으로 `<iframe>` 태그가 있으며, `<embed>`, `<object>` 등의 태그도 존재합니다.

---

## 2. `<iframe>` 태그란?

`<iframe>`(inline frame)은 다른 HTML 페이지나 외부 콘텐츠를 현재 문서 안에 삽입할 수 있게 해주는 태그입니다.

```html
<iframe src="https://www.uzu-dev.kr" width="600" height="400"></iframe>
```

#### 실행 화면 :

![iframe 예시](/images/blog/web/learn-html/learn-html-9/md-learn-html-1.png)

### 주요 속성

| 속성              | 설명                                           |
| ----------------- | ---------------------------------------------- |
| `src`             | 삽입할 콘텐츠의 URL                            |
| `width`, `height` | 프레임 크기 지정                               |
| `title`           | 접근성을 위한 설명                             |
| `allowfullscreen` | 전체 화면 허용 (주로 영상에서 사용)            |
| `loading`         | 지연 로딩 설정 (`lazy`)                        |
| `frameborder`     | 테두리 유무 지정 (HTML5에서는 CSS로 제어 권장) |

---

## 3. 유튜브 영상 삽입

유튜브 영상 페이지에서 `공유 > 퍼가기`로 복사한 코드를 그대로 붙여넣으면 됩니다.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  frameborder="0"
  allowfullscreen
></iframe>
```

> `VIDEO_ID` 부분만 영상 주소에 맞게 변경하면 됩니다.

#### 실행 화면 :

![유튜브 영상 삽입 예시](/images/blog/web/learn-html/learn-html-9/md-learn-html-2.png)

---

## 4. 구글 지도 삽입

구글 지도에서 `위치 공유 > '지도 퍼가기'` 코드를 복사하면 됩니다.

```html
<iframe
  src="https://www.google.com/maps/embed?..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

#### 실행 화면 :

![구글 지도 삽입 예시](/images/blog/web/learn-html/learn-html-9/md-learn-html-3.png)

---

## 5. 기타 삽입 태그 비교

| 태그       | 설명                                | 사용 예                      |
| ---------- | ----------------------------------- | ---------------------------- |
| `<iframe>` | 외부 페이지를 현재 문서에 삽입      | 유튜브, 지도, 다른 HTML 문서 |
| `<embed>`  | 멀티미디어나 플러그인 삽입          | PDF, 플래시(비추천)          |
| `<object>` | 외부 데이터 객체 삽입 (호환성 낮음) | 예전 ActiveX, PDF 등         |

---

## 6. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/009.html)

---

## 7. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - iframe elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [Google Maps 도움말 - 지도 퍼가기](https://support.google.com/maps/answer/7101463?visit_id=638830809114789003-1159747413&rd=1)

---
