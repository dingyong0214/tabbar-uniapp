import Vue from 'vue'
import App from './App'
import store from './store'
import tuiTabbar from "./components/tui-tabbar/tui-tabbar"
Vue.component("tui-tabbar",tuiTabbar)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
