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
        className="py-16 lg:py-24 flex flex-col justify-center items-center text-white"
        style={{
          background: 'linear-gradient(to right, #939393, #c3c3c3)',
        }}
      >
        <p className="lg:text-4xl text-2xl font-bold lg:mb-3 mb-1">
          Hi, I&apos;m <span className="text-white">Jang Yuju</span>
        </p>
        <p className="text-sm lg:text-md text-light-gray lg:mb-6 mb-4">
          AI Enthusiast · Web Developer · Future Game Creator
        </p>

        <Link
          href="/projects"
          className="bg-white text-dark-gray font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:bg-soft-gray transition shadow-md"
        >
          Explore My Work
        </Link>

        <p className="mt-2 lg:mt-3 text-xs lg:text-sm text-light-gray">
          Cheju Halla University · Born in 2004
        </p>
      </section>
      <main className="px-5 mx-auto min-w-[300px] max-w-[1600px] mb-24">
        {/* 블로그 영역 */}
        <section className="relative">
          <div className="relative my-14 lg:my-24 w-full h-1 bg-gradient-custom">
            <h2 className="absolute left-5 lg:left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-base lg:text-2xl font-extrabold text-black capitalize">
              blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-dark-gray hover:text-black hover:underline text-xs lg:text-base absolute right-0 top-0 my-4 lg:my-7 duration-300"
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

        {/* 프로젝트 영역 */}
        <section className="relative">
          <div className="relative my-14 lg:my-24 w-full h-1 bg-gradient-custom">
            <h2 className="absolute left-5 lg:left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-base lg:text-2xl font-extrabold text-black capitalize">
              project
            </h2>
          </div>
          <Link
            href="/project"
            className="text-dark-gray hover:text-black hover:underline text-xs lg:text-base absolute right-0 top-0 my-4 lg:my-7 duration-300"
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
      </main>
    </>
  );
}
