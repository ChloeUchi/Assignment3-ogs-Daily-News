import AllNew from "@components/AllNew"
// import DetailNew from "@components/DetailNew"
import EntertainNews from "@components/EntertainNews"
import GeneralNews from "@components/GeneralNews"
import HomePage from "@components/HomePage"
import MainPage from "@components/MainPage"
import NotFound from "@components/NotFound"
import PoliticalNews from "@components/PoliticalNews"
import SportNews from "@components/SportNews"
import { createBrowserRouter } from "react-router-dom"
import NavBar from "@components/NavBar"
import DetailNew from "@components/DetailNew"
import { data_new } from '@function/data_new'
// import { News } from "@components/types/TypeFile"

// const newsItem: News = data_new[0].type_new[0].news_type[0];


const routers = createBrowserRouter ([
    {
      path:"/",
      element:<HomePage data={data_new} />
    },
    {
      path:"/allnew/:id",
      element:<AllNew data={data_new} />
    },
    {
      path:"/detailnew/:detailId",
      element:<DetailNew/>
    },
    {
      path:"/mainpage",
      element:<MainPage/>
    },
    {
      path:"/sportnews",
      element:<SportNews/>
    },
    {
      path:"/entertainnews",
      element:<EntertainNews/>
    },{
      path:"/politicalnews",
      element:<PoliticalNews/>
    },
    {
      path:"/generalnews",
      element:<GeneralNews/>
    },
    {
      path:"*",
      element:<NotFound/>
    },
    {
      path:"/homepage",
      element:<NavBar/>,
      children: [
        {
          index:true,
          element:<HomePage data={data_new} />
        },
        {
          path:"allnew",
          element:<AllNew data={data_new} />,
        },
        {
          path:"detailnew",
          element:<DetailNew/>
        },
        {
          path:"mainpage",
          element:<MainPage/>
        },
        {
          path:"sportnews",
          element:<SportNews/>
        },
        {
          path:"entertainnews",
          element:<EntertainNews/>
        },
        {
          path:"politicalnews",
          element:<PoliticalNews/>
        },
        {
          path:"generalnews",
          element:<GeneralNews/>
        },
      ]
    },
  ])

export default routers

