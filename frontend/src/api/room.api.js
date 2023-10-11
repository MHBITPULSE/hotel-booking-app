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