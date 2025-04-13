# 🌙 uzu-dev

**기록하며 성장하는 개발자 유주**의  
성장 기록과 창작물이 담긴 **개인 포트폴리오 & 블로그 프로젝트 사이트**입니다.

<br/>

### ✨ 프로젝트 개요

- Markdown 기반으로 작성되는 블로그 & 프로젝트 사이트
- 심플한 UI와 직관적인 구조
- App Router 기반의 최신 Next.js 구조
- 커스터마이징 가능한 UI 구성

<br/>

### 🗓️ 개발 계획

진행 기준 : 하루 2시간, 주 6일 (월~토)

| 단계             | 기간             | 세부 목표                                                                                                               | 완료 |
| ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------- | ---- |
| 초기 세팅        | ~2025.04.13      | - Next.js App Router 구조<br>- Tailwind CSS, Markdown, Typography 적용<br>- ESLint Flat Config + Prettier 연동          | ✅   |
| 기능 기반 구축   | 2025.04.14~04.17 | - Header/Footer 컴포넌트 구현<br>- Hover 애니메이션 / Navigation 스타일링<br>- 404 페이지 제작                          | ⏳   |
| 핵심 페이지 제작 | 2025.04.18~04.22 | - 홈(Hero 영역 포함) 구성<br>- 블로그 / 프로젝트 리스트 페이지 구현<br>- About 페이지 디자인 및 콘텐츠 작성             | ⏳   |
| 상세 기능 확장   | 2025.04.23~04.27 | - 슬러그 페이지 SEO 메타데이터 처리 (`generateMetadata()`)<br>- 썸네일 최적화 (`next/image`)                            | ⏳   |
| 배포 준비        | 2025.04.28~05.05 | - `metadataBase` 설정<br>- OG 이미지 경로 확인<br>- Vercel 배포 + 커스텀 도메인 세팅<br>- favicon / social preview 구성 | ⏳   |
| 콘텐츠 정리      | 2025.05.06~05.31 | - 카테고리 필터링 기능 구현<br>- 마크다운 콘텐츠 5개 이상 작성<br>- 블로그/프로젝트 시리즈 구성                         | ⏳   |
| 다크 모드        | 2025.06~TBD      | - 감성 테마 기반 다크모드 구현<br>- 색상 팔레트 커스터마이징                                                            | ⏳   |

<br/>

### 🛠️ 사용한 기술 스택

| 영역          | 사용 기술                            |
| ------------- | ------------------------------------ |
| 프레임워크    | Next.js 15 (App Router 기반)         |
| 언어          | TypeScript 5                         |
| 스타일링      | TailwindCSS 3.4, Typography 플러그인 |
| 마크다운 처리 | gray-matter, remark, remark-html     |
| 코드 품질     | ESLint (Flat Config), Prettier 3     |
| 폰트          | Pretendard Variable (CDN)            |
| 이미지 처리   | next/image                           |
| 메타 설정     | generateMetadata + OpenGraph         |

<br/>

### 📁 폴더 구조

```
uzu-dev/
├── app/                                   # 전체 라우팅 구조
│   ├── page.tsx                      # 메인 페이지
│   ├── layout.tsx                     # 공통 레이아웃
│   ├── globals.css                  # 공통 CSS
│   ├── about/                          # 소개 페이지
│   │   └── page.tsx
│   ├── blog/                            # 블로그
│   │   ├── page.tsx                 # 목록
│   │   └── [slug]/page.tsx       # 상세
│   ├── project/                        # 프로젝트
│   │   ├── page.tsx                # 목록
│   │   └── [slug]/page.tsx       # 상세
│
├── component/                      # UI 컴포넌트들
│
├── lib/                                    # 유틸 함수
│   └── markdown.ts              # 마크다운 파싱
│
├── posts/                              # 콘텐츠 저장소
│   ├── blog/ex.md                # 블로그 예시
│   └── project/ex.md            # 프로젝트 예시
│
├── public/                            # 정적 파일
│   └── images/                    # 로고, 아이콘, 썸네일 등
│
├── README.md                 # 프로젝트 소개
├── tailwind.config.js            # Tailwind 설정
├── postcss.config.js            # PostCSS 설정
├── tsconfig.json                  # TypeScript 설정
├── next.config.ts                 # Next.js 설정
├── eslint.config.mjs            # ESLint (Flat Config)
├── .prettierrc                       # Prettier 설정
└── package.json                 # 의존성 및 스크립트
```

<br/>

### 👩🏻‍💻 개발자 정보

**장유주 (Yuju Jang)**  
인공지능공학과 재학 / 풀스택 개발자 지망  
📍 Cheju Halla University
📫 ujoo2802@gmail.com  
🌐 [포트폴리오](https://uzu.dev) (준비 중)

<br/>

### 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
