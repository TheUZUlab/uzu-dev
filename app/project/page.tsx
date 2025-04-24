import { use } from 'react';
import { Suspense } from 'react';
import { getPosts } from '@/lib/markdown';
import PageWithTags from '../component/PageWithTags/PageWithTags';

export default function ProjectPage() {
  const postsPromise = getPosts('project');
  const posts = use(postsPromise);

  return (
    <main className="px-5 mx-auto min-w-[300px] max-w-[1600px] mb-24">
      <div className="relative my-14 lg:my-24 w-full h-1 bg-gradient-custom">
        <h2 className="absolute left-5 lg:left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-base lg:text-2xl font-extrabold text-black capitalize">
          전체 보기
        </h2>
      </div>

      <Suspense>
        <PageWithTags posts={posts} category="project" type="project" />
      </Suspense>
    </main>
  );
}
