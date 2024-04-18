import NewsByCategory from '@components/NewsByCategory';
import { data_new } from '@function/data_new';

const GeneralNews: React.FC = () => {
  return (
    <div>
      <NewsByCategory data={data_new} category="ข่าวทั่วไป" />
    </div>
  );
};

export default GeneralNews;