import React, { useEffect, useState } from 'react'
import { getRoom } from '../../api/room.api'

const RoomCard = ({ room }) => {

    return (
        <div className="card shadow-lg" style={{ width: "30rem" }}>
            <img src={`http://localhost:3000/file?path=uploads/room&fileName=${room.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6>{room.name}</h6>
                <p className="card-text">Starting From:  BDT {room.price}/Per Night</p>
            </div>
        </div>
    )
}

export default RoomCard