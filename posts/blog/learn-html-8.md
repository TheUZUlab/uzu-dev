---
title: 'HTML 미디어 태그 (오디오와 비디오)'
description: '웹에서 오디오와 비디오를 삽입하고 제어하는 HTML 태그 및 속성 정리'
date: '2025-05-17'
category: ['web']
tags: ['HTML', 'Frontend']
thumbnail: '/images/blog/web/learn-html/md-learn-html.png'
---

---

## 1. 미디어 태그란?

HTML에서는 오디오나 비디오 같은 멀티미디어 콘텐츠를 웹 페이지에 삽입할 수 있도록 <audio>와 <video> 태그를 제공합니다. 이들 태그는 사용자가 재생, 일시정지, 볼륨 조절 등을 할 수 있도록 기본 컨트롤 인터페이스도 함께 지원합니다.

---

## 2. <audio> 태그

웹 페이지에 음성이나 음악 파일을 삽입할 때 사용합니다.

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg" />
  브라우저가 audio 태그를 지원하지 않습니다.
</audio>
```

#### 실행 화면 :

![audio 예시](/images/blog/web/learn-html/learn-html-8/md-learn-html-1.png)

#### 주요 속성

| 속성       | 설명                                        |
| ---------- | ------------------------------------------- |
| `controls` | 재생/일시정지 버튼 UI를 보여줌              |
| `autoplay` | 페이지 로드 시 자동 재생 (권장되지 않음)    |
| `loop`     | 반복 재생                                   |
| `muted`    | 음소거 상태로 시작                          |
| `preload`  | 로딩 시점 제어 (`auto`, `metadata`, `none`) |

---

## 3.`<video>` 태그

웹 페이지에 영상 콘텐츠를 삽입할 때 사용합니다.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  브라우저가 video 태그를 지원하지 않습니다.
</video>
```

#### 실행 화면 :

![video 예시](/images/blog/web/learn-html/learn-html-8/md-learn-html-2.png)

#### 주요 속성

| 속성       | 설명                                        |
| ---------- | ------------------------------------------- |
| `controls` | 영상 컨트롤 UI 표시                         |
| `autoplay` | 페이지 로드 시 자동 재생                    |
| `loop`     | 반복 재생                                   |
| `muted`    | 음소거 상태로 시작                          |
| `poster`   | 영상 로드 전 표시할 이미지                  |
| `preload`  | 로딩 시점 제어 (`auto`, `metadata`, `none`) |

---

## 4. `<track>` - 자막 삽입

`<track>` 태그는 `<video>` 또는 `<audio>` 안에 자막, 설명, 번역 등 텍스트 트랙을 추가할 수 있도록 해줍니다.

```html
<label for="message">내용:</label><br />
<textarea id="message" name="message" rows="4" cols="30" placeholder="내용을 입력하세요"></textarea>
```

#### 주요 속성

| 속성      | 설명                                           |
| --------- | ---------------------------------------------- |
| `src`     | VTT 형식 자막 파일 경로                        |
| `kind`    | subtitles, captions, descriptions, chapters 등 |
| `srclang` | 언어 코드                                      |
| `label`   | 사용자에게 표시될 자막 이름                    |
| `default` | 기본으로 표시할 자막 지정                      |

---

## 5. 예제: 오디오 & 비디오 삽입

```html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
</audio>

<video width="320" height="240" controls poster="thumbnail.png">
  <source src="video.mp4" type="video/mp4" />
  <track src="captions.vtt" kind="subtitles" srclang="ko" label="자막" default />
</video>
```

#### 실행 화면 :

![오디오 & 비디오 삽입 예시](/images/blog/web/learn-html/learn-html-8/md-learn-html-3.png)

---

## 5. 실습 코드

[GitHub - study-log](https://github.com/TheUZUlab/study-snippets/blob/main/html/008.html)

---

## 6. 참고 자료

- [codingEverybody](https://codingeverybody.kr/)
- [MDN Web Docs - HTML audio elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio)
- - [MDN Web Docs - HTML video elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video)

---
