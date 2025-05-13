---
title: '기초파이썬코딩 4주차'
description: '제주한라대학교 1학년 기초 파이썬 코딩 4주차 수업 정리: 리스트, 조건문, turtle 모듈 활용 및 다양한 실습 예제 포함'
date: '2025-03-25'
category: ['university']
tags: ['1학년', '기초파이썬코딩']
thumbnail: '/images/md-basic-python-coding.png'
---

---

## 1. 리스트

### 1.1 리스트란?

리스트는 여러 개의 데이터를 순서대로 저장할 수 있는 자료형입니다.

- 대괄호 `[]` 로 정의하고, 요소는 쉼표 `,` 로 구분합니다.
- 리스트의 요소는 수정, 추가, 삭제가 가능합니다.
- 인덱스는 0번부터 시작합니다.

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])        # 'apple'
fruits.append("grape")  # 맨 뒤에 'grape' 추가
fruits[1] = "orange"     # 'banana' → 'orange'로 수정
del fruits[2]            # 'cherry' 삭제
```

> 실습 예제에서는 exList, scoreList, wordList 등을 통해 리스트 생성 및 인덱싱을 활용하였습니다.

---

### 1.2 리스트 생성 방식

- 값을 직접 넣는 방법: `myList = [10, 20, 30]`
- 비어 있는 리스트를 만들고 나중에 추가: `myList = []`

```python
myList = []
myList.append(1)
myList.append(2)
```

---

### 1.3 주요 메서드

| **메서드** | **설명** | **예시** |
| --- | --- | --- |
| `.append(value)` | 리스트 맨 뒤에 값 추가 | `fruits.append("kiwi")` |
| `.insert(index, value)` | 특정 위치에 값 삽입 | `fruits.insert(1, "mango")` |
| `.remove(value)` | 해당 값을 가진 요소 제거 | `fruits.remove("apple")` |
| `.pop()` | 마지막 요소를 꺼내고 제거 | `last = fruits.pop()` |
| `.sort()` | 리스트를 오름차순 정렬 | `fruits.sort()` |
| `.reverse()` | 리스트를 역순 정렬 | `fruits.reverse()` |
| `max(list)` | 최댓값 반환 | `max(scoreList)` |
| `min(list)` | 최솟값 반환 | `min(scoreList)` |

> 리스트는 순서를 유지하며, 가변적인 자료형입니다.
> 실습에서는 `append`, `insert`, `reverse`, `max`, `min` 등의 메서드가 다양하게 사용되었습니다.

---

## 2. 조건문

### 2.1 기본 구조

```python
if 조건:
    실행문
elif 조건2:
    실행문
else:
    실행문
```

> 들여쓰기(Indentation)와 콜론(:)이 필수입니다.
> 실습에서는 점수 판별, 나이 판별, 팁 계산 등 다양한 분기 상황에 조건문이 사용되었습니다.

---

### 2.2 중첩 조건문 (Nested if)

```python
x = 7
if x > 0:
    if x % 2 == 0:
        print("짝수 양수")
    else:
        print("홀수 양수")
```

> 조건문 내부에 다시 조건문을 작성할 수 있으며, 실습의 가격 비교 예제에서 이러한 중첩 구조가 사용되었습니다.

---

### 2.3 조건 연산자

| **연산자** | **의미** | **예시** |
| --- | --- | --- |
| `==` | 같다 | `x == 5` |
| `!=` | 다르다 | `x != 3` |
| `>` | 크다 | `x > 10` |
| `<` | 작다 | `x < 10` |
| `>=` | 크거나 같다 | `x >= 10` |
| `<=` | 작거나 같다 | `x <= 5` |
| `and` | 그리고 | `x > 5 and x < 10` |
| `or` | 또는 | `x < 5 or x > 10` |
| `not` | 부정 (반대) | `not x == 5` |

> 실습에서는 and와 or을 이용한 논리 조건도 다수 사용되었으며, 부정 연산자인 not도 조건 판단에 유용합니다.

---

### 2.4 `in` 연산자

```python
month = 3
if month in [1, 3, 5, 7, 8, 10, 12]:
    print("31일")
```

- `in`은 특정 값이 리스트, 문자열 등의 시퀀스 자료형에 포함되어 있는지를 판단합니다.
- 실습에서는 **달의 일수 판단**에 사용되었습니다.

---

## 3. `turtle` 모듈로 도형 그리기

```python
import turtle

shape = input("원 or 삼각형 : ")
if shape == "원":
    turtle.circle(50)
elif shape == "삼각형":
    for _ in range(3):
        turtle.forward(100)
        turtle.right(120)
turtle.done()
```

- `turtle`은 파이썬에서 간단한 그래픽을 그릴 수 있는 내장 모듈입니다.
- 실습에서는 사용자의 입력에 따라 **원 또는 삼각형을 그리는 기능**이 구현되었습니다.

> turtle 사용은 GUI 동작이므로 실행 시 별도의 창이 나타납니다.

---

## 4. 실습 내용

```python
# 영어 약어 만들기
word1 = input('첫 번째 단어를 입력해 주세요. : ')
word2 = input('두 번째 단어를 입력해 주세요. : ')
word3 = input('세 번째 단어를 입력해 주세요. : ')
wordList = [word1[0], word2[0], word3[0]]
print(wordList)

# 리스트 메서드
exList = []
exList.append('a')
exList.append('b')
exList.append('c')
print(exList)

exList.insert(0, 1)
exList.insert(0, 2)
exList.insert(0, 3)
print(exList)

# 최고 성적 찾기
print('학생 3명의 성적을 입력하세요.')
score1 = int(input('1번 학생의 성적을 입력하세요 : '))
score2 = int(input('2번 학생의 성적을 입력하세요 : '))
score3 = int(input('3번 학생의 성적을 입력하세요 : '))

scoreList = []
scoreList.append(score1)
scoreList.append(score2)
scoreList.append(score3)

maxScore = max(scoreList)
minScore = min(scoreList)

print(f'최댓값 : {maxScore}')
print(f'최솟값 : {minScore}')

# 객체지향 확인
a = [10, 20, 30]
b = a
b.reverse()
print(a, b)

# 산수 퀴즈
print('산수 퀴즈에 오신 것을 환영합니다.\n')
ans = int(input('2 + 5 = '))
print(ans == 2 + 5)
ans = int(input('7 - 6 = '))
print(ans == 7 - 6)
ans = int(input('2 ** 3 = '))
print(ans == 2 ** 3)
ans = float(input('3.0 / 1.5 = '))
print(ans == 3.0 / 1.5)

# 단답형 채점 프로그램
score = 0
ans = input('가장 쉬운 프로그래밍 언어는? : ')
check = (ans=='파이썬')
print(check)
score += int(check)

ans = input('거듭제곱을 계산하는 연산자는? : ')
check = (ans=='**')
print(check)
score += int(check)

ans = input('파이썬에서 출력시에 사용하는 함수 이름은? : ')
check = (ans=='print')
print(check)
score += int(check)

print(f'총점 : {score}')

# if-else 조건문
score = int(input('점수를 입력하세요 : '))
if score >= 60:
    print('합격입니다.')
else:
    print('불합격입니다.')

age = int(input('나이를 입력하세요 : '))
if age >= 19:
    print('주류 구매 가능')
else:
    print('주류 구매 불가능')

a = 0.1 + 0.1 + 0.1
b = 0.3
epsilon = 1e-9
if abs(a-b) < epsilon:
    print('a와 b가 동일합니다.')

# 수하물 비용 계산
kg = float(input('짐의 무게는 얼마입니까? : '))
if kg >= 20:
    print('무거운 짐은 20,000원을 내셔야 합니다.')
else:
    print('짐에 대한 수수료는 없습니다.')
print('감사합니다.')

# 홀수 짝수 구별하기
num = int(input('정수를 입력하세요 : '))
value = num % 2
if value == 0:
    print('입력된 정수는 짝수입니다.')
else:
    print('입력된 정수는 홀수입니다.')

# 중첩 if
sales = int(input('가격을 입력해 주세요 : '))
if sales > 1000:
    print('어쩌구 저쩌구')
else:
    if sales > 500:
        print('어쩌구 저쩌구')
    else:
        print('어쩌구 저쩌구')

# 물건값 계산
sales = int(input('구입 금액을 입력하시오 : '))
if sales >= 100000:
    print(f'지불 금액은 {sales - (sales * 0.05)}입니다.')
else:
    print(f'지불 금액은 {sales}입니다.')

# 논리 연산자
age = 20
height = 180
if ((age >= 10) and (height >= 160)):
    print('놀이기구 탑승 가능')
else:
    print('놀이 기구 탑승 불가능')

# 윤년 판단
years = int(input('연도를 입력하시오. : '))
if (years % 4 == 0 and years % 100 != 0) or (years % 400 == 0):
    print(f'{years}는 윤년입니다.')
else:
    print(f'{years} 는 윤년이 아닙니다.')

# if-elif
score = int(input('당신의 점수를 입력해 주세요. : '))
if score >= 90:
    print('당신의 점수는 A입니다.')
elif score >= 80:
    print('당신의 점수는 B입니다.')
elif score >= 70:
    print('당신의 점수는 C입니다.')
elif score >= 60:
    print('당신의 점수는 D입니다.')
else:
    print('당신의 점수는 F입니다.')

# 팁 계산
sales = float(input('음식 값 입력 : '))
tip = int(input('팁을 선택하세요. \n 1. 10% \n 2. 15% \n 3. 20% \n : '))
if tip == 1:
    tip = 0.1
elif tip == 2:
    tip = 0.15
else:
    tip = 0.2
totalTip = sales * tip
totalSales = sales + totalTip
print(f'음식 값 {sales}')
print(f'선택한 팁 {tip}')
print(f'팁 금액 {totalTip}')
print(f'총 지불 금액 {totalSales}')

# 달의 일수 출력
month = int(input('월을 입력하시오: '))
if month in [1, 3, 5, 7, 8, 10, 12]:
    print('월의 날수는 31일입니다.')
elif month == 2:
    print('월의 날수는 28일 혹은 29일입니다.')
elif month in [4, 6, 9, 11]:
    print('월의 날수는 30일입니다.')
else:
    print('1에서 12 사이의 숫자를 입력해주세요.')

# turtle을 이용한 도형 그리기
import turtle
shape = input('어떤 도형을 그리시겠습니까? (원, 삼각형) : ')
if shape == '원':
    size = int(input('원의 반지름을 입력해 주세요. : '))
    turtle.circle(size)
elif shape == '삼각형':
    size = int(input('삼각형의 한 변의 길이를 입력해 주세요. : '))
    for i in range(3):
        turtle.forward(size)
        turtle.right(120)
else:
    print('잘못된 도형을 입력하셨습니다. 다시 시도하여 주세요.')
turtle.done()
```

---