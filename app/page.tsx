import { getPosts } from '@/lib/markdown';
import HomeArticleCard from './component/HomeArticleCard/HomeArticleCard';
import Link from 'next/link';

export default async function Home() {
  const blogPosts = (await getPosts('blog')).slice(0, 3);
  const projectPosts = (await getPosts('project')).slice(0, 3);

  return (
    <>
      {/* hero 영역 */}
      <section
        className="flex flex-col items-center justify-center py-10 text-white lg:py-24"
        style={{
          background: 'linear-gradient(to right, #939393, #c3c3c3)',
        }}
      >
        <p className="mb-0 text-xl font-bold lg:mb-3 lg:text-4xl">
          Hi, I&apos;m <span className="text-white">Jang Yuju</span>
        </p>
        <p className="lg:text-md mb-3 text-xs text-light-gray lg:mb-6">
          AI Enthusiast · Web Developer · Future Game Creator
        </p>

        <Link
          href="/project"
          className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-dark-gray shadow-md transition hover:bg-soft-gray lg:px-6 lg:py-2.5 lg:text-base"
        >
          Explore My Work
        </Link>

        <p className="mt-1.5 text-xs text-light-gray lg:mt-3 lg:text-sm">
          Cheju Halla University · Born in 2004
        </p>
      </section>
      <main className="mx-auto mb-24 min-w-[300px] max-w-[1600px] px-5">
        {/* 프로젝트 영역 */}
        <section className="relative">
          <div className="relative my-14 h-1 w-full bg-gradient-custom lg:my-24">
            <h2 className="absolute left-5 top-1/2 -translate-y-1/2 bg-white px-4 text-base font-extrabold capitalize text-black lg:left-24 lg:text-2xl">
              project
            </h2>
          </div>
          <Link
            href="/project"
            className="absolute right-0 top-0 my-4 text-xs text-dark-gray duration-300 hover:text-black hover:underline lg:my-7 lg:text-base"
          >
            더보기 →
          </Link>
          <ul className="flex justify-between">
            {projectPosts.map(post => (
              <li key={post.slug} className="w-[32%] min-w-[100px] max-w-[700px]">
                <HomeArticleCard post={post} category="project" />
              </li>
            ))}
          </ul>
        </section>

        {/* 블로그 영역 */}
        <section className="relative">
          <div className="relative my-14 h-1 w-full bg-gradient-custom lg:my-24">
            <h2 className="absolute left-5 top-1/2 -translate-y-1/2 bg-white px-4 text-base font-extrabold capitalize text-black lg:left-24 lg:text-2xl">
              blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="absolute right-0 top-0 my-4 text-xs text-dark-gray duration-300 hover:text-black hover:underline lg:my-7 lg:text-base"
          >
            더보기 →
          </Link>
          <ul className="flex justify-between">
            {blogPosts.map(post => (
              <li key={post.slug} className="w-[32%] min-w-[100px] max-w-[700px]">
                <HomeArticleCard post={post} category="blog" />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
