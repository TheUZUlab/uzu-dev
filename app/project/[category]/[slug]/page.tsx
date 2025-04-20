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
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostContent('project', slug);
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
 * ProjectPostPage
 * - /project/[category]/[slug] 페이지 렌더링
 * - 마크다운 게시글 내용 및 메타데이터를 HTML로 렌더링
 * - 존재하지 않으면 notFound() 호출
 */
export default async function ProjectPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPostContent('project', slug);
  if (!post) return notFound();

  const { title, date, thumbnail, tags } = post.frontMatter;

  return (
    <main className="mx-auto my-24 max-w-[1000px]">
      {/* 태그 버튼 리스트 (클릭 시 해당 카테고리 페이지로 이동 + 쿼리로 필터링) */}
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <Link
              key={tag}
              href={`/project?tag=${encodeURIComponent(tag)}`}
              className="text-sm text-white px-3 py-1.5 bg-light-gray rounded-lg hover:bg-dark-gray duration-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}

      {/* 제목 및 날짜 */}
      <h2 className="text-4xl font-extrabold text-black mt-6 mb-1">{title}</h2>
      <p className="text-base text-dark-gray mb-6">{date}</p>

      {/* 썸네일 이미지 */}
      {thumbnail && (
        <div className="relative w-full aspect-[3/2] mb-20 rounded-md overflow-hidden">
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
        className="prose prose-xl max-w-none dark:prose-invert mb-12"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
