import { gql, useQuery } from "@apollo/client";
import { getApolloClient } from "@wpengine/headless";
import { getNextStaticProps } from "@wpengine/headless/next";
import Card from "lib/components/Card/Card";
import Layout from "lib/components/Layout";
import { Devterm } from "lib/types";
import { GetStaticPropsContext } from "next";

import React from "react";

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



const Filter = ({ term }: {term: string }) => {
  console.log(term);
  const { data } =useQuery(GET_ALL_TERMS, {
    variables: {
      term,
    },
  }
    );


    const devterms: { data: Devterm }[] = data?.devterms?.nodes ?? [];
    console.log(devterms);

return (
  <Layout>
    {devterms.map((devterm)=> (
<Card key={devterm.data.definitions} {...devterm.data} />


    ))}
  </Layout>
);
    };



export async function getStaticProps(context: GetStaticPropsContext) {
  const filter = context.params?.filter;

  if (Array.isArray(filter)) {
    filter = filter [0];
  }

    const client = getApolloClient(context);
    const { data } = await client.query ({
      query: GET_ALL_TERMS,
      variables: {
        term: filter,
      }
    });

    const props = await getNextStaticProps(context);
    props.revalidate =1;
    props.props = props.props ?? {};
    props.props.term = filter;
    return props;

  }


  export async function getStaticPaths() {
    return {
paths: [{ params: {filter:''}}],
fallback: 'blocking',

    };
  }




    //const devterms = data?.devterms?.nodes as Devterm[];
    //devterms.filter(dev => dev.definitions.includes({term: filter}));

    //const props = await getNextStaticProps(context);
   // props.revalidate = 1;
   // return props;
//}

export default Filter;