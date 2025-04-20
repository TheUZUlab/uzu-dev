import Image from 'next/image';
import Link from 'next/link';

/**
 * Footer
 * - 사이트 하단에 고정된 정보 영역
 * - 사이트 로고, 연락처, GitHub 링크 포함
 */
export default function Footer() {
  return (
    <div className="bg-light-gray px-40">
      <footer className="py-12 flex items-center gap-40 text-dark-gray" aria-label="사이트 푸터">
        {/* 사이트 로고 */}
        <Image
          src="/images/icon-logo.svg"
          alt="uzu-dev logo"
          width={152}
          height={98}
          className="opacity-25"
        />

        {/* 연락처 및 저작권 정보 */}
        <div>
          <div className="flex items-start">
            <p className="after:content-['|'] after:mx-2 whitespace-nowrap">Made by Yuju</p>
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
          <p className="mt-6" aria-label="Copyright">
            © 2025 uzu-dev! All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
