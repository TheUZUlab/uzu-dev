import Link from 'next/link';

export default function Home() {
  return (
    <>
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
    </>
  );
}
