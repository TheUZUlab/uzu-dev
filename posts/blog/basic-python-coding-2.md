---
title: '기초파이썬코딩 2주차'
description: '제주한라대학교 1학년 기초 파이썬 코딩 2주차 수업 정리: 변수, 자료형, 연산자, 함수, 실습 코드 포함'
date: '2025-03-11'
category: ['university']
tags: ['1학년', '기초파이썬코딩']
thumbnail: '/images/blog/university/basic-python-coding/md-basic-python-coding.png'
---

---

## 1. 변수

**변수**란 프로그램에서 값을 저장하는 공간을 의미합니다.  
프로그래밍에서는 데이터를 저장하고 관리하기 위한 가장 기본적인 개념입니다.

```python
x = 10         # 정수형 변수
name = "Yuju"  # 문자열 변수
pi = 3.14      # 실수형 변수
```

### 1.1 변수 이름 규칙

- 대소문자를 구분합니다.
- 알파벳, 숫자, 언더스코어(\_)로 구성할 수 있습니다.
- 공백은 사용할 수 없습니다.
- 숫자로 시작할 수 없습니다.
- 파이썬 내장 키워드(예약어)는 사용할 수 없습니다.

### 1.2 변수의 특징

- **동적 타이핑**  
  파이썬은 변수의 자료형을 명시적으로 선언하지 않고, 할당하는 값에 따라 자동으로 자료형을 결정합니다.  
  따라서 동일한 변수에 다양한 자료형의 값을 할당할 수 있습니다.

---

## 2. 주석

**주석**이란, 코드의 이해를 돕거나, 특정 코드가 실행되지 않도록 임시로 비활성화할 때 사용합니다.

### 2.1 주석 작성 방법

```python
# 주석
```

---

## 3. 자료형

### 3.1 자료형 분류

| **자료형**       | **설명**                                                               |
| :--------------- | :--------------------------------------------------------------------- |
| 정수 (int)       | 0, 양의 정수, 음의 정수를 포함하는 수입니다.                           |
| 실수 (float)     | 소수점을 포함하는 수입니다.                                            |
| 문자열 (string)  | 문자로 이루어진 자료형으로, 작은따옴표(') 또는 큰따옴표(")로 감쌉니다. |
| 불리언 (boolean) | 참(`True`) 또는 거짓(`False`) 값을 가집니다.                           |

### 3.2 형 변환

| **변환 대상**            | **사용 함수** |
| :----------------------- | :------------ |
| 정수(int)로 변환         | `int()`       |
| 실수(float)로 변환       | `float()`     |
| 문자열(string)로 변환    | `str()`       |
| 불리언(boolean)으로 변환 | `bool()`      |

---

## 4. 연산

### 4.1 산술 연산

| **연산**    | **기호** | **예시** | **결과** |
| :---------- | :------- | :------- | :------- |
| 덧셈        | +        | 7 + 4    | 11       |
| 뺄셈        | -        | 7 - 4    | 3        |
| 곱셈        | \*       | 7 \* 4   | 28       |
| 정수 나눗셈 | //       | 7 // 4   | 1        |
| 실수 나눗셈 | /        | 7 / 4    | 1.75     |
| 나머지      | %        | 7 % 4    | 3        |
| 거듭제곱    | \*\*     | 7 \*\* 4 | 2401     |

### 4.2 비교 연산

| **연산**    | **기호** | **예시** | **결과** |
| :---------- | :------- | :------- | :------- |
| 같음        | ==       | 5 == 5   | `True`   |
| 같지 않음   | !=       | 5 != 3   | `True`   |
| 작음        | <        | 3 < 5    | `True`   |
| 작거나 같음 | <=       | 5 <= 5   | `True`   |
| 큼          | >        | 6 > 5    | `True`   |
| 크거나 같음 | >=       | 5 >= 5   | `True`   |

### 4.3 논리 연산

| **연산** | **기호** | **예시**        | **결과** |
| :------- | :------- | :-------------- | :------- |
| 논리 AND | and      | 5 > 3 and 4 < 3 | `False`  |
| 논리 OR  | or       | 5 > 3 or 4 < 3  | `True`   |
| 논리 NOT | not      | not True        | `False`  |

### 4.4 할당 연산

| **연산**    | **기호** | **예시**  | **동일 코드** |
| :---------- | :------- | :-------- | :------------ |
| 몫 대입     | //=      | a //= b   | a = a // b    |
| 뺄셈 대입   | -=       | a -= b    | a = a - b     |
| 제곱 대입   | \*\*=    | a \*\*= b | a = a \*\* b  |
| 곱셈 대입   | \*=      | a \*= b   | a = a \* b    |
| 덧셈 대입   | +=       | a += b    | a = a + b     |
| 나머지 대입 | %=       | a %= b    | a = a % b     |
| 나눗셈 대입 | /=       | a /= b    | a = a / b     |
| 대입        | =        | a = b     | a = b         |

### 4.5 멤버 연산

| **연산**    | **기호** | **설명**                         |
| :---------- | :------- | :------------------------------- |
| 포함 여부   | in       | 값이 목록 안에 있으면 참(`True`) |
| 미포함 여부 | not in   | 값이 목록 안에 없으면 참(`True`) |

### 4.6 연산자 우선 순위

1. 괄호 `()`
2. 거듭제곱 `**`
3. 단항 연산자 `-x`, `+x`, `~x`
4. 곱셈, 나눗셈 `*`, `/`, `//`, `%`
5. 덧셈, 뺄셈 `+`, `-`
6. 비트 이동, 비트 연산 `<<`, `>>`, `&`, `^`, `|`
7. 비교 연산 `<`, `<=`, `>`, `>=`, `==`, `!=`
8. 포함 연산 `in`, `not in`, `is`, `is not`
9. 논리 부정 `not`
10. 논리 AND `and`
11. 논리 OR `or`
12. 대입 연산 `=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`

---

## 5. 함수

**함수**란, 특정 작업을 수행하는 코드의 집합입니다.  
함수를 사용하면 코드를 재사용할 수 있으며, 작업을 수행한 후 결과를 반환할 수 있습니다.

### 5.1 함수 정의 및 호출

```python
def func():
    return 1 + 2

print(func())
```

### 5.2 `sqrt()` 함수

**`sqrt()`** 함수는 `math` 모듈에 포함되어 있으며, 제곱근을 계산합니다.  
항상 **부동소수점** 값으로 결과를 반환합니다.  
만약 음수를 입력하면 `ValueError`가 발생합니다.

```python
import math

result = math.sqrt(25)
print(result)  # 출력: 5.0
```

### 5.3 `input()` 함수

**`input()`** 함수는 사용자로부터 입력을 받는 함수입니다.

```python
name = input("당신의 이름은 무엇인가요?")
print('만나서 반가워요, ' + name + '!')
```

---

## 6. 실습 코드

```python
# 실습 1
a = 200
b = 100
print(f'1. 뺄셈 실습: {a} - {b} = {a-b}')

# 실습 2
a = 10
b = 10
print(f'2. 삼각형의 면적 구하기: {a*b/2}')

# 실습 3
a = 72
b = 7
print('3-1. 나머지 값:', a % b)
print('3-2. 몫 값:', a // b)

# 실습 4
x = 10
print(f'4-1. 결과: {x}')
print('4-2. 결과: ' + str(x))
print('4-3. 결과: %d' % x)

# 실습 5
x = 40**39
y = 39**40
print(f'5. 어떤 수가 더 큰가? {x} < {y} = {x < y}')

# 실습 6
x = 11
y = 2
q = x // y
r = x % y
print(f'6-1. {x}을 {y}로 나눈 몫: {q}')
print(f'6-2. {x}을 {y}로 나눈 나머지: {r}')

# 실습 7
today = 0
print(f'7. 오늘이 일요일일 때, 10일 후의 요일은: {(today + 10) % 7}')

# 실습 8
x = 10
y = 6
print(f'8-1. 나머지: {x % y}')
print(f'8-2. 나눈 결과: {x / y}')

# 실습 9
P = 24
R = 0.06
T = 382
print('9. 인디언이 24달러를 예금했을 때, 382년 후 원리금은:', P * (1 + R) ** T)
```

---
