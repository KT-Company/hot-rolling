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


//CACHE

const deviceIcon = null
//icon信息
const devicePopupInformation = {
  JiaReLu_1: {//加热炉1
    name: '加热炉1',
    information: [
      { name: '预热段温度', value: 'null', unit: "℃" },
      { name: '加热1段温度', value: 'null', unit: "℃" },
      { name: '加热2段温度', value: 'null', unit: "℃" },
      { name: '均热段温度', value: 'null', unit: "℃" },
      { name: '空燃比', value: 'null', unit: "%" },
      { name: '炉内钢柸数量', value: 'null', unit: "块" },
      { name: '吨钢能耗', value: 'null', unit: "" },
      { name: '平均出炉时间', value: 'null', unit: "s" },
    ],
    position: [-31, -17, -49],
    instance: null
  },
  JiaReLu002_1: { //加热炉2
    name: '加热炉2',
    information: [
      { name: '预热段温度', value: 'null', unit: "℃" },
      { name: '加热1段温度', value: 'null', unit: "℃" },
      { name: '加热2段温度', value: 'null', unit: "℃" },
      { name: '均热段温度', value: 'null', unit: "℃" },
      { name: '空燃比', value: 'null', unit: "%" },
      { name: '炉内钢柸数量', value: 'null', unit: "块" },
      { name: '吨钢能耗', value: 'null', unit: "" },
      { name: '平均出炉时间', value: 'null', unit: "s" },
    ],
    position: [-22, -17, -49],
    instance: null
  },
  JiaReLu001_1: { //加热炉3
    name: '加热炉3',
    information: [
      { name: '预热段温度', value: 'null', unit: "℃" },
      { name: '加热1段温度', value: 'null', unit: "℃" },
      { name: '加热2段温度', value: 'null', unit: "℃" },
      { name: '均热段温度', value: 'null', unit: "℃" },
      { name: '空燃比', value: 'null', unit: "%" },
      { name: '炉内钢柸数量', value: 'null', unit: "块" },
      { name: '吨钢能耗', value: 'null', unit: "" },
      { name: '平均出炉时间', value: 'null', unit: "s" },
    ],
    position: [-11, -17, -49],
    instance: null
  },
  R_003: { //粗轧1
    name: '粗轧1',
    information: [
      { name: 'E3开口度', value: 'nucll', unit: "mm" },
      { name: 'E3轧制力', value: 'null', unit: "kN" },
      { name: 'E3轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'E3电机电流', value: 'null', unit: "A" },
      { name: 'E3立辊DS侧直径', value: 'null', unit: "mm" },
      { name: 'E3立辊NDS侧直径', value: 'null', unit: "mm" },
    ],
    position: [-22, -17, -49],
    instance: null
  },
  R_004: {//粗轧2
    name: '粗轧2',
    information: [
      { name: 'R1辊缝', value: 'nu111ll', unit: "mm" },
      { name: 'R1轧制力', value: 'null', unit: "kN" },
      { name: 'R1轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'R1电机电流', value: 'null', unit: "A" },
      { name: 'R1上辊直径', value: 'null', unit: "mm" },
      { name: 'R1下辊直径', value: 'null', unit: "mm" },
    ],
    position: [-42, -17, -49],
    instance: null
  },
}

export const CACHE = {
  container,
  deviceClickObjects,
  deviceObject3D,
  deviceIcon,
  devicePopupInformation
}
