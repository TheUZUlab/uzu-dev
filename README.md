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

### 🛠️ 사용한 기술 스택

| 영역          | 사용 기술                                                       |
| ------------- | --------------------------------------------------------------- |
| 프레임워크    | Next.js 15 (App Router 기반)                                    |
| 언어          | TypeScript 5, React 19                                          |
| 스타일링      | TailwindCSS 3.4, Typography Plugin, prettier-plugin-tailwindcss |
| 마크다운 처리 | gray-matter, remark, remark-html, remark-gfm                    |
| 정적 빌드/SEO | generateMetadata, OpenGraph 설정                                |
| 이미지 최적화 | next/image                                                      |
| 코드 품질     | ESLint (Flat Config), Prettier 3, Tailwind Prettier 플러그인    |
| 기타 도구     | VSCode, GitHub, PostCSS, Autoprefixer, Vercel 배포              |

<br/>

### 📁 폴더 구조

```
uzu-dev/
├── app/                     # 라우팅 및 페이지 구성
│   ├── blog/                # 블로그 목록 및 상세
│   ├── project/             # 프로젝트 목록 및 상세
│   ├── profile/             # 프로필 페이지
│   └── layout.tsx           # 공통 레이아웃
│
├── component/              # 재사용 가능한 UI 컴포넌트
├── lib/                    # 마크다운 파서 등 유틸 함수
├── posts/                  # 블로그/프로젝트 콘텐츠 (.md 파일)
├── public/images/          # 정적 이미지 (로고, 썸네일 등)
├── styles/ (없다면 제외)   # 글로벌 CSS
│
├── next.config.ts          # Next.js 설정
├── tailwind.config.js      # Tailwind 설정
├── postcss.config.js       # PostCSS 설정
├── eslint.config.mjs       # ESLint 설정
├── .prettierrc             # Prettier 설정
└── tsconfig.json           # TypeScript 설정
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
