import React from 'react'
import notfound_img from '@assets/notfound.png'
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigator = useNavigate();
  return (
    <>
    <div className='shadow-lg m-[5em] grid col-1 justify-center items-center border-solid rounded-lg p-[2em]'>
            <img src={notfound_img} className='content-center mb-[3em]'/>
            <button onClick={()=>navigator('/homepage')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em]'>กลับสู่หน้าหลัก</button>
        </div>
      </>
    
  )
}

export default NotFound