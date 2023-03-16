import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./axios/api"
import './util/mock/index'
const app = createApp(App)

// 配置全局变量 页面中使用 inject 接收
app.provide('global', {})
app.config.globalProperties.$BASE_URL_JS = './assets'

app.use(ElementPlus).use(router).mount('#app')
