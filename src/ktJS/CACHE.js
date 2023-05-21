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

const deviceIcon = null
//icon信息
const devicePopupInformation = {
  JiaReLu_1: {//加热炉
    name: '加热炉信息',
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
    position: [143, 14, 30],
    instance: null
  },
  LiGun_001: { //粗轧E1
    name: 'R1粗轧',
    information: [
      { name: 'E1开口度', value: 'nucll', unit: "mm" },
      { name: 'E1轧制力', value: 'null', unit: "kN" },
      { name: 'E1轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'E1电机电流', value: 'null', unit: "A" },
      { name: 'E1立辊DS侧直径', value: 'null', unit: "mm" },
      { name: 'E1立辊NDS侧直径', value: 'null', unit: "mm" },
    ],
    position: [110, 14, 30],
    instance: null
  },
  LiGun_008: { //粗轧E2
    name: 'R1粗轧',
    information: [
      { name: 'E2开口度', value: 'nucll', unit: "mm" },
      { name: 'E2轧制力', value: 'null', unit: "kN" },
      { name: 'E2轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'E2电机电流', value: 'null', unit: "A" },
      { name: 'E2立辊DS侧直径', value: 'null', unit: "mm" },
      { name: 'E2立辊NDS侧直径', value: 'null', unit: "mm" },
    ],
    position: [89, 14, 30],
    instance: null
  },
  LiGun_009: { //粗轧E3
    name: 'R1粗轧',
    information: [
      { name: 'E3开口度', value: 'nucll', unit: "mm" },
      { name: 'E3轧制力', value: 'null', unit: "kN" },
      { name: 'E3轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'E3电机电流', value: 'null', unit: "A" },
      { name: 'E3立辊DS侧直径', value: 'null', unit: "mm" },
      { name: 'E3立辊NDS侧直径', value: 'null', unit: "mm" },
    ],
    position: [73, 14, 30],
    instance: null
  },
  CuZhaPingGun_001: {//粗轧R1
    name: 'R1粗轧',
    information: [
      { name: 'R1辊缝', value: 'nu111ll', unit: "mm" },
      { name: 'R1轧制力', value: 'null', unit: "kN" },
      { name: 'R1轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'R1电机电流', value: 'null', unit: "A" },
      { name: 'R1上辊直径', value: 'null', unit: "mm" },
      { name: 'R1下辊直径', value: 'null', unit: "mm" },
    ],
    position: [104, 14, 30],
    instance: null
  },
  CuZhaPingGun_006: {//粗轧R2
    name: 'R1粗轧',
    information: [
      { name: 'R2辊缝', value: 'nu111ll', unit: "mm" },
      { name: 'R2轧制力', value: 'null', unit: "kN" },
      { name: 'R2轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'R2电机电流', value: 'null', unit: "A" },
      { name: 'R2上辊直径', value: 'null', unit: "mm" },
      { name: 'R2下辊直径', value: 'null', unit: "mm" },
    ],
    position: [95, 14, 30],
    instance: null
  },
  CuZhaPingGun_007: {//粗轧R3
    name: 'R1粗轧',
    information: [
      { name: 'R3辊缝', value: 'nu111ll', unit: "mm" },
      { name: 'R3轧制力', value: 'null', unit: "kN" },
      { name: 'R3轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'R3电机电流', value: 'null', unit: "A" },
      { name: 'R3上辊直径', value: 'null', unit: "mm" },
      { name: 'R3下辊直径', value: 'null', unit: "mm" },
    ],
    position: [82, 14, 30],
    instance: null
  },
  CuZhaPingGun_008: {//粗轧R4
    name: 'R1粗轧',
    information: [
      { name: 'R4辊缝', value: 'nu111ll', unit: "mm" },
      { name: 'R4轧制力', value: 'null', unit: "kN" },
      { name: 'R4轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'R4电机电流', value: 'null', unit: "A" },
      { name: 'R4上辊直径', value: 'null', unit: "mm" },
      { name: 'R4下辊直径', value: 'null', unit: "mm" },
    ],
    position: [77, 14, 30],
    instance: null
  },
  CuZhaPingGun_009: {//粗轧R5
    name: 'R1粗轧',
    information: [
      { name: 'R5辊缝', value: 'nu111ll', unit: "mm" },
      { name: 'R5轧制力', value: 'null', unit: "kN" },
      { name: 'R5轧辊线速度', value: 'null', unit: "m/s" },
      { name: 'R5电机电流', value: 'null', unit: "A" },
      { name: 'R5上辊直径', value: 'null', unit: "mm" },
      { name: 'R5下辊直径', value: 'null', unit: "mm" },
    ],
    position: [70, 14, 30],
    instance: null
  },
}




export const CACHE = {
  container,
  deviceClickObjects,
  deviceObject3D,
  deviceIcon,
  devicePopupInformation,

}
