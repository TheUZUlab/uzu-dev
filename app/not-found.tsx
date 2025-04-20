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
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      {/* 일러스트 이미지 */}
      <Image src="/images/devMode.svg" alt="개발 페이지 이미지" width={254} height={213} />

      {/* 안내 메시지 */}
      <p className="text-xl text-dark-gray">개발 중인 페이지입니다.</p>

      {/* 홈으로 이동하는 버튼 */}
      <Link
        href="/"
        className="text-lg text-white bg-light-gray hover:bg-dark-gray rounded-xl px-14 py-3 duration-300"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
