---
title: '정보보안개론 1주차'
description: '제주한라대학교 1학년 정보보안개론 1주차 수업 정리: 해킹 사례, 정보보호 개념, 보안 윤리 및 AI 시대 이슈 포함'
date: '2025-03-11'
category: ['university']
tags: ['1학년', '정보보안개론']
thumbnail: '/images/blog/university/info-security/md-info-security.png'
---

---

## 1. 해킹을 왜 할까요?

해킹은 다양한 목적과 동기로 이루어집니다. 정보 탈취, 금전적 이득, 정치적 목적, 시스템 파괴 등이 주요 이유입니다. 현대 사회에서는 단순한 개인 범죄를 넘어, 국가 간 사이버 전쟁, 경제적 스파이 활동, 해커 집단의 조직적 움직임으로 확장되고 있습니다.

### 1-1. 해킹 사례

#### 1-1-1. 랜섬웨어와 스노우든 사건

- **랜섬웨어**: 데이터를 암호화하여 몸값을 요구하는 대표적인 금전적 해킹 수법입니다.
- **스노우든 사건**: 미국 국가안보국(NSA)의 불법 감청 프로그램을 내부고발한 사건으로, 정보 유출과 윤리적 해킹의 경계에 있는 사례입니다.

#### 1-1-2. 월성 1호기 도면 해킹 사건

- 원자력 발전소의 도면이 해킹된 사례로, 공공 목적으로 또는 개인 과시를 위해 정보가 유출되었습니다. 국가 기반 시설도 해킹의 주요 목표가 될 수 있음을 보여줍니다.

#### 1-1-3. 랜섬웨어 '갠드크랩' 사례

- 금전적 이득을 목적으로 한 '서비스형 랜섬웨어' 모델입니다. 직접 개발하지 않고 구매하여 사용할 수 있어, 더 많은 해커들이 공격에 참여할 수 있게 되었습니다.

#### 1-1-4. 다크웹

- 일반 검색엔진으로 접근할 수 없는 웹 공간으로, 해커들이 활발히 활동합니다. 유출된 정보 거래, 랜섬웨어 몸값, 불법 무기 및 마약 거래 등이 이루어지지만, 언론 자유 보호, 프라이버시 보장처럼 긍정적인 활용 사례도 존재합니다.

#### 1-1-5. 국가 간 사이버 전쟁

- **북한 APT38, Lazarus**: 금융기관 해킹 및 암호화폐 탈취
- **러시아 Fancy Bear, Sandworm**: 선거 개입, 에너지/금융 인프라 공격
- **중국 APT10, Hafnium**: 산업 스파이 활동, 군사 기밀 유출
- **이스라엘-이란 사이버 전쟁**: Stuxnet 바이러스를 통한 원자력 발전소 공격

### 1-2. 해킹의 목적

- **정보 수집 및 유출**: 공공, 과시, 정치적 목적
- **서비스 파괴**: 경쟁사 공격, 정치적 목적, 금전적 요구
- **메시지 전달**: 정치적, 이념적 주장을 위한 해킹
- **금전적 이득**: 신용카드 정보, 랜섬웨어 공격
- **이념 중심**: 정치적, 사회적 신념을 기반으로 해킹 수행

---

## 2. 정보보안과 국제 관계

정보보안은 기업이나 개인을 넘어, 국가 간의 경제, 외교, 안보 관계와도 깊이 연결되어 있습니다.

#### 2-1. 중국 제품과 정보 보안

- 미국과 중국의 무역 전쟁으로 화웨이 장비 사용이 제한되었습니다. 스파이칩 내장 가능성 때문에 미국이 동맹국들에도 사용 제한을 요청했습니다.

#### 2-2. 슈퍼마이크론 칩 스캔들

- 대만 기업 슈퍼마이크론 제품에서 작은 칩이 추가로 발견되었습니다. 하드웨어 백도어 설치 가능성으로 논란이 되었습니다.

#### 2-3. 화웨이 5G 장비 논란

- 화웨이 장비의 백도어 가능성 제기 → 미국, 영국, 호주 등 주요 국가 사용 금지 조치

#### 2-4. ECHELON 감청 시스템

- 미국, 영국, 캐나다, 호주, 뉴질랜드(Five Eyes)가 운영하는 글로벌 감청 시스템입니다.

#### 2-5. 프리즘 프로젝트(PRISM)

- 미국 NSA가 구글, 페이스북, 마이크로소프트 등과 협력하여 사용자 정보를 수집한 프로젝트입니다. 2013년 스노우든에 의해 폭로되었습니다.

#### 2-6. FireEye 보안 기업

- 글로벌 보안 사고 대응 및 해킹 분석을 전문으로 하는 기업입니다.

---

## 3. 정보보호의 중요성

정보보호는 단순한 기술 문제가 아니라, 국가 안보, 군사 네트워크, 정치적 안정성과도 연결됩니다.

#### 3-1. 국가 간 사이버 전쟁 사례

- 우크라이나-러시아 전쟁에서 미국이 사이버 전력을 지원한 사례

#### 3-2. 보안 기술과 사고

- Lidar, Camera 해킹 시 미사일 시스템 조작 가능
- 소프트웨어 오류로 항공기 사고 발생 가능

#### 3-3. 국내 정보보호 관리 기관

- 국가사이버안보센터, 한국인터넷진흥원(KISA), 국가보안기술연구소

---

## 4. 정보보호란?

**Cybersecurity = cyber(가상 공간) + security(보안)**

정보보호란, 데이터, 시스템, 네트워크를 무단 접근, 훼손, 파괴, 유출로부터 안전하게 지키는 모든 활동을 말합니다.

### 4-1. 정보 위협의 주체

- **외부 해커**: 외부 조직이나 개인이 공격하는 경우
- **내부 위협자**: 내부 직원이 악의적으로 정보를 유출하는 경우

### 4-2. 정보보안의 주요 목표

| 요소                         | 설명                        | 예시                |
| :--------------------------- | :-------------------------- | :------------------ |
| **기밀성 (Confidentiality)** | 허가된 사람만 정보에 접근   | 암호화, 로그인 인증 |
| **무결성 (Integrity)**       | 정보의 정확성과 일관성 유지 | 체크섬, 디지털 서명 |
| **가용성 (Availability)**    | 필요할 때 정보에 접근 가능  | 서버 유지보수, 백업 |

---

## 5. 정보보호의 범위

정보보호는 단순한 비밀번호 설정을 넘어, 네트워크, 시스템, 물리적 보안까지 폭넓게 포함합니다.

### 5-1. 네트워크 보안

- IPv4, IPv6, 각종 프로토콜 관리
- 스위치, 라우터, LTE, 5G, Wi-Fi 장비 보안 강화

### 5-2. 시스템 보안

- 하드웨어(H/W): PC, 서버 등의 장비 보호
- 소프트웨어(S/W): 운영체제, 웹 애플리케이션 보안 점검

### 5-3. 애플리케이션 보안

- 웹 브라우저, 모바일 앱, 클라우드 서비스에 대한 보안 강화

### 5-4. 물리적 보안 (Physical Security)

- 건물 출입 통제, 감시 카메라 설치, 보안 도어 및 창문 보호

---

## 6. 악성코드 종류

### 6-1. Malware (Malicious + Software)

악성코드는 사용자의 컴퓨터나 네트워크에 의도적으로 피해를 주기 위해 제작된 프로그램입니다.

| 종류        | 설명                                                | 예시               |
| :---------- | :-------------------------------------------------- | :----------------- |
| 바이러스    | 자기 복제하여 다른 파일이나 시스템을 감염시킴       | 실행파일 감염      |
| 웜(Worm)    | 스스로 퍼지며 확산함                                | 이메일 웜          |
| 트로이 목마 | 정상 프로그램처럼 위장하지만 내부에 악성코드를 포함 | 무료 게임 프로그램 |
| 랜섬웨어    | 파일을 암호화한 후 금전을 요구함                    | WannaCry           |
| 스파이웨어  | 사용자 정보를 몰래 수집함                           | 광고 추적 프로그램 |
| 루트킷      | 시스템 내부에 숨어 보이지 않게 함                   | 해킹 툴 숨기기     |
| 백도어      | 공격자가 재접근할 수 있도록 숨겨진 통로를 만듦      | 원격 제어 도구     |

### 6-2. 악성코드 탐지 방법

- V3, 알약, Virus Chaser와 같은 전통적인 백신 프로그램
- AI 기반 악성코드 탐지 시스템 (신기술)

---

## 7. 정보보호 주요 용어

- **취약점 (Vulnerability)**: 시스템 보안의 허점을 의미합니다.
- **취약점 관리 (Vulnerability Management)**: 취약점을 탐지하고 수정하는 과정을 뜻합니다.
- **공격 표면 (Attack Surface)**: 공격자가 노릴 수 있는 시스템의 모든 지점입니다.
- **위험 (Risk)**: 취약점이 악용될 가능성과 그로 인한 피해 정도를 뜻합니다.
- **제로데이 (Zero-Day)**: 패치되지 않은 취약점을 이용한 공격입니다.
- **파밍 (Pharming)**: 악성 웹사이트로 사용자를 유도하여 개인정보를 탈취하는 수법입니다.
- **피싱 (Phishing)**: 이메일이나 메시지로 로그인 정보를 탈취하는 공격입니다.
- **보이스 피싱 (Voice Phishing)**: 전화 통신을 이용한 사기 수법입니다.
- **보안 vs 프라이버시**: 보안 강화와 개인정보 보호 간 균형 문제입니다.

---

## 8. 윤리적 해킹 (Ethical Hacking)

윤리적 해킹이란, 허가를 받은 보안 전문가가 시스템의 취약점을 찾아내고 이를 수정하는 활동을 말합니다. 이들은 '화이트 해커(White Hat Hacker)'라고 부릅니다.

### 8-1. 윤리적 해킹 주요 목적

- **취약점 발견**: 문제가 악용되기 전에 해결합니다.
- **시스템 보호 강화**: 보안 수준을 높입니다.
- **법적 승인**: 합법적 허가를 받은 해킹만 수행합니다.

### 8-2. 윤리적 해킹 과정

- **정보 수집**: 시스템 분석
- **취약점 분석**: 공격 가능한 부분 찾기
- **공격 시뮬레이션**: 침투 테스트 수행
- **보고서 작성**: 결과 및 수정 방안 제시
- **보안 강화**: 취약점 패치 적용

### 8-3. 윤리적 해킹 사례

- 침투 테스트 (Penetration Testing)
- 버그 바운티 프로그램 참여
- 네트워크 보안 감사 수행

### 8-4. 윤리적 해커의 특징

- **법적 승인**: 정식 허가를 받고 활동합니다.
- **비밀 유지**: 외부로 민감 정보를 유출하지 않습니다.
- **윤리적 책임감**: 해킹 기술을 올바른 방향으로 사용합니다.

---

## 9. 정보보안 윤리

정보보안 윤리는 기술적 보호를 넘어서, 개인정보 보호, 법 준수, 윤리적 해킹을 포함한 폭넓은 개념입니다.

### 9-1. 정보보안 윤리의 중요성

- 기업과 조직의 신뢰 구축
- 법적 문제 예방
- 보안 사고 방지

### 9-2. 정보보안 윤리 핵심 원칙

1. **정당한 접근만 허용**: 무단 접근 금지
2. **개인정보 보호**: 암호화 및 접근 제한 적용
3. **정보 무단 사용 금지**: 사적인 활용 금지
4. **투명성 유지**: 보안 문제를 은폐하지 않고 보고
5. **법적 및 규제 준수**: GDPR, 개인정보보호법 준수
6. **윤리적 해킹 실천**: 합법적 해킹 활동 수행
7. **직업적 무결성 유지**: 보안 정보를 악용하지 않음

### 9-3. 정보보안 윤리 갈등 사례

- 데이터 유출과 내부 보고 갈등
- 기업 정책과 직원 프라이버시 충돌
- 취약점 공개 문제

---

## 10. AI 시대의 정보보호 윤리

AI 기술의 급속한 발전으로 정보보호 윤리 문제가 더욱 중요해졌습니다.

### 10-1. AI 기술 발전에 따른 이슈

- **Boston Dynamics**: 군사용 로봇 보안 문제
- **자율주행 자동차**: 사고 발생 시 책임 문제
- **메타휴먼**: 얼굴 도용 문제
- **AI 기반 의료 진단**: 환자 데이터 보호 문제

### 10-2. AI 시대 정보보호 윤리 핵심 원칙

1. **AI 데이터 접근 및 보안**: 데이터 수집과 보호 강화
2. **AI 해킹 대응**: AI 시스템 자체 보호
3. **프라이버시 보호 및 데이터 윤리**: 사용자 데이터 보호 강화
4. **AI 시스템의 책임성**: 잘못된 판단 시 책임 명확화
5. **AI 알고리즘 공정성 유지**: 차별적 결정 방지

---
