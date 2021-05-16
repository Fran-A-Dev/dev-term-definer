import { useQuery, gql } from '@apollo/client';
import Layout from 'lib/components/Layout';

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
