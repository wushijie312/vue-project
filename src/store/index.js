import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);

const state = {
	//登录信息
	userInfo: null,
	//购物车列表
	cartList: [],
	//商品列表
	goodsList:[],
};

export default new Vuex.Store({
	state, //单一状态树
	getters, //getter函数类似与计算属性
	actions, //事件支持异步操作,使用dispatch出发action,内部可拿到commit用于commit(mutations)
	mutations, //用于修改state,只能同步操作
});