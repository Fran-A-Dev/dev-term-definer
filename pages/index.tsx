import { GetStaticPropsContext } from 'next';
import { getApolloClient } from '@wpengine/headless';
import { useQuery, gql } from '@apollo/client';
import { getNextStaticProps } from '@wpengine/headless/next';
import React from 'react';
import Layout from 'lib/components/Layout';
import { Devterm } from 'lib/types';
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



const Home = () => {
  const { data } = useQuery(GET_ALL_TERMS);
  console.log(data);
  const devterms: Devterm[] = data?.devterms?.nodes ?? [];
  console.log(devterms);
  return (
    <Layout>
      {devterms.map((devterm) => (
        <Card key={devterm.data.term} {...devterm.data} />
      ))}
    </Layout>
  );
};

interface StaticPropsResult {
  revalidate?: number | boolean;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const client = getApolloClient(context);
  await client.query({
    query: GET_ALL_TERMS,
  });

  const props = (await getNextStaticProps(context)) as StaticPropsResult;
  props.revalidate = 1;

  return props;
}

export default Home;
