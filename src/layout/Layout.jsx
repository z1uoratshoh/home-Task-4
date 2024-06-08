import React from 'react'
import "../App.css"
import { Link, Outlet } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const Layout = () => {
  return (
    <div>
      <header className='w-[90%] mt-[3%]'>
        <ul className='w-[90%] m-auto f_l'>
            <li className='f_l'>
            <HomeIcon/>
            <Link className='text-[25px]' to={"/"}>Home</Link>
            </li>
            <Link to={"/action"}>Action</Link>
        </ul>
      </header>

      <Outlet/>

      <footer className='mt-[10%]'>
        <img src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-03/a3428820-3559-11eb-918f-7f7b011be452.jpg" alt="" />
      </footer>
    </div>
  )
}

export default Layout
