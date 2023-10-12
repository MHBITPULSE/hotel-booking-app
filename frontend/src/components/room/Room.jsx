import React, { useEffect, useState } from 'react'
import { getRoom } from '../../api/room.api'
import RoomCard from './RoomCard'

const Room = () => {
      const [room, setroom] = useState([])

      useEffect(() => {
            getRoom()
                  .then(response => {
                        console.log(response)
                        setroom(response.data)
                  })
                  .catch(err => console.log(err))
      }, [])

      return (
            <div className='container d-flex flex-wrap gap-3 p-4 justify-content-evenly align-items-center'>
                  {room.map((item, index) => <RoomCard room={item} />)}
            </div>
      )
}

export default Room