---
title: '기초파이썬코딩 6주차'
description: '제주한라대학교 1학년 기초 파이썬 코딩 6주차 수업 정리: 문자열, 튜플, 세트, 딕셔너리의 개념과 실습 예제 포함'
date: '2025-04-08'
category: ['university']
tags: ['1학년', '기초파이썬코딩']
thumbnail: '/images/blog/university/basic-python-coding/md-basic-python-coding.png'
---

---

## 1. 문자열 (String)

### 1.1 개념 정리

- 문자열은 **문자들의 시퀀스**로, 불변 객체입니다.
- 생성 후 변경 불가 → 새로운 문자열로 반환합니다.
- 인덱싱, 슬라이싱, 반복, 비교, 검색 등 다양한 기능을 제공합니다.

### 1.2 주요 기능

| 기능                         | 설명            |
| ---------------------------- | --------------- |
| `s[i]`                       | 인덱싱          |
| `s[i:j]`                     | 슬라이싱        |
| `+`, `*`                     | 연결, 반복      |
| `split()`, `join()`          | 나누기 / 합치기 |
| `isalpha()`, `isdigit()`     | 문자/숫자 판별  |
| `startswith()`, `endswith()` | 접두/접미 확인  |
| `find()`, `count()`          | 검색, 개수 세기 |
| `strip()`, `rstrip()`        | 공백 제거       |

### 1.3 실습 내용

```python
s1 = 'Hello'
s2 = 'World'
s3 = s1 + s2
print(s3)

word = 'abcdef'
print(word[0])
print(word[5])

s = 'hello world'
print(s[0:5])

print('apple' < 'banana')  # 문자열 비교

# 반복문
s = input('문자열 입력: ')
for i in s:
    print(i)

for i in range(1, len(s), 2):
    print(s[i])  # 홀수 번째 문자

# 문자열 분리/합치기
s = "Never put off till tomorrow what you can do today"
print(s.split())

s = 'apple, banana, orange'
print(s.split(', '))

my_list = ['apple', 'banana', 'orange']
print(", ".join(my_list))

# 판별 및 검색
print('abc'.isalpha())       # True
print('123'.isdigit())       # True
print('apple'.startswith('a'))
print('banana'.find('n'))
print('banana'.count('a'))

# 공백 제거
s = '   hello   '
print(s.strip())
```

---

## 2. 튜플 (Tuple)

### 2.1 개념 정리

- 튜플은 **변경할 수 없는(immutable)** 시퀀스 자료형입니다.
- 리스트와 유사하지만 값을 추가, 삭제, 수정할 수 없습니다.
- 보통 **값이 고정된 데이터**를 저장할 때 사용합니다.
- 소괄호 `( )` 또는 괄호 없이 쉼표만으로도 생성됩니다.

### 2.2 주요 특징

| 특징     | 설명                             |
| -------- | -------------------------------- |
| 불변성   | 요소를 변경하거나 삭제할 수 없음 |
| 인덱싱   | `t[0]`, `t[-1]` 등 사용 가능     |
| 슬라이싱 | `t[1:3]`으로 일부 추출 가능      |
| 연산     | `+`, `*`, `in` 연산자 가능       |

### 2.3 실습 내용

```python
# 튜플 생성 및 출력
a = 'apple', 'banana', 'strawberry'
print(a)

# 인덱싱 및 슬라이싱
t = ('apple', 'banana', 'strawberry')
print(t[0])
print(t[-1])
print(t[:2])

# 튜플 연산
print((1, 2, 3) + (4, 5, 6))  # 연결
print(('Hi!',) * 4)           # 반복
print(3 in (1, 2, 3))         # 포함 여부 확인
for x in (1, 2, 3):
    print(x)

# 튜플 할당 및 언패킹
student1 = ("철수", 19, "cs")
(name, age, major) = student1
print(name, age, major)

# 튜플을 반환하는 함수
def circle_area_and_circumference(radius):
    pi = 3.14159
    area = pi * radius ** 2
    circumference = 2 * pi * radius
    return (area, circumference)

radius_input = float(input("반지름을 입력하세요: "))
result = circle_area_and_circumference(radius_input)
print(f"넓이: {result[0]}, 둘레: {result[1]}")
```

---

## 3. 세트 (Set)

### 3.1 개념 정리

- 세트는 **중복되지 않는 값**들의 집합입니다.
- 순서가 없기 때문에 인덱싱이 불가능하며, `in` 연산자와 반복문 사용이 주로 쓰입니다.
- 집합 수학의 연산 개념을 따릅니다.

### 3.2 주요 특징

| 특징      | 설명                           |
| --------- | ------------------------------ |
| 중복 제거 | 동일한 값은 하나만 유지        |
| 순서 없음 | 위치 기반 접근 불가            |
| 연산 지원 | 합집합, 교집합, 차집합 등 제공 |

### 3.3 주요 메서드

| 메서드                                        | 설명           |
| --------------------------------------------- | -------------- |
| `add()`                                       | 항목 하나 추가 |
| `update()`                                    | 여러 항목 추가 |
| `discard()` / `remove()`                      | 항목 제거      |
| `clear()`                                     | 전체 항목 제거 |
| `union()` / `intersection()` / `difference()` | 집합 연산      |

### 3.4 실습 내용

```python
numbers = {2, 1, 3}
print(numbers)
print(len(numbers))  # 크기 출력

fruits = {'apple', 'banana', 'pineapple'}
mySet = {1.0, 2.0, "Hello", (1, 2, 3)}
print(fruits)
print(mySet)

# 중복 제거 확인
cities = {'paris', 'seoul', 'london', 'berlin', 'paris'}
print(cities)

# 빈 세트 생성
empty = set()
print(empty)

# 요소 접근 및 반복
for x in numbers:
    print(x)

# 요소 추가 및 제거
numbers.add(4)
numbers.update([2, 3, 4, 5])
numbers.discard(5)
# numbers.remove(6) → 오류 발생 가능
numbers.clear()

# 부분집합 비교
A = {1, 2, 3, 4, 5}
B = {1, 2, 3}
print(A > B)
print(A < B)

# 집합 연산
A = {1, 2, 3}
B = {3, 4, 5}
print(A | B)  # 합집합
print(A & B)  # 교집합
print(A - B)  # 차집합

# 파티 참석자 예시
A = {'Kim', 'Park', 'Lee'}
B = {'Choi', 'Park'}
print(f"동시 참석: {A.intersection(B)}")

# 중복 단어 수 세기
greet = input("문자열 입력: ")
words = greet.split()
unique_words = set(words)
print(f"고유 단어 수: {len(unique_words)}")
```

---

## 4. 딕셔너리 (Dictionary)

### 4.1 개념 정리

- 키(key)와 값(value)의 쌍으로 데이터를 저장하는 구조입니다.
- 키는 고유해야 하며, 값은 중복 가능합니다.
- `{key: value}` 형태로 정의하며, 순서는 보장되지 않습니다.

### 4.2 주요 기능

| 기능        | 설명                                 |
| ----------- | ------------------------------------ |
| `dict[key]` | 값 조회                              |
| `get()`     | 키가 없을 경우 None 또는 기본값 반환 |
| `in`        | 키 존재 확인                         |
| `pop()`     | 항목 삭제                            |
| `update()`  | 항목 추가 및 갱신                    |

### 4.3 실습 내용

```python
contacts = {'kim': '0101234', 'park': '0105678'}
print(contacts['kim'])
print(contacts.get('choi', '010114'))

# 키 확인
if 'kim' in contacts:
    print('kim 있음')

# 항목 추가 및 삭제
contacts['choi'] = '0109999'
contacts.pop('kim')
print(contacts)

# 반복문 출력
scores = {'korean': 80, 'math': 90, 'english': 85}
for key in scores:
    print(key, scores[key])

# 포함 여부
squares = {1: 1, 3: 9, 5: 25}
print(1 in squares)
print(2 not in squares)

# 딕셔너리 컴프리헨션
triple = {x: x ** 3 for x in range(6)}
print(triple)

# 딕셔너리 정렬
dic = {'bags': 1, 'books': 5, 'bottles': 4}
print(sorted(dic))             # 키 기준
print(sorted(dic.values()))    # 값 기준
print(sorted(dic, key=dic.__getitem__))  # 값 기준 키 정렬

# 영한사전
dict = {'one': '하나', 'two': '둘'}
def papago(word):
    if word in dict:
        print(dict[word])
    else:
        print('단어 없음')
inp = input("단어 입력: ")
papago(inp)
```

---
