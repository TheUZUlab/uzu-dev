import Header from './Header';
import { generateCategoryParams } from '@/lib/generateCategoryParams';

/**
 * HeaderWrapper
 * - 서버 컴포넌트
 * - 마크다운 파일을 읽어 카테고리를 추출하고, Header.tsx에 props로 전달
 */
export default async function HeaderWrapper() {
  const blogCategories = (await generateCategoryParams('blog')) ?? [];
  const projectCategories = (await generateCategoryParams('project')) ?? [];

  return <Header blogCategories={blogCategories} projectCategories={projectCategories} />;
}
