'use client';

import { PostMeta } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';

/**
 * ArticleCard 컴포넌트
 * - 포스트를 카드 형식으로 보여주는 UI
 * - 썸네일, 태그, 제목, 설명, 날짜 포함
 * - 태그 클릭 시 상위에서 전달된 콜백(onTagClick)을 호출하여 필터링 기능과 연결
 */
interface ArticleCardProps {
  post: PostMeta; // 마크다운 파일에서 파싱한 포스트 데이터
  category: string; // 현재 카테고리 (URL 경로 생성을 위해 필요)
  type: 'blog' | 'project'; // basePath 구분용
  onTagClick?: (tag: string) => void; // 태그 클릭 시 호출할 콜백 함수 (선택적)
}

export default function ArticleCard({ post, category, type, onTagClick }: ArticleCardProps) {
  const basePath = type === 'project' ? '/project' : '/blog';
  const tags = post.tags ?? [];

  return (
    <Link
      href={`${basePath}/${category}/${post.slug}`}
      aria-label={`포스트 보기: ${post.title}`}
      className="flex items-center gap-8 lg:gap-11"
    >
      {/* 썸네일 이미지 */}
      <div className="relative aspect-[3/2] w-[32%] min-w-[144px] max-w-[250px] rounded-lg lg:min-w-[250px] lg:max-w-[500px]">
        <Image
          src={post.thumbnail}
          alt={`${post.title} 썸네일`}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <div className="w-full">
        {/* 태그 버튼 목록 - 한 줄만 출력 */}
        {tags.length > 0 && (
          <div className="relative h-[32px] overflow-hidden md:h-[40px]">
            <div className="absolute left-0 top-0 flex w-full flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    onTagClick?.(tag);
                  }}
                  className="rounded-md bg-light-gray px-2 py-1 text-xs font-bold text-white duration-300 hover:bg-dark-gray md:rounded-lg md:px-3 md:py-2 md:text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 제목 / 설명 / 날짜 */}
        <h3 className="line-clamp-1 text-sm font-semibold sm:text-base md:text-lg lg:text-xl 2xl:text-2xl 2xl:font-extrabold">
          {post.title}
        </h3>
        <p className="mb-0 line-clamp-1 text-[11px] text-dark-gray sm:mb-2 sm:text-sm md:mb-3 md:text-base lg:text-[17px] 2xl:text-lg">
          {post.description}
        </p>
        <p className="truncate text-[10px] text-dark-gray sm:text-xs md:text-sm lg:text-base 2xl:text-lg">
          {post.date}
        </p>
      </div>
    </Link>
  );
}
