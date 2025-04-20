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
  onTagClick?: (tag: string) => void; // 태그 클릭 시 호출할 콜백 함수 (선택적)
}

export default function ArticleCard({ post, category, onTagClick }: ArticleCardProps) {
  return (
    <Link href={`/blog/${category}/${post.slug}`} className="mx-24 flex items-center gap-11">
      {/* 썸네일 이미지 */}
      <Image
        src={post.thumbnail}
        alt={`${post.title} 썸네일`}
        width={240}
        height={160}
        className="rounded-md object-cover aspect-[3/2]"
      />

      <div>
        {/* 태그 버튼 목록 */}
        {post.tags && (
          <div className="flex gap-2 flex-wrap mb-3">
            {post.tags.map(tag => (
              <button
                key={tag}
                onClick={e => {
                  e.preventDefault(); // 링크 이동 방지
                  onTagClick?.(tag); // 선택된 태그를 상위로 전달
                }}
                className="text-sm text-white px-3 py-1.5 bg-light-gray rounded-lg hover:bg-dark-gray duration-300"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* 제목 / 설명 / 날짜 */}
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-base text-dark-gray mb-2">{post.description}</p>
        <p className="text-base text-dark-gray">{post.date}</p>
      </div>
    </Link>
  );
}
