<template>
  <el-container class="app-container">
    <!--公共侧栏-->
    <Aside />
    <el-container class="main-container">
      <!--公共头部-->
      <el-header>
        <Header />
      </el-header>
      <!--内容区域-->
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  name: "Layout",
  components: {Header, Main, Footer, Aside},
  computed:{
    cachedViews(){

    },
    key(){
      return this.$route.path
    }
  }
}
</script>
<style scoped>
.el-header{padding:0;}
.app-container{ }
.main-container{ min-width: 1280px; }
</style>