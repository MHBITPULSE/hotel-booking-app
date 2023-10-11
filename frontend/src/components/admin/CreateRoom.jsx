import React, { useState } from 'react'
import { createRoom } from '../../api/room.api';

const CreateRoom = () => {
      const [room, setroom] = useState({});

      const handleChange = (e) => {
            console.log(e.target.type)
            if (e.target.type === 'checkbox')
                  setroom({ ...room, [e.target.name]: e.target.checked })
            else if (e.target.type === 'file')
                  setroom({ ...room, [e.target.name]: e.target.files[0] })
            else setroom({ ...room, [e.target.name]: e.target.value })
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            console.log(room)
            createRoom(room)
                  .then(response => console.log(response))
                  .catch(err => console.log(err))
      }
      return (
            <div className='container'>
                  <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                              <label htmlFor="roomName" className="form-label" >Title</label>
                              <input type="text" name='name' className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                              <label htmlFor="roomName" className="form-label" >Description</label>
                              <input type="text" name='desc' className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                              <label htmlFor="roomName" className="form-label" >Size in sft</label>
                              <input type="number" name='size' className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                              <label htmlFor="roomName" className="form-label" >Price per Night </label>
                              <input type="number" name='price' className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                              <label htmlFor="roomName" className="form-label" >Total quantity of Room </label>
                              <input type="number" name='quantity' className="form-control" onChange={handleChange} />
                        </div>

                        <div className="mb-3 form-check">
                              <input type="checkbox" name='hasAc' className="form-check-input" id="exampleCheck1" onChange={handleChange} />
                              <label className="form-check-label" htmlFor="exampleCheck1">AC</label>
                        </div>
                        <hr />
                        <div className="mb-3 form-check">
                              <input type="checkbox" name='hasTv' className="form-check-input" id="exampleCheck1" onChange={handleChange} />
                              <label className="form-check-label" htmlFor="exampleCheck1">TV</label>
                        </div>
                        <hr />
                        <div className="mb-3 form-check">
                              <input type="checkbox" name='hasButhTub' className="form-check-input" id="exampleCheck1" onChange={handleChange} />
                              <label className="form-check-label" htmlFor="exampleCheck1">Bathtub</label>
                        </div>
                        <hr />
                        <div className="mb-3 form-check">
                              <input type="checkbox" name='hasBalcony' className="form-check-input" id="exampleCheck1" onChange={handleChange} />
                              <label className="form-check-label" htmlFor="exampleCheck1">Balcony</label>
                        </div>
                        <hr />
                        <div className="mb-3 form-check">
                              <input type="checkbox" name='hasDressingTable' className="form-check-input" id="exampleCheck1" onChange={handleChange} />
                              <label className="form-check-label" htmlFor="exampleCheck1">Dressing Table</label>
                        </div>
                        <hr />
                        <div className="mb-3 form-check">
                              <input type="checkbox" name='hasLocker' className="form-check-input" id="exampleCheck1" onChange={handleChange} />
                              <label className="form-check-label" htmlFor="exampleCheck1">Locker</label>
                        </div>
                        <hr />
                        <div className="mb-3 form-check">
                              <input type="checkbox" name='hasFridge' className="form-check-input" onChange={handleChange} />
                              <label className="form-check-label" htmlFor="exampleCheck1">Fridge</label>
                        </div>
                        <hr />
                        <div className="input-group mb-3">
                              <label className="input-group-text" htmlFor="RoomImage">Select Room Image</label>
                              <input type="file" name='image' className="form-control" id="inputGroupFile01" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
      )
}

export default CreateRoom