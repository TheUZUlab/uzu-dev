---
title: '정보보안개론 4주차 실습'
description: '제주한라대학교 1학년 정보보안개론 4주차 실습 정리: 패킷트레이서 실습을 통한 라우터 설정, Ping 테스트, 비밀번호 보안 포함'
date: '2025-04-01'
category: ['university']
tags: ['1학년', '정보보안개론']
thumbnail: '/images/blog/university/info-security/md-info-security.png'
---

---

## 1. 패킷트레이서 실습

### 1-1. 실습 프로그램

- [Cisco Packet Tracer](https://www.netacad.com/)
  : 아주 강력한 네트워크 시뮬레이션 프로그램으로, 다양한 프로토콜을 지원하며, 다양한 네트워크 액서스 인터페이스를 지원합니다.
- Boson NetSim, GNS3, VIRL, EVE-NG

---

### 1-2. 인터페이스 설정

![Frame 1 (3).png](/images/blog/university/info-security/md-info-security-1.png)

#### 1-2-1. `Router>en`

- **설명 :**
  일반 사용자 모드에서 특권 EXEC 모드(`enable mode`)로 진입합니다.
- **기능 :**
  장치 설정을 변경하거나 확인할 수 있는 관리자 권한 모드입니다.
- **예시 :**
  - `Router>` ← 기본 사용자 모드 (제한적)
  - `Router#` ← 특권 모드 (설정 가능)

#### 1-2-2. `Router#conf t`

- **설명** :
  특권 EXEC 모드에서 **전역 설정 모드(Configuration Terminal Mode)**로 진입합니다.
- **기능** :
  라우터의 전체적인 설정(예: 호스트명, 인터페이스 등)을 변경할 수 있습니다.
- **명령어 뜻** :
  - `conf` = configure
  - `t` = terminal (터미널에서 설정한다는 뜻)

#### 1-2-3. `Router(config)#hostname Router1`

- **설명** :
  라우터의 이름을 Router1로 설정합니다.
- **기능** :
  이름을 지정하면 프롬프트가 Router1로 변경되어, 어떤 장비를 설정 중인지 구분하기 쉬워집니다.
- **예시** :
  - 기존: `Router(config)#`
  - 변경 후: `Router1(config)#`

#### 1-2-4. `Rouuter1(config)#int gi0/0/0`

- **설명** :
  인터페이스 GigabitEthernet0/0/0의 설정 모드로 진입합니다.
- **기능** :
  해당 인터페이스의 IP 설정, 동작 상태 설정 등 다양한 속성을 수정할 수 있습니다.
- **용어 풀이** :
  - `int` = interface
  - `gi0/0/0` = Gigabit Ethernet 포트 번호 (보통 장비마다 다름)

#### 1-2-5. `Router1(config-if)#ip address 10.1.1.1 255.255.255.0`

- **설명** :
  해당 인터페이스에 IP 주소와 서브넷 마스크를 설정합니다.
- **기능** :
  - **IP 주소** : 라우터 인터페이스가 네트워크 상에서 식별될 수 있도록 부여
  - **서브넷 마스크** : IP 주소의 네트워크 부분과 호스트 부분을 나눕니다.
- **추가 설명** :
  - **`10.1.1.1`** : IP 주소 (이 라우터의 주소)
  - **`255.255.255.0` :** 서브넷 마스크 (네트워크 범위 정의, 여기선 10.1.1.0/24)

#### 1-2-6. `Router1(config-if)#no shut`

- **설명** :
  인터페이스를 활성화(Enable)합니다.
- **기능**:
  Cisco 장비의 인터페이스는 기본적으로 `shutdown` 상태(비활성화)이며, `no shutdown`을 통해 실제 동작하게 만듭니다.
- **비유** :
  "전원 켜기"에 해당합니다.
- **중요** :
  이 명령을 생략하면 IP 설정을 했더라도 실제로 작동하지 않습니다.

---

### 1-3. Ping 사용

![image.png](/images/blog/university/info-security/md-info-security-2.png)

#### 1-3-1. `ping 10.1.1.1`

- 10.1.1.1 주소와 통신이 되는지 확인하는 명령어입니다.
- ping은 ICMP Echo Request/Reply 프로토콜을 이용하여,
  - 대상이 살아 있고,
  - 네트워크 연결이 가능한지 확인하는 데 사용됩니다.

#### 1-3-2. 출력 결과 분석

```
Sending 5, 100-byte ICMP Echos to 10.1.1.1, timeout is 2 seconds:
.!!!!
Success rate is 80 percent (4/5), round-trip min/avg/max = 0/0/0 ms
```

| **항목**       | **설명**                                                        |
| -------------- | --------------------------------------------------------------- |
| **`.`**        | 패킷 손실(응답 없음)을 의미                                     |
| **`!`**        | 정상 응답을 의미                                                |
| **`4/5`**      | 총 5개의 패킷 중 4개가 응답 (1개 손실)                          |
| **`0/0/0 ms`** | 왕복 시간 최소/평균/최대 → 아주 빠름 (같은 네트워크 안이므로 0) |

#### 1-3-3. `ping` 명령어의 용도

| **목적**               | **설명**                                                  |
| ---------------------- | --------------------------------------------------------- |
| **네트워크 연결 확인** | 다른 장비가 네트워크에 연결되어 있는지 확인할 수 있음     |
| **장애 진단**          | 네트워크가 끊겼는지, 라우터 설정이 잘못되었는지 확인 가능 |
| **지연 시간 측정**     | 왕복 시간(ms)을 통해 네트워크 성능 확인 가능              |

---

### 1-4. 라우터의 인터페이스 구성

![image.png](/images/blog/university/info-security/md-info-security-3.png)

#### 1-4-1. 전체 출력 구성 설명

| **항목**       | **의미**                                          |
| -------------- | ------------------------------------------------- |
| **Interface**  | 포트 이름 (예: Gi0/0/0 = GigabitEthernet 0/0/0)   |
| **IP-Address** | 해당 인터페이스에 설정된 IP 주소                  |
| **OK?**        | IP 주소가 유효하게 설정되었는지 여부 (YES면 정상) |
| **Method**     | IP 주소가 설정된 방식 (예: manual = 수동 설정)    |
| **Status**     | 물리적인 상태 (up/down/administratively down)     |
| **Protocol**   | 데이터 링크 계층(L2) 프로토콜 상태 (up/down)      |

#### 1-4-2. 각 라인 분석

- **GigabitEthernet0/0/0**
  - **IP-Address** : `10.1.1.2`
  - **Method** : `manual` (수동 설정됨)
  - **Status** : `up` (물리적 연결 OK)
  - **Protocol** : `up` (논리적 연결 OK)
- **GigabitEthernet0/0/1, 0/0/2**
  - **IP-Address** : `unassigned` (아직 IP 없음)
  - **Status** : `administratively down`
  - **Protocol** : `down`
- **Vlan1**
  - **스위치에서 사용하는 가상 인터페이스**
  - 현재는 라우터에선 사용 안 하고 있음 (IP도 없음)

#### 1-4-3. 정리하면

- **Gi0/0/0**: `10.1.1.2`로 설정되어 있고, 현재 활성화되어 통신 가능 (Router1과 연결 확인됨)
- **나머지 인터페이스들**: IP도 없고 비활성화 상태 (`shutdown` 상태)

---

### 1-5. 비밀번호 설정

![image.png](/images/blog/university/info-security/md-info-security-4.png)

#### 1-5-1. `enable password cisco`

- 특권 모드 접근 시 입력해야 할 일반 비밀번호 설정
- 이 비밀번호는 암호화되지 않은 평문으로 저장
- 보안에 취약함 (단독으로는 권장되지 않음)

#### 1-5-2. `enable secret cisco123`

- 특권 모드 접근 시 입력해야 할 일반 비밀번호 설정
- 이 비밀번호는 자동으로 암호화되어 저장
- enable password 보다 우선적으로 적용
- 실제 운영 환경에서는 enabel secret 을 사용하는 것이 일반적

#### 1-5-3. `show running-config` (`show run`)

- 현재 라우터의 실시간 설정 내용을 확인하는 명령어
- 설정된 IP, 비밀번호, 인터페이스 상태, hostname 등 전부를 확인 가능

---

### 1-6. 원격 접속 비밀번호 설정

![image.png](/images/blog/university/info-security/md-info-security-5.png)
![image.png](/images/blog/university/info-security/md-info-security-6.png)

#### 1-6-1. `enable`

- 사용자 모드에서 특권 EXEC 모드로 진입하는 명령어
- 이 모드에 진입해야 라우터 설정을 변경하거나 주요 명령을 사용 가능
- 접속 시 비밀번호를 입력하도록 설정되어 있으면, 해당 비밀번호를 요구 (`enable password` 또는 `enable secret`)

#### 1-6-2. `conf t`

- 전역 설정 모드로 진입하는 명령어
- 라우터 전체 설정을 수정할 수 있는 모드이며, 여기서 인터페이스나 VTY 라인 등의 세부 설정을 수행

#### 1-6-3. `line vty 0 4`

- VTY(Virtual Terminal) 라인 0번부터 4번까지를 동시에 설정
- 원격 접속(Telnet 또는 SSH)을 허용하기 위한 설정 범위
- 기본적으로 Cisco 장비는 VTY 0~4까지 총 5개의 원격 접속 채널을 제공

#### 1-6-4. `login`

- Telnet(또는 SSH) 접속 시 비밀번호 인증을 요구하게 만드는 명령어
- 비밀번호를 설정한 것만으로는 인증이 활성화되지 않으며, 이 명령이 있어야 실제로 인증 절차가 작동
- 이 명령 없이 password만 설정하면 비밀번호를 입력받지 않음 (보안상 취약)

#### 1-6-5. `password cisco`

- VTY 라인 접속 시 입력해야 할 비밀번호를 `cisco`로 설정
- 이후 Telnet 접속 시 해당 비밀번호를 입력해야 정상적으로 라우터에 접속 가능
- 비밀번호는 기본적으로 암호화되지 않은 상태로 저장되며, `service password-encryption` 명령을 통해 암호화 가능

#### 1-6-6. `telnet 10.1.1.1`

- 원격지 라우터(Router1)의 IP 주소 `10.1.1.1`로 Telnet 접속을 시도하는 명령
- 이 명령은 현재 장비(Router2)에서 다른 라우터(Router1)로 접속한다는 뜻이며, VTY 설정이 되어 있어야 접속이 가능

#### 1-6-7. `User Access Verification` 및 `Password:`

- Telnet 연결이 성공하면 나타나는 메시지
- 이는 **Router1의 VTY 설정(login, password)** 에 의해 비밀번호 인증을 요구하는 단계
- 이때 사용자는 `password cisco`로 설정한 비밀번호를 입력해야 라우터에 접속 가능

#### 1-6-8. 이 전체 과정은 원격 장비에 접속하여 설정하거나 점검할 수 있도록 하기 위한 필수 작업

- 실제 현장에서는 네트워크 장비들이 멀리 떨어져 있을 수 있기 때문에, 원격 접속 기능을 설정하는 것이 중요
- 이 과정을 통해 콘솔 케이블 없이도 네트워크 상에서 라우터에 접근해 설정을 바꾸거나 상태를 확인 가능
- 단, Telnet은 암호화되지 않기 때문에 실무에서는 Telnet보다 SSH를 사용하는 것이 일반적이며, 보안 설정 또한 강화 필요

---

### 1-7. 직접 접속 시 비밀번호 설정

![image.png](/images/blog/university/info-security/md-info-security-7.png)
![image.png](/images/blog/university/info-security/md-info-security-8.png)

#### 1-7-1. `conf t`

- 전역 설정 모드 진입
- 전체 라우터 설정을 수정할 수 있는 기본 명령어

#### 1-7-2. `line con 0`

- Console 0번 라인(직접 장비에 물리적으로 연결된 포트)의 설정 모드로 진입
- 콘솔 포트는 일반적으로 PC와 라우터를 케이블로 직접 연결하여 접근하는 방법 (직접 접속)
- 대부분의 Cisco 장비는 콘솔 라인이 하나(`0`)뿐이므로 `line con 0`으로 설정

#### 1-7-3. `password cisco`

- 콘솔 접속 시 요구할 비밀번호를 `cisco`로 설정
- 즉, 누군가 장비에 물리적으로 접속하려 하면, 이 비밀번호를 입력해야만 접근 가능

#### 1-7-4. `login`

- **비밀번호 입력을 실제로 요구하게 만드는 명령어**
- 이걸 입력하지 않으면 `password`를 설정해도 비밀번호 입력 없이 접속
- 콘솔 접속 시 보안을 위해 반드시 같이 설정

#### 1-7-5. 이 설정이 필요한 이유

- 콘솔 포트는 라우터/스위치에 **물리적으로 직접 접근하는 포트**
- 장비를 재부팅하거나 암호를 복구하는 등 **가장 강력한 접근 권한을 가지는 경로**이기 때문에
  보안상 **반드시 비밀번호를 설정 필요**

---

### 1-8. Access 모드

| **모드 이름**               | **프롬프트 예시**      | 진입 방법                                         | 설명                                             |
| --------------------------- | ---------------------- | ------------------------------------------------- | ------------------------------------------------ |
| **User EXEC**               | `Router>`              | 콘솔, Telnet 등으로 로그인하면 처음 진입하는 모드 | 기본 정보 조회만 가능, 설정 불가                 |
| **Privilege EXEC**          | `Router#`              | `enable` 명령어로 진입                            | 설정 관련 명령어 가능, 보안상 비밀번호 설정 권장 |
| **Global Configuration**    | `Router(config)#`      | `configure terminal` 명령어로 진입                | 전체 설정 가능 (인터페이스, 라인 등)             |
| **Interface Configuration** | `Router(config-if)#`   | `interface 인터페이스이름`으로 진입               | `int gi0/0/0`IP 설정, 상태 설정 등 가능          |
| **Line Configuration**      | `Router(config-line)#` | `line con 0` 또는 `line vty 0 4`로 진입           | 콘솔/원격접속 비밀번호 설정 등 가능              |

- Cisco 라우터 설정은 **각 모드마다 입력 가능한 명령어가 다릅니다.**
- 프롬프트만 보고도 “지금 내가 어디까지 들어와 있는지”를 파악할 수 있어야 합니다.
- 예를 들어 IP 설정은 `config-if`, VTY 설정은 `config-line`, 라우터 이름 설정은 `config`에서만 가능합니다.

---
