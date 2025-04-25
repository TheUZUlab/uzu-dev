'use client';

import { PostMeta } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * HomeArticleCard 컴포넌트
 * - 포스트를 카드 형식으로 보여주는 UI
 * - 썸네일, 태그, 제목, 설명, 날짜 포함
 * - 태그 클릭 시 라우팅 처리
 */
interface HomeArticleCardProps {
  post: PostMeta;
  category: string;
  onTagClick?: (tag: string) => void;
}

export default function HomeArticleCard({ post, category, onTagClick }: HomeArticleCardProps) {
  const basePath = category === 'project' ? '/project' : '/blog';
  const tags = post.tags ?? [];
  const router = useRouter();

  return (
    <article className="w-full">
      <Link
        href={`${basePath}/${category}/${post.slug}`}
        aria-label={`포스트 보기: ${post.title}`}
        className="flex w-full flex-col"
      >
        {/* 썸네일 */}
        <div className="relative mb-3 aspect-[3/2] w-full overflow-hidden rounded-md">
          <Image
            src={post.thumbnail}
            alt={`${post.title} 썸네일`}
            fill
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full">
          {/* 태그 버튼 목록 */}
          {tags.length > 0 && (
            <div className="relative h-[32px] overflow-hidden sm:h-[40px] md:h-[48px]">
              <div className="absolute left-0 top-0 flex w-full flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={e => {
                      e.preventDefault();
                      onTagClick?.(tag); // 선택된 태그 상태 업데이트
                      router.push(`${basePath}?tag=${encodeURIComponent(tag)}`);
                    }}
                    className="rounded-md bg-light-gray px-2 py-1 text-xs font-bold text-white duration-300 hover:bg-dark-gray md:rounded-lg md:px-3 md:py-2 md:text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 텍스트 콘텐츠 */}
          <h3 className="line-clamp-1 truncate text-sm font-semibold sm:text-base md:text-lg lg:text-xl 2xl:text-2xl 2xl:font-extrabold">
            {post.title}
          </h3>
          <p className="mb-0 line-clamp-1 truncate text-[11px] text-dark-gray sm:text-sm md:mb-2 md:text-base lg:text-[17px] 2xl:text-lg">
            {post.description}
          </p>
          <p className="truncate text-[10px] text-dark-gray sm:text-xs md:text-sm lg:text-base 2xl:text-lg">
            {post.date}
          </p>
        </div>
      </Link>
    </article>
  );
}
