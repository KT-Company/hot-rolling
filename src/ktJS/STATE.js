import { API } from './API.js'
import { CACHE } from './CACHE.js'

const PUBLIC_PATH = './assets/3d'
const initialState = {
  position: { x: -66.90260455960706, y: 23.227494141344664, z: 28.27073853618848 },
  target: { x: -32.03970748574211, y: -1.791542435270451e-17, z: -4.401745633260234 }
}

export const STATE = {
  initialState,
  PUBLIC_PATH
}
