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
        className="flex flex-col w-full"
      >
        {/* 썸네일 */}
        <div className="relative w-full aspect-[3/2] mb-3 rounded-md overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={`${post.title} 썸네일`}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full">
          {/* 태그 버튼 목록 */}
          {tags.length > 0 && (
            <div className="relative h-[32px] sm:h-[40px] md:h-[48px] overflow-hidden">
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 absolute top-0 left-0 w-full">
                {tags.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={e => {
                      e.preventDefault();
                      onTagClick?.(tag); // 선택된 태그 상태 업데이트
                      router.push(`${basePath}?tag=${encodeURIComponent(tag)}`); // ✅ 라우팅 처리
                    }}
                    className="text-[10px] font-bold sm:text-xs md:text-sm lg:text-sm 2xl:text-base text-white
                    px-2 sm:px-2.5 md:px-3 py-1.5 bg-light-gray rounded-lg hover:bg-dark-gray duration-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 텍스트 콘텐츠 */}
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold 2xl:font-extrabold truncate line-clamp-1">
            {post.title}
          </h3>
          <p className="text-[11px] sm:text-sm md:text-base lg:text-[17px] 2xl:text-lg text-dark-gray truncate mb-1.5 md:mb-2 line-clamp-1">
            {post.description}
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg text-dark-gray truncate">
            {post.date}
          </p>
        </div>
      </Link>
    </article>
  );
}
