import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-light-gray px-40">
      <footer className="py-12  flex items-center gap-40 text-dark-gray">
        <Image
          src="/images/icon-logo.svg"
          alt="uzu-dev logo"
          width={152}
          height={98}
          className="opacity-25"
        />
        <div>
          <div className="flex items-start">
            <p className="after:content-['|'] after:mx-2">Made with by Yuju</p>
            <ul>
              <li>
                Contact :{' '}
                <Link href="mailto:ujoo2802@gmail.com" className="hover:underline">
                  ujoo2802@gmail.com
                </Link>
              </li>
              <li>
                GitHub :{' '}
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
          <p className="mt-6">© 2025 uzu-dev! All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
