'use client';

import { PostMeta } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';

/**
 * HomeArticleCard 컴포넌트
 * - 포스트를 카드 형식으로 보여주는 UI
 * - 썸네일, 태그, 제목, 설명, 날짜 포함
 * - 태그 클릭 시 상위에서 전달된 콜백(onTagClick)을 호출하여 필터링 기능과 연결
 */

interface HomeArticleCardProps {
  post: PostMeta;
  category: string;
  onTagClick?: (tag: string) => void;
}

export default function HomeArticleCard({ post, category, onTagClick }: HomeArticleCardProps) {
  const basePath = category === 'project' ? '/project' : '/blog';

  return (
    <article className="w-full">
      <Link
        href={`${basePath}/${category}/${post.slug}`}
        aria-label={`포스트 보기: ${post.title}`}
        className="flex flex-col w-full"
      >
        {/* 썸네일 이미지 */}
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
          {post.tags && (
            <div className="flex gap-1.5 flex-wrap mb-2 sm:gap-2 md:gap-2.5 lg:gap-3">
              {post.tags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={e => {
                    e.preventDefault(); // 부모 Link로 이동 방지
                    onTagClick?.(tag); // 상위 컴포넌트로 태그 전달
                  }}
                  className="text-[10px] sm:text-xs md:text-sm lg:text-sm 2xl:text-base text-white
                  px-2 sm:px-2.5 md:px-3 py-1.5 md:py-1.5 bg-light-gray rounded-lg hover:bg-dark-gray duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* 제목 / 설명 / 날짜 */}
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
