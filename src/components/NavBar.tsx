// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { FaReact } from "react-icons/fa";
// import data_new from '@function/data_new';

// const NavBar: React.FC = () => {
//   return (
//     <>
//       <nav className='bg-gray-100 h-[4em] flex justify-around items-center'>
//         <ul className=' flex gap-20' >
//           <li>
//             <Link to='/mainpage'><FaReact /></Link>
//           </li>
//           <li>
//             <Link to="/homepage" >หน้าหลัก</Link>
//           </li>
//           <li>
//             <Link to="/homepage/allnew">ข่าวสารทั้งหมด</Link>
//           </li>
//           <li>
//             <Link to="/homepage/sportnews">ข่าวกีฬา</Link>
//           </li>
//           <li>
//             <Link to="/homepage/entertainnews">ข่าวดารา</Link>
//           </li>
//           <li>
//             <Link to="/homepage/politicalnews">ข่าวการเมือง</Link>
//           </li>
//           <li>
//             <Link to="/homepage/generalnews">ข่าวทั่วไป</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </>
//   );
// };

// export default NavBar;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
// import data_new from '@function/data_new';

const NavBar: React.FC = () => {
  return (
    <>
      <nav className='bg-gray-100 h-[4em] flex justify-around items-center'>
        <ul className=' flex gap-20' >
          <li>
            <Link to='/mainpage'><FaReact /></Link>
          </li>
          <li>
            <Link to="/homepage" >หน้าหลัก</Link>
          </li>
          <li>
            <Link to="/homepage/allnew">ข่าวสารทั้งหมด</Link>
          </li>
          <li>
            <Link to="/homepage/sportnews">ข่าวกีฬา</Link>
          </li>
          <li>
            <Link to="/homepage/entertainnews">ข่าวดารา</Link>
          </li>
          <li>
            <Link to="/homepage/politicalnews">ข่าวการเมือง</Link>
          </li>
          <li>
            <Link to="/homepage/generalnews">ข่าวทั่วไป</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
// ?viewer=pitchy