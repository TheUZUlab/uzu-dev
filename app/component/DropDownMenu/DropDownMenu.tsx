'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DropDownMenuProps {
  label: string;
  baseHref: string;
  categories: string[];
}

/**
 * DropDownMenu
 * - 클라이언트 컴포넌트
 * - Hover 시 드롭다운 표시
 * - 현재 경로와 비교해 활성 상태 표시
 */
export default function DropDownMenu({ label, baseHref, categories }: DropDownMenuProps) {
  const pathname = usePathname();
  const isActive = pathname === baseHref || pathname.startsWith(`${baseHref}/`);

  return (
    <div className="group relative inline-block text-left">
      {/* 기본 라벨 (메인 링크) */}
      <Link
        href={baseHref}
        aria-current={isActive ? 'page' : undefined}
        className={`inline-block px-2 py-1 text-base font-extrabold hover-line lg:text-2xl ${
          isActive ? 'text-black' : 'text-dark-gray'
        }`}
      >
        {label}
      </Link>

      {/* 드롭다운 리스트 */}
      <ul className="shadow-gradient-custom absolute left-1/2 z-10 mt-3 w-24 origin-top -translate-x-1/2 scale-95 overflow-hidden rounded-md bg-white text-left text-xs opacity-0 transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100 lg:w-40 lg:text-sm">
        {/* 전체 보기 */}
        <li className="w-full">
          <Link
            href={baseHref}
            className="block w-full px-2 py-2 capitalize text-dark-gray transition-colors duration-300 hover:bg-light-gray hover:text-black lg:px-4"
          >
            전체 보기
          </Link>
        </li>

        {/* 드롭다운 리스트 */}
        {categories.map((cat, index) => (
          <li
            key={`${baseHref}-${cat}`}
            className={`w-full ${index === categories.length - 1 ? 'rounded-b-md' : ''}`}
          >
            <Link
              href={`${baseHref}/${cat}`}
              className="block w-full px-2 py-1 capitalize text-dark-gray transition-colors duration-300 hover:bg-light-gray hover:text-black lg:px-4"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
