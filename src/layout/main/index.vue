<template>
  <!--内容区-->
  <el-main class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-main>
</template>

<script>
export default {
  name: "Main",
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
.main{ display: block; width: 100%; height: 400px; margin-top: 60px;}

</style>