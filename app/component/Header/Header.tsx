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
    { href: '/profile', label: 'Profile' },
  ];

  return (
    <header className="relative z-50 py-5 text-center shadow-custom-soft lg:py-10">
      {/* 로고 + 스크린리더용 텍스트 */}
      <h1 className="mx-auto h-20 w-28 md:h-24 md:w-36">
        <span className="sr-only">개발자 유주의 개인 블로그</span>
        <Link href="/" className="h-full w-full">
          <Image
            src="/images/icon-logo.svg"
            alt="uzu-dev logo"
            width={96}
            height={64}
            className="mx-auto h-16 w-24 lg:h-24 lg:w-36"
          />
        </Link>
      </h1>

      {/* 내비게이션 메뉴 */}
      <nav aria-label="메인 내비게이션">
        <ul className="relative mt-0 flex items-center justify-center gap-6 lg:mt-10 lg:gap-14">
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
                    className={`px-2 py-1 text-base font-extrabold hover-line lg:text-2xl ${isActive ? 'text-black' : 'text-dark-gray'}`}
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
