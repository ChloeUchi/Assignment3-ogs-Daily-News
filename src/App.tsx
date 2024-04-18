// import Checklist from '@components/chechklist/Checklist'
import "tailwindcss/tailwind.css"
import './App.css'
import { RouterProvider } from "react-router-dom"
import routers from "@function/routers"
// import DetailNew from "@components/DetailNew";
// import { News } from "@components/types/TypeFile";
// import { data_new } from '@function/data_new'
// import HomePage from "@components/HomePage";
// import DetailNew from "@components/DetailNew"

// const newsItem: News = data_new[0].type_new[0].news_type[0];

function App() {
  return(
    <div>
      <RouterProvider router={routers}/>
      {/* <DetailNew news={newsItem} /> */}

    </div>
    
  )
}

export default App
