---
title: '기초파이썬코딩 5주차'
description: '제주한라대학교 1학년 기초 파이썬 코딩 5주차 수업 정리: for문, while문 반복문 개념과 다양한 실습 예제 포함'
date: '2025-04-01'
category: ['university']
tags: ['1학년', '기초파이썬코딩']
thumbnail: '/images/blog/university/basic-python-coding/md-basic-python-coding.png'
---

---

## 1. 반복문

### 1.1 반복문이란?

반복문은 동일한 코드를 여러 번 실행하고 싶을 때 사용하는 문법입니다.

예를 들어, 같은 문장을 10번 출력하거나, 리스트에 있는 모든 항목을 하나씩 처리할 때 사용됩니다.

- 파이썬의 대표적인 반복문은 `for문`과 `while문`입니다.
- 반복 조건이 횟수로 명확하면 `for문`을, 조건이 참/거짓에 따라 반복해야 하면 `while문`을 사용합니다.

---

### 1.2 `for문` – 횟수 기반 반복

- `for문`은 정해진 횟수만큼 반복할 때 사용합니다.
- 리스트, 문자열, `range()` 등 시퀀스 자료형에 사용할 수 있습니다.

#### 기본 구조

```python
for 변수 in 시퀀스:
    반복할 코드
```

#### 특징

- 반복 횟수를 알고 있을 때 유리합니다.
- 리스트, 문자열 등을 순서대로 반복할 수 있습니다.

---

### 1.3 `while문` – 조건 기반 반복

- `while문`은 조건이 참(True)인 동안 반복합니다.
- 조건이 거짓(False)이 되면 반복을 멈춥니다.

#### 기본 구조

```python
while 조건:
    반복할 코드
```

#### 특징

- 반복 횟수를 모를 때 사용합니다.
- 반복 도중 사용자 입력, 센서 값 등으로 조건이 바뀌는 경우에 유리합니다.

---

### 1.4 반복문 실습 내용

```python
# 1. 기본 for문 – "환영합니다" 3번 출력
for i in range(3):
    print("환영합니다.")

# 2. 리스트 순회
studentList = ['amy', 'sam', 'mary']
for student in studentList:
    print(f"안녕 {student}")

# 3. 리스트 항목을 한 줄로 출력
numList = [1, 2, 3, 4, 5, 6, 7]
for num in numList:
    print(num, end=' ')  # end=' '는 줄바꿈 대신 공백으로 이어 출력

# 4. 정수형 반복 – range 사용
num = 0
numList = []
for i in range(10):  # 0부터 9까지
    num += 1
    numList.append(num)
print(numList)

# 5. 간격 지정 반복 (짝수 합)
num = 0
numList = []
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    num += i
    numList.append(num)
print(numList)

# 6. 문자열 반복 – 한 글자씩 처리
strList = []
for str in "abcdef":
    strList.append(str)
print(strList)

# 7. 1부터 20까지의 짝수
numList = []
for num in range(2, 21, 2):
    numList.append(num)
print(numList)

# 8. 10부터 1까지 역순
numList = []
for num in range(10, 0, -1):
    numList.append(num)
print(numList)

# 9. 구구단 출력
for i in range(2, 10):
    print(f"---{i}단---")
    for j in range(2, 10):
        print(f"{i} x {j} = {i * j}")
    print()

# 10. 특정 단 구구단
i = int(input('몇 단을 실행하겠습니까? '))
for j in range(2, 10):
    print(f"{i} x {j} = {i * j}")

# 11. 1부터 N까지의 합
sum = 0
limit = int(input('어디까지 계산할까요? : '))
for i in range(limit + 1):
    sum += i
print(f"1부터 {limit}까지의 정수의 합 = {sum}")

# 12. 팩토리얼 계산
sum = 1
limit = int(input('정수를 입력해 주세요. : '))
for i in range(1, limit + 1):
    sum *= i
print(f"{limit}! = {sum}")

# 13. 섭씨 변환표 출력 (화씨 -> 섭씨)
for F in range(0, 101, 10):
    C = round(((F - 32) * 5 / 9), 2)
    print(f"{F}℉ -> {C}℃")

# 14. 기본 while문
i = 0
while i < 5:
    print('환영합니다.')
    i += 1
print('반복이 종료되었습니다.')

# 15. 입력값보다 작은 홀수 출력 (for + while)
num = int(input('숫자를 입력하여 주세요. : '))

if num <= 0:
    print('잘못된 입력입니다.')
else:
    for i in range(1, num, 2):
        print('for 사용', i)

    i = 1
    while i < num:
        print('while 사용', i)
        i += 2

# 16. 성적 평균 계산
studentNum = int(input('몇 명의 학생 성적인가요? : '))
sum = 0
for student in range(studentNum):
    total = int(input('성적을 입력하여 주세요. : '))
    sum += total
print(f"평균 점수 : {sum / studentNum}")

# 17. quit 입력 전까지 단어 저장
i = ''
strList = []
while i != 'quit':
    i = input('단어를 입력하세요. (quit으로 종료) : ')
    if i != 'quit':
        strList.append(i)
print(f"입력된 단어 개수 : {len(strList)}")
print(f"입력된 단어 목록 : {strList}")

# 18. 문자열 인덱싱 반복
fruit = "apple"
index = 0
while index < len(fruit):
    print(fruit[index], end=" ")
    index += 1

# 19. '-' 문자 제거 (문자열 필터링)
raw = input('계좌번호 입력 : ')
processed = ''
for c in raw:
    if c != "-":
        processed += c
print(processed)
```

---

## 2. 유용한 함수들 정리

| **함수**        | **설명**             | **예시**                |
| --------------- | -------------------- | ----------------------- |
| `len()`         | 길이(요소 개수) 반환 | `len([1, 2, 3]) → 3`    |
| `in` / `not in` | 포함 여부 확인       | `'a' in 'apple' → True` |
| `min()`         | 최소값 반환          | `min([1, 5, 2]) → 1`    |
| `max()`         | 최대값 반환          | `max([1, 5, 2]) → 5`    |

> 위 함수들은 리스트, 문자열 반복 중 자주 활용되며, 조건문과 함께 쓰면 더욱 강력합니다.

---
