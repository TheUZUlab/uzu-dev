import Image from 'next/image';
import { getPostContent } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostContent('project', params.slug);

  if (!post) return {};

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.description,
      images: [post.frontMatter.thumbnail],
    },
  };
}
export default async function BlogPostPage({ params }: Props) {
  const post = await getPostContent('project', params.slug);

  if (!post) return notFound();

  return (
    <article className="prose">
      <h1>{post.frontMatter.title}</h1>
      <p>{post.frontMatter.date}</p>
      <Image src={post.frontMatter.thumbnail} alt="썸네일" width={200} height={200} />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
