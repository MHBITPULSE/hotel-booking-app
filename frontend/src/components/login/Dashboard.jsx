import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../api/user.api'
import { selectUser } from '../../redux/userSlice'
import RoomCard from '../room/RoomCard'



const Dashboard = () => {

      const user = useSelector(selectUser)
      console.log(user)

      const [booking, setbooking] = useState(null)

      useEffect(() => {
            if (user)
                  getUserById(user.id)
                        .then(response => {
                              setbooking(response.data.bookings)
                        })
                        .catch(err => console.log(err))
      }, [user])

      return (
            <div className='container'>
                  {user &&
                        <div className='container p-4'>
                              <h4>User Information</h4>
                              <div className='d-flex flex-column'>
                                    <h6>{user.name}</h6>
                                    <h6>{user.phone}</h6>
                              </div>
                        </div>}
                  {booking &&
                        <div>
                              <h4 className='text-center'>Order History</h4>
                              <div className='container d-flex flex-wrap justify-content-evenly align-items-center gap-4 p-4' style={{ width: "fit-content" }}>
                                    {booking.map((item, index) => {
                                          return (
                                                <div key={index} className='d-flex border border-black justify-content-center align-items-center p-4'>
                                                      <div className='d-flex flex-column p-4'>
                                                            <h4>Booking Id: {item.id}</h4>
                                                            <hr />
                                                            <h5>Booking Status: {item.status}</h5>
                                                            <hr />
                                                            <h5>Booking Time: {item.updatedAt}</h5>
                                                            <hr />
                                                      </div>

                                                      <RoomCard room={item.room} />
                                                </div>
                                          )
                                    })}
                              </div>
                        </div>}
            </div>
      )
}

export default Dashboard