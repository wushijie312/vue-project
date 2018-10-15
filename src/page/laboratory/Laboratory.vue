<template>
  <div class="lab-container">

    <Head title="实验室" />
    <div class="lab-content">
      <button v-on:click="get203Response">HTTP 203(模拟其他状态码)</button>
      <br>
      <button v-on:click="get401Response">HTTP 401(模拟登陆失效)</button>
      <br>
      <button v-on:click="get500Response">HTTP 500(模拟服务器发生未知错误)</button>
    </div>
    <tab-bar class="tab-bar" />
  </div>
</template>

<script>
//vuex辅佐函数
import { mapState, mapActions } from "vuex";
//主页头部视图
import Head from "../../components/Head.vue";
//底部导航视图
import TabBar from "../../components/TabBar.vue";

export default {
  //组件名
  name: "Laboratory",
  //父组件传参
  props: {
    msg: String
  },
  //子组件
  components: {
    Head,
    TabBar
  },
  //组件内部状态
  data() {
    return {};
  },
  //组件方法(响应在 view 上的用户输入导致的状态变化)
  methods: {
    ...mapActions({
      get500Response: "get500Response",
      get401Response: "get401Response",
      get203Response: "get203Response"
    })
  },
  computed: {
    ...mapState({
      count: "count"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lab-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.lab-content {
  /* 占据中间部分 */
  flex: 1;
}
</style>
