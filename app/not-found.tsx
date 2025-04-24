import Link from 'next/link';
import Image from 'next/image';

/**
 * NotFound 컴포넌트
 * - Next.js App Router에서 404 페이지 역할
 * - 존재하지 않는 경로 혹은 데이터가 없을 때 자동 호출됨
 * - 사용자에게 안내 메시지 + 홈으로 돌아가는 버튼 제공
 */

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 md:gap-6 2xl:gap-8 duration-300 px-4">
      {/* 일러스트 이미지 */}
      <Image
        src="/images/devMode.svg"
        alt="개발 페이지 이미지"
        width={160}
        height={140}
        className="w-40 h-36 md:w-48 md:h-40 2xl:w-64 2xl:h-52 object-contain"
      />

      {/* 안내 메시지 */}
      <p className="text-dark-gray text-base md:text-lg 2xl:text-2xl font-extrabold duration-300 text-center">
        개발 중인 페이지입니다.
      </p>

      {/* 홈으로 이동하는 버튼 */}
      <Link
        href="/"
        className="text-white text-sm md:text-md 2xl:text-xl font-extrabold
        bg-light-gray hover:bg-dark-gray rounded-md md:rounded-lg 2xl:rounded-xl
        px-6 py-2 md:px-10 md:py-2.5 2xl:px-14 2xl:py-3
        duration-300 text-center"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
