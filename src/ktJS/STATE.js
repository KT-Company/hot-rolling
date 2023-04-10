import { API } from './API.js'
import { CACHE } from './CACHE.js'

const PUBLIC_PATH = './assets/3d'
const initialState = {
  position: { x: 251.4735318537429, y: 46.3798840557277, z: -132.85406474472265 },
  target: { x: 45.682662432434824, y: -4.942882770918278e-16, z: -3.3812001614118947 }
}

export const STATE = {
  initialState,
  PUBLIC_PATH
}
