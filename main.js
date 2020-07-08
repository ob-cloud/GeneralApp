import Vue from 'vue'
import App from './App'
// import api from './api' // 导入api接口
// Vue.prototype.$api = api; // 将api挂载到vue的原型上

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
