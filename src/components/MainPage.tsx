import React from 'react'
import mainpage_img from '@assets/mainpage.png'
import { useNavigate } from 'react-router-dom'

function MainPage() {
    const navigator = useNavigate();
  return (
    <div>
        <div className='shadow-lg m-[5em] grid col-1 justify-center items-center border-solid rounded-lg p-[2em]'>
            <img src={mainpage_img} className='content-center mb-[3em]'/>
            <button onClick={()=>navigator('/homepage')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em]'>เข้าสู่เว็บไซต์</button>
        </div>
    </div>
  )
}

export default MainPage