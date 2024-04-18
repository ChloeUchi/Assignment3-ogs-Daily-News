export interface News {
    id: number;
    headline: string;
    content: string;
    date: string;
    time: string;
    category: string;
    publisher: string;
  }
  
  export interface NewsType {
    id: number;
    name: string;
    news_type: News[];
  }
  
  export interface Data {
    title: string;
    sub_title: string;
    type_new: NewsType[];
  }
  