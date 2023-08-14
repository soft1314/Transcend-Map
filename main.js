import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
//使用TranscendLib打包时，使用用于VUE
// import {button1,button2} from './static/components/TranscendLib/TranscendLib.umd.js'
// Vue.use(button1)
// Vue.use(button2)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif