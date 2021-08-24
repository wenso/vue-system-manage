<template>
  <el-container class="app-container">
      <!--公共侧栏-->
      <Aside />
    <el-container class="main-container">
        <!--公共头部-->
        <!--<Header />-->
        <!--内容显示区-->
        <Main />
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./aside";
import Header from "./header";
import Main from "./main";
export default {
  name: "Layout",
  components: {Main, Header, Aside}
}
</script>
<style scoped>
.app-container{}
.main-container{}
</style>