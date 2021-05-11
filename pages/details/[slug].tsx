import { Devterm } from 'lib/types';
import { useRouter } from 'next/dist/client/router';
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Layout from 'lib/components/Layout';
import Card from 'lib/components/Card/Card';

const GET_ALL_TERMS = gql`
  {
    devterms {
      nodes {
        data: acfDevterm {
          term
          definitions
        }
      }
    }
  }
`;

const Detail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useQuery(gql`
    query {
      devterm(id: "${slug}") {
        data: acfDevterm {
          term
          definitions
        }
      }
    }
  `);
    
  const devterm: Devterm = data?.devterm;
  return (
    <Layout>
 
       {devterm?.data.definitions}
    
    </Layout>
  );
};

export default Detail;
