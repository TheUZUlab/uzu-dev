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
      className="bg-light-gray px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-40 py-10 sm:py-12 flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-40 text-dark-gray text-xs lg:text-base"
      aria-label="사이트 푸터"
    >
      {/* 사이트 로고 */}
      <Image
        src="/images/icon-logo.svg"
        alt="uzu-dev logo"
        width={108}
        height={69}
        className="opacity-25 lg:w-40 lg:h-24"
      />

      {/* 연락처 및 저작권 정보 */}
      <div>
        <div className="flex items-start">
          <p className="after:content-['|'] after:mx-2">Made by Yuju</p>
          <ul>
            <li>
              Contact:{' '}
              <Link href="mailto:ujoo2802@gmail.com" className="hover:underline">
                ujoo2802@gmail.com
              </Link>
            </li>
            <li>
              GitHub:{' '}
              <Link
                href="https://github.com/UZU2802"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/UZU2802
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
