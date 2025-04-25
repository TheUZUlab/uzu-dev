import { getPostContent } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type Params = { category: string; slug: string };

/**
 * generateMetadata
 * - SEO 및 Open Graph용 동적 메타데이터 생성
 */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostContent('blog', slug);
  if (!post) return {};

  const { title, description, thumbnail } = post.frontMatter;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: thumbnail ? [thumbnail] : [],
    },
  };
}

/**
 * BlogPostPage
 * - /blog/[category]/[slug] 페이지 렌더링
 * - 마크다운 게시글 내용 및 메타데이터를 HTML로 렌더링
 * - 존재하지 않으면 notFound() 호출
 */
export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostContent('blog', slug);
  if (!post) return notFound();

  const { title, date, thumbnail, tags } = post.frontMatter;
  const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="mx-auto my-12 max-w-[1000px] px-5 lg:my-24">
      {/* 태그 버튼 리스트 (클릭 시 해당 카테고리 페이지로 이동 + 쿼리로 필터링) */}
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-lg bg-light-gray px-3 py-1.5 text-sm text-white duration-300 hover:bg-dark-gray"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}

      {/* 제목 및 날짜 */}
      <h2 className="mb-1 mt-6 text-2xl font-extrabold text-black lg:text-4xl">{title}</h2>
      <p className="mb-6 text-sm text-dark-gray lg:text-base">{formattedDate}</p>

      {/* 썸네일 이미지 */}
      {thumbnail && (
        <div className="relative mb-20 aspect-[3/2] w-full overflow-hidden rounded-md">
          <Image
            src={thumbnail}
            alt={`${title} 썸네일`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      )}

      {/* 본문 HTML (remark-html로 변환된 마크다운 내용) */}
      <div
        className="prose prose-sm mb-12 max-w-none lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
