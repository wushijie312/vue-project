import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FETCH_CART_LIST_SUCCESS,
    RESET_VUEX_STATE,
    // FETCH_CART_LIST_FAIL,
    FETCH_CART_DELETE_SUCCESS,
    FETCH_CART_DELETE_FAIL,
    FETCH_TEST_500_SUCCESS,
    FETCH_TEST_500_FAIL,
    FETCH_TEST_401_SUCCESS,
    FETCH_TEST_401_FAIL,
    FETCH_TEST_203_SUCCESS,
    FETCH_TEST_203_FAIL,
    FETCH_USER_LOGOUT_SUCCESS,
    FETCH_USER_LOGOUT_FAIL,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAIL,
    FETCH_GOODS_LIST_SUCCESS,
    FETCH_GOODS_LIST_FAIL,
    FETCH_CART_ADD_SUCCESS,
    FETCH_CART_ADD_FAIL,
} from './mutations-types';

/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 */
export default {
    [RESET_VUEX_STATE](state) {
        state.userInfo = null; //登录信息
        state.cartList = []; //购物车列表
        state.goodsList = []  //商品列表
    },
    [LOGIN_SUCCESS](state, userInfo) {
        state.userInfo = userInfo;
    },
    [LOGIN_FAIL](state, msg) {
        alert(msg);
    },
    [FETCH_USER_INFO_SUCCESS](state, userInfo) {
        state.userInfo = userInfo;
    },
    [FETCH_USER_INFO_FAIL](state, msg) {
        alert(msg);
    },
    [FETCH_GOODS_LIST_SUCCESS](state, goodsList) {
        state.goodsList = goodsList;
    },
    [FETCH_GOODS_LIST_FAIL](state, msg) {
        alert(msg);
    },
    [FETCH_CART_LIST_SUCCESS](state, cartList) {
        state.cartList = cartList;
    },
    [FETCH_CART_DELETE_SUCCESS](state, msg) {
        alert(msg);
    },
    [FETCH_CART_DELETE_FAIL](state, msg) {
        alert(msg);
    },
    [FETCH_TEST_500_SUCCESS](state, msg) {
        alert(msg);
    },
    [FETCH_TEST_500_FAIL](state, msg) {
        alert(msg);
    },
    [FETCH_TEST_401_SUCCESS](state, msg) {
        alert(msg);
    },
    [FETCH_TEST_401_FAIL](state, msg) {
        alert(msg);
    },
    [FETCH_TEST_203_SUCCESS](state, msg) {
        alert(msg);
    },
    [FETCH_TEST_203_FAIL](state, msg) {
        alert(msg);
    },
    [FETCH_USER_LOGOUT_SUCCESS](state) {
        state.userInfo = null;
    },
    [FETCH_USER_LOGOUT_FAIL](state, msg) {
        alert(msg);
    },
    [FETCH_CART_ADD_SUCCESS](state, msg) {
        alert(msg);
    },
    [FETCH_CART_ADD_FAIL](state, msg) {
        alert(msg);
    }

}