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
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 duration-300 md:gap-6 2xl:gap-8">
      {/* 일러스트 이미지 */}
      <Image
        src="/images/devMode.svg"
        alt="404 페이지 이미지"
        width={160}
        height={140}
        className="h-36 w-40 object-contain md:h-40 md:w-48 2xl:h-52 2xl:w-64"
      />

      {/* 안내 메시지 */}
      <p className="text-center text-base font-extrabold text-dark-gray duration-300 md:text-lg 2xl:text-2xl">
        해당 페이지를 찾을 수 없습니다.
      </p>

      {/* 홈으로 이동하는 버튼 */}
      <Link
        href="/"
        className="md:text-md rounded-md bg-light-gray px-6 py-2 text-center text-sm font-extrabold text-white duration-300 hover:bg-dark-gray md:rounded-lg md:px-10 md:py-2.5 2xl:rounded-xl 2xl:px-14 2xl:py-3 2xl:text-xl"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
