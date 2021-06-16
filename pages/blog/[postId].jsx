import { getIds, getPostById } from '../../lib/posts';

export const getStaticPaths = async () => {
  return {
    paths: getIds(),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      post: getPostById(params.postId),
    },
  };
};

export default function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
