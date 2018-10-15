
import userApi from '../api/user';
import cartApi from '../api/cart';
import testApi from '../api/test';
import goodsApi from '../api/goods';

// Mutation事件类型
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FETCH_CART_LIST_SUCCESS,
    FETCH_CART_LIST_FAIL,
    FETCH_CART_DELETE_SUCCESS,
    FETCH_CART_DELETE_FAIL,
    FETCH_TEST_500_SUCCESS,
    FETCH_TEST_500_FAIL,
    FETCH_TEST_401_SUCCESS,
    FETCH_TEST_401_FAIL,
    FETCH_TEST_203_SUCCESS,
    FETCH_TEST_203_FAIL,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAIL,
    FETCH_GOODS_LIST_SUCCESS,
    FETCH_GOODS_LIST_FAIL,
    FETCH_CART_ADD_SUCCESS,
    FETCH_CART_ADD_FAIL,
    RESET_VUEX_STATE
} from './mutations-types';

/**
 * 使用Action 提交 mutation，而不是直接变更状态。Action返回的是一个Promise,
 * 所以Action里可以包含异步操作。
 */
export default {
    //登录事件
    async login({ commit }, loginInfo) {
        let { username, password, $router } = loginInfo;
        if (username && password) {
            let result = await userApi.login(username, password);
            if (result.code === 0) {
                //登录成功
                let userInfoResult = await userApi.getUserInfo();
                commit(LOGIN_SUCCESS, userInfoResult.data);
                $router.push('goods');
            } else {
                //登录失败
                commit(LOGIN_FAIL, result.msg);
            }
        } else {
            //登录失败
            commit(LOGIN_FAIL, '请输入用户名或密码');
        }

    },

    //获取购物车列表
    async getUserInfo({ commit }) {
        let result = await userApi.getUserInfo();
        if (result.code === 0) {
            commit(FETCH_USER_INFO_SUCCESS, result.data);
        } else {
            commit(FETCH_USER_INFO_FAIL, result.data);
        }
    },

    //注销登录事件
    async logout({ commit }, router) {
        let loginResult = await userApi.logout();
        //注销登录成功
        router.push('login');
        commit(RESET_VUEX_STATE, loginResult);
    },

    //获取商品列表
    async getGoodslist({ commit }) {
        let result = await goodsApi.list();
        if (result.code === 0) {
            commit(FETCH_GOODS_LIST_SUCCESS, result.data);
        } else {
            //登录失败
            commit(FETCH_GOODS_LIST_FAIL, result.msg);
        }
    },

    //获取购物车列表
    async getCartlist({ commit }) {
        let result = await cartApi.list();
        if (result.code === 0) {
            commit(FETCH_CART_LIST_SUCCESS, result.data);
        } else {
            //登录失败
            commit(FETCH_CART_LIST_FAIL, result);
        }
    },

    //获取购物车列表
    async addCart({ commit }, goodsInfo) {
        let result = await cartApi.add(goodsInfo);
        if (result.code === 0) {
            commit(FETCH_CART_ADD_SUCCESS, result.msg);
        } else {
            //登录失败
            commit(FETCH_CART_ADD_FAIL, result);
        }
    },

    //删除购物车条目
    async deleteCartItem({ dispatch, commit }, id) {
        let result = await cartApi.delete(id);
        if (result.code === 0) {
            await dispatch('getCartlist'); //重新获取购物车列表
            commit(FETCH_CART_DELETE_SUCCESS, result.msg);
        } else {
            //登录失败
            commit(FETCH_CART_DELETE_FAIL, result);
        }
    },

    //测试 http 500
    async get500Response({ commit }) {
        let result = await testApi._500();
        //下面代码不会执行,处理逻辑见httpcli的响应拦截器 vue-helloworld\src\util\request.js  line:16
        if (result.code === 0) {
            commit(FETCH_TEST_500_SUCCESS, result.msg);
        } else {
            //登录失败
            commit(FETCH_TEST_500_FAIL, result.msg);
        }
    },

    //测试 http 401
    async get401Response({ commit }) {
        let result = await testApi._401();
        //下面代码不会执行,处理逻辑见httpcli的响应拦截器 vue-helloworld\src\util\request.js  line:16
        if (result.code === 0) {
            commit(FETCH_TEST_401_SUCCESS, result.msg);
        } else {
            //登录失败
            commit(FETCH_TEST_401_FAIL, result.msg);
        }
    },

    //测试 http 203
    async get203Response({ commit }) {
        let result = await testApi._203();
        if (result.code === 0) {
            commit(FETCH_TEST_203_SUCCESS, result.msg);
        } else {
            //登录失败
            commit(FETCH_TEST_203_FAIL, result.msg);
        }
    }
}