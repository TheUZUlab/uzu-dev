import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPosts = (type: 'blog' | 'project') => {
  const dir = path.join(postsDirectory, type);
  const files = fs.readdirSync(dir);

  return files.map(filename => {
    const fullPath = path.join(dir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
    };
  });
};

export const getPostContent = async (type: 'blog' | 'project', slug: string) => {
  const filePath = path.join(postsDirectory, type, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    frontMatter: data,
    contentHtml,
  };
};
