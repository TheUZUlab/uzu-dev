---
title: '기초파이썬코딩 7주차'
description: '제주한라대학교 1학년 기초 파이썬 코딩 7주차 수업 정리: 함수 정의와 호출, tkinter GUI 프로그래밍 기초 실습 포함'
date: '2025-04-15'
category: ['university']
tags: ['1학년', '기초파이썬코딩']
thumbnail: '/images/md-basic-python-coding.png'
---

---

## 1. 함수 (Function)

### 1.1 함수란?

함수(Function)는 특정 작업을 수행하는 코드의 묶음입니다.
복잡한 작업을 잘게 나눠서 관리하고, 필요할 때마다 호출하여 사용할 수 있도록 구성하는 것이 함수의 목적입니다.

---

### 1.2 함수의 구성 요소

| **요소** | **설명** |
| --- | --- |
| `def` | 함수를 정의하는 키워드 |
| 함수 이름 | 함수의 고유 이름 (소문자와 밑줄 권장) |
| 매개변수(Parameter) | 함수로 전달되는 값 |
| `return` | 함수의 실행 결과를 돌려줌 (필수는 아님) |

```python
def greet(name):        # 함수 정의
    message = f"Hello, {name}!"
    return message      # 결과 반환
```

---

### 1.3 함수의 장점

1. **코드 재사용**
    - 같은 코드를 여러 번 복붙할 필요 없이 함수로 호출 가능
2. **코드 분할과 모듈화**
    - 각 작업을 함수로 나누면 구조가 깔끔해지고 디버깅이 쉬움
3. **가독성 향상**
    - 함수 이름만으로도 무엇을 하는지 알 수 있음
4. **유지보수 용이성**
    - 수정 시 한 곳만 바꾸면 전체 반영 가능

---

### 1.4 함수 정의와 호출

```python
def 함수이름(매개변수1, 매개변수2, ...):
    """함수에 대한 설명 (Docstring)"""
    실행 코드
    return 결과값

# 호출 예시
result = 함수이름(인자1, 인자2)
```

---

### 1.5 다양한 함수 형태

| **형태** | **설명** | **예시** |
| --- | --- | --- |
| 매개변수 o, 반환 o | 가장 일반적인 형태 | `def add(a, b): return a + b` |
| 매개변수 o, 반환 x | 결과를 화면에만 출력 | `def greet(name): print(f"Hi {name}")` |
| 매개변수 x, 반환 o | 외부 값 없이 동작 후 결과 반환 | `def get_pi(): return 3.14` |
| 매개변수 x, 반환 x | 단순 실행용 함수 | `def say_hello(): print("Hello!")` |

---

### 1.6 실습 예제

#### 1) 튜플의 합집합/교집합 함수
```python
def union_intersection(tuple1, tuple2):
    """
    두 튜플을 입력받아 중복 없는 합집합과 교집합을 튜플로 반환합니다.
    """
    set1 = set(tuple1)
    set2 = set(tuple2)
    union = tuple(sorted(set1 | set2))
    intersection = tuple(sorted(set1 & set2))
    return union, intersection

tuple_a = tuple(map(int, input('첫 번째 숫자 집합 입력 (예:1,2,3): ').split(',')))
tuple_b = tuple(map(int, input('두 번째 숫자 집합 입력 (예:3,4,5): ').split(',')))
u, i = union_intersection(tuple_a, tuple_b)
print("합집합:", u)
print("교집합:", i)
```

#### 2) 문자열을 전화 키패드 숫자로 변환
```python
keypad = {
    'A': 2, 'B': 2, 'C': 2, 'D': 3, 'E': 3, 'F': 3,
    'G': 4, 'H': 4, 'I': 4, 'J': 5, 'K': 5, 'L': 5,
    'M': 6, 'N': 6, 'O': 6, 'P': 7, 'Q': 7, 'R': 7, 'S': 7,
    'T': 8, 'U': 8, 'V': 8, 'W': 9, 'X': 9, 'Y': 9, 'Z': 9
}

def convert_text_to_keypad(text):
    """입력된 영문 문자열을 전화 키패드 숫자로 변환합니다."""
    result = []
    for char in text.upper():
        result.append(keypad.get(char, char))
    return result

text = input("문자열 입력: ")
print(f"변환된 숫자: {convert_text_to_keypad(text)}")
```

---

## 2. tkinter – GUI 프로그램 개발

### 2.1 tkinter란?

- tkinter는 Python에서 GUI(Graphical User Interface)를 만들기 위한 표준 라이브러리입니다.
- 버튼, 레이블, 입력창, 윈도우 등을 생성할 수 있으며, 사용자와 상호작용하는 프로그램을 만들 수 있습니다.

---

### 2.2 tkinter 특징

| **특징** | **설명** |
| --- | --- |
| **표준 라이브러리** | Python에 기본 포함되어 설치 불필요 |
| **간단한 구조** | 몇 줄 코드로 윈도우 생성 가능 |
| **위젯 기반** | 버튼, 텍스트박스 등 다양한 UI 요소 제공 |
| **이벤트 기반 프로그래밍** | 클릭, 입력 등 사용자 행동에 따라 반응함 |

---

### 2.3 주요 위젯

| **위젯** | **설명** |
| --- | --- |
| `Tk()` | 기본 윈도우 생성 |
| `Label()` | 텍스트 표시 |
| `Button()` | 버튼 생성 |
| `Entry()` | 텍스트 입력 상자 |
| `Text()` | 여러 줄 입력 상자 |
| `mainloop()` | GUI를 계속 실행시키는 반복문 |

---

### 2.4 실습 예제

#### 1) tkinter 기본 구조

```python
import tkinter as tk

window = tk.Tk()                      # 윈도우 생성
window.title("나의 첫 GUI")            # 제목
window.geometry("300x200")           # 크기 지정

label = tk.Label(window, text="안녕하세요!")  # 라벨 생성
label.pack()                         # 화면에 표시

window.mainloop()                    # GUI 루프 실행
```

#### 2) tkinter 예제: 버튼을 누르면 텍스트 출력

```python
import tkinter as tk

def say_hello():
    label.config(text="안녕하세요!")

window = tk.Tk()
window.title("Hello App")
window.geometry("300x150")

label = tk.Label(window, text="버튼을 눌러보세요.")
label.pack()

btn = tk.Button(window, text="눌러!", command=say_hello)
btn.pack()

window.mainloop()
```

---