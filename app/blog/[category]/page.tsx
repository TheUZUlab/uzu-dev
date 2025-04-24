import { Suspense } from 'react';
import { getPosts } from '@/lib/markdown';
import { generateCategoryParams } from '@/lib/generateCategoryParams';
import PageWithTags from '@/app/component/PageWithTags/PageWithTags';
import Image from 'next/image';
import Link from 'next/link';

type Params = { category: string };

/**
 * generateStaticParams
 * - blog 카테고리 목록을 기반으로 /blog/[category] 경로들을 사전 생성
 * - generateCategoryParams() 유틸을 재사용하여 중복 제거
 */
export async function generateStaticParams() {
  const categories = await generateCategoryParams('blog');
  return categories.map(category => ({ category: category.toLowerCase() }));
}

/**
 * BlogCategoryPage
 * - /blog/[category] 경로에 해당하는 페이지
 * - 해당 카테고리에 속하는 포스트만 필터링하여 렌더링
 */
export default async function BlogCategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const posts = await getPosts('blog');

  // 카테고리와 일치하는 포스트만 필터링 (대소문자 무시)
  const filteredPosts = posts.filter(post =>
    post.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  );

  // 사람이 읽을 수 있는 형태로 카테고리명 디코딩 및 변환
  const readableCategory = decodeURIComponent(category).replace(/-/g, ' ');

  return (
    <main className="px-5 mx-auto min-w-[300px] max-w-[1600px] mb-24">
      {/* 카테고리 제목 영역 */}
      <div className="relative my-14 lg:my-24 w-full h-1 bg-gradient-custom">
        <h2
          className="absolute left-5 lg:left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-base lg:text-2xl font-extrabold text-black capitalize"
          aria-label={`Category: ${readableCategory}`}
        >
          {readableCategory}
        </h2>
      </div>

      {/* 포스트가 없을 경우 */}
      {filteredPosts.length === 0 ? (
        <article className="mb-24 flex flex-col items-center justify-center gap-8">
          {/* 일러스트 이미지 */}
          <Image
            src="/images/devMode.svg"
            alt="작성된 포스트가 없습니다."
            width={160}
            height={140}
            className="w-40 h-36 md:w-48 md:h-40 2xl:w-64 2xl:h-52"
          />

          {/* 안내 메시지 */}
          <p className="text-dark-gray text-base md:text-lg 2xl:text-2xl font-extrabold duration-300 text-center">
            작성된 포스트가 없습니다.
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
        </article>
      ) : (
        // 포스트가 있을 경우 → 필터링 UI 포함 리스트 렌더링
        <Suspense>
          <PageWithTags category={category} posts={filteredPosts} type="blog" />
        </Suspense>
      )}
    </main>
  );
}
