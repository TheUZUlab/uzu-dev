import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

/**
 * 마크다운 파일들이 저장된 루트 디렉토리 (기본: /posts)
 * 내부에는 blog/, project/ 등의 폴더가 존재해야 함
 */
const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * 게시물 메타데이터 타입 정의 (마크다운의 frontmatter 정보)
 */
export interface PostMeta {
  slug: string; // 파일명
  title: string; // 게시글 제목
  description: string; // 게시글 설명
  date: string; // 작성일
  category: string[]; // 카테고리 목록
  tags?: string[]; // 태그 목록 (옵션)
  thumbnail: string; // 썸네일 이미지 경로
}

/**
 * 게시물 전체 타입
 */
export interface Post {
  frontMatter: PostMeta; // 게시물 메타데이터
  contentHtml: string; // HTML로 변환된 마크다운 본문
}

/**
 * 모든 게시물 메타데이터 가져오기 (본문 제외)
 * - 게시물 타입에 따라 폴더(blog/project)를 읽어들임
 * - 작성일(date) 기준으로 최신순 정렬
 *
 * @param type 'blog' | 'project'
 * @returns PostMeta[] 배열 (본문 제외)
 */
export const getPosts = async (type: 'blog' | 'project'): Promise<PostMeta[]> => {
  const dir = path.join(postsDirectory, type);
  const files = await fs.promises.readdir(dir);

  const posts = await Promise.all(
    files.map(async filename => {
      const fullPath = path.join(dir, filename);
      const fileContents = await fs.promises.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents); // YAML frontmatter 추출

      return {
        slug: filename.replace(/\.md$/, ''), // .md 확장자 제거
        ...(data as Omit<PostMeta, 'slug'>), // 나머지 메타데이터 포함
      };
    })
  );

  // 최신순 정렬
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};

/**
 * 특정 게시물(slug)의 본문 + 메타데이터 가져오기
 * - 마크다운을 HTML로 변환하여 리턴
 *
 * @param type 'blog' | 'project'
 * @param slug 게시물 고유 파일명
 * @returns 게시물(Post) 전체 내용 (null 가능성 있음)
 */
export const getPostContent = async (
  type: 'blog' | 'project',
  slug: string
): Promise<Post | null> => {
  const filePath = path.join(postsDirectory, type, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents); // frontmatter + 본문 분리

  // 마크다운에서 HTML로 변환 (remark + gfm 플러그인 사용)
  const processed = await remark().use(gfm).use(html).process(content);
  const contentHtml = processed.toString();

  return {
    frontMatter: {
      slug,
      ...(data as Omit<PostMeta, 'slug'>),
    },
    contentHtml,
  };
};
