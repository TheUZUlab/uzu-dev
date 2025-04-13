import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <Image src="/images/devMode.svg" alt="개발 페이지 이미지" width={254} height={213} />
      <p className="text-xl text-dark-gray">개발 중인 페이지입니다.</p>
      <Link
        href="/"
        className="text-lg text-white bg-light-gray hover:bg-dark-gray rounded-xl px-14 py-3 duration-300"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
