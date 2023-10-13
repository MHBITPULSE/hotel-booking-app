import React, { useState } from 'react'
import { createUser } from '../../api/user.api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
      const [values, setvalues] = useState({})
      const navigate = useNavigate()

      const handleChange = (e) => {
            setvalues({ ...values, [e.target.name]: e.target.value })
      }

      const handleRegister = (e) => {
            e.preventDefault()

            createUser(values)
                  .then(response => {
                        console.log(response)
                        alert("Registration Successfull! Please Login Now")
                        navigate('/login')
                  })
                  .catch(err => {
                        console.log(err)
                  })
      }

      return (
            <div className='container border border-success p-2 mt-4'>
                  <form onSubmit={handleRegister}>
                        <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                              <input type="text" className="form-control" name='name' onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                              <input type="text" className="form-control" name='phone' onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                              <input type="password" className="form-control" name='password' onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                  </form>
            </div>
      )
}

export default Register