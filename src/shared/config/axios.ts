import { Axios } from 'axios'

export const api = new Axios({
   baseURL: 'http://127.0.0.1:4433/self-service/',
})