---
title: '예시'
description: '예시 페이지입니다.'
date: '2025-04-19'
category: ['frontend']
tags: ['Tailwind', 'Markdown']
thumbnail: '/images/guide.jpg'
---

## 마크다운 렌더링 예시

### 1. 표 (Table)

| 기능          | 설명                          | 상태       |
| ------------- | ----------------------------- | ---------- |
| 태그 필터링   | 선택한 태그로 포스트 필터링   | ✅ 완료    |
| 카테고리 링크 | 드롭다운으로 분류별 보기 제공 | ✅ 완료    |
| 슬러그 페이지 | 상세 글 보기 페이지           | ✅ 완료    |
| 다국어 지원   | 언어별 콘텐츠 제공            | 🚧 준비 중 |

---

### 2. 인용문 (Blockquote)

> 마크다운 문서는 깔끔한 문법으로 다양한 콘텐츠를 표현할 수 있습니다.  
> **코드**, _이미지_, 링크, 표 등도 포함할 수 있죠.

---

### 3. 목록 (List)

#### 순서 있는 목록

1. 마크다운 문서 생성
2. 페이지에 렌더링 연결
3. 스타일 적용
   1. 코드블럭
   2. 표
   3. 이미지

#### 순서 없는 목록

- Next.js
- Tailwind CSS
  - Typography
  - Shadow 설정
- React 19

---

### 4. 코드 블록 (Code block)

#### JavaScript

```javascript
const tags = ['frontend', 'backend', 'ai'];
tags.forEach(tag => {
  console.log(`Tag: ${tag}`);
});
```

#### Python

```python
def greet(name):
    return f"Hello, {name}!"
```

#### HTML + CSS

```html
<section>
  <h1>Hello</h1>
</section>
```

```css
h1 {
  color: #333;
  font-weight: bold;
}
```

---

### 5. 이미지

![샘플 이미지](/images/guide.jpg)

---

### 6. 링크

👉 [내 포트폴리오로 이동](https://uzu.dev)

---

### 7. 인라인 코드

`npm run dev` 명령어로 로컬 개발 서버를 실행하세요.

---

끝!
