---
title: '기초파이썬코딩 3주차'
description: '제주한라대학교 기초파이썬코딩 3주차 복습 내용'
date: '2025-03-25'
category: ['university']
tags: ['first grade', 'python']
thumbnail: '/images/md-basic-python-coding.png'
---

---

## 1. 정수형 (int)

**정수형**은 소수점이 없는 수를 의미하며, 양의 정수, 0, 음의 정수를 모두 포함하는 타입입니다.

```python
x = 1
type(x)
# 실행 결과: <class 'int'>
# 여기서 class가 앞에 붙는 이유는 파이썬이 객체지향 프로그래밍 언어이기 때문입니다.
```

### 1-1. 16진수, 8진수, 2진수

파이썬에서는 10진수뿐만 아니라 다양한 진법으로 수를 표현할 수 있습니다.

```python
hex_num = 0x1A  # 16진수
oct_num = 0o12  # 8진수
bin_num = 0b1010  # 2진수
```

---

## 2. 부동소수점형 (float)

**부동소수점형**은 소수점을 포함하는 실수를 저장하는 방식입니다.

```python
a = 3.14
b = 1.23e2  # 1.23 * (10 ** 2)
print(a, b)  # 3.14 123.0
```

### 2-1. float의 특수값

```python
x = float('inf')  # 양의 무한대
x = float('-inf')  # 음의 무한대
```

### 2-2. `round()` 함수

`round()` 함수는 숫자를 반올림하는 함수입니다.  
(※ 파이썬은 IEEE 754 표준을 따라 0.5는 가장 가까운 짝수로 반올림합니다.)

```python
print(round(3.14159))    # 3
print(round(3.14159, 2)) # 3.14
print(round(4.5))        # 4
print(round(5.5))        # 6
```

### 2-3. `divmod()` 함수

`divmod()` 함수는 나눈 몫과 나머지를 동시에 구해줍니다.

```python
print(divmod(10, 3))  # (3, 1)
quotient, remainder = divmod(10, 3)
print(f"몫: {quotient}, 나머지: {remainder}")
```

---

## 3. 문자열 (string)

**문자열**은 문자들의 순서 있는 집합이며, 작은따옴표(') 또는 큰따옴표(")로 감싸서 표현합니다.

```python
# 한 줄 문자열
greeting = 'Happy New Year!'
print(greeting)

# 여러 줄 문자열
greeting = '''
지난 한 해 동안 보여주신 보살핌과 사랑에
깊은 감사를 드립니다.
올해에는 고마움을 더 많이 표현하도록
노력하겠습니다.
'''
print(greeting)
```

### 3-1. f-string

```python
name = '장유주'
age = 22
print(f'제 이름은 {name}이고, 나이는 {age}살입니다.')
```

### 3-2. r-string

`r-string`은 문자열 안의 백슬래시(`\`)를 이스케이프 문자로 인식하지 않고,  
**입력한 그대로** 처리합니다.

```python
normalString = "C:\\Users\\Username\\Documents\\file.txt"
rawString = r"C:\\Users\\Username\\Documents\\file.txt"
```

### 3-3. 문자열 인덱싱

```python
str1 = 'Python'
print(str1[0])   # P
print(str1[-1])  # n
```

### 3-4. 문자열 메서드

#### 문자열 변환

```python
text = "Hello World"
print(text.upper())  # HELLO WORLD
print(text.lower())  # hello world
```

#### 문자열 찾기

```python
text = "Python is fun"
print(text.find("is"))    # 7
print(text.index("is"))   # 7
print(text.find("Java"))  # -1
```

#### 문자열 개수 세기

```python
text = "banana"
print(text.count("a"))  # 3
```

#### 문자열 치환

```python
text = "I like Python"
print(text.replace("Python", "Java"))  # I like Java
```

#### 문자열 분리 및 결합

```python
text = "apple,banana,grape"
print(text.split(","))  # ['apple', 'banana', 'grape']

words = ["apple", "banana", "grape"]
print(", ".join(words))  # apple, banana, grape
```

#### 문자열 길이 구하기

```python
text = "Hello"
print(len(text))  # 5
```

#### 공백 제거

```python
text = "   Hello, World!   "
print(text.strip())   # "Hello, World!"
print(text.lstrip())  # "Hello, World!   "
print(text.rstrip())  # "   Hello, World!"
```

#### 문자열 시작/끝 확인

```python
text = "Hello, World!"
print(text.startswith("Hello"))  # True
print(text.endswith("World!"))   # True
```

#### 문자 판별

```python
print("Hello".isalpha())  # True
print("12345".isdigit())  # True
print("Hello123".isalnum())  # True
```

#### 대소문자 변환

```python
text = "hello world"
print(text.capitalize())  # "Hello world"
print(text.title())       # "Hello World"
print(text.swapcase())    # "HELLO WORLD"
```

#### 문자열 자리 맞추기

```python
text = "42"
print(text.zfill(5))  # "00042"

text = "Hello"
print(text.center(10, "-"))  # "--Hello---"
print(text.ljust(10, "-"))   # "Hello-----"
print(text.rjust(10, "-"))   # "-----Hello"
```

---

## 3-5. 이스케이프 문자

| **기호** | **설명**                       |
| :------- | :----------------------------- |
| `\n`     | 줄바꿈                         |
| `\t`     | 탭(tab)                        |
| `\r`     | 커서를 현재 줄의 처음으로 이동 |
| `\"`     | 큰따옴표 출력                  |
| `\'`     | 작은따옴표 출력                |
| `\\`     | 백슬래시 출력                  |

```python
print("Hello\nWorld!")
print("Hello\tWorld!")
print("She said, \"Hello World!\"")
print('She said, \'Hello World!\'')
print("Backslash: \\")
```

---

## 4. 형 변환

| **변환 대상**            | **사용 함수** |
| :----------------------- | :------------ |
| 정수(int)로 변환         | `int()`       |
| 실수(float)로 변환       | `float()`     |
| 문자열(string)로 변환    | `str()`       |
| 불리언(boolean)으로 변환 | `bool()`      |

```python
print(int("10"))    # 10
print(float("3.14"))  # 3.14
print(str(100))     # "100"
print(bool(1))      # True
```

---
