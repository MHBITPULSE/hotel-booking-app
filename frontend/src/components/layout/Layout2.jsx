import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'

const Layout2 = ({ children }) => {
      return (
            <div className=' d-flex flex-column w-100'>
                  <div className='bg-primary-subtle'><Navbar /></div>\
                  <div className='bg-light shadow-lg '>{children}</div>\
                  <div className='bg-primary-subtle'><Footer /></div>
            </div>
      )
}

export default Layout2