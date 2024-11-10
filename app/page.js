import Link from 'next/link';
import { getPosts } from '../lib/posts';
import styles from './page.module.css';

export default function HomePage() {
  const posts = getPosts();
  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        
      </div>
      <div className={styles.postArea}>
        <ul>
          {posts.map((post) => (
            <li className={styles.post} key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
              <h2 className={styles.postTitle}>
                {post.title}
              </h2>
              </Link>
              <p  className={styles.postDate}>{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
