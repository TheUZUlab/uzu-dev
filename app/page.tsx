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
        className="h-96 flex flex-col justify-center items-center text-white"
        style={{
          background: 'linear-gradient(to right, #929292, #C3C3C3)',
        }}
      >
        <p className="text-4xl font-bold mb-3">
          Hi, I&apos;m <span className="text-white">Jang Yuju</span>
        </p>
        <p className="text-md text-light-gray mb-6">
          AI Enthusiast · Web Developer · Future Game Creator
        </p>

        <Link
          href="/projects"
          className="bg-white text-dark-gray font-semibold px-6 py-2.5 rounded-full hover:bg-soft-gray transition shadow-md"
        >
          Explore My Work
        </Link>

        <p className="mt-3 text-xs text-light-gray">Cheju Halla University · Born in 2004</p>
      </section>
      <main className="mx-64 mb-24 ">
        {/* 블로그 영역 */}
        <section className="relative">
          <div className="relative my-24 w-full h-1 bg-gradient-custom">
            <h2 className="absolute left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-xl text-black capitalize">
              blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-dark-gray hover:text-black hover:underline text-base absolute right-0 top-0 my-7 duration-300"
          >
            더보기 →
          </Link>
          <ul className="flex justify-between gap-5">
            {blogPosts.map(post => (
              <li key={post.slug} className="w-[32%] min-w-[280px] max-w-[510px]">
                <HomeArticleCard post={post} category="blog" />
              </li>
            ))}
          </ul>
        </section>

        {/* 프로젝트 영억 */}
        <section className="relative">
          <div className="relative my-24 w-full h-1 bg-gradient-custom">
            <h2 className="absolute left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-xl text-black capitalize">
              project
            </h2>
          </div>
          <Link
            href="/project"
            className="text-dark-gray hover:text-black hover:underline text-base absolute right-0 top-0 my-7 duration-300"
          >
            더보기 →
          </Link>
          <ul className="flex justify-between gap-5">
            {projectPosts.map(post => (
              <li key={post.slug} className="w-[32%] min-w-[280px] max-w-[510px]">
                <HomeArticleCard post={post} category="project" />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
