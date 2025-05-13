---
title: '기초파이썬코딩 9주차'
description: '제주한라대학교 1학년 기초 파이썬 코딩 9주차 수업 정리: 객체지향 프로그래밍(OOP)의 개념, 클래스 및 인스턴스, 생성자, 정보 은닉과 실습 포함'
date: '2025-04-29'
category: ['university']
tags: ['1학년', '기초파이썬코딩']
thumbnail: '/images/md-basic-python-coding.png'
---

---

## 1. 객체지향 프로그래밍 (OOP: Object-Oriented Programming)

### 1.1 객체지향이란?

> 현실 세계를 코드로 표현한다.

객체지향 프로그래밍은 프로그램을 **객체(Object)** 단위로 구성하여 개발하는 방식입니다.
객체는 현실 세계의 사물처럼 **속성(데이터)** 과 **동작(기능)** 을 가집니다.

| 용어                  | 설명                                |
| ------------------- | --------------------------------- |
| **객체 (Object)**     | 속성과 동작을 가진 독립적 존재 (예: 자동차, 학생, 개) |
| **클래스 (Class)**     | 객체를 만들기 위한 설계도                    |
| **인스턴스 (Instance)** | 클래스를 바탕으로 생성된 실제 객체               |

---

### 1.2 클래스와 인스턴스

#### 1) 클래스 (Class)

* 객체를 만들기 위한 **청사진**
* 속성(변수)과 동작(메서드)을 정의

#### 2) 인스턴스 (Instance)

* 클래스를 바탕으로 실제로 **메모리에 생성된 객체**

```python
class Dog:
    def bark(self):
        print("멍멍")

my_dog = Dog()  # 인스턴스 생성
my_dog.bark()   # 인스턴스의 동작 수행
```

---

### 1.3 인스턴스 변수와 메서드

| 개념          | 설명               | 선언 방법                |
| ----------- | ---------------- | -------------------- |
| **인스턴스 변수** | 객체마다 별도로 존재하는 변수 | `self.변수명`           |
| **메서드**     | 클래스 내부에서 정의된 함수  | 첫 번째 매개변수로 `self` 사용 |

```python
class Counter:
    def reset(self):
        self.count = 0
    def increment(self):
        self.count += 1
    def get(self):
        return self.count

a = Counter()
a.reset()
a.increment()
print(a.get())  # 1
```

---

### 1.4 생성자 (`__init__` 메서드)

* 객체를 생성할 때 자동으로 실행
* 인스턴스 변수 초기화에 사용

```python
class Counter:
    def __init__(self):
        self.count = 0

a = Counter()  # count = 0 으로 초기화됨
```

> 생성자는 반드시 `__init__`라는 이름을 사용합니다.

---

### 1.5 self 키워드

* 메서드 내부에서 **자기 자신(인스턴스)** 를 가리킴
* 인스턴스 변수에 접근할 때 필수

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

---

### 1.6 정보 은닉 (캡슐화)

* 외부에서 객체의 내부 데이터를 **직접 접근하지 못하게 보호**
* 변수명 앞에 `__`를 붙이면 private(비공개) 속성으로 설정

```python
class Student:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

s = Student("홍길동", 20)
# print(s.__age)  # 에러 발생: 외부 접근 불가
```

---

### 1.7 접근자 (Getter) & 설정자 (Setter)

* **getter**: private 변수의 값을 가져옴
* **setter**: private 변수의 값을 설정

```python
class Student:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def getName(self):
        return self.__name

    def setName(self, name):
        self.__name = name
```

> 접근자를 통해 외부 접근을 제어하고, 유효성 검사도 가능하게 합니다.

---

### 1.8 클래스 변수 (Class Variable)

* 모든 인스턴스가 **공유**하는 변수
* 클래스명.변수명 으로 접근

```python
class Blog:
    count = 0  # 클래스 변수

    def __init__(self, title):
        self.title = title
        Blog.count += 1

b1 = Blog("첫 번째 글")
b2 = Blog("두 번째 글")
print("게시글 수:", Blog.count)  # 게시글 수: 2
```

---

### 1.9 객체 전달과 변경

* 함수로 객체를 전달하면, **mutable 객체**는 내부에서 변경 가능

```python
class User:
    def __init__(self, name):
        self.name = name

def update_username(u):
    u.name = "변경됨"

user1 = User("원래이름")
update_username(user1)
print(user1.name)  # 변경됨
```

---

## 2. 실습 예제 (OOP 예시)

### 2.1 텔레비전 클래스 (속성과 동작)

```python
class Television:
    def __init__(self, channel=1, volume=10, on=False):
        self.channel = channel
        self.volume = volume
        self.on = on

    def turn_on(self):
        self.on = True
        print("TV가 켜졌습니다.")

    def turn_off(self):
        self.on = False
        print("TV가 꺼졌습니다.")

    def set_channel(self, ch):
        self.channel = ch
        print(f"채널을 {ch}번으로 변경했습니다.")
```

### 2.2 원 클래스 (정보 은닉, getter/setter)

```python
import math

class Circle:
    def __init__(self, radius=1.0):
        self.__radius = radius

    def setRadius(self, r):
        if r > 0:
            self.__radius = r
        else:
            print("반지름은 0보다 커야 합니다.")

    def getRadius(self):
        return self.__radius

    def calcArea(self):
        return math.pi * self.__radius ** 2

    def calcCircum(self):
        return 2 * math.pi * self.__radius

c = Circle(10)
print(f"반지름: {c.getRadius()}")
print(f"넓이: {c.calcArea():.2f}")
print(f"둘레: {c.calcCircum():.2f}")
```

### 2.3 자동차 클래스 (은닉 & 동작 제어)

```python
class Car:
    def __init__(self, brand='Hyundai', speed=0):
        self.__brand = brand
        self.__speed = speed

    def setBrand(self, brand):
        self.__brand = brand

    def getBrand(self):
        return self.__brand

    def setSpeed(self, speed):
        if speed >= 0:
            self.__speed = speed
        else:
            print("속도는 0 이상이어야 합니다.")

    def getSpeed(self):
        return self.__speed

myCar = Car()
myCar.setBrand("Jeep")
myCar.setSpeed(80)
print("브랜드:", myCar.getBrand())
print("속도:", myCar.getSpeed())
```

### 2.4 은행 클래스 (입출금 기능)

```python
class Bank:
    def __init__(self):
        self.__balance = 0

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"{amount}원 입금됨. 현재 잔액: {self.__balance}원")
        else:
            print("입금액은 0보다 커야 합니다.")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"{amount}원 출금됨. 현재 잔액: {self.__balance}원")
        else:
            print("잔액 부족 또는 잘못된 금액입니다.")

account = Bank()
account.deposit(10000)
account.withdraw(5000)
account.withdraw(10000)
```

### 2.5 자동차 동작 모델링 (기어, 가속, 브레이크)

```python
class Car:
    def __init__(self, color='black', speed=0, gear='P'):
        self.color = color
        self.speed = speed
        self.gear = gear

    def accelerate(self):
        self.speed += 10
        print(f"가속! 현재 속도: {self.speed}km/h")

    def brake(self):
        self.speed = max(0, self.speed - 10)
        print(f"감속! 현재 속도: {self.speed}km/h")

    def change_gear(self, g):
        allowed_gears = ['P', 'R', 'N', 'D']
        if g in allowed_gears:
            self.gear = g
            print(f"기어 변경: {self.gear}")
        else:
            print("잘못된 기어입니다.")

car = Car()
car.accelerate()
car.accelerate()
car.brake()
car.change_gear('D')
car.change_gear('X')
```

---