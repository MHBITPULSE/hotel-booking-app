import React, { useEffect, useState } from 'react'
import { getRoom } from '../../api/room.api'

const Room = () => {
      const [room, setroom] = useState([])

      useEffect(() => {
            getRoom()
                  .then(response => {
                        console.log(response)
                        setroom(response.data[0])
                  })
                  .catch(err => console.log(err))
      }, [])

      return (
            <div>
                  <span>{room.name}</span>
                  <hr />
                  <span>{room.desc}</span>
                  <hr />
                  <span>{room.size} sft</span>
                  <hr />
                  <span>{room.price}</span>
                  <hr />
                  <img src={`http://localhost:3000/file?path=uploads/room&fileName=${room.image}`} alt="" />
            </div>
      )
}

export default Room