import React, { useState } from 'react'
import { loginUser } from '../../api/user.api'
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { selectUser, updateUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom';

const Login = () => {

      const [values, setvalues] = useState({})

      const navigate = useNavigate()

      const dispatch = useDispatch();

      const handleChange = (e) => {
            setvalues({ ...values, [e.target.name]: e.target.value })
      }
      const handleLogin = (e) => {
            e.preventDefault()

            loginUser(values)
                  .then(response => {
                        console.log(response)
                        localStorage.setItem('token', response.data)
                        var decoded = jwt_decode(response.data);
                        console.log(decoded)
                        dispatch(updateUser(decoded))
                        navigate('/')
                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
      return (
            <div className='container border border-success p-2 mt-4'>
                  <form onSubmit={handleLogin}>
                        <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                              <input type="text" className="form-control" name='phone' onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                              <input type="password" className="form-control" name='password' onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                  </form>
            </div>
      )
}

export default Login