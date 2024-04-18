import React from 'react';
import NewsByCategory from '@components/NewsByCategory';
import { data_new } from '@function/data_new';

const SportNews: React.FC = () => {
  return (
    <div>
      <NewsByCategory data={data_new} category="ข่าวกีฬา" />
    </div>
  );
};

export default SportNews;

