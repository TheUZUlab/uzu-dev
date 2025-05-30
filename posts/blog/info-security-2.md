---
title: '정보보안개론 2주차'
description: '제주한라대학교 1학년 정보보안개론 2주차 수업 정리: 보안 사고 사례, 사이버 전쟁, 사회공학, 해커 유형 포함'
date: '2025-03-18'
category: ['university']
tags: ['1학년', '정보보안개론']
thumbnail: '/images/blog/university/info-security/md-info-security.png'
---

---

## 1. 보안 사고 (Cyber Incidents)

### 1-1. 보안 사고 사례

#### 1-1-1. 피싱 공격 (Phishing Attack)

| 구분          | 내용                                                         |
| :------------ | :----------------------------------------------------------- |
| **해킹 방법** | 이메일, 메시지, 웹사이트를 통해 로그인 정보나 금융 정보 탈취 |
| **피해**      | 로그인 정보 및 금융 정보 유출, IoT 데이터 유출               |

#### 1-1-2. 자동차 해킹 (Car Hacking)

| 구분               | 내용                                                                            |
| :----------------- | :------------------------------------------------------------------------------ |
| **해킹 방법**      | ECU, OBD-II 포트를 통한 차량 시스템 해킹                                        |
| **주요 해킹 방식** | Drive-by Code, ECU Module 해킹, OBD-II Systems, Passive Keyless Entry, CAN 해킹 |
| **피해**           | 차량 탈취, 사고 유발, 차선 이탈 유도                                            |

#### 1-1-3. 드론 보안 사고 (Drone Security Incidents)

| 구분               | 내용                                 |
| :----------------- | :----------------------------------- |
| **해킹 방법**      | GPS 공격, 센서 스푸핑                |
| **주요 해킹 방식** | GPS 교란, Drone Sensor Spoofing      |
| **피해**           | 경로 이탈, 충돌 사고, 원격 제어 불능 |

#### 1-1-4. 전투기 전자전 (Military Electronic Warfare)

| 구분          | 내용                                  |
| :------------ | :------------------------------------ |
| **해킹 방법** | RF Jammer를 이용한 통신 방해          |
| **피해**      | 군사 기밀 유출, 전투 시스템 기능 마비 |

#### 1-1-5. 모바일 보안 사고 (Mobile Security Incidents)

| 구분          | 내용                                                                                     |
| :------------ | :--------------------------------------------------------------------------------------- |
| **해킹 방법** | 피싱, 스파이웨어, 백도어 등을 통한 해킹                                                  |
| **주요 사례** | WhatsApp 도청, Equifax 모바일 해킹, Snapchat 해킹, Mobile Banking Trojan, Instagram 피싱 |
| **피해**      | 금융 정보 및 개인정보 유출                                                               |

#### 1-1-6. 기타 보안 사고 (Various Security Incidents)

| 구분          | 내용                                                                                  |
| :------------ | :------------------------------------------------------------------------------------ |
| **주요 사례** | MMS 취약점, SCADA 해킹, 부산 전광판 해킹, WebOS 취약점, Heart Rate Sensor Spoofing 등 |
| **피해**      | 시스템 제어 상실, 개인정보 유출, 의료 사고 가능성                                     |

---

## 2. 사이버 전쟁

### 2-1. 사이버 전쟁 사례

- Stuxnet Clone 'Duqu'
- 송유관 해킹 사건
- Sony Attack

### 2-2. 사이버 공격 방식

#### 2-2-1. Watering Hole Attack

| 구분          | 내용                                             |
| :------------ | :----------------------------------------------- |
| **설명**      | 자주 방문하는 웹사이트를 감염시켜 악성 코드 배포 |
| **작동 원리** | 대상 조사 → 악성 코드 삽입 → 피해자 감염         |

#### 2-2-2. 부채널 공격 (Side Channel Attacks)

| 구분          | 내용                                                            |
| :------------ | :-------------------------------------------------------------- |
| **설명**      | 시스템의 전력 소비, 전자파, 시간 차이 등을 이용하여 정보 추출   |
| **주요 대상** | 전력 소비, 전자파, 시간 분석, 캐시 패턴, 소리, 열 방출          |
| **방어 방법** | 난수화, 물리적 차폐, 균일 실행 시간, 파라미터 마스킹, 캐시 분리 |

#### 2-2-3. 타이밍 공격 (Timing Attack)

| 구분          | 내용                                                           |
| :------------ | :------------------------------------------------------------- |
| **설명**      | 연산 시간 차이를 분석하여 비밀 정보 추출                       |
| **방어 방법** | 균일 실행 시간 적용, 노이즈 추가, 알고리즘 수정, 하드웨어 개선 |

---

## 3. 버그 바운티 (Bug Bounty)

버그 바운티란 소프트웨어, 웹사이트, 애플리케이션 등의 보안 취약점을 발견한 보안 연구자(화이트 해커)에게 금전적 보상을 제공하는 프로그램을 의미합니다. 이를 통해 기업은 취약점을 조기에 발견하고 수정할 수 있으며, 연구자는 윤리적으로 해킹 능력을 발휘하고 보상을 받을 수 있습니다.

### 3-1. Bug Bounty의 주요 요소

- **취약점 발견**: 연구자가 시스템의 취약점을 찾아냅니다.
- **보고 및 검증**: 발견한 취약점을 기업에 보고하고 검증을 거칩니다.
- **보상 지급**: 검증 후 연구자에게 금전적 보상이 지급됩니다.
- **공개 여부**: 취약점 해결 후 공개 여부를 결정합니다.

### 3-2. Bug Bounty의 장점

- 취약점을 조기에 발견할 수 있습니다.
- 비교적 낮은 비용으로 보안을 강화할 수 있습니다.
- 보안 커뮤니티와 협력하여 보다 강력한 방어 체계를 구축할 수 있습니다.

### 3-3. Bug Bounty의 단점

- 잘못된 취약점 보고 가능성
- 정보 유출 위험
- 보안을 외부에 과도하게 의존할 수 있음

### 3-4. 실제 사례

- Facebook Bug Bounty 프로그램
- Google Vulnerability Reward Program
- Tesla Bug Bounty 프로그램
- 정부 기관 Bug Bounty 프로그램

### 3-5. 주요 참여 플랫폼

- HackerOne
- Bugcrowd
- Synack
- Open Bug Bounty

---

## 4. 악성코드 탐지 우회 기술

### 4-1. 실행 압축 기술 (Anti-VM)

악성코드는 실행 압축을 이용해 분석을 어렵게 만듭니다. 압축을 풀지 않으면 코드 분석이 어렵고, 패턴 기반 탐지를 우회할 수 있습니다.

#### 4-1-1. 특징

- 파일 크기가 작습니다.
- 압축 해제 전까지 분석이 어렵습니다.
- 변형된 코드로 탐지를 회피할 수 있습니다.

### 4-2. 가상화 툴 (Virtualization Tools)

악성코드는 가상화 환경에서 탐지되지 않도록 설계될 수 있습니다. 대표적인 가상화 도구는 다음과 같습니다.

- VMware
- Microsoft Hyper-V (Virtual PC)
- Xen

---

## 5. 공격 방어 기술

### 5-1. ASLR, DEP, ROP

메모리 보호 기술과 이를 우회하는 공격 기법은 현대 보안에서 매우 중요한 주제입니다.

#### 5-1-1. 상호 관계

- **ASLR**: 메모리 주소를 랜덤화하여 ROP 공격을 어렵게 합니다.
- **DEP**: 스택이나 힙 등 메모리 영역을 실행 불가능하게 만들어 악성 코드 실행을 차단합니다.
- **ROP**: ASLR과 DEP를 우회하는 고급 공격 기법입니다.

#### 5-1-2. 보안 강화 기술

- CRI (Control-Flow Integrity)
- Shadow Stack
- PIE (Position Independent Executable)

---

## 6. 안전 (Safety)

### 6-1. 안전 사고 사례 (오작동)

- **2019년 보잉 737 Max 항공기 추락**: 센서 오류로 인한 추락 사고 (157명 사망)
- **영국 공항 관제시스템 전산 장애**: 항공기 이착륙 문제 발생
- **미국 동부 대정전**: 전력 시스템 오류로 대규모 정전 발생

### 6-2. 안전 사고 사례 (조작 미숙)

- **American Airlines 965 Crash**: 소프트웨어 오류로 비행 경로 이탈 및 사고 발생

---

## 7. 사회 공학 (Social Engineering)

사회 공학이란 사람의 심리를 이용하여 정보를 탈취하는 기법입니다.

### 7-1. 사회 공학 분류

#### 7-1-1. 개인을 대상으로 하는 공격

- **Pretexting**: 신분 조작을 통한 정보 유도
- **Tailgating (Piggybacking)**: 정당한 직원 뒤를 따라 보안 구역 침입
- **Quid Pro Quo**: 도움을 빙자해 정보를 요구

#### 7-1-2. 전자 매체를 이용한 공격

- **Spear Phishing**: 특정 대상을 겨냥한 피싱 공격
- **Baiting**: 악성 USB 등 물리적 미끼 제공
- **보이스피싱**: 전화 사기를 통한 개인정보 탈취
- **몸캠 피싱**: 노출 영상을 이용한 협박
- **Smishing**: 문자 메시지를 통한 피싱
- **Shoulder Surfing**: 비밀번호 엿보기
- **Dumpster Diving**: 쓰레기 속 민감 정보 수집
- **Vishing**: 음성 사기를 통한 정보 탈취
- **이벤트성 사기**: 가짜 이벤트를 통한 개인정보 수집
- **Watering Hole Attack**: 자주 방문하는 웹사이트 감염
- **Whaling Attack**: 고위 임원을 대상으로 하는 공격
- **Clickjacking**: 클릭을 유도하여 악성 행위 실행

---

## 8. 해커 분류 (Hacker Classification)

### 8-1. 화이트햇 해커 (White-Hat Hacker)

- 윤리적으로 보안을 강화하는 해커
- 예시: 보안 컨설턴트, 침투 테스터

### 8-2. 블루햇 해커 (Blue-Hat Hacker)

- 기업 초청으로 제품 보안을 점검하는 해커
- 예시: 마이크로소프트 BlueHat 컨퍼런스 참가자

### 8-3. 레드 해커 (Red Hacker) 또는 훙커 (Honker)

- 국가 이익을 위해 활동하는 애국적 해커
- 예시: 중국의 홍커 연맹

### 8-4. 블랙햇 해커 (Black-Hat Hacker)

- 악의적으로 시스템을 침입하거나 데이터 탈취

### 8-5. 그레이햇 해커 (Grey-Hat Hacker)

- 합법과 불법 사이를 넘나드는 해커

### 8-6. 스크립트 키디 (Script Kiddie)

- 해킹 도구만 사용하는 초보 해커

### 8-7. 내부고발자 (Whistleblower)

- 조직 내부의 부정행위를 공개하는 인물
- 예시: 에드워드 스노든, 프랜시스 호건

### 8-8. 자살형 해커 (Suicide Hacker)

- 신원 노출을 감수하며 공격을 수행하는 해커

### 8-9. 핵티비스트 (Hacktivist)

- 정치적, 사회적 목적을 위해 해킹하는 해커
- 예시: Anonymous, LulzSec

---
