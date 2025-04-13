'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/project', label: 'Project' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="py-12 shadow-custom-soft text-center">
      <h1>
        <span className="sr-only">개발자 유주의 포트폴리오 사이트</span>
        <Image
          src="/images/icon-logo.svg"
          alt="uzu-dev logo"
          width={130}
          height={88}
          className="mx-auto"
        />
      </h1>
      <nav>
        <ul className="flex justify-center gap-14 mt-14">
          {navItems.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-xl hover-line ${isActive ? 'text-black' : 'text-dark-gray'}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
