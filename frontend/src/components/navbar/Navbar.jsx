import React from 'react'

import { selectUser, removeUser } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {

    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    console.log(user)

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4" href="/">Hotel Booking</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active fs-4" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-4" href="/">Rooms</a>
                            </li>
                            {!user && <li className="nav-item">
                                <a className="nav-link fs-4" href="/login">Login</a>
                            </li>}
                            {user && <li className="nav-item">
                                <a className="nav-link fs-4" href="/dashboard">Dashboard</a>
                            </li>}
                            {user ?
                                <li className="nav-item">
                                    <span role="button" className="nav-link fs-4 pe-auto" href="#" onClick={() => { localStorage.removeItem('token'); dispatch(removeUser()) }}>Logout</span>
                                </li>
                                :
                                <li className="nav-item">
                                    <a className="nav-link fs-4" href="/register">Register</a>
                                </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar