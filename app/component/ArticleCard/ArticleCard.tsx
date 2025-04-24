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
      className="px-5 lg:px-24 flex items-center gap-8 lg:gap-11"
    >
      {/* 썸네일 이미지 */}
      <div className="relative rounded-lg w-[32%] min-w-[144px] max-w-[250px] lg:min-w-[250px]  lg:max-w-[500px] aspect-[3/2]">
        <Image
          src={post.thumbnail}
          alt={`${post.title} 썸네일`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="w-full">
        {/* 태그 버튼 목록 - 한 줄만 출력 */}
        {tags.length > 0 && (
          <div className="relative h-[32px] sm:h-[40px] md:h-[48px] overflow-hidden">
            <div className="flex flex-wrap gap-2 absolute top-0 left-0 w-full">
              {tags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    onTagClick?.(tag);
                  }}
                  className="text-xs font-bold lg:text-sm text-white px-2 py-1.5 lg:px-3 bg-light-gray rounded-lg hover:bg-dark-gray duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 제목 / 설명 / 날짜 */}
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold 2xl:font-extrabold  line-clamp-1">
          {post.title}
        </h3>
        <p className="text-[11px] sm:text-sm md:text-base lg:text-[17px] 2xl:text-lg text-dark-gray  mb-1.5 md:mb-2 line-clamp-1">
          {post.description}
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg text-dark-gray truncate">
          {post.date}
        </p>
      </div>
    </Link>
  );
}
