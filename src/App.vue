<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  //组件名
  name: "app",
  mounted() {
    try {
      //进入程序加载本地的登录信息
      let userInfo = localStorage.getItem("userInfo");
      this.$store.commit("FETCH_USER_INFO_SUCCESS", JSON.parse(userInfo));
    } catch (e) {
      // console.log(e);
    }
  },
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  margin: 0px;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex: 1;
  flex-direction: column;
}

.content {
  flex: 1;
  background-color: white;
}

html {
  height: 100%;
  width: 100%;
  margin: 0px;
}

body {
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0px;
}

</style>
