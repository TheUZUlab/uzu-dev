'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [tab, setTab] = useState<'RESUME' | 'PROJECT' | 'SKILLS' | 'CONTACT'>('RESUME');

  return (
    <main className="mx-auto mb-24 min-w-[300px] max-w-[1600px] px-5">
      <div className="relative my-14 h-1 w-full bg-gradient-custom lg:my-24">
        <h2 className="absolute left-5 top-1/2 -translate-y-1/2 bg-white px-4 text-base font-extrabold capitalize text-black lg:left-24 lg:text-2xl">
          yuju&apos;s profile
        </h2>
      </div>

      {/* 프로필 상단 섹션 */}
      <section className="mb-10 flex flex-col items-center justify-between gap-10 border-b px-0 pb-10 lg:flex-row lg:px-24">
        <div className="w-full text-black lg:w-2/3">
          <p className="mb-1 text-lg font-bold lg:text-2xl">Frontend Developer & AI Learner</p>
          <p className="mb-4 text-base font-semibold text-dark-gray lg:text-xl">
            Artificial Intelligence Student
          </p>
          <div className="space-y-2 text-sm leading-relaxed lg:text-base">
            <p>Cheju Halla University · Department of Artificial Intelligence</p>
            <p>
              I am currently focused on <b>frontend development</b>, but I am gradually expanding
              into
              <b> backend</b> and <b>AI development</b>.
            </p>
            <p>
              Passionate about building <b>practical tools</b> and solving{' '}
              <b>real-world problems</b> with <b>Python</b> and <b>machine learning</b>.
            </p>
          </div>
          <p className="mt-4 text-xs italic text-dark-gray lg:text-base">2025. 04. 25 UPDATE</p>
        </div>

        <div className="w-full max-w-[200px] lg:w-1/3">
          <Image
            src="/images/profile.jpg"
            alt="Yuju profile"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </div>
      </section>
      {/* 탭 네비게이션 */}
      <nav className="mb-16 grid grid-cols-2 gap-3 text-center text-sm sm:grid-cols-4 lg:text-base">
        {['RESUME', 'PROJECT', 'SKILLS', 'CONTACT'].map(item => (
          <button
            key={item}
            onClick={() => setTab(item as typeof tab)}
            className={`border py-2 transition hover:bg-zinc-100 ${
              tab === item ? 'bg-zinc-100 font-bold' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
      {/* 탭 콘텐츠 */}
      <section className="space-y-6 px-0 text-sm text-zinc-800 lg:px-24 lg:text-lg">
        {tab === 'RESUME' && (
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>2025 – Present :</strong> Cheju Halla University, Department of Artificial
              Intelligence
            </li>
          </ul>
        )}

        {tab === 'PROJECT' && (
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>2025.04 - 05 :</strong> uzu-dev (Personal portfolio website)
            </li>
            <li>
              <strong>추후 :</strong> website
            </li>
          </ul>
        )}

        {tab === 'SKILLS' && (
          <ul className="grid list-inside list-disc grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'TypeScript',
              'Python',
              'React',
              'Next.js',
              'VSCode',
              'Git',
              'GitHub',
              'Notion',
              'Firebase',
              'Supabase',
              'Jupyter Notebook',
            ].map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        )}

        {tab === 'CONTACT' && (
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Email : </span>
              <Link href="mailto:ujoo2802@gmail.com" className="text-dark-gray hover:text-black">
                ujoo2802@gmail.com
              </Link>
            </p>
            <p>
              <span className="font-semibold">GitHub : </span>
              <Link href="https://github.com/UZU2802" className="text-dark-gray hover:text-black">
                github.com/UZU2802
              </Link>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
