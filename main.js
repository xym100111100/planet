import Vue from 'vue'
import App from './App'
import store from './store'
import api from './api'
import api2 from './api2'
import util from './common/util.js'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$api = api
Vue.prototype.$api2 = api2
Vue.prototype.$util = util

const app = new Vue({
	store,
    ...App
})
app.$mount()
