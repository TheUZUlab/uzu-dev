import { use } from 'react';
import { Suspense } from 'react';
import { getPosts } from '@/lib/markdown';
import PageWithTags from '../component/PageWithTags/PageWithTags';

export default function BlogPage() {
  const postsPromise = getPosts('blog');
  const posts = use(postsPromise);

  return (
    <main className="mx-64 mb-24">
      <div className="relative my-24 w-full h-1 bg-gradient-custom">
        <h2 className="absolute left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-xl text-black capitalize">
          전체 보기
        </h2>
      </div>

      <Suspense fallback={<p>로딩 중...</p>}>
        <PageWithTags posts={posts} category="all" />
      </Suspense>
    </main>
  );
}
