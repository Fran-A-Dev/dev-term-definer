import { Devterm } from 'lib/types';
import { useRouter } from 'next/dist/client/router';
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Layout from 'lib/components/Layout';

const Detail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useQuery(gql`
    query {
      devterm(id: "${slug}") {
        data: acfDevterm {
        term
        definitions
        personalBlog
      
      }
    }
  }
`);
  console.log(data);
  const devterm: Devterm = data?.devterm;
  return (
    <Layout>
      {devterm?.data.definitions}

      <div>{devterm?.data.personalBlog}</div>
    </Layout>
  );
};

export default Detail;
