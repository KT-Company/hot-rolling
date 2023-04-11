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
    modelUrls: ["/model/cx2.glb"],
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
    outlineEnabled: false,
    dofEnabled: false,
    msaa: {
      supersampling: false
    },
    gammaEnabled: true,
    stats: false,
    // loadingBar: {
    //   show: true,
    //   type: 10
    // }

    onLoad: (evt) => {
      CACHE.container = evt
      window.container = evt

      // evt.sceneModels[0].scale.set(2, 2, 2)
      // evt.sceneModels[0].traverse((m) => {
      //   if (m.isMesh) {
      //     const matOpts = Object.assign({ envMap: evt.envMap }, DATA.materialOpts[m.name])

      //     m.material = new Bol3D.MeshStandardMaterial(matOpts)
      //   }
      // })

      // API.showTargetPositon()


      // API.findModelXYZ(container.sceneModels[0])
      // API.setModelPosition(container.sceneModels[0])
      // API.loadGUI()
      callback && callback()


      const popup1 = new Bol3D.POI.Popup({
        position: [-159.33 / 10, 170.64 / 10, -788.64 / 10],
        value: `<p style="margin:0;color: #ffffff;margin-left: 20px;">编号：A22336</p>`
          + `<p style="margin:0;color: #ffffff;margin-left: 20px;">设备情况：正常</p>`,
        className: 'popup1',
        style: `background: rgba(1, 19, 67, 0.8);` + `border: 2px solid #00a1ff;` + `border-radius: 8px;` + `width: 160px;height: 45px;`,
        closeVisible: 'visible'
      })

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
  events.ondbclick = (e) => { }

  events.onhover = (e) => { }
}
