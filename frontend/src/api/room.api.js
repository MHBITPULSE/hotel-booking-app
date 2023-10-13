import axios from 'axios'
import { url } from '../config/url.config'

export const createRoom = async (room) => {

      let formdata = new FormData();
      for (let key in room) {
            formdata.append(key, room[key])
      }
      console.log(formdata.entries())
      return await axios.post(url + 'room', formdata, {
            headers: {
                  'Content-Type': 'multipart/form-data'
            }
      })
}

export const getRoom = async () => {
      return await axios.get(url + 'room',)
}

export const getRoomById = async (id) => {
      return await axios.get(url + 'room/' + id)
}

export const filterRoom = async (filter) => {
      return await axios.post(url + 'room/filter', filter)
}

export const createBooking = async (values) => {
      return await axios.post(url + 'booking', values)
}