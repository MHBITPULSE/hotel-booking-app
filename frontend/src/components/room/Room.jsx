import React, { useEffect, useState } from 'react'
import { getRoom } from '../../api/room.api'
import RoomCard from './RoomCard'
import { selectRooms, updateRooms } from '../../redux/roomSlice'
import { useSelector, useDispatch } from 'react-redux'

const Room = () => {
      //const [room, setroom] = useState([])
      const room = useSelector(selectRooms);
      const dispatch = useDispatch()

      useEffect(() => {
            getRoom()
                  .then(response => {
                        dispatch(updateRooms(response.data))
                  })
                  .catch(err => console.log(err))
      }, [])

      return (
            <>
                  {!room &&
                        <div>
                              Loading
                        </div>
                  }
                  {
                        room &&
                        <div className='container d-flex flex-wrap gap-3 p-4 justify-content-evenly align-items-center'>
                              {room.map((item, index) => <RoomCard key={index} room={item} />)}
                        </div>
                  }

            </>
      )
}

export default Room