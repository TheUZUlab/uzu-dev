---
title: '기초파이썬코딩 3주차'
description: '제주한라대학교 1학년 기초 파이썬 코딩 3주차 수업 정리: 정수형, 실수형, 문자열, 형 변환 개념과 실습 포함'
date: '2025-03-18'
category: ['university']
tags: ['1학년', '기초파이썬코딩']
thumbnail: '/images/blog/university/basic-python-coding/md-basic-python-coding.png'
---

---

## 1. 정수형 (int)

정수형은 소수점 없는 숫자(양수, 0, 음수)를 표현합니다.

```python
x = 1
print(type(x))  # <class 'int'>
```

> **참고**: `class`가 붙는 이유는 파이썬이 객체지향 언어이기 때문입니다.

### 1.1 진법 표현

- **16진수**: 0x
- **8진수**: 0o
- **2진수**: 0b

```python
hex_num = 0x1A    # 26
oct_num = 0o12    # 10
bin_num = 0b1010  # 10
```

---

## 2. 부동소수점형 (float)

소수점을 포함하는 실수를 표현하는 자료형입니다.

```python
a = 3.14
b = 1.23e2  # 123.0 (1.23 * 10^2)
print(a, b)
```

### 2.1 특수값 (무한대)

```python
x = float('inf')   # 양의 무한대
y = float('-inf')  # 음의 무한대
```

### 2.2 반올림: `round()`

```python
print(round(3.14159))    # 3
print(round(3.14159, 2)) # 3.14
print(round(4.5))        # 4 (짝수 기준 반올림)
print(round(5.5))        # 6
```

### 2.3 몫과 나머지: `divmod()`

```python
quotient, remainder = divmod(10, 3)
print(quotient, remainder)  # 3 1
```

---

## 3. 문자열 (str)

문자들의 집합으로, 작은따옴표(') 또는 큰따옴표(")로 표현합니다.

```python
greeting = 'Happy New Year!'
print(greeting)
```

### 3.1 여러 줄 문자열

```python
greeting = '''
감사합니다.
올해도 잘 부탁드립니다.
'''
print(greeting)
```

### 3.2 f-string (문자열 포매팅)

```python
name = '장유주'
age = 22
print(f'제 이름은 {name}이고, 나이는 {age}살입니다.')
```

### 3.3 r-string (raw string)

```python
path = r"C:\Users\Username\Documents"
print(path)
```

### 3.4 문자열 인덱싱

```python
str1 = 'Python'
print(str1[0])   # P
print(str1[-1])  # n
```

### 3.5 문자열 메서드

| **기능**       | **예시 코드**                               | **결과**         |
| -------------- | ------------------------------------------- | ---------------- |
| 대소문자 변환  | `"hello".upper()`                           | "HELLO"          |
| 찾기           | `"python".find("th")`                       | 2                |
| 개수 세기      | `"banana".count("a")`                       | 3                |
| 치환           | `"I like Python".replace("Python", "Java")` | "I like Java"    |
| 분리           | `"a,b,c".split(",")`                        | \['a', 'b', 'c'] |
| 결합           | `", ".join(["a", "b", "c"])`                | "a, b, c"        |
| 길이           | `len("Hello")`                              | 5                |
| 공백 제거      | `" hello ".strip()`                         | "hello"          |
| 시작/끝 확인   | `"Hello".startswith("H")`                   | True             |
| 문자 판별      | `"123".isdigit()`                           | True             |
| 첫글자 대문자  | `"hello".capitalize()`                      | "Hello"          |
| 각 단어 대문자 | `"hello world".title()`                     | "Hello World"    |
| 대소문자 반전  | `"Hello".swapcase()`                        | "hELLO"          |
| 자리 맞추기    | `"42".zfill(5)`                             | "00042"          |

### 3.6 이스케이프 문자

| 기호 | 의미     | 예시                           |
| ---- | -------- | ------------------------------ |
| `\n` | 줄바꿈   | `print("Hello\nWorld")`        |
| `\t` | 탭       | `print("Hello\tWorld")`        |
| `\"` | 큰따옴표 | `print("She said, \"Hello\"")` |
| `\\` | 백슬래시 | `print("C:\\Path")`            |

---

## 4. 형 변환 (Type Casting)

| 변환 대상     | 함수      | 예시            | 결과  |
| ------------- | --------- | --------------- | ----- |
| 문자열 → 정수 | `int()`   | `int("10")`     | 10    |
| 문자열 → 실수 | `float()` | `float("3.14")` | 3.14  |
| 숫자 → 문자열 | `str()`   | `str(100)`      | "100" |
| 숫자 → 불린   | `bool(1)` | `True`          |       |

---
