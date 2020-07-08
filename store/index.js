import Vue from 'vue'
import Vuex from 'vuex'
import { queryObox } from '../api/global.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		token: "",
		userName: "",
		oboxList: [],
	},
	mutations: {
		setLogin(state, info) {
			console.log('info',info)
			state.token = info.token;
			state.userName = info.userName;
			state.hasLogin = true;
		},
		logout(state) {
			state.token = "";
			state.userName = "";
			state.hasLogin = false;
		},
		setOboxList(state, info) {
			state.oboxList = info;
		}
	},
	getters: {
		hasLogin: state => state.hasLogin,
		token: state => state.token,
		oboxList: state => state.token,
	},
	actions: {
		getOboxList({ dispatch, commit }){
			queryObox().then(res => {
				commit("setOboxList", res.data.oboxs || [])
			}).catch(err => {
				commit("setOboxList", [])
			})
		}
	}
})

export default store
