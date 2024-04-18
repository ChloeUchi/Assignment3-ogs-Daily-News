import React from 'react';
import { Link } from 'react-router-dom';
import { News, Data, NewsType } from '@components/types/TypeFile';
// import {data_new} from '@function/data_new'

interface Props {
  data: Data[]; // Accept data as prop
}


const AllNew: React.FC<Props> = ({ data }) => {
  const sortByDate = (a: News, b: News) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  };
  console.log(data)
  return (
    <div>
      {/* Map through each data object */}
      {data.map((item) => (
        <div key={item.title} className='ml-[10em] mr-[10em] mt-[5em] mb-[5em]'>
          {/* Map through each type of news */}
          {item.type_new.map((type: NewsType) => (
            <div key={type.id}>
              <h3 className='text-center'>{type.name}</h3>
              {/* Map through each news item within the type */}
              <div className='m-[2em]'>
                {type.news_type.sort(sortByDate).map((news: News) => (
                  <div key={news.id} className='border-solid rounded-lg shadow-lg px-7 py-10'>
                    <Link
                      to={{
                        pathname: `/detailnew/${news.id}}`
                      }}
                    >
                      <p className='text-gray-400'>{news.date}</p>
                      <p>{news.headline}</p>
                      <p>{news.content}</p>
                      <p className='text-gray-400'>ประเภทข่าว: {news.category}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AllNew;