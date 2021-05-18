import { useQuery, gql } from '@apollo/client';
import { getApolloClient } from '@wpengine/headless';
import { getNextStaticProps } from '@wpengine/headless/next';
import { usePosts } from '@wpengine/headless/react';
import Layout from 'lib/components/Layout';
import { GetStaticPropsContext } from 'next';

const Blog = () => {
  const { data } = useQuery(gql`
    query {
      posts {
        nodes {
          id
          title
          content
        }
      }
    }
  `);

  const posts: Array<Post> = data?.posts?.nodes;

  return (
    <Layout>
      <div>
        <ul>
          {posts?.map((post) => (
            <ul key={post.id}>
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </ul>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Blog;
