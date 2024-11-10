import { getPostBySlug } from '../../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default async function PostPage({ params }) {
  const { slug } = await params;  // ここで await を使用して params を取得
  const post = getPostBySlug(slug);
  const contentHtml = await markdownToHtml(post.content);

  return (
    <div className='post-container'>
      <h2 className='post-title'>{post.title}</h2>
      <div className="post-underline"></div>
      <p className='post-date'>{post.date}</p>
      <div className='post-content' dangerouslySetInnerHTML={{ __html: contentHtml }} />

    </div>
  );
}