import { Devterm } from 'lib/types';

import React from 'react';
import Layout from './Layout';

const Definitions: React.FC<Devterm> = ({ definitions }) => {
  return (
    <div>
      <Layout>
        <p>{definitions}</p>
      </Layout>
    </div>
  );
};

export default Definitions;
