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
    <div className="relative group inline-block text-left">
      {/* 기본 라벨 (메인 링크) */}
      <Link
        href={baseHref}
        aria-current={isActive ? 'page' : undefined}
        className={`inline-block px-2 py-1 text-base font-extrabold lg:text-2xl hover-line ${
          isActive ? 'text-black' : 'text-dark-gray'
        }`}
      >
        {label}
      </Link>

      {/* 드롭다운 리스트 */}
      <ul
        className="absolute left-1/2 -translate-x-1/2 mt-3 opacity-0 scale-95 
        group-hover:opacity-100 group-hover:scale-100 group-hover:visible
        bg-white shadow-gradient-custom rounded-md w-24 lg:w-40 z-10 text-xs lg:text-sm text-left 
        transition-all duration-300 origin-top overflow-hidden"
      >
        {/* 전체 보기 */}
        <li className="w-full">
          <Link
            href={baseHref}
            className="block w-full px-2 py-2 lg:px-4 text-dark-gray hover:bg-light-gray hover:text-black capitalize transition-colors duration-300"
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
              className="block w-full px-2 py-1 lg:px-4 text-dark-gray hover:bg-light-gray hover:text-black capitalize transition-colors duration-300"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
