'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [tab, setTab] = useState<'RESUME' | 'PROJECT' | 'SKILLS' | 'CONTACT'>('RESUME');

  return (
    <main className="px-5 mx-auto min-w-[300px] max-w-[1200px] mb-24">
      <div className="relative my-14 lg:my-24 w-full h-1 bg-gradient-custom">
        <h2 className="absolute left-5 lg:left-24 top-1/2 -translate-y-1/2 bg-white px-4 text-base lg:text-2xl font-extrabold text-black capitalize">
          yuju&apos;s profile
        </h2>
      </div>

      {/* 프로필 상단 섹션 */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-10 border-b pb-10 mb-10">
        <div className="w-full lg:w-2/3 text-black">
          <p className="text-2xl font-bold mb-1">Frontend Developer & AI Learner</p>
          <p className="text-xl font-semibold text-dark-gray mb-4">
            Artificial Intelligence Student
          </p>
          <div className="space-y-2 text-sm leading-relaxed">
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
          <p className="mt-4 text-xs italic text-dark-gray">2025. 04. 25 UPDATE</p>
        </div>

        <div className="w-full lg:w-1/3 max-w-[200px]">
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
      <nav className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16 text-center text-sm">
        {['RESUME', 'PROJECT', 'SKILLS', 'CONTACT'].map(item => (
          <button
            key={item}
            onClick={() => setTab(item as typeof tab)}
            className={`border py-2 hover:bg-zinc-100 transition ${
              tab === item ? 'bg-zinc-100 font-bold' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* 탭 콘텐츠 */}
      <section className="text-sm text-zinc-800 space-y-6">
        {tab === 'RESUME' && (
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong>2025 – Present:</strong> Cheju Halla University, Department of Artificial
              Intelligence
            </li>
          </ul>
        )}

        {tab === 'PROJECT' && (
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong>2025.04 - 05:</strong> uzu-dev (Personal portfolio website)
            </li>
            <li>
              <strong>추후:</strong> website
            </li>
          </ul>
        )}

        {tab === 'SKILLS' && (
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 list-disc list-inside">
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
              📧 Email:{' '}
              <Link href="mailto:ujoo2802@gmail.com" className="underline hover:text-black">
                ujoo2802@gmail.com
              </Link>
            </p>
            <p>
              🐱 GitHub:{' '}
              <Link href="https://github.com/UZU2802" className="underline hover:text-black">
                github.com/UZU2802
              </Link>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
