'use client';

import { PostMeta } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';

interface HomeArticleCardProps {
  post: PostMeta;
  category: string;
  onTagClick?: (tag: string) => void;
}

export default function HomeArticleCard({ post, category }: HomeArticleCardProps) {
  const basePath = category === 'project' ? '/project' : '/blog';

  return (
    <article className="w-full">
      <Link href={`${basePath}/${category}/${post.slug}`} className="flex flex-col w-full">
        {/* 썸네일 이미지 */}
        <div className="relative w-full aspect-[3/2] mb-3 rounded-md overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={`${post.title} 썸네일`}
            fill
            className="object-cover w-full h-full"
            sizes="100vw"
          />
        </div>

        <div className="w-full">
          {/* 태그 버튼 목록 */}
          {post.tags && (
            <div className="flex gap-2 flex-wrap mb-1">
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  href={`${basePath}?tag=${encodeURIComponent(tag)}`}
                  className="text-sm text-white px-3 py-1.5 bg-light-gray rounded-lg hover:bg-dark-gray duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* 제목 / 설명 / 날짜 */}

          {/* 태그 / 제목 / 설명 / 날짜 */}
          <h3 className="text-lg font-semibold truncate">{post.title}</h3>
          <p className="text-base text-dark-gray truncate mb-2">{post.description}</p>
          <p className="text-base text-dark-gray truncate">{post.date}</p>
        </div>
      </Link>
    </article>
  );
}
