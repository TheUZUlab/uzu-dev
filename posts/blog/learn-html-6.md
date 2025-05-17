---
title: 'HTML 입력 양식(Form) 태그'
description: '사용자 입력을 받기 위한 폼 구조와 다양한 입력 필드 태그 및 속성 설명'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. 폼(Form)이란?

HTML에서 `<form>` 태그는 사용자로부터 데이터를 입력받아 서버로 전송하는 영역을 정의합니다. 로그인, 회원가입, 검색, 댓글 등 사용자와 상호작용하는 웹 기능 대부분이 폼을 기반으로 합니다.

---

## 2. 기본 구조

| 태그       | 설명                                                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `<form>`   | 폼의 시작과 끝을 나타내며, 서버로 데이터를 전송할 URL(`action`)과 방식(`method`)을 설정합니다. `method는` 보통 `get` 또는 `post`를 사용합니다. |
| `<label>`  | 입력 필드의 이름을 시각적으로 보여주는 요소이며, `for` 속성을 통해 특정 `<input>`과 연결됩니다. 접근성과 UX 향상에 중요합니다.                 |
| `<input>`  | 텍스트, 비밀번호, 이메일 등 다양한 사용자 입력을 받을 수 있는 핵심 태그입니다. `type` 속성에 따라 다양한 형식으로 동작합니다.                  |
| `<button>` | 버튼을 생성하며, `type="submit"`으로 설정하면 폼을 전송할 수 있습니다.                                                                         |

---

```html
<form action="/submit" method="post">
  <label for="username">아이디:</label>
  <input type="text" id="username" name="username" placeholder="아이디 입력" /><br />

  <label for="password">비밀번호:</label>
  <input type="password" id="password" name="password" placeholder="비밀번호 입력" /><br />

  <button type="submit">로그인</button>
</form>
```

#### 실행 화면 :

![기본 구조 예시](/images/blog/web/learn-html/learn-html-6/md-learn-html-1.png)

---

## 3.`<input>` 태그의 다양한 `type`

| `type` 값  | 설명                                |
| ---------- | ----------------------------------- |
| `text`     | 일반 텍스트 입력                    |
| `password` | 비밀번호 입력 (입력 내용 숨김 처리) |
| `email`    | 이메일 형식 입력 (유효성 검사 가능) |
| `number`   | 숫자 입력                           |
| `checkbox` | 체크박스 선택                       |
| `radio`    | 라디오 버튼 선택                    |
| `submit`   | 폼 제출 버튼                        |
| `reset`    | 입력값 초기화 버튼                  |

---

```html
<input type="text" name="name" placeholder="이름 입력" /><br />
<input type="email" name="email" placeholder="이메일 입력" /><br />
<input type="password" name="password" placeholder="비밀번호 입력" /><br />
<input type="number" name="age" placeholder="나이 입력" /><br />

<p><strong>약관 동의:</strong></p>
<input type="checkbox" name="agree" /> 동의합니다

<p><strong>성별 선택:</strong></p>
<input type="radio" name="gender" value="male" /> 남자
<input type="radio" name="gender" value="female" /> 여자
```

#### 실행 화면 :

![input 예시](/images/blog/web/learn-html/learn-html-6/md-learn-html-2.png)

---

## 4. `<textarea>` - 여러 줄 입력

사용자가 긴 텍스트를 입력할 수 있도록 해주는 태그입니다. 기본적으로 줄바꿈이 가능하며, 행(`rows`)과 열(`cols`) 속성으로 크기를 조절할 수 있습니다.

```html
<label for="message">내용:</label><br />
<textarea id="message" name="message" rows="4" cols="30" placeholder="내용을 입력하세요"></textarea>
```

#### 실행 화면 :

![textarea 예시](/images/blog/web/learn-html/learn-html-6/md-learn-html-3.png)

---

## 5. `<select>` & `<option>` - 드롭다운 메뉴

`<select>` 태그는 목록 중 하나를 선택할 수 있는 드롭다운을 생성하며, `<option>` 태그는 목록 항목을 정의합니다.

- `value` 속성은 실제로 서버에 전송되는 값입니다.
- 사용자에게 보이는 텍스트는 `<option>`의 콘텐츠입니다.

```html
<label for="country">국가 선택:</label>
<select id="country" name="country">
  <option value="kr">대한민국</option>
  <option value="us">미국</option>
  <option value="jp">일본</option>
</select>
```

#### 실행 화면 :

![드롭다운 메뉴 예시](/images/blog/web/learn-html/learn-html-6/md-learn-html-4.png)

---

## 6. 간단한 로그인 폼 예제

```html
<form action="/login" method="post">
  <label for="id">아이디:</label>
  <input type="text" id="id" name="id" required /><br />

  <label for="pw">비밀번호:</label>
  <input type="password" id="pw" name="pw" required /><br />

  <button type="submit">로그인</button>
</form>
```

#### 실행 화면 :

![간단한 로그인 폼 예시](/images/blog/web/learn-html/learn-html-6/md-learn-html-5.png)

---

## 6. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/006.html)

---

## 7. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - HTML form elements](https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/form)

---
