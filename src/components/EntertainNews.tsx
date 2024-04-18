import NewsByCategory from '@components/NewsByCategory';
import { data_new } from '@function/data_new';

const EntertainNews: React.FC = () => {
  return (
    <div>
      <NewsByCategory data={data_new} category="ข่าวดารา" />
    </div>
  );
};

export default EntertainNews;