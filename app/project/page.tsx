import { use } from 'react';
import { Suspense } from 'react';
import { getPosts } from '@/lib/markdown';
import PageWithTags from '../component/PageWithTags/PageWithTags';

export default function ProjectPage() {
  const postsPromise = getPosts('project');
  const posts = use(postsPromise);

  return (
    <main className="mx-auto mb-24 min-w-[300px] max-w-[1600px] px-5">
      <div className="relative my-14 h-1 w-full bg-gradient-custom lg:my-24">
        <h2 className="absolute left-5 top-1/2 -translate-y-1/2 bg-white px-4 text-base font-extrabold capitalize text-black lg:left-24 lg:text-2xl">
          전체 보기
        </h2>
      </div>

      <Suspense>
        <PageWithTags posts={posts} category="project" type="project" />
      </Suspense>
    </main>
  );
}
