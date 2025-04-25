import { getPosts } from './markdown';

/**
 * generateCategoryParams
 * - 'blog' 또는 'project' 타입을 받아 해당 마크다운 파일들의 카테고리 추출
 *
 * @param type 'blog' | 'project'
 * @returns string[] → 중복 제거된 카테고리 리스트 (정렬됨)
 */

export async function generateCategoryParams(type: 'blog' | 'project'): Promise<string[]> {
  const posts = await getPosts(type);

  const categories = Array.from(
    new Set(posts.flatMap(post => post.category)) // 카테고리 전체 펼치기 + 중복 제거
  ).sort(); // 알파벳순 정렬

  return categories;
}
