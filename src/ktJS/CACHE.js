let container = null // container
//鼠标悬浮显示模型
const outline = []
//各设备点击事件
const deviceClickObjects = {
  JiaReLu: [], //加热炉
  CuZha: [], //粗轧
  BaoWenZhao: [], //保温罩
  JinZha: [], //精轧
  ChaoKuaiLen: [], //超快冷设备
  CengLiuLen: [], //层流冷却设备
  JuanQu: [], //卷取
}

//各设备object3d
const deviceObject3D = {
  JiaReLu: null, //加热炉
  CuZha: null, //粗轧
  BaoWenZhao: null, //保温罩
  JinZha: null, //精轧
  ChaoKuaiLen: null, //超快冷设备
  CengLiuLen: null, //层流冷却设备
  JuanQu: null, //卷取
}

export const CACHE = {
  container,
  deviceClickObjects,
  deviceObject3D
}
