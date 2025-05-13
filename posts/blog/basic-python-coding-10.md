---
title: '기초파이썬코딩 10주차'
description: '제주한라대학교 1학년 기초 파이썬 코딩 10주차 수업 정리: 내장 함수, 이터레이터, 제너레이터, 모듈와 실습 포함'
date: '2025-05-13'
category: ['university']
tags: ['1학년', '기초파이썬코딩']
thumbnail: '/images/md-basic-python-coding.png'
---

---

## 1. 내장 함수 (Built-in Functions)

### 1.1 내장 함수란?

- 파이썬에서 **기본 제공하는 함수들**로, import 없이 바로 사용 가능합니다.
- 형 변환, 수학 연산, 자료 구조 처리 등 핵심 기능을 수행합니다.

---

### 1.2 주요 내장 함수 & 예제

#### 1) int(), float(), str() – 자료형 변환 함수

- `input()`으로 받은 값은 무조건 문자열(str)입니다.
- `int()`: 문자열이나 실수 등을 정수형으로 변환(소수점 버림)
- `float()`: 문자열이나 정수 등을 실수형(소수점 포함)으로 변환
- `str()`: 숫자나 다른 자료형을 문자열로 변환

```python
# 사용자로부터 문자열 형태로 실수를 입력받음
str_num = input("실수를 입력하시오: ")  # 예: 3.14 입력

# 문자열을 실수형으로 변환 (형 변환)
value = float(str_num)

# 변환된 결과 출력
print(value)  # 결과: 3.14
```

---

#### 2) bool() – 참/거짓 판별

- 파이썬에서는 빈 값(0, 빈 문자열, 빈 리스트 등)은 False로 간주합니다.
- 값이 있으면 True, 없으면 False로 판단합니다.

```python
items = ["", "a string", 0, 1, [], {}]

for e in items:
    print(f"{e} -> {bool(e)}")
```

---

#### 3) len() – 길이 구하기

- 문자열, 리스트, 튜플 등 시퀀스 자료형의 길이(요소 개수)를 반환합니다.

```python
print(len("All's well that ends well."))  # 26
```

---

#### 4) list() – 리스트로 변환

- 시퀀스 자료형(문자열 등)을 리스트로 변환하여 각 요소를 원소로 만듭니다.

```python
print(list("python"))  # ['p', 'y', 't', 'h', 'o', 'n']
```

---

#### 5) sum(), max(), min(), abs(), divmod()

- `sum()`: 시퀀스의 모든 숫자 요소를 더한 합계를 반환
- `max()`: 시퀀스에서 가장 큰 값을 반환
- `min()`: 시퀀스에서 가장 작은 값을 반환
- `abs()`: 주어진 수의 절댓값(양수)을 반환
- `divmod()`: 두 수를 나눠서 몫과 나머지를 튜플로 반환

```python
values = [1, 2, 3, 4, 5]

print(sum(values))        # 15 (모든 요소의 합)
print(max(values))        # 5 (가장 큰 값)
print(min(values))        # 1 (가장 작은 값)
print(abs(-3))            # 3 (절대값)
print(divmod(10, 3))      # (3, 1) 몫과 나머지 반환
```

---

#### 6) all() & any() – 시퀀스의 논리값 평가

- `all()`: 시퀀스의 모든 값이 True일 때만 True를 반환
- `any()`: 시퀀스 중 하나라도 True면 True를 반환
- 문자열에 숫자가 있는지 확인하는 데에도 활용 가능합니다.

```python
list1 = [True, True, True]
print(all(list1))  # True (모두 참이면 True)

list2 = [False, True, False]
print(any(list2))  # True (하나라도 참이면 True)

# 문자열에서 숫자 포함 여부 확인
text = "Hello, World"
print(any(char.isdigit() for char in text))  # False
```

---

#### 7) enumerate() – 인덱스와 값 반환

- 리스트나 튜플 등 반복 가능한 객체를 인덱스와 함께 반환합니다.

```python
fruits = ['apple', 'banana', 'orange']

for index, fruit in enumerate(fruits):
    print(f"Index: {index}, Fruit: {fruit}")
```

---

#### 8) zip() – 여러 시퀀스를 묶기

- 여러 시퀀스를 병렬로 묶어 튜플 형태로 반환합니다.

```python
names = ['Kim', 'Lee', 'Choi']
scores = [85, 92, 78]

for name, score in zip(names, scores):
    print(f"{name}의 점수는 {score}점입니다.")
```

---

#### 9) map(), filter(), reduce()

- `map()`: 시퀀스의 각 요소에 함수를 적용한 결과를 반환
- `filter()`: 시퀀스에서 조건을 만족하는 요소만 걸러서 반환
- `reduce()`: 시퀀스의 모든 요소를 누적 연산해 하나의 값으로 반환

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# map: 모든 요소 제곱
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25]

# filter: 짝수만 필터링
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

# reduce: 모든 요소 누적 더하기
total = reduce(lambda x, y: x + y, numbers)
print(total)  # 15
```

---

#### 10) eval(), compile(), exec()

- `eval()`: 문자열로 된 수식이나 코드를 실행하고 결과를 반환
- `compile()`: 문자열 형태의 코드를 실행 가능한 코드 객체로 변환
- `exec()`: 문자열이나 코드 객체를 실제로 실행

```python
# eval() - 문자열 수식 계산
result = eval("2 + 3 * 4")
print(result)  # 14

# compile() + exec() - 동적 코드 실행
code = """
def greet(name):
    print(f"Hello, {name}!")
greet("유주")
"""
compiled_code = compile(code, '<string>', 'exec')
exec(compiled_code)
```

---

## 2. 이터레이터와 제너레이터

### 2.1 이터레이터 직접 구현

#### 1) 이터레이터란?

- 반복 가능한 객체(Iterable)를 순서대로 꺼내주는 객체입니다.
- for문 뒤에서 실제로 데이터를 하나씩 꺼내주는 것이 이터레이터입니다.

#### 2) 필수 메서드
| **메서드**          | **역할**                                                      |
| ------------ | ------------------------------------------------------- |
| `__iter__()` | 이터레이터 객체 자체를 반환합니다. (반복 가능하다는 뜻)                        |
| `__next__()` | 다음 요소를 반환합니다. 더 이상 없으면 StopIteration 예외를 발생시켜 반복을 끝냅니다. |

```python
class MyIterator:
    def __init__(self, max_value):
        self.current = 0
        self.max_value = max_value

    def __iter__(self):
        return self

    def __next__(self):
        if self.current < self.max_value:
            result = self.current
            self.current += 1
            return result
        else:
            raise StopIteration

for val in MyIterator(5):
    print(val)
```

---

### 2.2 제너레이터 (yield 사용)

#### 1) 제너레이터란?
- 이터레이터를 쉽게 만들 수 있는 함수형 이터레이터입니다.
- 함수 내부에서 yield를 사용해 값을 하나씩 반환합니다.
- 일반 함수와 달리 상태(지역변수, 실행위치)를 기억하면서 중단과 재개가 가능합니다.

#### 2) 제너레이터 특징
- yield가 나올 때마다 값을 반환하고 일시 중지됩니다.
- 다음 호출 시 중단된 부분부터 이어서 실행됩니다.
- 마지막 yield가 끝나면 StopIteration 예외로 종료됩니다.

```python
def simple_generator():
    yield 1
    yield 2
    yield 3

for val in simple_generator():
    print(val)
```

---

### 2.3 이터레이터와 제너레이터 차이
| **구분**    | **이터레이터**                             | **제너레이터**              |
| ----- | --------------------------------- | ------------------ |
| 작성 방식 | 클래스로 `__iter__`, `__next__` 직접 구현 | 함수에서 `yield`만 쓰면 됨 |
| 상태 기억 | self.current 등으로 직접 관리            | 함수 내부에서 자동으로 상태 기억 |
| 코드량   | 길고 복잡해짐                           | 짧고 간단              |

---

## 3. 모듈 (Module)

### 3.1 모듈이란?

> 모듈은 **파이썬 코드가 들어있는 하나의 파일 (.py)** 입니다.

* 자주 사용하는 함수, 변수, 클래스 등을 파일로 묶어놓고,
* 필요한 곳에서 **불러와서(import)** 사용하는 개념입니다.

#### 왜 필요할까?

* 코드가 길어지면 관리하기 어렵습니다.
* 같은 기능을 여러 번 복사해서 쓰면 비효율적이고 오류도 납니다.
* 모듈로 만들어두면 **필요할 때마다 가져다 쓰고**, **유지보수도 쉽습니다.**

---

### 3.2 모듈 사용 예시

#### 1) my\_module.py 파일 작성

(이건 우리가 따로 만든 파일이라고 가정)

```python
# my_module.py 파일 내용

def greeting(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b
```

* `greeting()` : 이름을 받아서 인사 문구를 만들어주는 함수
* `add()` : 두 수를 더하는 함수

#### 2) 다른 파일에서 import 해서 사용

(우리가 실제 작업하는 파일)

```python
import my_module  # my_module.py 불러오기

print(my_module.greeting("유주"))  # Hello, 유주!
print(my_module.add(5, 10))        # 15
```

---

### 3.3 동작 원리

* **import my\_module** 를 하면, 파이썬은 같은 폴더에서 `my_module.py` 파일을 찾아 불러옵니다.
* `my_module.greeting()` 이렇게 사용할 때 **"모듈.함수이름"** 형태로 접근합니다.
* 한 번 불러오면 여러 번 사용할 수 있습니다.

---

### 3.4 모듈 import 방식

| **방법**                    | **설명**               | **예시**                      |
| --------------------- | ---------------- | ----------------------- |
| `import 모듈명`          | 모듈 전체를 불러옴       | `import math`           |
| `from 모듈명 import 함수명` | 특정 함수만 불러옴       | `from math import sqrt` |
| `import 모듈명 as 별칭`    | 모듈 이름을 짧게 바꿔서 사용 | `import numpy as np`    |

#### 예시

```python
from my_module import greeting

print(greeting("유주"))  # 모듈 이름 없이 바로 사용 가능
```

---

### 3.5 내장 모듈 vs 사용자 정의 모듈

| **구분**        | **예시**                     | **특징**            |
| --------- | ---------------------- | ------------- |
| 내장 모듈     | math, random, datetime | 파이썬이 기본 제공    |
| 사용자 정의 모듈 | my\_module.py          | 사용자가 직접 만든 파일 |

---
