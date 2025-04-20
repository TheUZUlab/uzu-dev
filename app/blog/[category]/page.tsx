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
export default async function BlogCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  const posts = await getPosts('blog');

  // 카테고리와 일치하는 포스트만 필터링 (대소문자 무시)
  const filteredPosts = posts.filter(post =>
    post.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  );

  // 사람이 읽을 수 있는 형태로 카테고리명 디코딩 및 변환
  const readableCategory = decodeURIComponent(category).replace(/-/g, ' ');

  return (
    <main className="mx-64 mb-24">
      {/* 카테고리 제목 영역 */}
      <div className="relative my-24 w-full h-1 bg-gradient-custom">
        <h2
          className="absolute left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-xl text-black capitalize"
          aria-label={`Category: ${readableCategory}`}
        >
          {readableCategory}
        </h2>
      </div>

      {/* 포스트가 없을 경우 */}
      {filteredPosts.length === 0 ? (
        <article className="mb-24 flex flex-col items-center justify-center gap-8">
          <Image
            src="/images/devMode.svg"
            alt="작성된 포스트가 없습니다."
            width={254}
            height={213}
          />
          <p className="text-xl text-dark-gray">작성된 포스트가 없습니다.</p>
          <Link
            href="/"
            className="text-lg text-white bg-light-gray hover:bg-dark-gray rounded-xl px-14 py-3 duration-300"
          >
            홈으로 돌아가기
          </Link>
        </article>
      ) : (
        // 포스트가 있을 경우 → 필터링 UI 포함 리스트 렌더링
        <Suspense fallback={<p>로딩 중...</p>}>
          <PageWithTags category={category} posts={filteredPosts} />
        </Suspense>
      )}
    </main>
  );
}
