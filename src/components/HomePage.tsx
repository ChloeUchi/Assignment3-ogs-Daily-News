import React from 'react';
import AllNew from '@components/AllNew'; // Import the modified AllNew component
import { Data } from '@components/types/TypeFile';

interface Props {
  data: Data[]; // Accept data as prop
}

const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {/* Render the AllNew component for each data object */}
      {data.map((item) => (
        <div key={item.title}>
          <h2 className="text-xl font-semibold mt-8 mb-4 text-center">{item.title}</h2>
          <p className="text-sm mt-8 mb-4 text-center">{item.sub_title}</p>
          {/* Pass only the first 2 news items for each category to the AllNew component */}
          <AllNew data={[{ ...item, type_new: item.type_new.map((type) => ({ ...type, news_type: type.news_type.slice(0, 2) })) }]} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
