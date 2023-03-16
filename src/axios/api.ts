import { url } from 'inspector'
import { request } from './index'

// example
export function getRealData(params: {}) {
  return request('/GetRealData', params, 'post')
}





export function getuser(params: {}) {
  return request("/user/login", params, "post")
}
getuser({})

export function getList(params: {}) {
  return request("/api/getList", params, "get")
}
getList({})
export function getStatusList(params: {}) {
  return request("/api/getStatusList", params, "get")
}

getStatusList({})


export function getBist(params: {}) {
  return request("/api/getBist", params, "get")
}
getBist({})


/*
axios.get("/mock/api/getList").then((res) => {
  console.log(res);
});
*/