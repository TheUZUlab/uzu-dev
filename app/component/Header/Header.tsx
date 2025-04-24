'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

/**
 * Header
 * - 클라이언트 컴포넌트
 * - 로고 + 내비게이션 + 드롭다운 구성
 * - 현재 페이지 강조 및 접근성 제공
 */
interface HeaderProps {
  blogCategories: string[];
  projectCategories: string[];
}

export default function Header({ blogCategories, projectCategories }: HeaderProps) {
  const pathname = usePathname();

  // 내비게이션 항목 구성
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/project', label: 'Project', categories: projectCategories },
    { href: '/blog', label: 'Blog', categories: blogCategories },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="py-11 shadow-custom-soft text-center relative z-50">
      {/* 로고 + 스크린리더용 텍스트 */}
      <h1 className="w-28 h-20 md:w-32 md:h-20 mx-auto">
        <span className="sr-only">개발자 유주의 포트폴리오 사이트</span>
        <Link href="/" className="w-full h-full">
          <Image
            src="/images/icon-logo.svg"
            alt="uzu-dev logo"
            width={130}
            height={88}
            className="w-full h-full"
          />
        </Link>
      </h1>

      {/* 내비게이션 메뉴 */}
      <nav aria-label="메인 내비게이션">
        <ul className="flex justify-center items-center gap-6 lg:gap-14 mt-5 lg:mt-8 relative">
          {navItems.map(({ href, label, categories }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

            return (
              <li key={href} className="group relative">
                {/* 드롭다운 메뉴가 있는 항목 */}
                {categories ? (
                  <DropDownMenu label={label} baseHref={href} categories={categories} />
                ) : (
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-2 py-1 text-base font-extrabold lg:text-2xl hover-line ${isActive ? 'text-black' : 'text-dark-gray'}`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
