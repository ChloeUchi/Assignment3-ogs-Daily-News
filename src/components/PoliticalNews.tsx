import React from 'react';
import NewsByCategory from '@components/NewsByCategory';
import { data_new } from '@function/data_new';

const PoliticalNews: React.FC = () => {
  return (
    <div>
      <NewsByCategory data={data_new} category="ข่าวการเมือง" />
    </div>
  );
};

export default PoliticalNews;