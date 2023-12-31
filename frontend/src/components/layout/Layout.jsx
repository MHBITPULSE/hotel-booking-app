import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className=' d-flex flex-column w-100 justify-content-center'>
            <div className='bg-primary-subtle'><Navbar /></div>
            <div className='d-flex flex-row justify-content-center w-100 gap-4 m-2'>
                <div style={{ width: "350px" }} className='bg-body-secondary shadow-lg'><Sidebar /></div>
                <div className='bg-light shadow-lg '>{children}</div>
            </div>
            <div className='bg-primary-subtle'><Footer /></div>
        </div>
    )
}

export default Layout