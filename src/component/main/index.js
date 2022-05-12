import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header';
// import Sidebar from '../sidebar';
import { Dashboard, HelpOutline, QuestionAnswer } from '@mui/icons-material';
import Footer from './footer';

const Main = () => {

  const sidebarOptions = [
    {
      name: 'Listvideo',
      icon: <HelpOutline />,
      link: '/main/ListVideo'
    },
    {
      name: 'QueryListing',
      icon: <Dashboard />,
      link: '/main/QueryListing'
    },

    {
      name: 'ViewVideo',
      icon: <QuestionAnswer />,
      link: '/main/ViewVideo'
    },
  ]


  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

      

    </div>
  )
}

export default Main;