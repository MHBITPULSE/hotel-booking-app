import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createBooking, getRoomById } from '../../api/room.api'
import Navbar from '../navbar/Navbar'

import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import { url } from '../../config/url.config'

const RoomDetails = () => {
      const params = useParams()

      const dispatch = useDispatch()

      const navigate = useNavigate()

      const user = useSelector(selectUser)

      const [room, setroom] = useState(null)

      const [booking, setbooking] = useState(false)

      const availableRoom = useRef(0)


      useEffect(() => {
            getRoomById(params.id)
                  .then(response => {
                        setroom(response.data)
                        availableRoom.current = response.data.quantity - response.data.booked
                  })
                  .catch(err => console.log(err))
      }, [])



      const handleBooking = () => {
            if (!user) {
                  alert("You are not logged in. Please Log in first!")
                  setTimeout(() => {
                        navigate('/login')
                  }, 1000)

            } else {
                  let booking = {
                        status: "Booked",
                        userId: user.id,
                        roomId: room.id
                  }



                  createBooking(booking)
                        .then(response => {
                              console.log(response.data)
                              alert("Successfully Booked! Go to Dashboard for details!")
                              navigate('/dashboard')
                        })
                        .catch(err => console.log(err))
            }

      }



      return (
            <>
                  {!room && <div>
                        Loading....
                  </div>
                  }

                  {room &&
                        <div className='container'>
                              <div >
                                    <img src={`${url}file?path=uploads/room&fileName=${room.image}`} className="w-100" alt="..." />
                                    <hr />
                                    <h2 className='text-center'>{room.name}</h2>
                                    <hr />

                                    <div className='d-flex justify-content-between align-items-center'>
                                          <h2>{room.price} BDT/Night</h2>
                                          <span>{availableRoom.current} rooms available </span>
                                          <button disabled={availableRoom.current === 0} className='btn btn-warning' onClick={handleBooking}>Book Now</button>
                                    </div>
                                    <hr />
                                    <div>
                                          <h4>Description</h4>
                                          <p>{room.desc}</p>
                                    </div>
                                    <hr />
                                    <div className='pb-3'>
                                          <h4 className='text-center'>Facilities</h4>
                                          <div className='d-flex gap-2 justify-content-center'>
                                                {room.hasAc && <span className='border border-primary rounded p-2' style={{ width: "fit-content" }}>Air Conditioned</span>}
                                                {room.hasTv && <span className='border border-success rounded p-2' style={{ width: "fit-content" }}>TV</span>}
                                                {room.hasButhTub && <span className='border border-danger rounded p-2' style={{ width: "fit-content" }}>Bathtub</span>}
                                                {room.hasBalcony && <span className='border border-warning rounded p-2' style={{ width: "fit-content" }}>Balcony</span>}
                                                {room.hasDressingTable && <span className='border border-info rounded p-2' style={{ width: "fit-content" }}>Dressing Table</span>}
                                                {room.hasLocker && <span className='border border-dark rounded p-2' style={{ width: "fit-content" }}>Locker</span>}
                                                {room.hasFridge && <span className='border border-secondary rounded p-2' style={{ width: "fit-content" }}>Fridge</span>}
                                          </div>

                                    </div>
                              </div>
                        </div>
                  }
            </>

      )
}

export default RoomDetails