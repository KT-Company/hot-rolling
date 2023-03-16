import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//使用mock
import { viteMockServe } from 'vite-plugin-mock'


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./src/util/mock",
    })
  ],
  resolve: { alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") },] },
  server: {
    port: 5173,
    open: true,
    // 代理
    proxy: {
      '/api': {
        target: 'http://101.200.140.188:8090/WebService.asmx',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        additionalData: '@import "@/shared/index.scss";'
        // additionalData: '@use "@/assets/scss/global.scss" as *;'
      }
    }
  },
})
