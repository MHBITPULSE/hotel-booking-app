import axios from 'axios'
import { url } from '../config/url.config'

export const createUser = async (values) => {
      return await axios.post(url + 'user/signup', values)
}

export const loginUser = async (values) => {
      return await axios.post(url + 'user/login', values)
}

export const getUserById = async (id) => {
      return await axios.get(url + 'user/' + id)
}

