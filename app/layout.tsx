import type { Metadata } from 'next';
import './globals.css';
import HeaderWrapper from './component/Header/HeaderWrapper';
import Footer from './component/Footer/Footer';

/**
 * RootLayout
 * - 모든 페이지의 공통 레이아웃 컴포넌트
 */

export const metadata: Metadata = {
  metadataBase: new URL('http://www.uzu-dev.kr'),
  title: 'uzu-dev',
  description: '개발자 유주의 프로젝트 및 공부 기록',
  openGraph: {
    title: 'uzu-dev',
    description: '개발자 유주의 프로젝트 및 공부 기록',
    images: ['/images/icon-logo.svg'],
  },
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-white font-sans text-base text-black antialiased">
        {/* 상단 헤더 (카테고리 동적 데이터 포함) */}
        <HeaderWrapper />

        {/* 페이지 본문 */}
        {children}

        {/* 하단 푸터 */}
        <Footer />
      </body>
    </html>
  );
}
