import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		tabBar: [{
				"pagePath": "/pages/index/index",
				"text": "code",
				"iconPath": "/static/images/tabbar/code_gray.png",
				"selectedIconPath": "/static/images/tabbar/code_active.png",
				"num": 0,
				"isDot": false,
				"verify": true
			},
			{
				"pagePath": "/pages/extend/extend",
				"text": "extend",
				"iconPath": "/static/images/tabbar/release.png",
				"hump": true,
				"verify": true,
				"selectedIconPath": "/static/images/tabbar/release.png"
			},
			{
				"pagePath": "/pages/my/my",
				"text": "thor",
				"iconPath": "/static/images/tabbar/thor_gray.png",
				"selectedIconPath": "/static/images/tabbar/thor_active.png",
				"num": 0,
				"isDot": true,
				"verify": true
			}
		],
		tabBarIndex: 0
	},
	mutations: {
		changeTabBar(state, payload) {
			if (payload) {
				state.tabBarIndex = payload.index
			}
		}
	},
	actions: {

	}
})

export default store
