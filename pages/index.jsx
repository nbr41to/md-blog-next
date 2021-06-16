import { getPosts } from '../lib/posts';
import Link from 'next/link';

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default function Home({ posts }) {
  return (
    <div>
      <h1>Let&lsquo;s Blog</h1>
      <ul>
        {posts.map(({ title, postId }, index) => {
          return (
            <div key={index}>
              <Link href={`/blog/${postId}`}>
                <a>{title}</a>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
