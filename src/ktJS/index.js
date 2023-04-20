import { API } from './API.js'
import { CACHE } from './CACHE.js'
import { STATE } from './STATE.js'
import { DATA } from './DATA.js'

let container

export const sceneOnLoad = ({ domElement, callback }) => {
  container = new Bol3D.Container({
    publicPath: STATE.PUBLIC_PATH,
    container: domElement,
    viewState: 'orbit',
    bloomEnabled: false,
    cameras: {
      orbitCamera: {
        position: [STATE.initialState.position.x, STATE.initialState.position.y, STATE.initialState.position.z],
        near: 1,
        far: 10000,
        fov: 30
      }
    },
    controls: {
      orbitControls: {
        autoRotate: false,
        autoRotateSpeed: 1,
        target: [STATE.initialState.target.x, STATE.initialState.target.y, STATE.initialState.target.z],
        // minDistance: 0,
        // maxDistance: 25,
        maxPolarAngle: Math.PI * 0.44,
        minPolarAngle: Math.PI * 0.05,
        enableDamping: true,
        dampingFactor: 0.05,
      }
    },
    lights: {
      directionLights: [{ color: 0xedeacc, intensity: 1.0, position: [20.3, 70, 40.2], mapSize: [4096, 4096], near: 10, far: 15000, bias: -0.001, distance: 8000 }],
      ambientLight: {
        color: '#ffffff',
        intensity: 1
      }
    },
    background: {
      type: 'color',
      value: '#00080d'
    },
    modelUrls: ["/model/cx1.glb"],
    hdrUrls: ['/hdr/HDR.hdr'],
    enableShadow: true,
    antiShake: false,
    // fog: {
    //   color: '#2c4027',
    //   intensity: 0.00022
    // },
    toneMapping: {
      toneMappingExposure: 0.596
    },
    outlineEnabled: true,
    outline: {
      edgeStrength: 3,
      edgeGlow: 0,
      edgeThickness: 1,
      //脉冲周期，控制闪烁
      pulsePeriod: 0,
      visibleEdgeColor: '#98e10f',
      hiddenEdgeColor: '#190a05'
    },
    dofEnabled: false,
    msaa: {
      supersampling: false
    },
    gammaEnabled: true,
    stats: false,
    loadingBar: {
      show: true,
      type: 10
    },

    onProgress: (model) => {
      //单独处理具体模型object3d和点击
      const deviceGrop = ['JiaReLu', 'CuZha', 'BaoWenZhao', 'JinZha', 'ChaoKuaiLen', 'CengLiuLen', 'JuanQu']
      model.traverse(obj3d => {
        //判断是否我要的几个模型
        if (deviceGrop.includes(obj3d.name)) {
          //保存该模型
          // CACHE.deviceObject3D[obj3d.name] = obj3d
          obj3d.traverse(mesh => {
            mesh.userData.name = obj3d.name
          })
          //保存该模型的点击事件
          CACHE.deviceClickObjects[obj3d.name].push(...API.getMesh(obj3d))
        }
      })

    },
    onLoad: (evt) => {
      CACHE.container = evt
      window.container = evt
      console.log('click', CACHE.deviceClickObjects);
      console.log('obj3d', CACHE.deviceObject3D);
      //更换点击对象，获取deviceClickObjects的value值，用flat将二维数组降为一维
      container.clickObjects = Object.values(CACHE.deviceClickObjects).flat()
      container.loadingBar.style.visibility = 'hidden'

      API.showTargetPositon()

      // API.findModelXYZ(container.sceneModels[0])
      // API.setModelPosition(container.sceneModels[0])
      // API.loadGUI()
      callback && callback()

      // const popup1 = new Bol3D.POI.Popup({
      //   position: [-159.33 / 10, 170.64 / 10, -788.64 / 10],
      //   value: `<p style="margin:0;color: #ffffff;margin-left: 20px;">编号：A22336</p>`
      //     + `<p style="margin:0;color: #ffffff;margin-left: 20px;">设备情况：正常</p>`,
      //   className: 'popup1',
      //   style: `background: rgba(1, 19, 67, 0.8);` + `border: 2px solid #00a1ff;` + `border-radius: 8px;` + `width: 160px;height: 45px;`,
      //   closeVisible: 'visible'
      // })

      // container.attach(popup1)
      // const popup2 = new Bol3D.POI.Popup3D({
      //   value: `<div style="margin:0;color: #ffffff;margin-left: 20px; z-index:9">编号：A22336</div>`,
      //   position: [-159.33 / 10, 170.64 / 10, -788.64 / 10],
      //   className: 'popup2',
      //   scale: [1, 1, 1],
      //   closeVisible: 'visible'
      // })
      // container.attach(popup2)
    }

  })


  const events = new Bol3D.Events(container)
  events.ondbclick = (e) => {
    const name = e.objects[0]?.object.userData.name
    //模型聚焦
    if (Object.keys(STATE.deviceFocusState).includes(name)) {
      API.cameraAnimation({ cameraState: STATE.deviceFocusState[name] })
    }

  }

  events.onhover = (e) => {
    // const name = e
    // const objectsNameMap = {
    //   设备1: () => {

    //   },
    //   设备2: () => {

    //   },

    // };
    // objectsNameMap[name] ? objectsNameMap[name]() : "";

  }
}
