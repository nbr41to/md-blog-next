import { getPosts } from '../lib/posts';

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default function Home({ posts }) {
  console.log(posts);
  return <div>hello</div>;
}
