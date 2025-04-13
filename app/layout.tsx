import type { Metadata } from 'next';
import './globals.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://uzu.dev'),
  title: 'uzu-dev',
  description: '기술과 감성을 연결하는 개발자 유주의 성장 기록과 창작 아카이브',
  openGraph: {
    title: 'uzu-dev',
    description: '개발자 유주의 프로젝트 및 공부 기록',
    images: ['/images/icon-logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
