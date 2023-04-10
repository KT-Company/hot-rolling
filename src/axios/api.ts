import { url } from 'inspector'
import { request } from './index'

// example
export function getRealData(params: {}) {
  return request('/GetRealData', params, 'post')
}



