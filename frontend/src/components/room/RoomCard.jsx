import React, { useEffect, useState } from 'react'
import { getRoom } from '../../api/room.api'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../../config/url.config'

const RoomCard = ({ room }) => {
    const params = useParams()
    const navigate = useNavigate()

    return (
        <div className="card shadow-lg" style={{ width: "30rem" }}>
            <img src={`${url}file?path=uploads/room&fileName=${room.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6>{room.name}</h6>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className="card-text ">Starting From:  BDT {room.price}/Per Night</p>
                    <button type="button" className="btn btn-info" onClick={() => navigate(`/room/${room.id}`)}>Details</button>
                </div>
            </div>
        </div>
    )
}

export default RoomCard