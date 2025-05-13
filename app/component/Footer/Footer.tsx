import Image from 'next/image';
import Link from 'next/link';

/**
 * Footer
 * - 사이트 하단에 고정된 정보 영역
 * - 사이트 로고, 연락처, GitHub 링크 포함
 */
export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center gap-5 bg-light-gray px-5 py-6 text-xs text-dark-gray sm:px-10 sm:py-12 md:px-20 lg:flex-row lg:items-start lg:gap-40 lg:px-32 lg:text-base xl:px-40 2xl:px-40"
      aria-label="사이트 푸터"
    >
      {/* 사이트 로고 */}
      <Image
        src="/images/icon-logo.svg"
        alt="uzu-dev logo"
        width={88}
        height={49}
        className="opacity-25 lg:h-24 lg:w-40"
      />

      {/* 연락처 및 저작권 정보 */}
      <div>
        <div className="flex items-start">
          <p className="after:mx-2 after:content-['|']">Made by Yuju</p>
          <ul>
            <li>
              Contact:{' '}
              <Link href="mailto:uzulab.studio@gmail.com" className="hover:underline">
                uzulab.studio@gmail.com
              </Link>
            </li>
            <li>
              GitHub:{' '}
              <Link
                href="https://github.com/theUZUlab"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/theUZUlab
              </Link>
            </li>
          </ul>
        </div>

        {/* 저작권 문구 */}
        <p className="mt-3 lg:mt-6" aria-label="Copyright">
          © 2025 uzu-dev! All rights reserved.
        </p>
      </div>
    </footer>
  );
}
