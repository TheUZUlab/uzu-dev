'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PostMeta } from '@/lib/markdown';
import ArticleCard from '../ArticleCard/ArticleCard';

interface BlogTagFilterProps {
  posts: PostMeta[];
  category: string;
  type: 'blog' | 'project';
}

/**
 * PageWithTags
 * - 태그 필터링을 포함한 블로그 포스트 리스트 컴포넌트
 * - URL 쿼리에서 ?tag=값을 읽고 자동 필터링
 * - 클릭 시 setSelectedTag()로 상태 변경
 */
export default function PageWithTags({ posts, category, type }: BlogTagFilterProps) {
  const searchParams = useSearchParams();
  const tagFromURL = searchParams.get('tag');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  /**
   * 쿼리 파라미터가 바뀔 때마다 selectedTag 상태도 갱신
   */
  useEffect(() => {
    setSelectedTag(tagFromURL);
  }, [tagFromURL]);

  // 모든 포스트에서 사용된 태그 목록 추출
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags ?? [])));

  // 태그가 선택되었으면 해당 태그가 포함된 게시물만 필터링
  const filtered = selectedTag ? posts.filter(post => post.tags?.includes(selectedTag)) : posts;

  return (
    <section>
      {/* 태그 필터 UI */}
      <aside className="hidden lg:block sticky top-10 float-right w-48 bg-white rounded-xl shadow-custom-soft p-5">
        <h4 className=" font-semibold text-lg mb-8">contents</h4>
        <ul className="space-y-2" id="post-list">
          <li>
            <button
              onClick={() => setSelectedTag(null)}
              className={`block text-left font-semibold text-base hover-line ${
                selectedTag === null ? 'text-black' : 'text-dark-gray'
              }`}
            >
              전체 보기
            </button>
          </li>
          {allTags.map(tag => (
            <li key={tag}>
              <button
                onClick={() => {
                  setSelectedTag(tag);
                  document.getElementById('post-list')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block text-left font-semibold text-base hover-line ${
                  selectedTag === tag ? 'text-black' : 'text-dark-gray'
                }`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* 포스트 리스트 */}
      <ul className="space-y-3 lg:space-y-11 pr-30 lg:pr-60">
        {filtered.map(post => (
          <li key={post.slug}>
            <ArticleCard post={post} category={category} type={type} onTagClick={setSelectedTag} />
          </li>
        ))}
      </ul>
    </section>
  );
}
